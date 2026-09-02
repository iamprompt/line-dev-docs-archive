---
title: Actions
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/actions
__hash__: qj5zEO5CdDTvj3nqqewqSuuLs1itrfS2n1rKYf8BMfI
seo:
  title: Actions
  description: null
---

# :page-title

:markdown-controlsYou can set different types of actions to be triggered when a user taps a control in a message. Available actions depend on the message type. For more information, see [Message objects](/reference/messaging-api/#message-objects) in the Messaging API reference.

Available actions are:

- [Postback action](#postback-action)
- [Message action](#message-action)
- [URI action](#uri-action)
- [Datetime picker action](#datetime-picker-action)
- [Camera action](#camera-action)
- [Camera roll action](#camera-roll-action)
- [Location action](#location-action)
- [Rich menu switch action](#richmenu-switch-action)
- [Clipboard action](#clipboard-action)

## Postback action

The postback action sends your server a [postback event](/reference/messaging-api/#postback-event) with the text that you specified in the action. You can set to have the text displayed as a message from the user.

You can also specify how to display such as rich menu based on user action. The following display methods can be specified:

- Close rich menu
- Open rich menu
- Open keyboard
- Open voice message input mode

Specifying how to display based on user action is available on LINE version `12.6.0` or later for iOS or Android. For more information, see [Postback action](/reference/messaging-api/#postback-action) in the Messaging API reference.

## Message action

The message action returns you a text as a user's message. For more information, see [Message action](/reference/messaging-api/#message-action) in the Messaging API reference.

## URI action

The URI action opens a URL in LINE's in-app browser. You can also use the [LINE URL scheme](/docs/messaging-api/using-line-url-scheme/) in the URI action to launch a call app with a given number or open the screen to share any LINE Official Account.

![URI action](/media/messaging-api/actions/quick-reply-uri-action-en.webp){className="[\"border\",\"w-fix-240\"]"}

This is a request body set with URI actions for the quick reply buttons shown in the example above. For more information, see [URI action](/reference/messaging-api/#uri-action) in the Messaging API reference.

```json
{
  "messages": [
    {
      "type": "text",
      "text": "Have you decided on your order?",
      "quickReply": {
        "items": [
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Menu",
              "uri": "https://example.com/menu"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Phone order",
              "uri": "tel:09001234567"
            }
          },
          {
            "type": "action",
            "action": {
              "type": "uri",
              "label": "Recommend to friend",
              "uri": "https://line.me/R/nv/recommendOA/%40linedevelopers"
            }
          }
        ]
      }
    }
  ]
}
```

## Datetime picker action

The datetime picker action prompts users to choose a date, time, or date and time from a picker. When the user selects a date and time, you'll get the date and time information in the [postback event](/reference/messaging-api/#postback-event) via a webhook. For more information, see [Datetime picker action](/reference/messaging-api/#datetime-picker-action) in the Messaging API reference.

![Datetime picker action](/media/messaging-api/actions/datetime-picker.png){className="[\"border\",\"w-fix-240\"]"}

## Camera action

The camera action opens a camera screen in LINE. You can set this action only on quick reply buttons. For more information, see [Camera action](/reference/messaging-api/#camera-action) in the Messaging API reference.

## Camera roll action

The camera roll action opens the camera roll screen in LINE. You can set this action only on quick reply buttons. For more information, see [Camera roll action](/reference/messaging-api/#camera-roll-action) in the Messaging API reference.

## Location action

The location action opens the location screen in LINE. You can set this action only on quick reply buttons. For more information, see [Location action](/reference/messaging-api/#location-action) in the Messaging API reference.

## Rich menu switch action

The rich menu switch action makes rich menus switchable. You can set this action only on rich menus. For more information, see [Rich menu switch action](/reference/messaging-api/#richmenu-switch-action) in the Messaging API reference.

## Clipboard action

The clipboard action copies text to the clipboard. When a user taps a control associated with this action, the text specified in the `clipboardText` property is copied to the device clipboard.

![](/media/news/2024/clipbord-action-example-en.png){className="[\"w-fix-360\",\"border\"]"}

This is a request body set with the clipboard action for the message shown in the example above. For more information, see [Clipboard action](/reference/messaging-api/#clipboard-action) in the Messaging API reference.

```json
{
  "messages":[
    {
      "type": "template",
      "altText": "This is your coupon code.",
      "template": {
        "type": "buttons",
        "thumbnailImageUrl": "{your coupon image}",
        "imageAspectRatio": "rectangle",
        "imageSize": "cover",
        "imageBackgroundColor": "#FFFFFF",
        "title": "Your exclusive coupon!",
        "text": "Period: Feb 2024.\nCopy and use the code from the button.",
        "actions": [
          {
            "type": "clipboard",
            "label": "Copy",
            "clipboardText": "3B48740B"
          }
        ]
      }
    }
  ]
}
```
