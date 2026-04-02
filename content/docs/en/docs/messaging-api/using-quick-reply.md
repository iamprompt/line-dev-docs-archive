---
title: Use quick replies
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/messaging-api/using-quick-reply
__hash__: 8nws_drpIWAKKXow0TJo0iTVGJ_SvDoNuPTsS5xYb_U
seo:
  title: Use quick replies
  description: null
---

# :page-title

:markdown-controlsQuick reply is a feature that displays a button along with a message for the user to reply to. Users can reply to the LINE Official Account by simply tapping the reply button displayed at the bottom of the chat screen. Quick reply is available in one-on-one chats, group chats, and multi-person chats that a LINE Official Account is a member of. You can set up to 13 quick reply buttons to a message of any type.

::admonition{title="Note" type="note"}
Quick reply is supported on LINE for iOS and LINE for Android.
::

![Quick reply sample](/media/messaging-api/using-quick-reply/quickReplySample.png){className="[\"border\",\"w-fix-240\"]"}

## Quick reply components

The components of quick reply buttons are [action](#action), [icon](#icon), and [label](#label). For more information, see [Quick reply](/reference/messaging-api/#quick-reply) in the Messaging API reference.

### Action

An action is triggered when a quick reply button is tapped. For more information, see [Actions](/docs/messaging-api/actions/).

These are the actions that are available only for quick reply buttons:

- [Camera action](/reference/messaging-api/#camera-action)
- [Camera roll action](/reference/messaging-api/#camera-roll-action)
- [Location action](/reference/messaging-api/#location-action)

These are the actions common to other message types that you can use on quick reply buttons:

- [Postback action](/reference/messaging-api/#postback-action)
- [Message action](/reference/messaging-api/#message-action)
- [URI action](/reference/messaging-api/#uri-action)
- [Datetime picker action](/reference/messaging-api/#datetime-picker-action)
- [Clipboard action](/reference/messaging-api/#clipboard-action)

::admonition{title="Rich menu switch action is not available" type="tip"}
One action you can't use on quick reply buttons is the [rich menu switch action](/reference/messaging-api/#richmenu-switch-action).
::

### Icon

Quick reply buttons are marked with an icon.

If you don't set an icon image, it'll be displayed as follows:

- Camera, camera roll, location actions: The default icon is displayed.
- Actions not listed above: Icon display will be omitted.

### Label

Labels are the text displayed on quick reply buttons.

## Set quick reply buttons

Suppose you're developing a restaurant search bot. This bot recommends restaurants by user preference on category of food or the user's location. Let's write a message to get the user to reply:

1. Create a text message object to ask the user for their request.
2. Add an a `quickReply` object with an `items` array inside. Add to the array three quick reply buttons objects.
3. For the first two quick reply buttons, specify dish types. Set the icon, label, and message action. When the user taps either button, the dish type of the user's choice is sent as a reply from the user.
4. For the third quick reply button, prompt user to send their location. Add a label to guide the user to send location information and a location action to the button. To use the default icon, don't specify the `imageUrl` property.

Here is an example of the message with quick reply buttons. The lines marked with a number indicate the instruction number listed above.

```sh
{
  "type": "text", // 1
  "text": "Select your favorite food category or send me your location!",
  "quickReply": { // 2
    "items": [
      {
        "type": "action", // 3
        "imageUrl": "https://example.com/sushi.png",
        "action": {
          "type": "message",
          "label": "Sushi",
          "text": "Sushi"
        }
      },
      {
        "type": "action",
        "imageUrl": "https://example.com/tempura.png",
        "action": {
          "type": "message",
          "label": "Tempura",
          "text": "Tempura"
        }
      },
      {
        "type": "action", // 4
        "action": {
          "type": "location",
          "label": "Send location"
        }
      }
    ]
  }
}
```

Here are the quick reply buttons the user sees in a chat with the message specified above.

![Quick reply sample 2](/media/messaging-api/using-quick-reply/quickReplySample2.png){className="[\"border\",\"w-fix-240\"]"}

## Quick reply buttons disappear

Quick reply buttons disappear when:

- The user taps one of quick reply buttons. (Except for camera, camera roll, datetime picker action, and location actions. The buttons with these actions remain until the expected data is sent.)
- Your LINE Official Account, the user, or a different member sends a new message in the room. (If the new message is deleted, the quick reply buttons appear again.)

For some actions, tapping the quick reply button doesn't automatically post the user's choice to the chat. To make users know and see what reply button they pressed to reply in the chat, implement so that the reply sent remains as a message in the chat.

## Related pages

- [Message types](/docs/messaging-api/message-types/)
- [Actions](/docs/messaging-api/actions/)
- [Message objects](/reference/messaging-api/#message-objects) in the Messaging API reference
