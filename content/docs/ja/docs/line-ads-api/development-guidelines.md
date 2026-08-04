---
title: LINE広告API開発ガイドライン
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-ads-api/development-guidelines
__hash__: qhOmS_5OPww_UgGLlHwImrE-0SM5QFCkrzAi_N3LMDc
seo:
  title: LINE広告API開発ガイドライン
  description: null
---

# :page-title

:markdown-controlsLINE広告APIを使って開発する際は、以下の開発ガイドラインに従ってください。

:toc## LINEプラットフォームへの大量リクエストの禁止

負荷テストや動作テストを目的に、LINEプラットフォームへ、大量のリクエストを送信しないでください。

なお、いかなる目的でもレート制限を超えてリクエストを送信しないでください。レート制限について詳しくは、[ダッシュボードAPIのドキュメント](https://ads.line.me/public-docs/certificated-ad-tech-general-partner){rel="[\"nofollow\"]"}（英語）、および[オーディエンスAPIのドキュメント](https://ads.line.me/public-docs/data-general-partner){rel="[\"nofollow\"]"}（英語）を参照してください。

::admonition{title="注意" type="note"}
レート制限を超えて送信を行った場合、`429 Too Many Requests`が返却され、エラーとなります。
::

## 存在しないIDへのリクエストの禁止

リクエストを送信するときは、存在しないID（`Ad account ID`、`Ad ID`など）を指定しないでください。

## ログ保存の推奨

問題が発生した際に、開発者自身が原因や影響範囲の調査を円滑に行えるよう、APIに対するリクエストのログを一定期間保存することを推奨します。

### LINE Ads APIに対するリクエストのログ

LINE広告APIに対するリクエストを行った際は、以下の情報をログとして保存することを推奨します。

- APIリクエストを行った時間
- リクエストメソッド
- APIエンドポイント
- LINEプラットフォームからレスポンスされたステータスコード

具体的には、以下のような形式でログファイルなどに保存します。

| APIリクエストを行った時間                | リクエストメソッド | APIエンドポイント                              | ステータスコード |
| ----------------------------- | --------- | --------------------------------------- | -------- |
| Mon, 05 Jul 2022 08:14:35 GMT | GET       | `https://ads.line.me/api/v3/codes/ssps` | 200      |
