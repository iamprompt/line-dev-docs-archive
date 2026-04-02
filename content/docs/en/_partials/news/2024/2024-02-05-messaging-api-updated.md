---
title: >-
  In the Messaging API, the action has been added to allow users to easily copy
  text to the clipboard
navigation: true
description: >-
  In the Messaging API, we've added the clipboard action for users to copy text
  to the clipboard. This new feature allows users to more easily copy coupon
  codes and other text.
meta: '{"date":"2024-02-05 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2024/2024-02-05-messaging-api-updated
__hash__: VPYx2xcqbo2DKdTLdCceMipYClsWPEERWGuOBo849GM
seo:
  title: >-
    In the Messaging API, the action has been added to allow users to easily
    copy text to the clipboard
  description: >-
    In the Messaging API, we've added the clipboard action for users to copy
    text to the clipboard. This new feature allows users to more easily copy
    coupon codes and other text.
---

In the Messaging API, we've added the [clipboard action](/reference/messaging-api/#clipboard-action) for users to copy text to the clipboard. This new feature allows users to more easily copy coupon codes and other text.

### Copy text to the clipboard

Specify a clipboard action to controls such as buttons in the message and the rich menu. When a user taps a control, the text specified in the `clipboardText` property of the clipboard action is copied to the device clipboard.

![](/media/news/2024/clipbord-action-example-en.png){className="[\"w-fix-360\",\"border\"]"}

**Example of a push message request using the clipboard action:**

```sh
curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {channel access token}' \
-d '{
    "to": "U4af4980629...",
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
              "clipboardText": "3B48740B"  // Specify text to be copied to the clipboard
            }
          ]
        }
      }
    ]
}'
```

For more information, see [Clipboard action](/reference/messaging-api/#clipboard-action) in the Messaging API reference.

### Target version

These added features are available on LINE version `14.0.0` or later for iOS or Android.
