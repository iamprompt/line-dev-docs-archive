---
title: >-
  In the Messaging API, we've released text message (v2) which allows you to
  mention users, etc
navigation: true
description: >-
  In the Messaging API, we've released text message (v2) as a new message
  object. By using text message (v2), you can specify mentions to users. In
  addition, compared to the text message that we've provided up until now, it's
  now easier to specify LINE emoji.
meta: '{"date":"2024-10-30 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2024/2024-10-30-text-message-v2
__hash__: 4lghQrERZaDffwGJ-IeywQuoY0S53ktRqyEhksNy1mI
seo:
  title: >-
    In the Messaging API, we've released text message (v2) which allows you to
    mention users, etc
  description: >-
    In the Messaging API, we've released text message (v2) as a new message
    object. By using text message (v2), you can specify mentions to users. In
    addition, compared to the text message that we've provided up until now,
    it's now easier to specify LINE emoji.
---

In the Messaging API, we've released [text message (v2)](/reference/messaging-api/#text-message-v2) as a new message object. By using text message (v2), you can specify mentions to users. In addition, compared to the [text message](/reference/messaging-api/#text-message) that we've provided up until now, it's now easier to specify [LINE emoji](/docs/messaging-api/emoji-list/).

### Date of specification addition

October 30, 2024

### Details

There is a text message as a message object when sending text to users. Unlike the existing text message, the newly added text message (v2) can substitute strings enclosed in `{` and `}` with mentions and emojis.

For example, you can specify the content of mentions or emojis in the `substitution` property as follows, and substitute strings enclosed in `{` and `}` in the value of the `text` property with mentions or emojis:

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

As with text message, the contents of text message (v2) can be verified using the [Validate message objects of a reply message](/reference/messaging-api/#validate-message-objects-of-reply-message) or [Validate message objects of a push message](/reference/messaging-api/#validate-message-objects-of-push-message) endpoints.

::admonition{title="You can continue to use text message" type="tip"}
You can continue to use the text message that we've been providing up until now. However, we may only add new features to text messages (v2) from now on.
::

### Important points about mentions

Note the following when specifying mentions in text messages (v2):

- Mention objects can only be used in [reply message](/reference/messaging-api/#send-reply-message) or [push message](/reference/messaging-api/#send-push-message).
- The destination of the message must be a [group chat](/docs/messaging-api/group-chats/#group) or [multi-person chat](/docs/messaging-api/group-chats/#room).
- Your LINE Official Account that sends messages must be a member of the group chat or multi-person chat to which the message is being sent.
- All mentioned users must be members of the group chat or multi-person chat to which the message is being sent.

For more information about text messages (v2), see [Text message (v2)](/reference/messaging-api/#text-message-v2) in the Messaging API reference.

### LINE Messaging API SDK updates

For more information about the update status of each SDK release related to the above, see the [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) release notes.
