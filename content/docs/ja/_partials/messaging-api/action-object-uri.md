---
title: Action Object Uri
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/action-object-uri
__hash__: VHcYueigtP2_6dFtiJg9T1RhaPlLcWTTkP3ADHMBz6U
seo:
  description: ''
---

### URIアクション

::reference-with-code
  :::reference-content
  このアクションが関連づけられたコントロールがタップされると、LINE内ブラウザで`uri`プロパティのURIが開きます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `uri`
      :::::

      :::::parameter-table-entry{annotation="説明を参照"}
      #undefined
      label

      #undefined
      String

      アクションのラベル。アクションを設定するオブジェクトごとに、仕様が異なります。詳しくは、「[ラベルの仕様](#action-object-label-spec)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      uri

      #undefined
      String

      アクションの実行時に開かれるURI（最大文字数：1000）  

      使用できるスキームは、`http`、`https`、`line`、および`tel`です。LINE URLスキームについて詳しくは、「[LINE URLスキームでLINEの機能を使う](/docs/messaging-api/using-line-url-scheme/)」を参照してください。

      URIはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      altUri.desktop

      #undefined
      String

      macOS版とWindows版のLINEでアクションを実行したときに開かれるURI（最大文字数：1000）  
      `altUri.desktop`を指定した場合は、macOS版とWindows版のLINEでは`uri`が無視されます。  

      使用できるスキームは、`http`、`https`、`line`、および`tel`です。LINE URLスキームについて詳しくは、「[LINE URLスキームでLINEの機能を使う](/docs/messaging-api/using-line-url-scheme/)」を参照してください。

      URIはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。

        ::::::admonition{title="注意" type="note"}
        `altUri.desktop`は、Flex MessageにURIアクションを関連付けた場合にのみ有効です。クイックリプライでは動作しません。
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *URIアクションオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // LINE内ブラウザで指定のURLを開く例
      {
          "type": "uri",
          "label": "メニューを見る",
          "uri": "https://example.com/menu"
      }

      // スマートフォン版LINEとデスクトップ版LINEで異なるURLを開く例
      {
         "type":"uri",
         "label":"詳しくはこちら",
         "uri":"http://example.com/page/222",
         "altUri": {
            "desktop" : "http://example.com/pc/page/222"
         }
      }

      // 電話番号を指定して通話アプリを開く例
      {
          "type": "uri",
          "label": "電話注文",
          "uri": "tel:09001234567"
      }

      // LINE URLスキームでLINE公式アカウントをシェアする例
      {
          "type": "uri",
          "label": "友だちに勧める",
          "uri": "https://line.me/R/nv/recommendOA/%40linedevelopers"
      }
      ```
      :::::
    ::::
  :::
::
