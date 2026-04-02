---
title: Message Object Location
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-location
__hash__: W1bF1CP5HCzII7DDBtvU0O5vuLUAA1BtjqJwuMcKTTk
seo:
  description: ''
---

### 位置情報メッセージ

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `location`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      title

      #undefined
      String

      タイトル  

      最大文字数：100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      address

      #undefined
      String

      住所  

      最大文字数：100
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      latitude

      #undefined
      Decimal

      緯度
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      longitude

      #undefined
      Decimal

      経度
      :::::
    ::::
  :::

  :::reference-code
  *位置情報メッセージの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "location",
        "title": "my location",
        "address": "〒102-8282 東京都千代田区紀尾井町1番3号",
        "latitude": 35.67966,
        "longitude": 139.73669
      }
      ```
      :::::
    ::::
  :::
::
