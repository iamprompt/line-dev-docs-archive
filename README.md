# LINE Developers Documentation Archive

This repository contains an automated archive of the [LINE Developers documentation](https://developers.line.biz/).

The documentation is extracted from the remote Nuxt Content SQL dump and transformed into Markdown files using the `minimark` library to ensure granular history tracking of individual pages.

## Project Structure

- `content/`: Extracted Markdown files with frontmatter.
- `sync.mjs`: The synchronization script that fetches and converts the documentation.
- `.github/workflows/sync.yml`: GitHub Actions workflow that runs the sync every hour.

## How it Works

1. **Fetch**: The script downloads the latest SQL dump from `https://developers.line.biz/__nuxt_content/docs/sql_dump.txt`.
2. **Decompress**: The Base64 encoded Gzip payload is extracted and decompressed.
3. **Parse**: The resulting SQL statements (JSON array) are executed in an in-memory SQLite database.
4. **Transform**: For each document in the `_content_docs` table:
    - The JSON AST (`body` field) is converted back to Markdown using the `minimark` library.
    - Metadata (title, description, navigation, etc.) is preserved as YAML frontmatter.
5. **Output**: The results are stored in the `content/` directory, mirroring the original site's path structure.

## Local Development

To run the synchronization script locally:

```bash
# Install dependencies
npm install

# Run the sync script
node sync.mjs
```

## Automation

This repository is updated automatically every hour via GitHub Actions. You can also manually trigger the update from the "Actions" tab in GitHub.
