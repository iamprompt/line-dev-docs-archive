---
title: Flex Messageを使いこなす パート3
navigation: true
description: >-
  Flex
  Messageは、画像に頼らず、自由度の高いレイアウトを作成できるメッセージです。一方で、見た目を作り込むことに集中すると、届いたメッセージをユーザーが実際にどう利用するかについての配慮が後回しになりがちです。
meta: >-
  {"date":"2026-08-27 00:00 UTC","tags":"messaging-api,
  flex-message","locale":"ja","sidebar":false}
path: /ja/tips/2026/08/27/flex-message-usage-3
__hash__: ZGnRPfR7xwK9jPwWPciJjmRenReFXf4iGweMxzmqOYk
seo:
  title: Flex Messageを使いこなす パート3
  description: >-
    Flex
    Messageは、画像に頼らず、自由度の高いレイアウトを作成できるメッセージです。一方で、見た目を作り込むことに集中すると、届いたメッセージをユーザーが実際にどう利用するかについての配慮が後回しになりがちです。
---

::Tips
# :page-title

  :::display-date{date="2026/08/27" .!mb-20}

  :::

[Flex Message](/docs/messaging-api/using-flex-messages/)は、画像に頼らず、自由度の高いレイアウトを作成できるメッセージです。一方で、見た目を作り込むことに集中すると、届いたメッセージをユーザーが実際にどう利用するかについての配慮が後回しになりがちです。

この記事では、Flex Messageを実装するときに忘れがちな設定と、実運用の前に確認しておきたいポイントを紹介します。

  :::toc

  :::

## altTextを具体的に設定する

Flex Messageでは、メッセージオブジェクトに`altText`を設定する必要があります。

`altText`には、Flex Messageで伝えたい内容をテキストで設定します。`altText`は各OSの通知やLINEアプリのトークリスト、引用メッセージなど、Flex Messageのレイアウトそのものが表示されない場面で表示されます。

  :::admonition{title="altTextの読み上げについて" type="tip"}
  [iOSのVoiceOver](https://support.apple.com/ja-jp/guide/iphone/iph3e2e415f/ios){rel="[\"nofollow\"]"}や[AndroidのTalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=ja){rel="[\"nofollow\"]"}などのスクリーンリーダーでは、端末の通知やLINEアプリのトークリストなどに表示された`altText`が読み上げられます。スクリーンリーダーを利用するユーザーにも内容が伝わるように、`altText`にはFlex Messageで伝えたい内容を設定してください。
  :::

たとえば、商品の配送状況を知らせるFlex Messageであれば、以下のように設定します。

良い例：

```json
{
  "type": "flex",
  "altText": "BROWN STOREです。ご注文の商品は8月27日 10:00〜11:00に到着予定です。",
  "contents": {
    // Flex Messageの内容は省略
  }
}
```

悪い例：

```json
{
  "type": "flex",
  "altText": "This is a Flex Message",
  "contents": {
    // Flex Messageの内容は省略
  }
}
```

以下は、`altText`がLINEアプリのトークリスト、端末の通知、引用メッセージに表示された例です。

| トークリスト                                                                                                                          | 端末の通知                                                                                                                     | 引用メッセージ                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![LINEアプリのトークリストに表示されたaltText](/media/tips/2026/flex-message-alt-text-talk-list-ja.png){className="[\"border\",\"w-fix-240\"]"} | ![端末の通知に表示されたaltText](/media/tips/2026/flex-message-alt-text-notification-ja.png){className="[\"border\",\"w-fix-240\"]"} | ![引用メッセージ利用の際に表示されたaltText](/media/tips/2026/flex-message-alt-text-quote-1-ja.png){className="[\"border\",\"w-fix-240\"]"}   ![送信済みの引用メッセージに表示されたaltText](/media/tips/2026/flex-message-alt-text-quote-2-ja.png){className="[\"border\",\"w-fix-240\"]"} |

ユーザーに対して何かしらの行動を促すFlex Messageで`altText`を書くときは、以下のような情報を含めると、メッセージの内容が伝わりやすくなります。

- 何についてのメッセージか
- 現在の状態
- ユーザーが次に取るべき行動

たとえば、イベントチケットであれば「イベント名」「日時」「入場方法」、請求に関するお知らせであれば「金額」「期限」などを含めます。

## アクションのlabelを具体的に設定する

ボタンや画像などにアクションを設定する場合、`label`は、その要素をタップしたときに実行される内容を示す重要なテキストです。「確認」「こちら」のような汎用的な文言だけでは、タップした後に何が起きるのかが伝わりにくいことがあります。

アクションの`label`は、次のように「対象」と「操作」を含めるとわかりやすくなります。

- 配送状況を確認する
- 予約日時を変更する
- チケットを表示する
- 支払い方法を確認する

複数のボタンを並べる場合は、主要な操作と補助的な操作の違いがわかるように文言を整理します。たとえば、主要な操作を「予約を確定する」、補助的な操作を「日時を変更する」とすると、ユーザーが目的に合う操作を選びやすくなります。

  :::admonition{title="labelの読み上げについて" type="tip"}
  [iOSのVoiceOver](https://support.apple.com/ja-jp/guide/iphone/iph3e2e415f/ios){rel="[\"nofollow\"]"}や[AndroidのTalkBack](https://support.google.com/accessibility/android/answer/6283677?hl=ja){rel="[\"nofollow\"]"}などのスクリーンリーダーでは、アクションに設定した`label`が読み上げられます。スクリーンリーダーを利用するユーザーにも操作の内容が伝わるように、`label`にはタップしたときに何が起きるかを具体的に設定してください。
  :::

良い例：

```json
{
  "type": "button",
  "style": "primary",
  "action": {
    "type": "uri",
    "label": "注文内容を確認する",
    "uri": "https://example.com/orders/12345"
  }
}
```

悪い例：

```json
{
  "type": "button",
  "style": "primary",
  "action": {
    "type": "uri",
    "label": "詳細",
    "uri": "https://example.com/orders/12345"
  }
}
```

## テスト送信して実機で確認する

[Flex Message Simulator](/flex-simulator/)を使うと、メッセージを送信しなくてもFlex Messageの表示を確認できます。ただし、端末の画面幅、OS、LINEアプリのバージョン、言語設定、フォントなどによって、Flex Message Simulatorと実際のLINEアプリでは表示が異なる場合があります。作成したFlex Messageは、テスト送信して実機での表示も確認してください。

OSや画面幅が異なる複数の端末で、以下の点を確認するとよいでしょう。

- 端末の通知やLINEアプリのトークリストで`altText`から内容を推察できるか
- 長いテキストが意図した行数で表示され、重要な情報が省略されていないか
- 横並びのテキストが重なったり見切れたりしていないか
- LINEアプリのフォントサイズを大きくしても、重要な情報が読めるか（詳しくは、『Flex Messageを使いこなす パート2』の「[フォントサイズ設定によって改行位置が変わる](/tips/2026/08/20/flex-message-usage-2/#font-size-setting-changes-layout)」を参照してください）
- ボタンの`label`が省略されず、タップしたときの動作を推察できるか
- タップできる要素がわかりやすい位置にあるか

## まとめ

Flex Messageはレイアウトの自由度が高いぶん、見た目以外の設定も重要です。`altText`やアクションの`label`を具体的に設定し、作成したFlex Messageをテスト送信して実機で確認することで、ユーザーにとって内容や操作がわかりやすいメッセージになります。

Flex Messageを作成するときは、完成した見た目だけでなく、「レイアウトが表示されない場面でも内容が伝わるか」「タップしたときに何が起きるかわかるか」も確認してください。

  :::style
  html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sPWt5, html code.shiki .sPWt5{--shiki-default:#7EE787}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api, flex-message" lang="en" section="tips"}

  :::
::
