---
title: Send Push Message
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/send-push-message
__hash__: 13WOlYXavopBzZJwaA86R1xkETbnnaPaUYIteXmyV7o
seo:
  description: ''
---

### プッシュメッセージを送る

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/push"}::reference-with-code
  :::reference-content
  ユーザー、グループトーク、または複数人トークに、任意のタイミングでメッセージを送信するAPIです。

  #### プッシュメッセージを送信できる条件

  プッシュメッセージは、以下のいずれかの条件に当てはまる場合に送信できます。

  - LINE公式アカウントを友だち追加しているユーザー
  - LINE公式アカウントが参加しているグループトーク、または複数人トーク
  - 1対1のトークで、7日以内にLINE公式アカウントへメッセージを送ったユーザー（※）

  なお、以下のユーザーに対してプッシュメッセージの送信処理を行った場合、ステータスコード`200`が返されますが、実際にはユーザーに送信されません。

  - LINEアカウントを削除したユーザー
  - プッシュメッセージを送信したLINE公式アカウントをブロックしているユーザー
  - プッシュメッセージを送信したLINE公式アカウントを友だち追加していないユーザー（※）

  ※ユーザーは、友だち追加していないLINE公式アカウントに対しても、メッセージを送ることができます。LINE公式アカウントは、友だちでないユーザーから1対1のトークでメッセージを受け取った場合、メッセージを受け取ってから7日以内であれば、そのユーザーに対してメッセージを送信できます。
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/push \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'X-Line-Retry-Key: {UUID}' \
      -d '{
          "to": "U4af4980629...",
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

#### レート制限

2,000リクエスト/秒

レート制限について詳しくは、「[レート制限](#rate-limits)」を参照してください。

#### リクエストヘッダー

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Content-Type

  application/json
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  X-Line-Retry-Key

  リトライキー。任意の方法で生成した16進表記のUUID（例：123e4567-e89b-12d3-a456-426614174000）を指定します。リトライキーはLINEから提供されません。開発者自身が一意のリトライキーを生成する必要があります。詳しくは、『Messaging APIドキュメント』の「[失敗したAPIリクエストを再試行する](/docs/messaging-api/retrying-api-request/)」を参照してください。
  :::
::

#### リクエストボディ

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  to

  #undefined
  String

  送信先のID。[Webhookイベントオブジェクト](#common-properties)で返される、`userId`、`groupId`、または`roomId`の値を使用します。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  [メッセージオブジェクト](#message-objects)の配列

  送信するメッセージ  

  最大件数：5

  [プッシュメッセージのメッセージオブジェクトを検証する](#validate-message-objects-of-push-message)エンドポイントを使用すると、メッセージオブジェクトが有効かを検証できます。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  notificationDisabled

  #undefined
  Boolean

  - `true`：メッセージ送信時に、ユーザーに通知されない。
  - `false`：メッセージ送信時に、ユーザーに通知される。ただし、LINEで通知をオフにしている場合は通知されません。

  デフォルト値は`false`です。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  customAggregationUnits

  #undefined
  Array of strings

  任意の集計単位のユニット名。大文字と小文字は区別されます。たとえば`promotion_a`と`promotion_A`は別のユニットとして扱われます。  

  最大ユニット数：1  

  最大文字数：30  

  使用可能文字種：半角英数字（`a`〜`z`、`A`〜`Z`、`0`〜`9`）、アンダースコア（`_`）

  ユニット名の付与について詳しくは、『Messaging APIドキュメント』の「[ユニット名を付与する](/docs/messaging-api/unit-based-statistics-aggregation/#assign-names-to-units-when-sending-messages)」を参照してください。

    ::::admonition{title="ユニット名が付与されないことがあります" type="note"}
    ユニット名は、当月中（その月の1日〜末日）に最大で1,000種類まで付与できます。1,001種類目以降のユニット名を付与してメッセージを送ろうとした場合、メッセージは送信されますがユニット名はメッセージに付与されません。

    ユニット名の種類が多い場合は、以下のいずれかの方法でユニット名が付与できる、あるいは付与できたことを確認してください。

    - 当月のユニット名がまだ1,000種類に達していないことを、メッセージの送信前に「[当月中に付与したユニット名の種類数を取得する](#get-the-number-of-unit-name-types-assigned-during-this-month)」エンドポイントで確認する
    - メッセージの送信後に「[当月中に付与したユニット名のリストを取得する](#get-a-list-of-unit-names-assigned-during-this-month)」エンドポイントで、付与したユニット名が存在することを確認する
    ::::
  :::
::

#### レスポンス

::reference-with-code
  :::reference-content
  ステータスコード`200`と以下の情報を含むJSONオブジェクトを返します。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      sentMessages

      #undefined
      Array

      送信したメッセージの配列。  
      最大件数：5
      :::::

      :::::parameter-table-entry
      #undefined
      sentMessages.id

      #undefined
      Number

      送信したメッセージのID。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      sentMessages.quoteToken

      #undefined
      String

      メッセージの引用トークン。引用対象として指定可能なメッセージオブジェクトを送信した場合のみ、レスポンスに含まれます。詳しくは、『Messaging APIドキュメント』の「[引用トークンを取得する](/docs/messaging-api/get-quote-tokens/)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *レスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
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

#### エラーレスポンス

::reference-with-code
  :::reference-content
  以下のHTTPステータスコードと、エラーレスポンスを返します。

  | コード   | 説明                                                                                                                                                                                                                                                                  |
  | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | メッセージを送信できませんでした。次のような理由が考えられます。- 他のプロバイダー配下のチャネルで取得したユーザーIDなど、チャネルに存在しないユーザーのIDが指定されている。 - 存在しないグループやLINE公式アカウントが参加していないグループが指定されている。 - 存在しない複数人トークやLINE公式アカウントが参加していない複数人トークが指定されている。 - 無効なメッセージオブジェクトが指定されている。                                                   |
  | `409` | 同じリトライキーを含むリクエストがすでに受理されています。詳しくは、「APIリクエストを再試行する」の「[すでにリクエストが受理されていた場合のレスポンス](#retry-api-request-response)」を参照してください。                                                                                                                                              |
  | `429` | リクエスト数が上限を超過しました。次のような理由が考えられます。- このエンドポイントの[レート制限](#send-push-message-rate-limit)を超過した。 - 同一のユーザーに大量のメッセージを送信した。 - [当月に送信できるメッセージ数の上限目安](#get-quota)を超過した。  メッセージ数の上限目安について詳しくは、『Messaging APIドキュメント』の「[Messaging APIの料金](/docs/messaging-api/pricing/)」を参照してください。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。

  エラーが返された場合、メッセージは送信されません。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // メッセージの送信に失敗した場合（400 Bad Request）
      {
        "message": "Failed to send messages"
      }
      ```
      :::::
    ::::
  :::
::
