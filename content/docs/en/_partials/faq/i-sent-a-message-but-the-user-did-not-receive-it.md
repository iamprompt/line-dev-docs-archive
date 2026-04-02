---
title: >-
  I sent a message via the Messaging API, but the user didn't receive the
  message.
navigation: true
description: >-
  If you sent a message via the Messaging API and received a status code 2xx,
  but the user didn't receive the message, the possible reasons are as follows:
meta: >-
  {"date":"2024-05-16 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/i-sent-a-message-but-the-user-did-not-receive-it
__hash__: Lk94soZ0J1c_lklkDkLczU6p-lMUkw9r03gLuRxymD4
seo:
  title: >-
    I sent a message via the Messaging API, but the user didn't receive the
    message.
  description: >-
    If you sent a message via the Messaging API and received a status code 2xx,
    but the user didn't receive the message, the possible reasons are as
    follows:
---

If you sent a message via the Messaging API and received a status code `2xx`, but the user didn't receive the message, the possible reasons are as follows:

- The conditions required for sending a message aren't met, e.g. the user has blocked your LINE Official Account.

  - [Conditions for sending push message](/reference/messaging-api/#send-push-message-conditions)
  - [Conditions for sending multicast message](/reference/messaging-api/#send-multicast-message-conditions)
  - [Conditions for sending narrowcast message](/reference/messaging-api/#send-narrowcast-message-conditions)

If there are no problems with the above, but the LINE app hasn't receive a message, it is possible that for some reason the user's device and the LINE server aren't automatically synchronized. Please refer to the Help Center's "[Chats/Calls/Notifications > Chat list information is incorrect > Your chat history differs from what others see](https://help.line.me/line/smartphone/pc?lang=en&contentId=20018227){rel="[\"nofollow\"]"}" and ask users to try "Repair chat history" from their device using the LINE app.

As stated in the Help Center, users are expected to back up their chat history before manually repairing it.
