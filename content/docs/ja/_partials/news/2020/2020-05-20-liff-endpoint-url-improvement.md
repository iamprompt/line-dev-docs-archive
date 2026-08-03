---
title: 【更新】まもなくLIFFのエンドポイントURLでパスが使用できるようになります
navigation: true
description: ''
meta: '{"date":"2020-05-20 00:00 UTC","tags":"LIFF","new":"false","locale":"ja"}'
path: /ja/_partials/news/2020/2020-05-20-liff-endpoint-url-improvement
__hash__: SOPY1TM7bdhHm-VjYvgm-9kbcteHwEKQiNzhyKiL-3w
seo:
  title: 【更新】まもなくLIFFのエンドポイントURLでパスが使用できるようになります
  description: ''
---

::admonition{title="2020年5月29日追記" type="note"}
この仕様変更は、2020年5月の最終週に行われる予定でしたが、既存のLIFFアプリへの影響を考慮し、以下のように対応を変更します。

- 2020年5月20日にお知らせしたとおり、エンドポイントURLでパスが使用できるようになる機能を追加します。
- **既存のLIFFアプリには影響が出ない形で仕様変更を行う予定です。**
- 仕様変更は、2020年6月後半を予定しています。

たび重なる仕様変更により混乱を招いたことを、改めてお詫び申し上げます。
::

現在、開発者は[LINE Developersコンソール](/console/)のLIFFタブのURLに、パス（`/path`）、クエリパラメータ（`?key=value`）、URLフラグメント（`#URL-fragment`）を入力できますが、実際はドメイン名とクエリパラメータの部分のみが使用されています。

今後、LIFFのエンドポイントURLがアップデートされ、以下の改善が行われる予定です。

- パス（`/path`）が使用できるようになります。
- URLフラグメント（`#URL-fragment`）は入力できなくなります。

たとえば、HerokuにLIFFアプリをデプロイする場合は、LINE Developersコンソールの**基本情報**セクションの**エンドポイントURL**に`https://{Herokuアプリ名}.herokuapp.com/path/?key=value`と入力します。

![LINE Developersコンソールでパスを追加したエンドポイントURLの例](/media/news/liff-url-with-path-appended.png){className="[\"border\",\"w-fix-480\"]"}

URLスキームは、必ずhttpsを使用してください。

LINE Developersコンソールに入力したパスが使用できるため、新規ページの公開が容易になります。たとえば、キャンペーン用のページを公開する場合、LIFFアプリのドメイン（例：`https://example.com`）に、キャンペーン用のパス（例：`/2020campaign`）を追加した`https://example.com/2020campaign`を直接エンドポイントURLに登録できます。

::admonition{title="注意" type="note"}
LINE Developersコンソールで登録するエンドポイントURLと、LIFFアプリを開くためのURLスキームで、URLフラグメントの使用可否が異なります。混同しないようにご注意ください。

**エンドポイントURL**：
`https://example.com/2020campaign`または`https://example.com/2020campaign/?key=value`  
URLフラグメントは追加できません。

**LIFFアプリを開くためのURLスキーム**：
`https://liff.line.me/{liffId}/path_A/path_B/#URL-fragment`
URLフラグメントを追加できます。
::

詳しくは、『LIFFドキュメント』の「[LIFFアプリをチャネルに追加する](/docs/liff/registering-liff-apps/#registering-liff-app)」を参照してください。

たび重なる仕様変更により混乱を招いたことをお詫び申し上げます。今後も開発者の皆様に提供するサービスの品質向上に努めてまいりますので、何卒ご理解いただきますようお願い申し上げます。

### 仕様変更予定日時

2020年6月後半
