---
title: Messaging APIにおいて、ユーザーへのメンションなどができる「テキストメッセージ（v2）」をリリースしました
navigation: true
description: >-
  Messaging
  APIにおいて、新しいメッセージオブジェクトとしてテキストメッセージ（v2）をリリースしました。テキストメッセージ（v2）を用いることで、ユーザーへのメンションを指定できます。また、従来より提供しているテキストメッセージに比べて、LINE絵文字をより指定しやすくなりました。
meta: '{"date":"2024-10-30 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2024/2024-10-30-text-message-v2
__hash__: 2JePM4qSn3RXrU5Z4LpKIEshlNbDYhehM7HE4WWRHRM
seo:
  title: Messaging APIにおいて、ユーザーへのメンションなどができる「テキストメッセージ（v2）」をリリースしました
  description: >-
    Messaging
    APIにおいて、新しいメッセージオブジェクトとしてテキストメッセージ（v2）をリリースしました。テキストメッセージ（v2）を用いることで、ユーザーへのメンションを指定できます。また、従来より提供しているテキストメッセージに比べて、LINE絵文字をより指定しやすくなりました。
---

Messaging APIにおいて、新しいメッセージオブジェクトとして[テキストメッセージ（v2）](/reference/messaging-api/#text-message-v2)をリリースしました。テキストメッセージ（v2）を用いることで、ユーザーへのメンションを指定できます。また、従来より提供している[テキストメッセージ](/reference/messaging-api/#text-message)に比べて、[LINE絵文字](/docs/messaging-api/emoji-list/)をより指定しやすくなりました。

### 仕様追加日

2024年10月30日

### 詳細

ユーザーにテキストを送信するときのメッセージオブジェクトとして、テキストメッセージがあります。新しく追加されたテキストメッセージ（v2）は、従来のテキストメッセージと異なり、`{`と`}`で囲まれた文字列をメンションや絵文字に置き換えることができます。

たとえば、次のように`substitution`プロパティでメンションや絵文字の内容を指定することで、`text`プロパティの値にある`{`と`}`で囲まれた文字列を、メンションや絵文字に置き換えることができます。

```json
{
  "type": "textV2",
  "text": "Welcome, {user1}! {laugh}\n{everyone} There is a newcomer!",
  "substitution": {
    "user1": {
      "type": "mention",
      "mentionee": {
        "type": "user",
        "userId": "U49585cd0d5..."
      }
    },
    "laugh": {
      "type": "emoji",
      "productId": "5a8555cfe6256cc92ea23c2a",
      "emojiId": "002"
    },
    "everyone": {
      "type": "mention",
      "mentionee": {
        "type": "all"
      }
    }
  }
}
```

![](/media/messaging-api/messages/text-v2.png){className="[\"border\",\"w-fix-320\"]"}

テキストメッセージと同じく、テキストメッセージ（v2）の内容は「[応答メッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-reply-message)」エンドポイントまたは「[プッシュメッセージのメッセージオブジェクトを検証する](/reference/messaging-api/#validate-message-objects-of-push-message)」エンドポイントで検証できます。

::admonition{title="テキストメッセージは引き続き使用できます" type="tip"}
以前より提供しているテキストメッセージについては、今後も引き続き使用できます。ただし、今後は新しい機能をテキストメッセージ（v2）にのみ追加する可能性があります。
::

### メンションに関する注意点

テキストメッセージ（v2）でメンションを指定する際は、以下のことに注意してください。

- メンションオブジェクトは、[応答メッセージ](/reference/messaging-api/#send-reply-message)または[プッシュメッセージ](/reference/messaging-api/#send-push-message)でのみ使用できます。
- メッセージの送信先は、[グループトーク](/docs/messaging-api/group-chats/#group)または[複数人トーク](/docs/messaging-api/group-chats/#room)である必要があります。
- メッセージを送信するLINE公式アカウントは、送信先であるグループトークまたは複数人トークのメンバーである必要があります。
- メンションされたすべてのユーザーは、そのメッセージの送信先であるグループトークまたは複数人トークのメンバーである必要があります。

テキストメッセージ（v2）について詳しくは、『Messaging APIリファレンス』の「[テキストメッセージ（v2）](/reference/messaging-api/#text-message-v2)」を参照してください。

### LINE Messaging API SDKの更新について

上記に伴う[LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)の更新状況については、それぞれのSDKのリリースノートを参照してください。
