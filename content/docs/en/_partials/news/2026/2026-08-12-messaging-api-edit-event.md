---
title: Users can now edit messages in group chats with a LINE Official Account
navigation: true
description: >-
  Users can now edit messages in group chats with a LINE Official Account. We've
  added a new edit event (messageEdited) to the webhook event objects in the
  Messaging API.
meta: '{"date":"2026-08-12 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2026/2026-08-12-messaging-api-edit-event
__hash__: LbbqijiT89d0SrZJTCA3b3ieD1-AW959HzIBzcaxQM4
seo:
  title: Users can now edit messages in group chats with a LINE Official Account
  description: >-
    Users can now edit messages in group chats with a LINE Official Account.
    We've added a new edit event (messageEdited) to the webhook event objects in
    the Messaging API.
---

Users can now edit messages in group chats with a LINE Official Account. We've added a new [edit event](/reference/messaging-api/#edit-event) (`messageEdited`) to the [webhook event objects](/reference/messaging-api/#webhook-event-objects) in the Messaging API.

### Background on adding the edit event

The message editing feature has been released in [LINE Labs](https://guide.line.me/ja/services/linelabs.html){rel="[\"nofollow\"]"} (only available in Japanese), and users can now edit text messages they've already sent in group chats with a LINE Official Account.

When a user edits a text message in a group chat with a LINE Official Account, the LINE Platform sends an edit event to the bot server specified in the **Webhook URL** in the [LINE Developers Console](/console/).

| Webhook event                                      | One-on-one chats | Group chats | Multi-person chats |
| -------------------------------------------------- | ---------------- | ----------- | ------------------ |
| [Edit event](/reference/messaging-api/#edit-event) | ❌                | ✅           | ❌                  |

The edit event includes a reply token (`replyToken`), allowing your LINE Official Account to reply to the edited message.

### LINE Messaging API SDK updates

For more information about the update status of each SDK release in line with the addition of these new features, see the [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) release notes.
