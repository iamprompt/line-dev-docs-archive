---
title: Common Error Responses
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/common-error-responses
__hash__: DdVbldzj1OrkMqjo_EJwXtrBGh0QmDRGJp03AQN09SU
seo:
  description: ''
---

### エラーレスポンス

::reference-with-code
  :::reference-content
  エラー発生時は、以下のJSONデータを含むレスポンスボディが返されます。

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      message

      #undefined
      String

      エラー情報を含むメッセージ。詳しくは、「[エラーメッセージ](#error-messages)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      details

      #undefined
      Array

      エラー詳細の配列。配列が空の場合は、レスポンスに含まれません。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      details[].message

      #undefined
      String

      エラーの詳細。特定の状況ではレスポンスに含まれません。

      「オーディエンス管理」のエンドポイントに関するエラーの詳細については、「[オーディエンス管理に関するエラーの詳細](#manage-audience-error)」を参照してください。
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      details[].property

      #undefined
      String

      エラーの発生箇所。リクエストのJSONのフィールド名やクエリパラメータ名が返ります。特定の状況ではレスポンスに含まれません。
      :::::
    ::::
  :::

  :::reference-code
  *エラーレスポンスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "message": "The request body has 2 error(s)",
        "details": [
          {
            "message": "May not be empty",
            "property": "messages[0].text"
          },
          {
            "message": "Must be one of the following values: [text, image, video, audio, location, sticker, template, imagemap]",
            "property": "messages[1].type"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### エラーメッセージ

エラーのJSONレスポンスの`message`プロパティに含まれる、主なエラーメッセージは以下のとおりです。

| メッセージ                                                                      | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| The request body has X error(s)                                            | リクエストボディのJSONデータにエラーがありました。Xの部分にエラーの数が表示されます。詳細は`details[].message`プロパティと`details[].property`プロパティに含まれます。                                                                                                                                                                                                                                                                                                                            |
| Invalid reply token                                                        | [応答メッセージを送る](#send-reply-message)際に`replyToken`で指定した応答トークンが無効です。次のような理由が考えられます。- 有効期限が切れた応答トークンを使って応答メッセージを送った。 - 使用済みの応答トークンを使って応答メッセージを送った。                                                                                                                                                                                                                                                                                        |
| The property, XXX, in the request body is invalid (line: XXX, column: XXX) | リクエストボディに無効なプロパティが指定されていました。XXXの部分に具体的な行と列が表示されます。                                                                                                                                                                                                                                                                                                                                                                                   |
| The request body could not be parsed as JSON (line: XXX, column: XXX)      | リクエストボディのJSONデータを解析できませんでした。XXXの部分に具体的な行と列が表示されます。                                                                                                                                                                                                                                                                                                                                                                                   |
| The content type, XXX, is not supported                                    | APIでサポートされていないコンテンツタイプがリクエストされました。                                                                                                                                                                                                                                                                                                                                                                                                   |
| Authentication failed due to the following reason: XXX                     | APIが呼び出されたときに認証に失敗しました。XXXの部分に理由が表示されます。                                                                                                                                                                                                                                                                                                                                                                                             |
| Access to this API is not available for your account                       | 実行権限がないAPIを呼び出しました。                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Failed to send messages                                                    | メッセージの送信に失敗しました。指定したユーザーIDが存在しない場合などにこのエラーが発生します。                                                                                                                                                                                                                                                                                                                                                                                    |
| You have reached your monthly limit.                                       | - 無料メッセージ通数を超過しました。 - 追加メッセージ数の上限目安を超過しました。  無料メッセージ通数や、追加メッセージ数の上限目安について詳しくは、『Messaging APIドキュメント』の「[Messaging APIの料金](/docs/messaging-api/pricing/)」を参照してください。  当月に配信できるメッセージ数がまだ残っていても、`You have reached your monthly limit.`が返される場合があります。詳しくは、FAQの「[当月に配信できるメッセージ数はまだ残っているのに、メッセージ送信時に429 Too Many Requests（You have reached your monthly limit.）が返されるのはなぜですか？](/faq/#why-do-i-get-429-error-during-message-delivery)」を参照してください。 |
| The API rate limit has been exceeded. Try again later.                     | APIコールの[レート制限](#rate-limits)を超過しました。                                                                                                                                                                                                                                                                                                                                                                                                 |
| Not found                                                                  | プロフィール情報を取得できませんでした。次のような理由が考えられます。- 対象のユーザーIDが存在していない - ユーザーがプロフィール情報の取得に同意していない - ユーザーが対象のLINE公式アカウントを友だち追加していない - ユーザーが対象のLINE公式アカウントを友だち追加した後にブロックした  詳しくは、『Messaging APIドキュメント』の「[ユーザーのプロフィール情報取得の同意](/docs/messaging-api/user-consent/)」を参照してください。                                                                                                                                                                             |
