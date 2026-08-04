---
title: TLS 1.0 and TLS 1.1 support by the webhook notification source discontinued
navigation: true
description: >-
  As announced on October 6, 2020, January 18, 2021, and January 28, 2021, the
  following updates have been made to the LINE Platform, which is the source for
  webhook notifications for the Messaging API.
meta: >-
  {"date":"2021-02-08 00:00 UTC","tags":"Messaging API, SSL,
  end-of-life","locale":"en"}
path: /en/_partials/news/2021/2021-02-08-line-platform-update
__hash__: IEVvKPdwATKaBG6MrfbyX7Rc58xI84TV7eKCVw7S37U
seo:
  title: TLS 1.0 and TLS 1.1 support by the webhook notification source discontinued
  description: >-
    As announced on October 6, 2020, January 18, 2021, and January 28, 2021, the
    following updates have been made to the LINE Platform, which is the source
    for webhook notifications for the Messaging API.
---

As announced on [October 6, 2020](/news/2020/10/06/update-webhook-client-and-root-certificate/), [January 18, 2021](/news/2021/01/18/reminder-update-webhook-client-and-root-certificate/), and [January 28, 2021](/news/2021/01/28/reminder-update-webhook-client-and-root-certificate/), the following updates have been made to the LINE Platform, which is the source for webhook notifications for the Messaging API.

- Supported SSL/TLS protocol versions
- Supported HTTP versions
- Request header field name
- Supported root certification authorities

::admonition{title="What if chatbot stops working?" type="note"}
If your chatbot suddenly stops working, it's possible that these updates caused communication failures from the LINE Platform to the webhook URL (the bot server which receives webhook notifications). Check the communication using the verification method described in [Reminder: TLS 1.0 and TLS 1.1 support by the webhook notification source will be discontinued at the end of January 2021](/news/2021/01/28/reminder-update-webhook-client-and-root-certificate/).
::

LINE will continue to improve the quality of its services to its customers. Thank you for your understanding.
