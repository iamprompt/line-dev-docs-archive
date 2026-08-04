---
title: Retry Api Request
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/retry-api-request
__hash__: eHbfnVA69mDpT66b8ELXqQ3q36qgY4_Wf9z965zIG8M
seo:
  description: ''
---

### APIリクエストを再試行する

::reference-with-code
  :::reference-content
  プッシュメッセージ、マルチキャストメッセージ、ナローキャストメッセージ、ブロードキャストメッセージに、リトライキー（`X-Line-Retry-Key`）をHTTPヘッダーに含めることで、同じAPIリクエストを重複して処理しないように再試行できます。

  LINEプラットフォーム側のリトライキーの管理期間は24時間です。同じリトライキーを24時間を超えて使用すると、新しいAPIリクエストとして扱われます。

  APIリクエストの再試行について詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」を参照してください。

    ::::admonition{title="同じリトライキーを24時間を超えて使用しないでください" type="note"}
    同じリトライキーを24時間を超えて使用すると、同じリトライキーを含むAPIリクエストがすでに成功していても、新しいAPIリクエストとして成功します。その結果、重複したメッセージが送信されてしまいます。
    ::::
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/push \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {CHANNEL_ACCESS_TOKEN}' \
      -H 'X-Line-Retry-Key: {UUID}' \
      -d '{
          "messages": [
              {
                  "type": "text",
                  "text": "Hello, user"
              }
          ]
      }'
      ```
      :::::
    ::::
  :::
::

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{annotation="任意※"}
  #undefined
  X-Line-Retry-Key

  任意の方法で生成した16進表記のUUID（例：123e4567-e89b-12d3-a456-426614174000）
  :::
::

※ APIリクエストを再試行する場合は必須です。

#### すでにリクエストが受理されていた場合のレスポンス

::reference-with-code
  :::reference-content
  同じリトライキーを含むリクエストがすでに受理されていた場合は、ステータスコード`409`と、すでに受理されたリクエストのリクエストIDを示す`x-line-accepted-request-id`ヘッダー、および以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      message

      #undefined
      String

      すでにリクエストが受理されていることを知らせるメッセージ
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      sentMessages

      #undefined
      Array

      送信したメッセージの配列。プッシュメッセージを送信した場合のみ、レスポンスに含まれます。  
      最大件数：5
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      sentMessages.id

      #undefined
      Number

      送信したメッセージのID。プッシュメッセージを送信した場合のみ、レスポンスに含まれます。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      sentMessages.quoteToken

      #undefined
      String

      メッセージの引用トークン。プッシュメッセージで、引用対象として指定可能なメッセージオブジェクトを送信した場合のみ、レスポンスに含まれます。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      HTTP/1.1 409 Conflict
      x-line-request-id: 123e4567-e89b-12d3-a456-426655440002
      x-line-accepted-request-id: 123e4567-e89b-12d3-a456-426655440001

      {
        "message": "The retry key is already accepted",
        "sentMessages": [
          {
            "id": "461230966842064897",
            "quoteToken": "IStG5h1Tz7b..."
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
