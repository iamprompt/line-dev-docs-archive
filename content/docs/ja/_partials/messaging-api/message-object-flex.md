---
title: Message Object Flex
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/message-object-flex
__hash__: djCDTsxBYQRAZuXSLsUNhIiMoS-qG_iHsIE0lZWQka0
seo:
  description: ''
---

### Flex Message

::reference-with-code
  :::reference-content
  Flex Messageは、[CSS Flexible Box（CSS Flexbox）](https://www.w3.org/TR/css-flexbox-1/){rel="[\"nofollow\"]"}の基礎知識を使って、レイアウトを自由にカスタマイズできるメッセージです。Flex Messageの概要については、『Messaging APIドキュメント』の「[Flex Messageを送信する](/docs/messaging-api/using-flex-messages/)」を参照してください。

  - [コンテナ](#container)
    - [バブル](#bubble)
    - [カルーセル](#f-carousel)
  - [コンポーネント](#flex-component)
    - [ボックス](#box)
    - [ボタン](#button)
    - [画像](#f-image)
    - [動画](#f-video)
    - [アイコン](#icon)
    - [テキスト](#f-text)
    - [スパン](#span)
    - [セパレータ](#separator)
    - [フィラー](#filler)（非推奨）

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `flex`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      altText

      #undefined
      String

      代替テキスト。ユーザーがメッセージを受信した際に、端末の通知やトークリスト、[引用メッセージ](/docs/messaging-api/sending-messages/#send-quote-messages)でFlex Messageの代替として表示されます。  

      Unicode絵文字を含めることができます。  

      最大文字数：1500
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      contents

      #undefined
      Object

      Flex Messageの[コンテナ](#container)
      :::::
    ::::
  :::

  :::reference-code
  *Flex Messageの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "flex",
        "altText": "this is a flex message",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "hello"
              },
              {
                "type": "text",
                "text": "world"
              }
            ]
          }
        }
      }
      ```
      :::::
    ::::
  :::
::

#### 動作環境

Flex Messageは、すべてのバージョンのLINEでサポートされます。なお、以下の機能は、LINEの特定のバージョンのみサポートしています。

| 機能                                                                                                                                                                                                                          | iOS版LINE   Android版LINE | PC版LINE   （macOS版、Windows版） |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------- |
| - [ボックス](/reference/messaging-api/#box)の`maxWidth`プロパティ - [ボックス](/reference/messaging-api/#box)の`maxHeight`プロパティ - [テキスト](/reference/messaging-api/#f-text)の`lineSpacing`プロパティ - [動画](/reference/messaging-api/#f-video) ※1 | 11.22.0以上               | 7.7.0以上                     |
| - [バブル](/reference/messaging-api/#bubble)の`size`プロパティの`deca`と`hecto` ※2 - [ボタン](/reference/messaging-api/#button)、[テキスト](/reference/messaging-api/#f-text)、および[アイコン](/reference/messaging-api/#icon)の`scaling`プロパティ         | 13.6.0以上                | 7.17.0以上                    |

※1 動画をサポートしていないLINEのバージョンにおいてもコンテンツを適切に表示するには、`altContent`プロパティを指定します。このプロパティで指定した画像が動画の代わりに表示されます。

※2 LINEのバージョンが`deca`と`hecto`をサポートするバージョンに満たない場合、バブルのサイズは`kilo`として表示されます。

#### コンテナ

コンテナは、Flex Messageの最上位の構造です。以下のタイプのコンテナを利用できます。

- [バブル](#bubble)
- [カルーセル](#f-carousel)

コンテナのJSONデータのサンプルや用途については、『Messaging APIドキュメント』の「[Flex Messageの要素](/docs/messaging-api/flex-message-elements/)」を参照してください。

##### バブル

::reference-with-code
  :::reference-content
  1つのメッセージバブルを構成するコンテナです。ヘッダー、ヒーロー、ボディ、およびフッターの4つのブロックを含めることができます。各ブロックの用途について詳しくは、『Messaging APIドキュメント』の「[ブロック](/docs/messaging-api/flex-message-elements/#block)」を参照してください。

  バブルを定義するJSONデータの最大サイズは、30KBです。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `bubble`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      バブルの大きさ。`nano`、`micro`、`deca`、`hecto`、`kilo`、`mega`、`giga`のいずれかの値を指定できます。デフォルト値は`mega`です。

      `deca`、`hecto`を使用できるLINEのバージョンは以下のとおりです。

      - iOS版とAndroid版のLINE：13.6.0以降
      - macOS版とWindows版のLINE：7.17.0以降

      LINEのバージョンが`deca`と`hecto`をサポートするバージョンに満たない場合、バブルのサイズは`kilo`として表示されます。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      direction

      #undefined
      String

      テキストの書字方向と、水平ボックス内でコンポーネントを配置する向き。以下のいずれかの値を指定します。

      - `ltr`：テキストは左横書き、コンポーネントは左から右に配置
      - `rtl`：テキストは右横書き、コンポーネントは右から左に配置

      デフォルト値は`ltr`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      header

      #undefined
      Object

      ヘッダー。[ボックス](#box)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      hero

      #undefined
      Object

      ヒーロー。[ボックス](#box)、[画像](#f-image)、[動画](#f-video)のいずれかを指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      body

      #undefined
      Object

      ボディ。[ボックス](#box)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      footer

      #undefined
      Object

      フッター。[ボックス](#box)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      styles

      #undefined
      Object

      各ブロックのスタイル。[バブルスタイル](#bubble-style)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      バブルがタップされたときのアクション。[アクションオブジェクト](#action-objects)を指定します。
      :::::
    ::::
  :::

  :::reference-code
  *バブルの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Header text"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://example.com/flex/images/image.jpg"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Body text"
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "Footer text"
            }
          ]
        },
        "styles": {
          "comment": "See the example of a bubble style object"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### ブロックのスタイルを定義するオブジェクト

::reference-with-code
  :::reference-content
  バブル内のブロックのスタイルは、以下の2つのオブジェクトを使って定義します。
  :::

  :::reference-code
  *バブルスタイルとブロックスタイルの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      "styles": {
          "header": {
            "backgroundColor": "#00ffff"
          },
          "hero": {
            "separator": true,
            "separatorColor": "#000000"
          },
          "footer": {
            "backgroundColor": "#00ffff",
            "separator": true,
            "separatorColor": "#000000"
          }
        }
      ```
      :::::
    ::::
  :::
::

###### バブルスタイル

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  header

  #undefined
  Object

  ヘッダーのスタイル。[ブロックスタイル](#block-style)を指定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  hero

  #undefined
  Object

  ヒーローのスタイル。[ブロックスタイル](#block-style)を指定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  body

  #undefined
  Object

  ボディのスタイル。[ブロックスタイル](#block-style)を指定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  footer

  #undefined
  Object

  フッターのスタイル。[ブロックスタイル](#block-style)を指定します。
  :::
::

###### ブロックスタイル

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  backgroundColor

  #undefined
  String

  ブロックの背景色。16進数カラーコードで設定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  separator

  #undefined
  Boolean

  ブロックの上にセパレータを配置する場合は`true`を指定します。デフォルト値は`false`です。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  separatorColor

  #undefined
  String

  セパレータの色。16進数カラーコードで設定します。
  :::
::

::admonition{title="注意" type="note"}
先頭のブロックの上にはセパレータを配置できません。
::

##### カルーセル

::reference-with-code
  :::reference-content
  カルーセルは、子要素として1つ以上のバブルを持つコンテナです。カルーセル内のバブルは、横にスクロールして閲覧できます。

  カルーセルを定義するJSONデータの最大サイズは、50KBです。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `carousel`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      contents

      #undefined
      Array of objects

      このカルーセル内の[バブル](#bubble)。最大バブル数：12
      :::::
    ::::

    ::::admonition{title="バブルの幅" type="note"}
    1つのカルーセルに、異なる幅（`size`プロパティ）のバブルを含めることはできません。バブルの幅は、カルーセルごとに揃えてください。
    ::::

    ::::admonition{title="バブルの高さ" type="tip"}
    カルーセルの中で最大の高さのバブルと一致するように、各バブルのボディが伸長します。ただし、ボディがないバブルの大きさは変わりません。
    ::::
  :::

  :::reference-code
  *カルーセルの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "First bubble"
                }
              ]
            }
          },
          {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Second bubble"
                }
              ]
            }
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### コンポーネント

コンポーネントは、ブロックを構成する要素です。以下のコンポーネントを利用できます。

- [ボックス](#box)
- [ボタン](#button)
- [画像](#f-image)
- [動画](#f-video)
- [アイコン](#icon)
- [テキスト](#f-text)
- [スパン](#span)
- [セパレータ](#separator)
- [フィラー](#filler)（非推奨）

各コンポーネントのJSONデータのサンプルや用途については、『Messaging APIドキュメント』の「[Flex Messageの要素](/docs/messaging-api/flex-message-elements/)」と「[Flex Messageのレイアウト](/docs/messaging-api/flex-message-layout/)」を参照してください。

##### ボックス

::reference-with-code
  :::reference-content
  ボックスは、水平または垂直のレイアウト方向を定義します。ボックスを含む、他のコンポーネントを含むことができます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `box`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      layout

      #undefined
      String

      このボックス内のコンポーネントを配置する向き。詳しくは、『Messaging APIドキュメント』の「[ボックスコンポーネントの向き](/docs/messaging-api/flex-message-layout/#box-component-orientation)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      contents

      #undefined
      Array of objects

      このボックス内のコンポーネント。以下のコンポーネントを指定できます。

      - `layout`プロパティが`horizontal`または`vertical`の場合：[ボックス](#box)、[ボタン](#button)、[画像](#f-image)、[テキスト](#f-text)、[セパレータ](#separator)、および[フィラー](#filler)
      - `layout`プロパティが`baseline`の場合：[アイコン](#icon)、[テキスト](#f-text)、および[フィラー](#filler)

      なお、配列に指定した順に描画されます。空配列を指定することもできます。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      backgroundColor

      #undefined
      String

      ボックスの背景色。RGBカラーに加えて、アルファチャネル（透明度）も設定できます。16進数カラーコードで設定します。（例：#RRGGBBAA）デフォルト値は`#00000000`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      borderColor

      #undefined
      String

      ボックスの境界線の色。16進数カラーコードで設定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      borderWidth

      #undefined
      String

      ボックスの境界線の太さ。ピクセルまたは`none`、`light`、`normal`、`medium`、`semi-bold`、`bold`のいずれかの値を指定できます。`none`では、境界線は描画されず、それ以外は列挙した順に太くなります。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      cornerRadius

      #undefined
      String

      ボックスの境界線の角を丸くするときの半径。ピクセル、または`none`、`xs`、`sm`、`md`、`lg`、`xl`、`xxl`のいずれかの値を指定できます。`none`では、角は丸くならず、それ以外は列挙した順に半径が大きくなります。デフォルト値は`none`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      width

      #undefined
      String

      ボックスの幅。%（親要素の幅を基準にした割合）またはピクセルを指定します。詳しくは、『Messaging APIドキュメント』の「[ボックスの幅](/docs/messaging-api/flex-message-layout/#box-width)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      maxWidth

      #undefined
      String

      ボックスの最大幅。%（親要素の幅を基準にした割合）またはピクセルを指定します。詳しくは、『Messaging APIドキュメント』の「[ボックスの最大幅](/docs/messaging-api/flex-message-layout/#box-max-width)」を参照してください。

      このプロパティを使用できるLINEのバージョンは以下のとおりです。

      - iOS版とAndroid版のLINE：11.22.0以降
      - macOS版とWindows版のLINE：7.7.0以降
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      height

      #undefined
      String

      ボックスの高さ。%（親要素の高さを基準にした割合）またはピクセルを指定します。詳しくは、『Messaging APIドキュメント』の「[ボックスの高さ](/docs/messaging-api/flex-message-layout/#box-height)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      maxHeight

      #undefined
      String

      ボックスの最大高。%（親要素の高さを基準にした割合）またはピクセルを指定します。詳しくは、『Messaging APIドキュメント』の「[ボックスの最大高](/docs/messaging-api/flex-message-layout/#box-max-height)」を参照してください。

      このプロパティを使用できるLINEのバージョンは以下のとおりです。

      - iOS版とAndroid版のLINE：11.22.0以降
      - macOS版とWindows版のLINE：7.7.0以降
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      親要素内での、このコンポーネントの幅または高さの比率。詳しくは、『Messaging APIドキュメント』の「[コンポーネントのサイズ](/docs/messaging-api/flex-message-layout/#component-size)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      spacing

      #undefined
      String

      このボックス内のコンポーネント間の最小スペース。デフォルト値は`none`です。詳しくは、『Messaging APIドキュメント』の「[ボックスの`spacing`プロパティ](/docs/messaging-api/flex-message-layout/#spacing-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      親要素内での、このコンポーネントの前に挿入する余白の最小サイズ。詳しくは、『Messaging APIドキュメント』の「[コンポーネントの`margin`プロパティ](/docs/messaging-api/flex-message-layout/#margin-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingAll

      #undefined
      String

      このボックスの境界線と、子要素の間の余白。詳しくは、『Messaging APIドキュメント』の「[ボックスのパディングで子コンポーネントを配置する](/docs/messaging-api/flex-message-layout/#padding-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingTop

      #undefined
      String

      このボックスの上端の境界線と、子要素の上端の間の余白。詳しくは、『Messaging APIドキュメント』の「[ボックスのパディングで子コンポーネントを配置する](/docs/messaging-api/flex-message-layout/#padding-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingBottom

      #undefined
      String

      このボックスの下端の境界線と、子要素の下端の間の余白。詳しくは、『Messaging APIドキュメント』の「[ボックスのパディングで子コンポーネントを配置する](/docs/messaging-api/flex-message-layout/#padding-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingStart

      #undefined
      String

      - [バブル](#bubble)の書字方向がLTRの場合：このボックスの左端の境界線と、子要素の左端の間の余白
      - [バブル](#bubble)の書字方向がRTLの場合：このボックスの右端の境界線と、子要素の右端の間の余白

      詳しくは、『Messaging APIドキュメント』の「[ボックスのパディングで子コンポーネントを配置する](/docs/messaging-api/flex-message-layout/#padding-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      paddingEnd

      #undefined
      String

      - [バブル](#bubble)の書字方向がLTRの場合：このボックスの右端の境界線と、子要素の右端の間の余白
      - [バブル](#bubble)の書字方向がRTLの場合：このボックスの左端の境界線と、子要素の左端の間の余白

      詳しくは、『Messaging APIドキュメント』の「[ボックスのパディングで子コンポーネントを配置する](/docs/messaging-api/flex-message-layout/#padding-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      このボックスを配置する際の基準位置。以下のいずれかの値を指定します。

      - `relative`：直前のボックスを基準にします。
      - `absolute`：親要素の左上を基準にします。

      デフォルト値は`relative`です。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      タップされたときのアクション。[アクションオブジェクト](#action-objects)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      justifyContent

      #undefined
      String

      親要素の主軸に沿った子要素の配置。親要素が水平ボックスの場合、子要素の`flex`プロパティを0に指定したときのみ動作します。詳しくは、『Messaging APIドキュメント』の「[余白を使った子コンポーネントの配置](/docs/messaging-api/flex-message-layout/#justify-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      alignItems

      #undefined
      String

      親要素の交差軸に沿った子要素の配置。詳しくは、『Messaging APIドキュメント』の「[余白を使った子コンポーネントの配置](/docs/messaging-api/flex-message-layout/#justify-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.type

      #undefined
      String

      背景の種類。以下の値を指定します。

      - `linearGradient`：線形グラデーション。詳しくは、『Messaging APIドキュメント』の「[線形グラデーション背景](/docs/messaging-api/flex-message-layout/#linear-gradient-bg)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.angle

      #undefined
      String

      線形グラデーションの勾配の角度。0度以上、360度未満の範囲で、`90deg`（90度）や`23.5deg`（23.5度）のように整数または小数で角度を指定します。`0deg`は下から上、`45deg`は左下から右上、`90deg`は左から右、`180deg`は上から下のように数字が増えると時計回りで角度が変わります。詳しくは、『Messaging APIドキュメント』の「[線形グラデーションの角度](/docs/messaging-api/flex-message-layout/#linear-gradient-bg-angle)」を参照してください。

      `background.type`が`linearGradient`の場合は必須です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.startColor

      #undefined
      String

      グラデーションの開始点の色。`#RRGGBB`または`#RRGGBBAA`のような16進数カラーコードで設定します。

      `background.type`が`linearGradient`の場合は必須です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.endColor

      #undefined
      String

      グラデーションの終了点の色。`#RRGGBB`または`#RRGGBBAA`のような16進数カラーコードで設定します。

      `background.type`が`linearGradient`の場合は必須です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.centerColor

      #undefined
      String

      グラデーションの中間色。`#RRGGBB`または`#RRGGBBAA`のような16進数カラーコードで設定します。`background.centerColor`を指定すると3色のグラデーションになります。詳しくは、『Messaging APIドキュメント』の「[グラデーションの中間色](/docs/messaging-api/flex-message-layout/#linear-gradient-bg-center-color)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      background.centerPosition

      #undefined
      String

      中間色の位置。開始点の`0%`から、終了点の`100%`の範囲で整数または小数を指定します。デフォルト値は`50%`です。詳しくは、『Messaging APIドキュメント』の「[グラデーションの中間色](/docs/messaging-api/flex-message-layout/#linear-gradient-bg-center-color)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *ボックスの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "image",
              "url": "https://example.com/flex/images/image.jpg"
            },
            {
              "type": "separator"
            },
            {
              "type": "text",
              "text": "Text in the box"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [],
              "width": "30px",
              "height": "30px",
              "background": {
                "type": "linearGradient",
                "angle": "90deg",
                "startColor": "#FFFF00",
                "endColor": "#0080ff"
              }
            }
          ],
          "height": "400px",
          "justifyContent": "space-evenly",
          "alignItems": "center"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### ボタン

::reference-with-code
  :::reference-content
  ボタンを描画するコンポーネントです。ユーザーが、ボタンをタップしたときに実行される、[アクション](/docs/messaging-api/actions/)を指定できます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `button`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      action

      #undefined
      Object

      タップされたときのアクション。[アクションオブジェクト](#action-objects)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      親要素内での、このコンポーネントの幅または高さの比率。水平ボックス内のコンポーネントでは、`flex`プロパティのデフォルト値は`1`です。垂直ボックス内のコンポーネントでは、`flex`プロパティのデフォルト値は`0`です。詳しくは、『Messaging APIドキュメント』の「[コンポーネントのサイズ](/docs/messaging-api/flex-message-layout/#component-size)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      親要素内での、このコンポーネントの前に挿入する余白の最小サイズ。詳しくは、『Messaging APIドキュメント』の「[コンポーネントの`margin`プロパティ](/docs/messaging-api/flex-message-layout/#margin-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      `offsetTop`、`offsetBottom`、`offsetStart`、`offsetEnd`の基準。以下のいずれかの値を指定します。

      - `relative`：直前のボックスを基準にします。
      - `absolute`：親要素の左上を基準にします。

      デフォルト値は`relative`です。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      height

      #undefined
      String

      ボタンの高さ。`sm`または`md`のいずれかの値を指定できます。デフォルト値は`md`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      style

      #undefined
      String

      ボタンの表示形式。以下のいずれかの値を指定します。

      - `primary`：濃色のボタン向けのスタイル
      - `secondary`：淡色のボタン向けのスタイル
      - `link`：HTMLのリンクのスタイル。

      デフォルト値は`link`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      color

      #undefined
      String

      `style`プロパティが`link`の場合は文字の色。`style`プロパティが`primary`または`secondary`の場合は背景色です。16進数カラーコードで設定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      gravity

      #undefined
      String

      垂直方向の位置合わせ方式。詳しくは、『Messaging APIドキュメント』の「[テキスト、画像、ボタンを垂直方向に整列させる](/docs/messaging-api/flex-message-layout/#gravity-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      adjustMode

      #undefined
      String

      テキストのフォントサイズを調整する方式。以下の値を指定します。

      - `shrink-to-fit`：コンポーネントの幅に合わせて自動縮小されます。このプロパティはベストエフォートで機能しますので、プラットフォームによって動作が異なる、あるいは動作しないことがあります。詳しくは、『Messaging APIドキュメント』の「[フォントサイズの自動縮小](/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      scaling

      #undefined
      Boolean

      `true`を指定すると、LINEアプリのフォントサイズ設定に応じて、テキストのフォントサイズが自動的に拡大縮小されます。デフォルト値は`false`です。詳しくは、『Messaging APIドキュメント』の「[フォントサイズ設定に応じたサイズへの拡大縮小](/docs/messaging-api/flex-message-layout/#size-scaling)」を参照してください。

      このプロパティを使用できるLINEのバージョンは以下のとおりです。

      - iOS版とAndroid版のLINE：13.6.0以降
      - macOS版とWindows版のLINE：7.17.0以降
      :::::
    ::::
  :::

  :::reference-code
  *ボタンの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "Tap me",
          "uri": "https://example.com"
        },
        "style": "primary",
        "color": "#0000ff"
      }
      ```
      :::::
    ::::
  :::
::

##### 画像

::reference-with-code
  :::reference-content
  画像を描画するコンポーネントです。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `image`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      url

      #undefined
      String

      画像のURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      画像フォーマット：JPEGまたはPNG  

      最大画像サイズ：1024 x 1024ピクセル  

      最大ファイルサイズ：10MB（`animated`プロパティが`true`の場合は300KB）

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。

        ::::::admonition{title="推奨ファイルサイズ" type="tip"}
        メッセージの表示が遅延することを防ぐために、個々の画像ファイルサイズを小さくしてください（1MB以下推奨）。
        ::::::
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      親要素内での、このコンポーネントの幅または高さの比率。詳しくは、『Messaging APIドキュメント』の「[コンポーネントのサイズ](/docs/messaging-api/flex-message-layout/#component-size)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      親要素内での、このコンポーネントの前に挿入する余白の最小サイズ。詳しくは、『Messaging APIドキュメント』の「[コンポーネントの`margin`プロパティ](/docs/messaging-api/flex-message-layout/#margin-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      `offsetTop`、`offsetBottom`、`offsetStart`、`offsetEnd`の基準。以下のいずれかの値を指定します。

      - `relative`：直前のボックスを基準にします。
      - `absolute`：親要素の左上を基準にします。

      デフォルト値は`relative`です。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      align

      #undefined
      String

      水平方向の位置合わせ方式。詳しくは、『Messaging APIドキュメント』の「[テキストや画像を水平方向に整列させる](/docs/messaging-api/flex-message-layout/#align-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      gravity

      #undefined
      String

      垂直方向の位置合わせ方式。詳しくは、『Messaging APIドキュメント』の「[テキスト、画像、ボタンを垂直方向に整列させる](/docs/messaging-api/flex-message-layout/#gravity-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      画像の幅の最大サイズ。デフォルト値は`md`です。詳しくは、『Messaging APIドキュメント』の「[画像のサイズ](/docs/messaging-api/flex-message-layout/#image-size)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      aspectRatio

      #undefined
      String

      画像のアスペクト比。`{幅}:{高さ}`の形式で指定します。`{幅}`と`{高さ}`は、それぞれ1〜100000の値で入力します。ただし、`{高さ}`には`{幅}`の3倍を超える値は指定できません。デフォルト値は`1:1`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      aspectMode

      #undefined
      String

      画像のアスペクト比と`aspectRatio`プロパティで指定されるアスペクト比が一致しない場合の、画像の表示方式。詳しくは、「[描画領域について](#drawing-area)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      backgroundColor

      #undefined
      String

      画像の背景色。16進数カラーコードで設定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      タップされたときのアクション。[アクションオブジェクト](#action-objects)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      animated

      #undefined
      Boolean

      `true`を指定すると画像（APNG）のアニメーションを再生します。メッセージ全体で10枚の画像まで`true`を指定できます。上限を超えて指定した場合、メッセージは送信できません。デフォルト値は`false`です。データサイズが300KBを超える場合は再生されません。
      :::::
    ::::

    ::::admonition{title="アニメーション画像の作成方法" type="tip"}
    アニメーションの画像はAPNG作成ツールを使用して作成してください。APNGの作成方法は、アニメーションスタンプの作成方法を参考にしてください。詳しくは、LINE Creators Marketにあるアニメーションスタンプの[制作ガイドライン](https://creator.line.me/ja/guideline/animationsticker/){rel="[\"nofollow\"]"}を参照してください。
    ::::

    ::::admonition{title="アニメーション画像が再生されないときは？" type="note"}
    「画像は表示されるがアニメーションが再生されない」というときは、以下を確認してください。

    - `animated`プロパティの値を`true`にしているか
    - 画像のデータサイズが300KB以下か

    またメッセージを受信したLINEアプリの設定に起因して、アニメーションが再生されない場合もあります。併せて以下も確認してください。

    - LINEアプリの設定で`GIF自動再生`がオンになっているか

    アニメーションはAPNGの`acTL`チャンクの`num_plays`フィールドで指定した回数分、ループ再生されます。0を指定することで無限にループ再生も可能です。
    ::::
  :::

  :::reference-code
  *画像の例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "image",
        "url": "https://example.com/flex/images/image.jpg",
        "size": "full",
        "aspectRatio": "1.91:1"
      }
      ```
      :::::
    ::::
  :::
::

###### 描画領域について

`size`プロパティで画像の最大の幅を指定し、`aspectRatio`プロパティで画像のアスペクト比（幅：高さの比率）を指定します。`size`プロパティと`aspectRatio`プロパティで決定される矩形の領域を、**描画領域**と呼びます。この描画領域に画像が表示されます。

- `flex`プロパティによって算出された[コンポーネントの幅](/docs/messaging-api/flex-message-layout/#component-size)が、`size`プロパティで指定された画像の幅よりも小さい場合、描画領域の幅はコンポーネントの幅に縮小されます。
- 画像のアスペクト比と`aspectRatio`プロパティで指定されるアスペクト比が一致しない場合、`aspectMode`プロパティに基づいて画像が表示されます。デフォルト値は`fit`です。

  - `aspectMode`が`cover`の場合：描画領域全体に画像を表示します。描画領域に収まらない部分は切り詰められます。
  - `aspectMode`が`fit`の場合：描画領域に画像全体を表示します。縦長の画像では左右に、横長の画像では上下に背景が表示されます。

##### 動画

動画を描画するコンポーネントです。

動画を使用できるLINEのバージョンは以下のとおりです。

- iOS版とAndroid版のLINE：11.22.0以降
- macOS版とWindows版のLINE：7.7.0以降

LINEのバージョンが動画をサポートするバージョンに満たない場合、動画の`altContent`プロパティに指定したコンポーネントが代替コンテンツとして表示されます。

::admonition{title="動画が正しく再生できない" type="note"}
動画を含むメッセージの送信に成功したとしても、ユーザーの端末上で動画を正しく再生できない場合があります。詳しくは、FAQの「[メッセージとして送信した動画が再生できないのはなぜですか？](/faq/#why-cant-i-play-a-video-i-sent)」を参照してください。
::

::admonition{title="動画のアスペクト比" type="note"}
一定以上に縦長・横長の動画を送信した場合、一部の環境では動画の一部が欠けて表示される場合があります。

また、`url`プロパティで指定する動画のアスペクト比と、以下の2つのアスペクト比は一致させてください。アスペクト比が異なると、予期せぬレイアウトになることがあります。

- `aspectRatio`プロパティで指定するアスペクト比
- `previewUrl`プロパティで指定するプレビュー画像のアスペクト比

![LINEのトークルームの動画。アスペクト比16:9の映像の背面に、アスペクト比1:1のプレビュー映像が表示されています。](/media/messaging-api/messages/image-overlapping-ja.png){className="[\"w-fix-440\"]"}
::

::admonition{title="動画コンポーネントの使用条件" type="note"}
動画コンポーネントを使うには、以下の条件をすべて満たす必要があります。

- 動画コンポーネントをヒーローの[ブロック](/docs/messaging-api/flex-message-elements/#block)直下に指定する。
- バブルの`size`プロパティに`kilo` `mega` `giga`のいずれかを指定する。
- バブルがカルーセルの子要素ではない。
::

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `video`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      url

      #undefined
      String

      動画ファイルのURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      動画フォーマット：mp4  

      最大ファイルサイズ：200MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      previewUrl

      #undefined
      String

      プレビュー画像のURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      画像フォーマット：JPEGまたはPNG  

      最大ファイルサイズ：1MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      altContent

      #undefined
      component

      代替コンテンツ。動画コンポーネントをサポートするバージョン未満のLINEで表示されます。[ボックス](#box)または[画像](#f-image)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      aspectRatio

      #undefined
      String

      動画のアスペクト比。`{幅}:{高さ}`の形式で指定します。`{幅}`と`{高さ}`は、それぞれ1〜100000の値で入力します。ただし、`{高さ}`には`{幅}`の3倍を超える値は指定できません。デフォルト値は`1:1`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      [URIアクション](#uri-action)。詳しくは、『Messaging APIドキュメント』の「[URIアクション](/docs/messaging-api/create-flex-message-including-video/#uri-action)」を参照してください。
      :::::
    ::::
  :::

  :::reference-code
  *動画の例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "bubble",
        "size": "mega",
        "hero": {
          "type": "video",
          "url": "https://example.com/video.mp4",
          "previewUrl": "https://example.com/video_preview.jpg",
          "altContent": {
            "type": "image",
            "size": "full",
            "aspectRatio": "20:13",
            "aspectMode": "cover",
            "url": "https://example.com/image.jpg"
          },
          "aspectRatio": "20:13"
        }
      }
      ```
      :::::
    ::::
  :::
::

##### アイコン

::reference-with-code
  :::reference-content
  隣接するテキストを装飾するために、アイコンを描画するコンポーネントです。このコンポーネントは、[ベースラインボックス](/docs/messaging-api/flex-message-layout/#baseline-box)内でのみ使用できます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `icon`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      url

      #undefined
      String

      画像のURL（最大文字数：2000）  

      プロトコル：HTTPS（TLS 1.2以降）  

      画像フォーマット：JPEGまたはPNG  

      最大画像サイズ：1024 x 1024ピクセル  

      最大ファイルサイズ：1MB

      URLはUTF-8を用いてパーセントエンコードしてください。詳しくは、「[リクエストボディのプロパティに指定するURLのエンコードについて](#url-encoding)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      親要素内での、このコンポーネントの前に挿入する余白の最小サイズ。詳しくは、『Messaging APIドキュメント』の「[コンポーネントの`margin`プロパティ](/docs/messaging-api/flex-message-layout/#margin-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      `offsetTop`、`offsetBottom`、`offsetStart`、`offsetEnd`の基準。以下のいずれかの値を指定します。

      - `relative`：直前のボックスを基準にします。
      - `absolute`：親要素の左上を基準にします。

      デフォルト値は`relative`です。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      アイコンの幅の最大サイズ。デフォルト値は`md`です。詳しくは、『Messaging APIドキュメント』の「[アイコン、テキスト、スパンのサイズ](/docs/messaging-api/flex-message-layout/#other-component-size)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      scaling

      #undefined
      Boolean

      `true`を指定すると、LINEアプリのフォントサイズ設定に応じて、アイコンが自動的に拡大縮小されます。デフォルト値は`false`です。詳しくは、『Messaging APIドキュメント』の「[フォントサイズ設定に応じたサイズへの拡大縮小](/docs/messaging-api/flex-message-layout/#size-scaling)」を参照してください。

      このプロパティを使用できるLINEのバージョンは以下のとおりです。

      - iOS版とAndroid版のLINE：13.6.0以降
      - macOS版とWindows版のLINE：7.17.0以降
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      aspectRatio

      #undefined
      String

      アイコンのアスペクト比。`{幅}:{高さ}`の形式で指定します。`{幅}`と`{高さ}`は、それぞれ1〜100000の値で入力します。ただし、`{高さ}`には`{幅}`の3倍を超える値は指定できません。デフォルト値は`1:1`です。
      :::::
    ::::

  アイコンの`flex`プロパティの値は、`0`に固定されます。
  :::

  :::reference-code
  *アイコンの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "icon",
        "url": "https://example.com/icon/png/caution.png",
        "size": "lg",
        "aspectRatio": "1.91:1"
      }
      ```
      :::::
    ::::
  :::
::

##### テキスト

::reference-with-code
  :::reference-content
  文字列を描画するコンポーネントです。色、サイズ、および太さを指定できます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `text`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      text

      #undefined
      String

      テキスト。`text`プロパティまたは`contents`プロパティのいずれかを必ず設定してください。`contents`プロパティを設定すると、`text`は無視されます。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      contents

      #undefined
      Array of objects

      [スパン](#span)の配列。`text`プロパティまたは`contents`プロパティのいずれかを必ず設定してください。`contents`プロパティを設定すると、`text`は無視されます。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      adjustMode

      #undefined
      String

      テキストのフォントサイズを調整する方式。以下の値を指定します。

      - `shrink-to-fit`：コンポーネントの幅に合わせて自動縮小されます。このプロパティはベストエフォートで機能しますので、プラットフォームによって動作が異なる、あるいは動作しないことがあります。詳しくは、『Messaging APIドキュメント』の「[フォントサイズの自動縮小](/docs/messaging-api/flex-message-layout/#adjusts-fontsize-to-fit)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      親要素内での、このコンポーネントの幅または高さの比率。詳しくは、『Messaging APIドキュメント』の「[コンポーネントのサイズ](/docs/messaging-api/flex-message-layout/#component-size)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      親要素内での、このコンポーネントの前に挿入する余白の最小サイズ。詳しくは、『Messaging APIドキュメント』の「[コンポーネントの`margin`プロパティ](/docs/messaging-api/flex-message-layout/#margin-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      position

      #undefined
      String

      `offsetTop`、`offsetBottom`、`offsetStart`、`offsetEnd`の基準。以下のいずれかの値を指定します。

      - `relative`：直前のボックスを基準にします。
      - `absolute`：親要素の左上を基準にします。

      デフォルト値は`relative`です。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetTop

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetBottom

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetStart

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      offsetEnd

      #undefined
      String

      オフセット。詳しくは、『Messaging APIドキュメント』の「[オフセット](/docs/messaging-api/flex-message-layout/#component-offset)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      フォントサイズ。デフォルト値は`md`です。詳しくは、『Messaging APIドキュメント』の「[アイコン、テキスト、スパンのサイズ](/docs/messaging-api/flex-message-layout/#other-component-size)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      scaling

      #undefined
      Boolean

      `true`を指定すると、LINEアプリのフォントサイズ設定に応じて、テキストのフォントサイズが自動的に拡大縮小されます。デフォルト値は`false`です。詳しくは、『Messaging APIドキュメント』の「[フォントサイズ設定に応じたサイズへの拡大縮小](/docs/messaging-api/flex-message-layout/#size-scaling)」を参照してください。

      このプロパティが`true`の場合、`contents`プロパティで指定した[スパン](#span)のテキストも、フォントサイズが自動的に拡大縮小されます。

      このプロパティを使用できるLINEのバージョンは以下のとおりです。

      - iOS版とAndroid版のLINE：13.6.0以降
      - macOS版とWindows版のLINE：7.17.0以降
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      align

      #undefined
      String

      水平方向の位置合わせ方式。詳しくは、『Messaging APIドキュメント』の「[テキストや画像を水平方向に整列させる](/docs/messaging-api/flex-message-layout/#align-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      gravity

      #undefined
      String

      垂直方向の位置合わせ方式。デフォルト値は`top`です。詳しくは、『Messaging APIドキュメント』の「[テキスト、画像、ボタンを垂直方向に整列させる](/docs/messaging-api/flex-message-layout/#gravity-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      wrap

      #undefined
      Boolean

      `true`を指定するとテキストを折り返します。デフォルト値は`false`です。`true`に設定した場合、改行文字（`\n`）を使って改行できます。詳しくは、『Messaging APIドキュメント』の「[テキストを折り返す](/docs/messaging-api/flex-message-elements/#text-wrap)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      lineSpacing

      #undefined
      String

      折り返したテキスト内の行間。0より大きい整数または小数をピクセルで指定します。開始行の上部と最終行の下部には適用されません。詳しくは、『Messaging APIドキュメント』の「[テキスト内の行間を広げる](/docs/messaging-api/flex-message-elements/#text-line-spacing)」を参照してください。

      このプロパティを使用できるLINEのバージョンは以下のとおりです。

      - iOS版とAndroid版のLINE：11.22.0以降
      - macOS版とWindows版のLINE：7.7.0以降
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      maxLines

      #undefined
      Number

      最大行数。テキストがこの行数に収まらない場合は、最終行の末尾に省略記号（…）が表示されます。`0`ではすべてのテキストが表示されます。デフォルト値は`0`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      weight

      #undefined
      String

      フォントの太さ。`regular`、`bold`のいずれかの値を指定できます。`bold`を指定すると太字になります。デフォルト値は`regular`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      color

      #undefined
      String

      フォントの色。16進数カラーコードで設定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      action

      #undefined
      Object

      タップされたときのアクション。[アクションオブジェクト](#action-objects)を指定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      style

      #undefined
      String

      テキストのスタイル。以下のいずれかの値を指定します。

      - `normal`：標準
      - `italic`：斜体デフォルト

      値は`normal`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      decoration

      #undefined
      String

      テキストの装飾。以下のいずれかの値を指定します。

      - `none`：装飾なし
      - `underline`：下線
      - `line-through`：取り消し線

      デフォルト値は`none`です。
      :::::
    ::::
  :::

  :::reference-code
  *テキストの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "text",
        "text": "Hello, World!",
        "size": "xl",
        "weight": "bold",
        "color": "#0000ff"
      }
      ```
      :::::
    ::::
  :::
::

##### スパン

::reference-with-code
  :::reference-content
  スタイルが異なる複数の文字列を描画するコンポーネントです。色、サイズ、太さ、および装飾を指定できます。スパンは、[テキスト](#f-text)の`contents`プロパティに設定します。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `span`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      text

      #undefined
      String

      テキスト。親のテキストの`wrap`プロパティを`true`に設定した場合は、改行文字（`\n`）を使って改行できます。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      color

      #undefined
      String

      フォントの色。16進数カラーコードで設定します。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      size

      #undefined
      String

      フォントサイズ。詳しくは、『Messaging APIドキュメント』の「[アイコン、テキスト、スパンのサイズ](/docs/messaging-api/flex-message-layout/#other-component-size)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      weight

      #undefined
      String

      フォントの太さ。`regular`、`bold`のいずれかの値を指定できます。`bold`を指定すると太字になります。デフォルト値は`regular`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      style

      #undefined
      String

      テキストのスタイル。以下のいずれかの値を指定します。

      - `normal`：標準
      - `italic`：斜体

      デフォルト値は`normal`です。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      decoration

      #undefined
      String

      テキストの装飾。以下のいずれかの値を指定します。

      - `none`：装飾なし
      - `underline`：下線
      - `line-through`：取り消し線

      デフォルト値は`none`です。

        ::::::admonition{title="注意" type="note"}
        [テキスト](#f-text)の`decoration`プロパティで設定した装飾は、スパンの`decoration`プロパティで上書きできません。
        ::::::
      :::::
    ::::
  :::

  :::reference-code
  *スパンの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "span",
        "text": "蛙",
        "size": "xxl",
        "weight": "bold",
        "style": "italic",
        "color": "#4f8f00"
      }
      ```
      :::::
    ::::
  :::
::

##### セパレータ

::reference-with-code
  :::reference-content
  [ボックス](#box)内に分割線を描画するコンポーネントです。水平ボックスに含めた場合は垂直線、垂直ボックスに含めた場合は水平線が描画されます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `separator`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      margin

      #undefined
      String

      親要素内での、このコンポーネントの前に挿入する余白の最小サイズ。詳しくは、『Messaging APIドキュメント』の「[コンポーネントの`margin`プロパティ](/docs/messaging-api/flex-message-layout/#margin-property)」を参照してください。
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      color

      #undefined
      String

      セパレータの色。16進数カラーコードで設定します。
      :::::
    ::::
  :::

  :::reference-code
  *セパレータの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "separator",
        "color": "#000000"
      }
      ```
      :::::
    ::::
  :::
::

##### フィラー

::reference-with-code
  :::reference-content
    ::::admonition{title="フィラーは非推奨のコンポーネントです" type="warning"}
    スペースを作るには、フィラーの代わりに各コンポーネントのプロパティを使用してください。詳しくは、『Messaging APIドキュメント』の「[コンポーネントの位置](/docs/messaging-api/flex-message-layout/#component-position)」を参照してください。
    ::::

  スペースを作るためのコンポーネントです。ボックス内のコンポーネントの間、前、または後にスペースを入れることができます。

    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `filler`
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      flex

      #undefined
      Number

      親要素内での、このコンポーネントの幅または高さの比率。詳しくは、『Messaging APIドキュメント』の「[コンポーネントのサイズ](/docs/messaging-api/flex-message-layout/#component-size)」を参照してください。
      :::::
    ::::

  フィラーでは親要素の`spacing`プロパティが無視されます。
  :::

  :::reference-code
  *フィラーの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "type": "filler"
      }
      ```
      :::::
    ::::
  :::
::
