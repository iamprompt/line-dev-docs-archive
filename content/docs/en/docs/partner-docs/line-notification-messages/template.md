---
title: LINE notification messages (template)
navigation: true
description: ''
meta: '{}'
path: /en/docs/partner-docs/line-notification-messages/template
__hash__: MmtMXxupmv-zcfZ5nugIuU2Sp1O8JxLvPtV7-7qouRM
seo:
  title: LINE notification messages (template)
  description: ''
---

# :page-title

:markdown-controls::admonition
---
title: Use of optional functions requires an application
type: note
---
Only corporate users who have submitted the required applications can use the functions described in this document. To use these functions with your LINE Official Account, contact your sales representative or contact [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
::

:toc## What are LINE notification messages (template)

LINE notification messages (template) are a feature that allows you to create a message by combining prepared templates and items, and send it to users by specifying their phone numbers. Even if a user hasn't added your LINE Official Account as a friend, you can send them messages from your LINE Official Account.

LINE notification messages (template) can only be used on LINE Official Accounts created in Japan, Thailand and Taiwan.

After selecting a [template](#templates), you can send a LINE notification message (template) by combining [items](#items) and [buttons](#buttons) and creating JSON with any text or URL specified for each, and then using the [Send LINE notification message (template)](/reference/line-notification-messages/#send-line-notification-message-template) endpoint.

The types of templates, items and buttons available are different for Japan, Thailand and Taiwan, and are automatically determined by the LINE Official Account from which the message is sent. You can't change the header and footer of the message.

![Sample of a LINE notification message (template)](/media/line-notification-message/notification-messages-template.png){className="[\"border\",\"w-fix-480\"]"}

For example, the above message can be sent by creating the following JSON:

```json
{
  "to": "{hashed_phone_number}",
  "templateKey": "shipment_completed_ja",
  "body": {
    "emphasizedItem": {
      "itemKey": "date_002_ja",
      "content": "Saturday, August 10, 2024"
    },
    "items": [
      {
        "itemKey": "time_range_001_ja",
        "content": "A.M."
      },
      {
        "itemKey": "number_001_ja",
        "content": "1234567"
      },
      {
        "itemKey": "price_001_ja",
        "content": "120 USD"
      },
      {
        "itemKey": "name_010_ja",
        "content": "Frozen Soup Set"
      }
    ],
    "buttons": [
      {
        "buttonKey": "check_delivery_status_ja",
        "url": "https://example.com/CheckDeliveryStatus/"
      },
      {
        "buttonKey": "contact_ja",
        "url": "https://example.com/ContactUs/"
      }
    ]
  }
}
```

You can check the number of LINE notification messages (template) using the API. For more information, see [Get the number of sent LINE notification messages](/docs/partner-docs/line-notification-messages/technical-specs/#get-number-of-sent-line-notification-messages).

## Templates

By sending a LINE notification message (template) with the key (`Key`) of the template specified, the title (`Title`) and description (`Description`) of the target template are displayed at the top of the message.

![](/media/line-notification-message/notification-messages-template-templates.png){className="[\"border\",\"w-fix-480\"]"}

:templates{src="templates"}## Items

You can include multiple items in the template by specifying the key (`Key`) of the item. You can set any string as the value of the specified item.

![](/media/line-notification-message/notification-messages-template-items.png){className="[\"border\",\"w-fix-480\"]"}

:templates{src="items"}## Buttons

You can include multiple buttons in the template by specifying the key (`Key`) of the button. You can set any URL as the transition destination for the button.

![](/media/line-notification-message/notification-messages-template-buttons.png){className="[\"border\",\"w-fix-480\"]"}

:templates{src="buttons"}
