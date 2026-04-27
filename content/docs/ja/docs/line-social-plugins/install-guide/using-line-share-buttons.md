---
title: 「LINEで送る」ボタンを設置する
navigation: true
description: >-
  LINE Social
  Pluginsの「LINEで送る」ボタンは、簡単に作成してウェブサイトに設置できます。iOSまたはAndroidのネイティブアプリにこのボタンを設置する場合は、「送信先を選択」画面の利用をおすすめします。この画面の設置方法については、「LINE
  URLスキームでLINEの機能を使う」を参照してください。
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-social-plugins/install-guide/using-line-share-buttons
__hash__: WaXpkC1Y-lBOX38272eAFpjMhkcelH5GQEW9wOw652U
seo:
  title: 「LINEで送る」ボタンを設置する
  description: >-
    LINE Social
    Pluginsの「LINEで送る」ボタンは、簡単に作成してウェブサイトに設置できます。iOSまたはAndroidのネイティブアプリにこのボタンを設置する場合は、「送信先を選択」画面の利用をおすすめします。この画面の設置方法については、「LINE
    URLスキームでLINEの機能を使う」を参照してください。
---

# :page-title

## 概要

LINE Social Pluginsの「LINEで送る」ボタンは、簡単に作成してウェブサイトに設置できます。iOSまたはAndroidのネイティブアプリにこのボタンを設置する場合は、「送信先を選択」画面の利用をおすすめします。この画面の設置方法については、「[LINE URLスキームでLINEの機能を使う](/docs/line-login/using-line-url-scheme/)」を参照してください。

「LINEで送る」ボタンの作成方法には、LINEヤフー株式会社が提供する公式デザインを使用する方法と、ご自身のオリジナルのデザインを使用する方法の2種類があります。

## LINE公式アイコンを使用

LINE公式デザインの「LINEで送る」ボタンは、以下の手順で作成します。言語を選択し、ボタンを設置するウェブサイトのURLを入力して、ボタンタイプを選択するだけで作成できます。

:button-generator{type="share"}## カスタムアイコンを使用

カスタムアイコンでボタンを作成します。LINE Social Pluginsの利用ガイドラインに同意すると、リンクを確認できます。リンクをコピーして、ご自身のオリジナルのデザインの「LINEで送る」ボタンに適用してください。

:custom-share-generator::admonition{title="ヒント" type="tip"}
例 (URL: `https://line.me/en`), (Text: `text`)

`https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fline.me%2Fen&text=text`
::

WebサイトでDOMツリーが構築されてコンテンツが作成されたら、`LineIt.loadButton()`を呼び出してLINEで送るボタンを有効にしてください。

```sh
<script type="text/javascript">LineIt.loadButton();</script>
```

    

 

オリジナルのボタンを使用する場合は、以下の手順でシェア数（「LINEで送る」ボタンが使用された回数）を確認できます。

#### HTTPリクエスト

`GET https://api.line.me/social-plugin/metrics?url=https://line.me/en`

#### リクエストパラメーター

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  url

  #undefined
  String

  シェア数の確認に必要なURL   

  （例：`https://line.me/en`）
  :::
::

#### リクエスト例

```sh
curl -X GET 'https://api.line.me/social-plugin/metrics?url=https://line.me/en'
```

#### レスポンス例

```json
{
    "share": "4173",
}
```

#### ステータスコード

::parameter-table
  :::parameter-table-entry
  #undefined
  200

  #undefined
  OK

  リクエスト成功
  :::

  :::parameter-table-entry
  #undefined
  400

  #undefined
  Bad request

  不正なパラメーターまたは値が含まれる
  :::

  :::parameter-table-entry
  #undefined
  500

  #undefined
  Internal Server Error

  内部サーバーエラー
  :::
::

## ヘルプ・お問い合わせ

- [よくある質問](/faq/tags/sp-share/)

:bottom-plugin
