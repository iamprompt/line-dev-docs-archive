---
title: Send Messages
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/send-messages
__hash__: tYdwU4Rpx9OgxWByZsTb4Ik7F8c_XiVeaRLrZQdxtJA
seo:
  description: ''
---

### liff.sendMessages()

::reference-with-code
  :::reference-content
  ユーザーの代わりに、LIFFアプリが開かれているトークルームにメッセージを送信します。

  この機能を利用するには、以下の条件を満たす必要があります。

  - 1対1のトーク、::::glossary-tooltip{glossary-id="group"}
  [グループトーク](/glossary/#group)
  ::::

  、または::::glossary-tooltip{glossary-id="room"}
  [複数人トーク](/glossary/#room)
  ::::

  から起動したLIFFアプリの::::glossary-tooltip{glossary-id="liff-browser"}
  [LIFFブラウザ](/glossary/#liff-browser)
  ::::

  内である
  - [`chat_message.write`スコープ](/docs/liff/registering-liff-apps/#registering-liff-app)が有効である
  - LIFFアプリが「[最近使用したサービス](/docs/liff/overview/#multi-tab-view-recent-service)」から再読み込みされていない

  条件を満たしていない場合、`liff.sendMessages()`メソッドが利用できず、エラーコード`403`の`user doesn't grant required permissions yet`エラーが発生します。以下は、エラーが発生する場合の例です。

  - [Keepメモ](https://help.line.me/line/smartphone/pc?lang=ja&contentId=20017696){rel="[\"nofollow\"]"}の機能を利用してLIFFアプリにアクセスした場合。
  - ウェブサイトのリダイレクト処理などにより[LIFFアプリを開く](/docs/line-login/using-line-url-scheme/#opening-a-liff-app)ためのURLスキームにアクセスした場合。
  - LIFF間遷移後のLIFFアプリで`chat_message.write`スコープが無効になった場合。詳しくは、『LIFFドキュメント』の「[LIFF間遷移後の「chat_message.write」スコープについて](/docs/liff/opening-liff-app/#about-chat-message-write-scope)」を参照してください。
  - ユーザーが`chat_message.write`スコープを認可しなかった場合。

  なお、LIFFアプリが起動された画面に関する情報は、[`liff.getContext()`](#get-context)メソッドで取得できます。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff
        .sendMessages([
          {
            type: "text",
            text: "Hello, World!",
          },
        ])
        .then(() => {
          console.log("message sent");
        })
        .catch((err) => {
          console.log("error", err);
        });
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.sendMessages(messages);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  messages

  #undefined
  Array of objects

  [メッセージオブジェクト](/reference/messaging-api/#message-objects)  

  最大件数：5  

  Messaging APIの以下のタイプのメッセージを送信できます。

  - [テキストメッセージ](/docs/messaging-api/message-types/#text-messages)。ただし、`emojis`プロパティおよび`quoteToken`プロパティは利用できません。
  - [スタンプメッセージ](/docs/messaging-api/message-types/#sticker-messages)。ただし、`quoteToken`プロパティは利用できません。
  - [画像メッセージ](/docs/messaging-api/message-types/#image-messages)。
  - [動画メッセージ](/docs/messaging-api/message-types/#video-messages)。ただし、`trackingId`プロパティは利用できません。
  - [音声メッセージ](/docs/messaging-api/message-types/#audio-messages)。
  - [位置情報メッセージ](/docs/messaging-api/message-types/#location-messages)。
  - [テンプレートメッセージ](/docs/messaging-api/message-types/#template-messages)。ただし、設定できるアクションは[URIアクション](/docs/messaging-api/actions/#uri-action)のみです。
  - [Flex Message](/docs/messaging-api/message-types/#flex-messages)。ただし、設定できるアクションは[URIアクション](/docs/messaging-api/actions/#uri-action)のみです。
  :::
::

`liff.sendMessages()`メソッドによってユーザーからテンプレートメッセージまたはFlex Messageが送信された場合、LINEプラットフォームからWebhookは送信されません。それ以外の[メッセージタイプ](/docs/messaging-api/message-types/)であれば、Webhookは送信されます。`liff.sendMessages()`メソッドで画像、動画、および音声のメッセージが送信されると、結果として送信されるWebhookイベントの`contentProvider.type`プロパティの値は`external`になります。詳しくは、『Messaging APIリファレンス』の「[メッセージイベント](/reference/messaging-api/#message-event)」を参照してください。

#### 戻り値

`Promise`オブジェクトが返されます。

- メッセージの送信が成功すると、`Promise`がresolveされます。値は渡されません。
- メッセージの送信が失敗すると、`Promise`がrejectされ、[`LiffError`](#liff-errors)が渡されます。
