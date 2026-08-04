---
title: Flexible
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/partner-docs/flexible
__hash__: OdeWCDO_xGzgnbN4XJRIjxRSiRExmW5xz2zZ2gXEXwo
seo:
  description: ''
---

## LINE通知メッセージ（フレキシブル）

- [LINE通知メッセージ（フレキシブル）を送る](#send-line-notification-message-flexible)
- [送信済みのLINE通知メッセージ（フレキシブル）の数を取得する](#get-number-of-sent-line-notification-messages-flexible)

### LINE通知メッセージ（フレキシブル）を送る

::reference-with-code
  :::reference-content
  ユーザーの電話番号を指定してLINE通知メッセージ（フレキシブル）を送るAPIです。

    ::::admonition
    ---
    title: 従来の「LINE通知メッセージ」は、名称が「LINE通知メッセージ（フレキシブル）」に変更されました
    type: tip
    ---
    LINE通知メッセージに、用意されたテンプレートやアイテムを組み合わせて簡単にメッセージを作成できる「[LINE通知メッセージ（テンプレート）](/docs/partner-docs/line-notification-messages/template/)」が新たに加わりました。

    これに伴い、UX審査を要する従来の「LINE通知メッセージ」は、名称が「LINE通知メッセージ（フレキシブル）」に変更されました。

    詳しくは、2025年6月2日の『法人ユーザー向けお知らせ』、「[LINE通知メッセージ（テンプレート）の提供を開始しました](/docs/partner-docs/notice/#partner-news-20250602)」を参照してください。
    ::::

    ::::admonition{title="リクエスト元IPアドレスの制限はしないでください" type="warning"}
    LINE通知メッセージを送る場合、Messaging APIチャネルの［**セキュリティ設定**］タブで、LINEプラットフォームのAPIを呼び出せるサーバーのIPアドレスを登録しないでください。リクエスト元のIPアドレスを制限した状態でLINE通知メッセージを送ると、送信に失敗することがあります。

    リクエスト元のIPアドレスを制限しているか確認する方法については、『Messaging APIドキュメント』の「[長期のチャネルアクセストークン利用時にAPIの呼び出し元を制限する（任意）](/docs/messaging-api/building-bot/#configure-security-settings)」を参照してください。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/bot/pnp/push \
      -H 'Authorization: Bearer {channel_access_token}' \
      -H 'Content-Type:application/json' \
      -d '{
          "to": "{hashed_phone_number}",
          "messages":[
              {
                  "type":"text",
                  "text":"Hello, world1"
              },
              {
                  "type":"text",
                  "text":"Hello, world2"
              }
          ]
      }'

      #リクエストの例(X-Line-Delivery-Tagあり)
      curl -v -X POST https://api.line.me/bot/pnp/push \
      -H 'Authorization: Bearer {channel_access_token}' \
      -H 'Content-Type:application/json' \
      -H 'X-Line-Delivery-Tag:{delivery_tag}' \
      -d '{
          "to": "{hashed_phone_number}",
          "messages":[
              {
                  "type":"text",
                  "text":"Hello, world1"
              },
              {
                  "type":"text",
                  "text":"Hello, world2"
              }
          ]
      }'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`POST https://api.line.me/bot/pnp/push`

#### レート制限

2,000リクエスト/秒

#### リクエストヘッダー

::admonition{title="サポートしていない機能" type="note"}
LINE通知メッセージAPIでは、[リトライキー](/reference/messaging-api/#retry-api-request)（`X-Line-Retry-Key`）を使ったAPIリクエストの再試行はできません。
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      Content-Type

      application/json
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      Authorization

      Bearer `{channel access token}`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      X-Line-Delivery-Tag

      Webhookを介して、[配信完了イベント](/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/#receive-delivery-event)の`delivery.data`プロパティで返される文字列。詳しくは、「[メッセージの送信通知を受信する](/docs/partner-docs/line-notification-messages/technical-specs/#receive-delivery-event)」を参照してください。  

      最小文字数：16  

      最大文字数：100
      :::::
    ::::
  :::

  :::reference-code
  *X-Line-Delivery-Tagの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      15034552939884E28681A7D668CEA94C147C716C0EC9DFE8B80B44EF3B57F6BD0602366BC3menu01
      ```
      :::::
    ::::
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  メッセージの送信先。:glossary-tooltip[[E.164](/glossary/#e164)]{glossary-id="e164"}形式に正規化し[SHA256でハッシュ化した電話番号](/docs/partner-docs/line-notification-messages/technical-specs/#phone-number-hashed)を指定してください。

  メッセージの送信条件について詳しくは、「[LINE通知メッセージが送信される条件](/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages)」を参照してください。

    ::::admonition{title="注意" type="note"}
    - [グループトークと複数人トーク](/docs/messaging-api/group-chats/#group-chat-types)は送信対象として指定できません。
    - 複数の電話番号を送信対象として指定することはできません。
    ::::
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  [メッセージオブジェクト](/reference/messaging-api/#message-objects)の配列

  送信するメッセージ。最大件数：5

  詳しくは、「[LINE通知メッセージAPIで送信可能なメッセージタイプ](/docs/partner-docs/line-notification-messages/technical-specs/#message-types-that-can-be-sent)」を参照してください。
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と空のJSONオブジェクトを返します。
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {}
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
  | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- メッセージの送信先が無効です。 - 無効なメッセージオブジェクトが指定されています。                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
  | `422` | LINE通知メッセージの送信に失敗しました。以下のような理由が考えられます。- メッセージ送信対象に指定した電話番号に紐づくLINEユーザーが存在しません。 - メッセージ送信対象に指定した電話番号は、LINE通知メッセージのサービス対象国で発行されたものではありません。詳しくは、「[LINE通知メッセージが送信される条件](/docs/partner-docs/line-notification-messages/technical-specs/#conditions-for-sending-line-notification-messages)」を参照してください。 - メッセージ送信対象に指定した電話番号に紐づくLINEユーザーが[LINE通知メッセージの受信を拒否](/docs/partner-docs/line-notification-messages/technical-specs/#how-to-consent-for-line-notification-messages)しています。 - メッセージ送信対象に指定した電話番号に紐づくLINEユーザーは、LINEのプライバシーポリシー（2022年3月改定以降のもの）に同意していません。 |

  詳しくは、『Messaging APIリファレンス』の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // メッセージの送信先が無効な場合（400 Bad Request）
      {
        "message": "The request body has 1 error(s)",
        "details": [
          {
            "message": "The value must be a valid SHA-256 digest.",
            "property": "to"
          }
        ]
      }

      // LINE通知メッセージの送信に失敗した場合（422 Unprocessable Entity）
      {
        "message": "Failed to send messages"
      }
      ```
      :::::
    ::::
  :::
::

### 送信済みのLINE通知メッセージ（フレキシブル）の数を取得する

::reference-with-code
  :::reference-content
  「[LINE通知メッセージ（フレキシブル）を送る](/reference/line-notification-messages/#send-line-notification-message-flexible)」エンドポイントを使って送信された、LINE通知メッセージ（フレキシブル）の数を取得します。

  詳しくは、『LINE通知メッセージドキュメント』の「[送信済みLINE通知メッセージの数を取得する](/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages)」を参照してください。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET 'https://api.line.me/v2/bot/message/delivery/pnp?date=20211231' \
      -H 'Authorization: Bearer {channel_access_token}'
      ```
      :::::
    ::::
  :::
::

#### HTTPリクエスト

`GET https://api.line.me/v2/bot/message/delivery/pnp`

#### レート制限

2,000リクエスト/秒

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### クエリパラメータ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  date

  メッセージが送信された日付

  - フォーマット：`yyyyMMdd`（例：`20211231`）
  - タイムゾーン：UTC+9
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      status

      #undefined
      String

      集計処理の状態。以下のいずれかの値です。

      - `ready`：メッセージ数を取得できます。
      - `unready`：`date`に指定した日付のメッセージ数の集計がまだ完了していません。しばらくしてからリクエストを再実行してください。通常、集計処理は翌日中に完了します。
      - `out_of_service`：`date`に指定した日付が、集計システムの稼働開始日（2018年3月31日）より前です。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      success

      #undefined
      Number

      `date`に指定した日付に、LINE通知メッセージAPIを使って送信されたメッセージの数。`status`の値が`ready`の場合にのみ、レスポンスに含まれます。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "status": "ready",
        "success": 3
      }
      ```
      :::::
    ::::
  :::
::

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                             |
  | ----- | -------------------------------------------------------------- |
  | `400` | リクエストに問題があります。次のような理由が考えられます。- 無効な日付が指定されています。 - 日付が指定されていません。 |

  詳しくは、『Messaging APIリファレンス』の「[ステータスコード](/reference/messaging-api/#status-codes)」および「[エラーレスポンス](/reference/messaging-api/#error-responses)」を参照してください。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // 無効な日付を指定した場合（400 Bad Request）
      {
        "message": "The value for the 'date' parameter is invalid"
      }
      ```
      :::::
    ::::
  :::
::
