---
title: LINE notification messages overview
navigation: true
description: >-
  LINE notification messages is a service that lets you send messages to users
  by specifying their phone number, even if you don't know their user IDs. You
  can send messages from the LINE Official Account, even if the user hasn't
  added the LINE Official Account as a friend.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/partner-docs/line-notification-messages/overview
__hash__: lGc5mUQ2frM8Y_Y-AsSOhC_c8ts8f0_eqckeBt397aY
seo:
  title: LINE notification messages overview
  description: >-
    LINE notification messages is a service that lets you send messages to users
    by specifying their phone number, even if you don't know their user IDs. You
    can send messages from the LINE Official Account, even if the user hasn't
    added the LINE Official Account as a friend.
---

# :page-title

:markdown-controls::admonition
---
title: Use of optional functions requires an application
type: note
---
Only corporate users who have submitted the required applications can use the functions described in this document. To use these functions with your LINE Official Account, contact your sales representative or contact [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
::

## Overview

LINE notification messages is a service that allows you to send messages to users by specifying their phone numbers. Even if a user hasn't added your LINE Official Account as a friend, you can send them messages from your LINE Official Account.

LINE notification messages can only be used on LINE Official Accounts in Japan, Thailand and Taiwan.

There are two types of LINE notification messages: [LINE notification messages (template)](/docs/partner-docs/line-notification-messages/template/), which allow you to easily create messages by combining premade templates and items, and [LINE notification messages (flexible)](/reference/line-notification-messages/#flexible), which require prior UX review. Each type has different API endpoints.

The following is a sample of a LINE notification message (template):

![Sample of LINE notification messages (template)](/media/line-notification-message/line-notification-messages-sample-ja.png){className="[\"border\",\"w-fix-480\"]"}

For more information, see [Technical specifications of the LINE notification messages API](/docs/partner-docs/line-notification-messages/technical-specs/) and the [LINE notification messages API reference](/reference/line-notification-messages/).

::admonition
---
title: The purpose of use for LINE notification messages
type: tip
---
The purpose of use for LINE notification messages is limited to those that we deem useful and appropriate for users. It can't be sent for commercial or advertising purposes. For more information, see [LINE notification messages (template) UX guidelines](https://www.lycbiz.com/sites/default/files/media/jp/download/LINE_Official_Notification_Template_UXGuideline.pdf){rel="[\"nofollow\"]"} (only available in Japanese) and [LINE notification messages (flexible) UX guidelines](https://www.lycbiz.com/sites/default/files/media/jp/download/LINE%E9%80%9A%E7%9F%A5%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8UX%E3%82%AC%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3.pdf){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.
::

## Difference in appearance from other messages

LINE notification messages are displayed with “Important notification” to the right of the LINE Official Account icon to distinguish them from other messages. This function is available in LINE version 15.9.0 or later for iOS, Android, and iPad.

![LINE notification messages are displayed with “Important notification” to the right of the icon](/media/line-notification-message/notification-messages-important-en.jpg){className="[\"border\",\"w-fix-480\"]"}

The text displayed may vary depending on the language settings of the LINE app that received the LINE notification message.

| LINE app language settings       | Text displayed           |
| -------------------------------- | ------------------------ |
| Japanese                         | `重要なお知らせ`                |
| Thai                             | `การแจ้งเตือนสำคัญ`      |
| Chinese (Simplified/Traditional) | `重要通知`                   |
| Other                            | `Important notification` |

For more information about the language setting of the LINE app, see [Changing the LINE app language setting](https://help.line.me/line/?contentId=20007465&lang=en){rel="[\"nofollow\"]"} in the Help Center.

## Related pages

- [Technical specifications of the LINE notification messages API](/docs/partner-docs/line-notification-messages/technical-specs/)
- [LINE notification messages API reference](/reference/line-notification-messages/)
- [Webhook delivery completion event](/docs/partner-docs/line-notification-messages/message-sending-complete-webhook-event/)
- [Flow when receiving a LINE notification message](/docs/partner-docs/line-notification-messages/flow-when-receiving-message/)
