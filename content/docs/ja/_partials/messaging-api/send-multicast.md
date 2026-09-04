---
title: Send Multicast
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/send-multicast
__hash__: UDydOnyU7ZQU3-fy6Z63rQ8azB9ky3SpJLaFYIimf2Q
seo:
  description: ''
---

### マルチキャストメッセージを送る

:api-endpoint{protocol="post" endpoint="https://api.line.me/v2/bot/message/multicast"}::reference-with-code
  :::reference-content
  複数のユーザーに対して同じメッセージを効率よく送信するAPIです。グループトークおよび複数人トークにメッセージを送ることはできません。

  なお、1人のユーザーに対してもマルチキャストメッセージでメッセージを送信できますが、送信対象が1人の場合には[プッシュメッセージ](/reference/messaging-api/#send-push-message)の利用を推奨します。プッシュメッセージは、低遅延用途でのメッセージの送信に適しています。

  #### マルチキャストメッセージを送信できる条件

  マルチキャストメッセージは、LINE公式アカウントを友だち追加しているユーザーに対して送信できます。

  なお、以下のユーザーに対してマルチキャストメッセージの送信処理を行った場合、ステータスコード`200`が返されますが、実際にはユーザーに送信されません。

  - LINEアカウントを削除したユーザー
  - マルチキャストメッセージを送信したLINE公式アカウントをブロックしているユーザー
  - マルチキャストメッセージを送信したLINE公式アカウントを友だち追加していないユーザー
  - 他のプロバイダー配下のチャネルで取得したユーザーIDなど、チャネルにユーザーIDが存在しないユーザー
  :::

  :::reference-code
  *リクエストの例*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X POST https://api.line.me/v2/bot/message/multicast \
      -H 'Content-Type: application/json' \
      -H 'Authorization: Bearer {channel access token}' \
      -H 'X-Line-Retry-Key: {UUID}' \
      -d '{
          "to": ["U4af4980629...","U0c229f96c4..."],
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

200リクエスト/秒

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
  Array of strings

  ユーザーIDの配列。[Webhookイベントオブジェクト](#common-properties)で返される`userId`の値を使用します。LINEに表示されるLINE IDは使用しないでください。  

  最大ユーザーID数：500
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  [メッセージオブジェクト](#message-objects)の配列

  送信するメッセージ  

  最大件数：5

  [マルチキャストメッセージのメッセージオブジェクトを検証する](#validate-message-objects-of-multicast-message)エンドポイントを使用すると、メッセージオブジェクトが有効かを検証できます。
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

  | コード   | 説明                                                                                                                                                                                                                                      |
  | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `400` | メッセージを送信できませんでした。次のような理由が考えられます。- 他のプロバイダー配下のチャネルで取得したユーザーIDなど、チャネルに存在しないユーザーのIDが指定されている。 - グループIDなど、ユーザーIDではないIDが指定されている。 - 無効なメッセージオブジェクトが指定されている。                                                                                    |
  | `409` | 同じリトライキーを含むリクエストがすでに受理されています。詳しくは、「APIリクエストを再試行する」の「[すでにリクエストが受理されていた場合のレスポンス](#retry-api-request-response)」を参照してください。                                                                                                                  |
  | `429` | リクエスト数が上限を超過しました。次のような理由が考えられます。- このエンドポイントの[レート制限](#send-multicast-rate-limit)を超過した。 - [当月に送信できるメッセージ数の上限目安](#get-quota)を超過した。  メッセージ数の上限目安について詳しくは、『Messaging APIドキュメント』の「[Messaging APIの料金](/docs/messaging-api/pricing/)」を参照してください。 |

  詳しくは、[共通仕様](#common-specifications)の「[ステータスコード](#status-codes)」および「[エラーレスポンス](#error-responses)」を参照してください。

  エラーが返された場合、どのユーザーに対してもメッセージは送信されません。
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // リクエストに無効なパラメータが含まれていた場合（400 Bad Request）
      {
        "message": "The property, to[1], in the request body is invalid (line: -, column: -)"
      }
      ```
      :::::
    ::::
  :::
::
