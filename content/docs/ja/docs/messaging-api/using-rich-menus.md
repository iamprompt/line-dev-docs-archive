---
title: リッチメニューを使う
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/using-rich-menus
__hash__: E8Kf9TrFeo3oCpm65jyu6WP8BnchjNbnYMotkp_2EOw
seo:
  title: リッチメニューを使う
  description: null
---

# :page-title

:markdown-controlsこのページでは、LINE公式アカウントを友だち追加しているすべてのユーザーに表示される「デフォルトのリッチメニュー」を、Messaging APIを使って設定する方法について説明します。

::admonition{title="LINE Official Account Managerでも設定できます" type="tip"}
デフォルトのリッチメニューは、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}でも設定できます。詳しくは、「[LINE Official Account Managerでリッチメニューを設定する](/docs/messaging-api/rich-menus-overview/#creating-a-rich-menu-with-the-line-manager)」を参照してください。
::

:toc## デフォルトのリッチメニューを設定する

Messaging APIを使ってデフォルトのリッチメニューを設定するには、以下の手順に従います。

1. [リッチメニューの画像を準備する](#prepare-a-rich-menu-image)。
2. タップ領域を指定して[リッチメニューを作成する](#create-a-rich-menu)。
3. [リッチメニューに画像をアップロードして添付する](#upload-the-rich-menu-image)。
4. [デフォルトのリッチメニューを設定する](#set-the-default-rich-menu)。

### 1. リッチメニューの画像を準備する

まず、リッチメニューの画像を準備します。リッチメニューの画像は、タップ領域をどのように配置するかを考慮する必要があります。

ここでは、以下のリッチメニュー用のテンプレート画像（`richmenu-template-guide-04.png`）を使用します。任意のディレクトリに保存してください。

![このガイドで使用するリッチメニュー用のテンプレート画像](/media/messaging-api/rich-menu/richmenu-template-guide-04.png){className="[\"w-fix-320\"]"}

この画像の場合、A、B、Cの3つのタップ領域を定義することが想定されています。

::admonition{title="リッチメニュー用のテンプレート画像について" type="tip"}
[LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}からリッチメニュー用のテンプレート画像をダウンロードできます。リッチメニュー新規作成画面を開いて、［**デザインガイド**］をクリックしてください。LINE Official Account Managerには、[LINE Developersコンソール](/console/)と同じアカウントでログインできます。
::

画像の要件について詳しくは、『Messaging APIリファレンス』の「[リッチメニューの画像の要件](/reference/messaging-api/#upload-rich-menu-image-requirements)」を参照してください。

### 2. リッチメニューを作成する

手順1.で用意したリッチメニューの画像に合うリッチメニューを作成します。画像のA、B、Cにタップ領域が正しく設定されるようにします。

リッチメニューを作成するには、[リッチメニューオブジェクト](/reference/messaging-api/#rich-menu-object)を[リッチメニューを作成する](/reference/messaging-api/#create-rich-menu)エンドポイントのリクエストに指定します。以下のコマンドをターミナルで実行してください。A、B、Cのそれぞれのタップ領域で、異なるURLが開くように[URIアクション](/reference/messaging-api/#uri-action)を指定しています。

```sh
curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H 'Authorization: Bearer {channel access token}' \
-H 'Content-Type: application/json' \
-d \
'{
    "size": {
        "width": 2500,
        "height": 1686
    },
    "selected": false,
    "name": "デフォルトのリッチメニューのテスト",
    "chatBarText": "Tap to open",
    "areas": [
        {
            "bounds": {
                "x": 0,
                "y": 0,
                "width": 1666,
                "height": 1686
            },
            "action": {
                "type": "uri",
                "label": "タップ領域A",
                "uri": "https://developers.line.biz/ja/news/"
            }
        },
        {
            "bounds": {
                "x": 1667,
                "y": 0,
                "width": 834,
                "height": 843
            },
            "action": {
                "type": "uri",
                "label": "タップ領域B",
                "uri": "https://api.line-status.info/"
            }
        },
        {
            "bounds": {
                "x": 1667,
                "y": 844,
                "width": 834,
                "height": 843
            },
            "action": {
                "type": "uri",
                "label": "タップ領域C",
                "uri": "https://techblog.lycorp.co.jp/ja/"
            }
        }
    ]
}'
```

::admonition{title="ヒント" type="tip"}
- リクエストの`selected`プロパティを`true`に変更すると、ユーザーにリンクしたときにリッチメニューが自動的に表示されます。
- トークルームメニューのテキストを変更するには、リクエストの`chatBarText`プロパティを指定します。
- 指定した[リッチメニューオブジェクト](/reference/messaging-api/#rich-menu-object)に不備がないか、リッチメニューを作成する前に、[リッチメニューオブジェクトを検証する](/reference/messaging-api/#validate-rich-menu-object)ことも可能です。
::

リッチメニューの作成に成功すると、リッチメニューのIDがレスポンスで返されます。リッチメニューのIDは、以降の手順で使用します。

```json
{
  "richMenuId": "richmenu-88c05..."
}
```

### 3. リッチメニューに画像をアップロードして添付する

手順2.で作成したリッチメニューに、手順1.で用意した[画像をアップロード](/reference/messaging-api/#upload-rich-menu-image)して添付します。ターミナル上で、以下の手順でコマンドを実行してください。

1. 手順1.で用意した画像があるディレクトリに移動する。
2. 以下のコマンドの`{richMenuId}`を手順2.で取得したリッチメニューのIDに置き換えて実行する。

```sh
curl -v -X POST https://api-data.line.me/v2/bot/richmenu/{richMenuId}/content \
-H "Authorization: Bearer {channel access token}" \
-H "Content-Type: image/png" \
-T richmenu-template-guide-04.png
```

### 4. デフォルトのリッチメニューを設定する

準備が完了したため、リッチメニューを表示するための設定を行います。ここでは、[デフォルトのリッチメニューを設定](/reference/messaging-api/#set-default-rich-menu)します。デフォルトのリッチメニューは、LINE公式アカウントを友だち追加し、ユーザー単位のリッチメニューがリンクされていないすべてのユーザーに表示されます。以下のコマンドをターミナルで実行してください。

```sh
curl -v -X POST https://api.line.me/v2/bot/user/all/richmenu/{richMenuId} \
-H "Authorization: Bearer {channel access token}"
```

#### 4-1. リッチメニューの表示を確認する

設定したデフォルトのリッチメニューが表示されることを確認します。リッチメニューを設定したLINE公式アカウントのトーク画面を開きます。今回作成したリッチメニューは、閉じた状態で表示されるため［**Tap to open**］をタップして、リッチメニューを開きます。

![](/media/messaging-api/rich-menu/default-rich-menu-example.png){className="[\"border\",\"w-fix-320\"]"}

## ユーザー単位のリッチメニューについて

Messaging APIを使うと、ユーザーごとにリッチメニューをリンクできます。ユーザー単位のリッチメニューについて詳しくは、「[ユーザー単位のリッチメニューを使う](/docs/messaging-api/use-per-user-rich-menus/)」を参照してください。
