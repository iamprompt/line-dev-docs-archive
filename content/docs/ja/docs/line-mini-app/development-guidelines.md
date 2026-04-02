---
title: LINEミニアプリ開発ガイドライン
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-mini-app/development-guidelines
__hash__: ovKDhBJUDYQN5PnAd4pGjVCUh08mtGBaJXfpiu4z_3w
seo:
  title: LINEミニアプリ開発ガイドライン
  description: null
---

# :page-title

:markdown-controlsLINEミニアプリを使ったウェブアプリを開発する際は、以下の開発ガイドラインに従ってください。

- [LINEプラットフォームへの大量リクエストの禁止](#prohibiting-mass-requests-to-line-platform)
- [ログ保存の推奨](#save-logs)
- [ユーザー退会時の連動アプリに対する権限取消](#deauthorize)

LINEミニアプリはLIFFで提供される仕組みを利用しています。そのため、『LIFFドキュメント』の「[LIFFアプリ開発ガイドライン](/docs/liff/development-guidelines/)」の内容にも従ってください。

::admonition{title="注意" type="note"}
LINEミニアプリ開発における基本ルールは、[規約とポリシー](/terms-and-policies/)に記載される内容に基づきます。
::

## LINEプラットフォームへの大量リクエストの禁止

負荷テストを目的に、[LIFF URLスキーム](/docs/line-login/using-line-url-scheme/#opening-a-liff-app) （`https://miniapp.line.me/{liffId}`）を経由してLINEミニアプリへ大量のアクセスを行ったり、[LIFF API](/reference/liff/)や[サービスメッセージAPI](/reference/line-mini-app/)に大量のリクエストを送信したりしないでください。LINEミニアプリの負荷テストを行う場合は、LINEプラットフォームへの大量のリクエストが発生しないテスト環境を用意してください。

::admonition{title="注意" type="note"}
レート制限を超えて送信を行った場合、`429 Too Many Requests`が返却され、エラーとなります。
::

## ログ保存の推奨

問題が発生した際に、開発者自身が原因や影響範囲の調査を円滑に行えるよう、[サービスメッセージAPI](/reference/line-mini-app/)のリクエストのログを一定期間保存することを推奨します。

### サービスメッセージAPIリクエスト時のログ

[サービスメッセージAPI](/reference/line-mini-app/)のリクエストを行った際は、レスポンスに含まれる、[サービス通知トークン](/reference/line-mini-app/#issue-notification-token-response)`notificationToken`に加え、以下の情報をログとして保存することを推奨します。

- APIリクエストを行った時間
- リクエストメソッド
- APIエンドポイント
- LINEプラットフォームからレスポンスされた[ステータスコード](/reference/line-mini-app/)

具体的には、以下のような形式でログファイルなどに保存します。

| APIリクエストを行った時間                | リクエストメソッド | APIエンドポイント                                                    | ステータスコード |
| ----------------------------- | --------- | ------------------------------------------------------------- | -------- |
| Mon, 16 Jul 2021 10:20:23 GMT | POST      | `https://api.line.me/message/v3/notifier/send?target=service` | 200      |

::admonition{title="追加でログに保存しておくと有用な情報" type="tip"}
運用するLINEミニアプリの要件等によっては、上記に加えて、たとえば以下のような情報を保存しておくことで、問題が発生した際の調査をより円滑に行うことができます。

- サービスメッセージAPIに対するリクエストのボディ
- APIリクエスト後にLINEプラットフォームから返却されたサービス通知トークン`notificationToken`以外のレスポンスのボディ
::

::admonition{title="ログの提供は行っておりません" type="note"}
サービスメッセージAPIのリクエストのログ等は、お問い合わせいただいても提供は行っておりません。ログの保存は、LINEミニアプリを開発する開発者自身で行ってください。
::

## ユーザー退会時の連動アプリに対する権限取消

LINEミニアプリからユーザーが退会する場合、あるいはユーザーが連動アプリとLINEアプリの連携を解除した場合は、以下を必ず行ってください。

:partial{content="common/deauthorize/"}
