---
title: Iap Error Response
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/iap-error-response
__hash__: MPhRunX4wxrpAQ0mZMWVcESVCSwnRBUbEXFmoPBsQRQ
seo:
  description: ''
---

### エラーレスポンス

::reference-with-code
  :::reference-content
  HTTPステータスコードが400番台または500番台の場合、以下のJSONデータを含むレスポンスボディが返されます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      errorCode

      #undefined
      String

      エラーコード
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      message

      #undefined
      String

      エラーメッセージ
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      details

      #undefined
      array

      エラーの詳細
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      details[].message

      #undefined
      String

      詳細メッセージ
      :::::

      :::::parameter-table-entry{annotation="含まれないことがあります"}
      #undefined
      details[].property

      #undefined
      String

      エラーの発生箇所
      :::::
    ::::
  :::

  :::reference-code
  *エラーレスポンスの例*

  HTTPステータスコードが400番台の場合

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "errorCode": "VALIDATION_ERROR",
        "message": "Request validation failed.",
        "details": [
          {
            "message": "'clientOs' must be 'android' or 'ios'. Actually received: 'INVALID'",
            "property": "clientOs"
          }
        ]
      }
      ```
      :::::
    ::::

  HTTPステータスコードが500番台の場合

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "errorCode": "INTERNAL_SERVER_ERROR",
        "message": "An internal server error occurred."
      }
      ```
      :::::
    ::::
  :::
::
