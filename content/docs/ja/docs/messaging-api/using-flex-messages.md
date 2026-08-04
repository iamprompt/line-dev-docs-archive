---
title: Flex Messageを送信する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/using-flex-messages
__hash__: McdnAnIBERRAozVdwNQHd6MRH2BnfccCQr7VTfzS1Kk
seo:
  title: Flex Messageを送信する
  description: null
---

# :page-title

:markdown-controlsFlex Messageは、通常のLINEメッセージに比べ、より豊かでインタラクティブなレイアウトが可能なメッセージです。通常のLINEメッセージでは、テキスト、画像、動画など1種類のソースしか配信されません。しかし、Flex Messageでは、[CSS Flexible Box（CSS Flexbox）](https://www.w3.org/TR/css-flexbox-1/){rel="[\"nofollow\"]"}の仕様に基づいて、レイアウトを自由にカスタマイズできます。

Flex Messageの構成要素は、コンテナ、ブロック、コンポーネントです。各Flex Messageは、メッセージバブルを含むコンテナという単一の最上位構造を持ちます。コンテナには複数のメッセージバブルを含めることができます。バブルはブロックで構成され、ブロックはコンポーネントで構成されています。

Flex Messageでは、テキストの書字方向を左から右（左横書き）、または右から左（右横書き）に指定できます。

::admonition{title="Flex Messageの制限事項" type="note"}
受信端末の環境によって、同じFlex Messageでも描画結果が異なる可能性があります。描画に影響を与える要素には、OS、LINEのバージョン、端末の解像度、言語設定、フォントなどがあります。
::

![Flex Messageのサンプル](/media/messaging-api/using-flex-messages/bubbleSamples-Update1.png)

他のメッセージタイプと同様に、Flex MessageはJSON形式で記述します。Flex Messageについて詳しくは、以下のページを参照してください。

- [Flex Messageの要素](/docs/messaging-api/flex-message-elements/)
- [Flex Messageのレイアウト](/docs/messaging-api/flex-message-layout/)
- [Flex Message](/reference/messaging-api/#flex-message)（Messaging APIリファレンス）

## 動作環境

Flex Messageは、すべてのバージョンのLINEでサポートされます。なお、以下の機能は、LINEの特定のバージョンのみサポートしています。

| 機能                                                                                                                                                                                                                          | iOS版LINE   Android版LINE | PC版LINE   （macOS版、Windows版） |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------- |
| - [ボックス](/reference/messaging-api/#box)の`maxWidth`プロパティ - [ボックス](/reference/messaging-api/#box)の`maxHeight`プロパティ - [テキスト](/reference/messaging-api/#f-text)の`lineSpacing`プロパティ - [動画](/reference/messaging-api/#f-video) ※1 | 11.22.0以上               | 7.7.0以上                     |
| - [バブル](/reference/messaging-api/#bubble)の`size`プロパティの`deca`と`hecto` ※2 - [ボタン](/reference/messaging-api/#button)、[テキスト](/reference/messaging-api/#f-text)、および[アイコン](/reference/messaging-api/#icon)の`scaling`プロパティ         | 13.6.0以上                | 7.17.0以上                    |

※1 動画をサポートしていないLINEのバージョンにおいてもコンテンツを適切に表示するには、`altContent`プロパティを指定します。このプロパティで指定した画像が動画の代わりに表示されます。

※2 LINEのバージョンが`deca`と`hecto`をサポートするバージョンに満たない場合、バブルのサイズは`kilo`として表示されます。

## Flex Message Simulator

[Flex Message Simulator](/flex-simulator/)を使うと、メッセージを実際に送信しなくても、描画された状態を確認できます。

![Flex Message Simulator](/media/messaging-api/using-flex-messages/flex-message-simulator-ja.png){className="[\"border\"]"}

Flex Message Simulatorについて詳しくは、「[チュートリアル - Flex Message Simulatorでデジタル名刺を作成する](/docs/messaging-api/using-flex-message-simulator/)」を参照してください。

## 「Hello, World!」メッセージを送る

Flex Messageを始めるにあたり、「Hello, World！」をFlex Messageとして送信してみましょう。まず、[Flex MessageをJSONで定義](#preparing-json-data)し、[Messaging APIを呼び出し](#sending-messages-with-the-messaging-api)てメッセージを送信します。

![Hello, World!](/media/messaging-api/using-flex-messages/helloWorld.png){className="[\"border\"]"}

### JSONでFlex Messageを定義する

Messaging APIを呼び出してFlex Messageを送信する前に、Flex MessageをJSONで定義します。以下は、JSONでFlex Messageを定義する方法で、"Hello, World!"というメッセージを作ります。このFlex Messageにはメッセージバブルが1つあればよいので、[バブルコンテナ](/docs/messaging-api/flex-message-elements/#bubble)を使用します。

```json
{
  "type": "bubble", // 1
  "body": {
    // 2
    "type": "box", // 3
    "layout": "horizontal", // 4
    "contents": [
      // 5
      {
        "type": "text", // 6
        "text": "Hello,"
      },
      {
        "type": "text", // 6
        "text": "World!"
      }
    ]
  }
}
```

1～6の説明は以下のとおりです。

| dummy | dummy                                                                                               |
| ----- | --------------------------------------------------------------------------------------------------- |
| 1     | 単体のメッセージバブルのコンテナを作成します。このように、コンテナの種類を`"bubble"`にします。                                                |
| 2     | バブルの内容を保持するバブルを指定します。メッセージの表示に必要なブロックは、[ボディ](/docs/messaging-api/flex-message-elements/#block)1点です。 |
| 3     | ボディに、[ボックス](/docs/messaging-api/flex-message-elements/#box)を設定します。                                  |
| 4     | ボディの方向を水平に設定します。ボックス内の子コンポーネントが水平に配置されます。                                                           |
| 5     | ボックス内に配置するコンポーネントを指定します。                                                                            |
| 6     | 「Hello,」と「World!」の2つのテキストを挿入します。                                                                    |

### Messaging APIで送信する

Flex Messsageは、「[メッセージを送信する](/docs/messaging-api/sending-messages/)」のいずれの方法でも送信できます。メッセージリクエストのリクエストボディで、`message.contents`プロパティに[Flex Message](/reference/messaging-api/#flex-message)オブジェクトの定義を設定します。

以下は、プッシュメッセージを送信するリクエストの例です。

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
  "to": "U4af4980629...",
  "messages": [
    {
      "type": "flex",
      "altText": "This is a Flex Message",
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "Hello,"
            },
            {
              "type": "text",
              "text": "World!"
            }
          ]
        }
      }
    }
  ]
}'
```

## 関連ページ

- [Flex Messageの要素](/docs/messaging-api/flex-message-elements/)
- [Flex Messageのレイアウト](/docs/messaging-api/flex-message-layout/)
- [Flex Message](/reference/messaging-api/#flex-message)（APIリファレンス）
- [Flex Message Simulator](/flex-simulator/)
