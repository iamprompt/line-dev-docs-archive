---
title: LIFFアプリ開発ガイドライン
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/liff/development-guidelines
__hash__: qytaCWvFSJApvvyiQF_yXV0rjDqoS_lFrAxJbBJ3gMw
seo:
  title: LIFFアプリ開発ガイドライン
  description: null
---

# :page-title

:markdown-controlsLIFFを使ったウェブアプリを開発する際は、以下の開発ガイドラインに従ってください。

- [ユーザー情報は必ず安全に取り扱う](#liff-development-rules1)
- [LIFFアプリを初期化する際の注意点](#liff-development-rules2)
- [LIFFアプリを開発する際に必ず守るべきこと](#liff-development-rules3)
- [LINEプラットフォームへの大量リクエストの禁止](#prohibiting-mass-requests-to-line-platform)
- [ユーザー退会時の連動アプリに対する権限取消](#deauthorize)

LIFFはLINEログインの仕組みを利用しています。そのため、『LINEログインドキュメント』の「[LINEログイン開発ガイドライン](/docs/line-login/development-guidelines/)」の内容にも従ってください。

::admonition{title="注意" type="note"}
LIFF開発における基本ルールは、[規約とポリシー](/terms-and-policies/)に記載される内容に基づきます。
::

## ユーザー情報は必ず安全に取り扱う

- LIFFアプリおよびサーバーでユーザー情報を使用する場合、LIFFアプリでユーザー情報を正しく処理しないと、なりすましやその他の種類の攻撃に対して脆弱になります。LIFFアプリおよびサーバーで、LIFFアプリで取得したユーザー情報を、安全に使用する方法について詳しくは、「[LIFFアプリおよびサーバーでユーザー情報を使用する](/docs/liff/using-user-profile/)」を参照してください。
- LIFFのエンドポイントURLやLIFF URLのURLフラグメントには、アクセストークンやユーザーIDなどの機密情報が含まれます。外部にURLが漏洩しないように注意してください。

## LIFFアプリを初期化する際の注意点

「[LIFFアプリ初期化時の注意事項](/docs/liff/developing-liff-apps/#initializing-liff-app-notes)」を参照してください。

## LIFFアプリを開発する際に必ず守るべきこと

- LIFFアプリをSPA（Single Page Application）で構築する場合、LIFFはフラグメントを用いたルーティングとは相性が悪いため、[History API](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-history-interface){rel="[\"nofollow\"]"}を利用して実装してください。
- 以下のようなデバイスまたはOSの機能を利用するAPIは、必ずユーザー操作をきっかけにして実行されるように実装してください。

  - 位置情報の取得
  - カメラへのアクセス
  - マイクへのアクセス
- ユーザーの同意なく、cookie、localStorage、またはsessionStorageを使ってユーザーをトラックしたり、LINEのユーザー情報と外部セッション情報を結びつけたりしないでください。
- テスト段階のLIFFアプリに対するアクセス権限は、LIFFアプリ側で制限してください。
- LIFFアプリとLIFFアプリ内で開くコンテンツのURLスキームは、**https**である必要があります。コンテンツのURLスキームがhttpの場合は、::glossary-tooltip{glossary-id="line-iab"}
[LINE内ブラウザ](/glossary/#line-iab)
::

で表示されます。この場合、LIFFアプリとしてチャネルに追加されていても、LIFFアプリとして動作しません。

::admonition
---
title: LIFFアプリにおけるcookie、localStorage、またはsessionStorageの利用
type: note
---
LIFFアプリではcookie、localStorage、またはsessionStorageを利用できます。ただし、OSの仕様変更によって将来的に利用が制限される可能性があります。
::

## LINEプラットフォームへの大量リクエストの禁止

負荷テストを目的に、[LIFF URLスキーム](/docs/line-login/using-line-url-scheme/#opening-a-liff-app) （`https://liff.line.me/{liffId}`）を経由してLIFFアプリへ大量のアクセスを行ったり、[LIFF API](/reference/liff/)に大量のリクエストを送信したりしないでください。LIFFアプリの負荷テストを行う場合は、LINEプラットフォームへの大量のリクエストが発生しないテスト環境を用意してください。

::admonition{title="注意" type="note"}
レート制限を超えて送信を行った場合、`429 Too Many Requests`が返却され、エラーとなります。
::

## ユーザー退会時の連動アプリに対する権限取消

LIFFアプリからユーザーが退会する場合、あるいはユーザーが連動アプリとLINEアプリの連携を解除した場合は、以下を必ず行ってください。

:partial{content="common/deauthorize/"}
