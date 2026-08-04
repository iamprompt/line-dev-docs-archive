---
title: LINEログイン開発ガイドライン
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-login/development-guidelines
__hash__: nWW8wvT1LvbvNL7IsmvwUKPV5fSx132gSmL0v61WgWw
seo:
  title: LINEログイン開発ガイドライン
  description: null
---

# :page-title

:markdown-controlsLINEログインを使ったウェブアプリを開発する際は、以下の開発ガイドラインに従ってください。

**禁止事項**

- [LINEプラットフォームへの大量リクエストの禁止](#prohibiting-mass-requests-to-line-platform)

**必須事項**

- [ユーザー退会時の連動アプリに対する権限取消](#deauthorize)

**推奨事項**

- [ログ保存の推奨](#save-logs)

::admonition{title="注意" type="note"}
LINEログイン開発における基本ルールは、[規約とポリシー](/terms-and-policies/)に記載される内容に基づきます。
::

## 禁止事項

### LINEプラットフォームへの大量リクエストの禁止

負荷テストを目的に、大量の[認可リクエスト](/docs/line-login/integrate-line-login/#making-an-authorization-request)や[LINEログインAPI](/reference/line-login/)のリクエストをLINEプラットフォームに対して送信しないでください。ウェブアプリの負荷テストを行う場合は、LINEプラットフォームへの大量のリクエストが発生しないテスト環境を用意してください。

::admonition{title="注意" type="note"}
レート制限を超えて送信を行った場合、`429 Too Many Requests`が返却され、エラーとなります。
::

## 必須事項

### ユーザー退会時の連動アプリに対する権限取消

LINEログインを組み込んだ連動アプリ（ウェブサイトやスマートフォンアプリなど）からユーザーが退会する場合、あるいはユーザーが連動アプリとLINEアプリの連携を解除した場合は、以下を必ず行ってください。

:partial{content="common/deauthorize/"}## 推奨事項

### ログ保存の推奨

問題が発生した際に、開発者自身が原因や影響範囲の調査を円滑に行えるよう、[認可リクエスト](/docs/line-login/integrate-line-login/#making-an-authorization-request)や[LINEログインAPI](/reference/line-login/)のリクエストのログを一定期間保存することを推奨します。

#### 認可リクエストのログ

[認可リクエスト](/docs/line-login/integrate-line-login/#making-an-authorization-request)を行った際は、以下の情報をログとして保存することを推奨します。

- 認可リクエストを行った時間
- 認可リクエストのパラメータ

具体的には、以下のような形式でログファイルなどに保存します。

| 認可リクエストを行った時間                 | 認可リクエストのパラメータ                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| Mon, 16 Jul 2021 10:20:10 GMT | `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=xxxxxxxxxx...` |

#### 認可コードまたはエラーレスポンスのログ

[認可リクエスト](/docs/line-login/integrate-line-login/#making-an-authorization-request)により[認可コード](/docs/line-login/integrate-line-login/#receiving-the-authorization-code)または[エラーレスポンス](/docs/line-login/integrate-line-login/#receiving-an-error-response)受信した際には、以下の情報をログとして保存することを推奨します。

- 認可コードまたはエラーレスポンスを受信した時間
- リクエストメソッド
- 認可コードまたはエラーレスポンスのログ

具体的には、以下のような形式でログファイルなどに保存します。

| レスポンスを受信した時間                  | リクエストメソッド | 認可コードまたはエラーレスポンスのログ                                                                     |
| ----------------------------- | --------- | --------------------------------------------------------------------------------------- |
| Mon, 16 Jul 2021 10:20:20 GMT | GET       | `/callback?code=Zfl2WjsWcn2XBBWApcty&state=n5B9b9FR2BWjloDzEskZMmGysITRTYpjLkM6oD5qfmA` |

#### LINEログインAPIリクエスト時のログ

[LINEログインAPI](/reference/line-login/)のリクエストを行った際は、以下の情報をログとして保存することを推奨します。

- [レスポンスヘッダー](/reference/line-login/#response-headers)のリクエストID（`x-line-request-id`）
- APIリクエストを行った時間
- リクエストメソッド
- APIエンドポイント
- LINEプラットフォームからレスポンスされた[ステータスコード](/reference/line-login/#status-codes)

具体的には、以下のような形式でログファイルなどに保存します。

| リクエストID（`x-line-request-id`） | APIリクエストを行った時間                | リクエストメソッド | APIエンドポイント                              | ステータスコード |
| ---------------------------- | ----------------------------- | --------- | --------------------------------------- | -------- |
| 8d48c8577e739b9c             | Mon, 16 Jul 2021 10:20:22 GMT | POST      | `https://api.line.me/oauth2/v2.1/token` | 200      |

::admonition{title="追加でログに保存しておくと有用な情報" type="tip"}
運用するウェブアプリの要件等によっては、上記に加えて、たとえば以下のような情報を保存しておくことで、問題が発生した際の調査をより円滑に行うことができます。

- LINEログインAPIに対するリクエストのボディ
- APIリクエスト後にLINEプラットフォームから返却されたレスポンスのボディ
::

::admonition{title="ログの提供は行っておりません" type="note"}
認可リクエストやLINEログインAPIのリクエストのログ等は、お問い合わせいただいても提供は行っておりません。ログの保存は、LINEログインを利用したウェブアプリを開発する開発者自身で行ってください。
::
