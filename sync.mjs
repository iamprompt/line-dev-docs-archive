import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { promisify } from 'node:util';
import sqlite3 from 'sqlite3';
import yaml from 'js-yaml';
import { stringify } from 'minimark/stringify';

const gunzip = promisify(zlib.gunzip);
const DUMP_URL = 'https://developers.line.biz/__nuxt_content/docs/sql_dump.txt';

async function sync() {
  console.log(`Fetching from ${DUMP_URL}...`);
  const response = await fetch(DUMP_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch dump: ${response.statusText}`);
  }
  const text = await response.text();

  console.log('Extracting payload...');
  const base64Blob = text.trim().replace(/\s/g, '');
  const buffer = Buffer.from(base64Blob, 'base64');
  const decompressed = await gunzip(buffer);
  const sqlStatements = JSON.parse(decompressed.toString('utf-8'));

  console.log(`Loaded ${sqlStatements.length} SQL statements. Initializing database...`);
  
  const db = new sqlite3.Database(':memory:');
  
  // Promisify database methods
  const dbRun = promisify(db.run.bind(db));
  const dbAll = promisify(db.all.bind(db));

  // Execute SQL statements sequentially to build the database
  for (const statement of sqlStatements) {
    if (statement.trim()) {
      await dbRun(statement);
    }
  }

  console.log('Fetching documents from _content_docs...');
  const docs = await dbAll('SELECT * FROM _content_docs');
  console.log(`Found ${docs.length} documents.`);

  const outputDir = 'content';
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  for (const doc of docs) {
    const { id, title, body, navigation, seo, stem, extension, ...metadata } = doc;
    
    // Parse the minimark AST
    let markdownContent = '';
    try {
      const bodyData = JSON.parse(body);
      if (bodyData.type === 'minimark' && Array.isArray(bodyData.value)) {
        markdownContent = stringify(bodyData);
      } else {
        console.warn(`Unknown body type for ${id}: ${bodyData.type}`);
      }
    } catch (e) {
      console.error(`Error parsing body for ${id}:`, e);
    }

    // Build frontmatter
    const frontmatter = {
      title,
      navigation: navigation === 'true' || navigation === true,
      ...metadata
    };
    
    // Try to parse SEO if it exists
    if (seo) {
      try {
        frontmatter.seo = JSON.parse(seo);
      } catch (e) {}
    }

    const fileContent = `---\n${yaml.dump(frontmatter)}---\n\n${markdownContent}`;
    
    const filePath = path.join(outputDir, id);
    const dirPath = path.dirname(filePath);
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    fs.writeFileSync(filePath, fileContent);
  }

  console.log('Sync complete!');
  db.close();
}

sync().catch(err => {
  console.error('Core sync failed:', err);
  process.exit(1);
});
