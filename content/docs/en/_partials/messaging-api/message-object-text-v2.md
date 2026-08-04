---
title: Message Object Text V2
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/message-object-text-v2
__hash__: WXGKbV_0Uf4-4k1WyXtrEKGl79VI6XwR6W5rmvVUetg
seo:
  description: ''
---

### Text message (v2)

Unlike [text message](#text-message), text message (v2) can substitute strings enclosed in `{` and `}` with mentions and emojis.

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{required="true"}
      #undefined
      type

      #undefined
      String

      `textV2`
      :::::

      :::::parameter-table-entry{required="true"}
      #undefined
      text

      #undefined
      String

      Message text.

      You can use the `substitution` property to substitute strings enclosed in `{` and `}` with mentions or emojis. If you want to use `{` and `}` as strings, escape them with `{{` and `}}`. Also, note the following when using `{` and `}`:

      - `{` and `}` must be used in pairs.
      - The substitution content of the string enclosed in `{` and `}` must be specified using the `substitution` property.

      Max character limit: 5000
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      substitution

      #undefined
      Object

      An object that specifies the substitution content for the part enclosed in `{` and `}` of the `text` property.

      Characters that can be used for object keys are half-width alphanumeric characters (`0-9a-zA-Z`) and underscore (`_`). In addition, the maximum length of the key is 20 characters.

      You can specify [mention objects](#text-message-v2-mention-object) or [emoji objects](#text-message-v2-emoji-object) for object values.

      Max number of objects: 100
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      quoteToken

      #undefined
      String

      Quote token of the message you want to quote. For more information, see [Get quote tokens](/docs/messaging-api/get-quote-tokens/) in the Messaging API documentation.
      :::::
    ::::
  :::

  :::reference-code
  *Example of a text message (v2) with mentions and an emoji*

    ::::code-tabs
      :::::tab{lang="json"}
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
      :::::
    ::::
  :::
::

#### Mention object

Specify the content of the mention to be substituted within the text. Note the following when using mention objects:

1. Mention objects can only be used in [reply message](/reference/messaging-api/#send-reply-message) or [push message](/reference/messaging-api/#send-push-message).
2. The destination of the message must be a [group chat](/docs/messaging-api/group-chats/#group) or [multi-person chat](/docs/messaging-api/group-chats/#room).
3. Your LINE Official Account that sends messages must be a member of the group chat or multi-person chat to which the message is being sent.
4. All mentioned users must be members of the group chat or multi-person chat to which the message is being sent.
5. Up to 20 mentions can be substituted in a single message.

Items 2 to 4 above can't be verified using the [Validate message objects of a reply message](/reference/messaging-api/#validate-message-objects-of-reply-message) or [Validate message objects of a push message](/reference/messaging-api/#validate-message-objects-of-push-message) endpoints.

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `mention`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  mentionee

  #undefined
  Object

  The object to be mentioned. Specify either the [user object](#text-message-v2-mentionee-user) or the [all-mention object](#text-message-v2-mentionee-all).
  :::
::

##### User object

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `user`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  userId

  #undefined
  String

  Use ID of the user to be mentioned. You can't specify the user ID of a LINE Bot.
  :::
::

##### All-mention object

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `all`
  :::
::

#### Emoji object

Specify the emoji content to be substituted within the text. Up to 20 emoji can be substituted in a single message.

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  type

  #undefined
  String

  `emoji`
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  productId

  #undefined
  String

  Product ID for a set of LINE emoji. For more information on product IDs, see [LINE emoji](/docs/messaging-api/emoji-list/) in the Messaging API documentation.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  emojiId

  #undefined
  String

  Emoji ID. For more information on emoji IDs for LINE emojis that are sendable with the Messaging API, see [LINE emoji](/docs/messaging-api/emoji-list/) in the Messaging API documentation.
  :::
::
