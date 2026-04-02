---
title: Mark as read API (old)
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/partner-docs/mark-as-read
__hash__: '-zphXd5oxgkgbZd-AO-IxbKtTNRK8cFSwOR_ettDwZ4'
seo:
  title: Mark as read API (old)
  description: null
---

# :page-title

:markdown-controls::admonition{title="Use the new endpoint to mark as read" type="tip"}
The Mark as read API (old) remains available for use. However, if you're implementing functionality to mark messages as read from users going forward, use the Messaging API's [Mark messages as read](/reference/messaging-api/#mark-as-read) endpoint. The "Mark messages as read" endpoint requires no application and can be used in conjunction with chat feature.
::

::admonition
---
title: Use of optional functions requires an application
type: note
---
Only corporate users who have submitted the required applications can use the functions described in this document. To use these functions with your LINE Official Account, contact your sales representative or contact [our Sales partners](https://www.lycbiz.com/jp/partner/sales/){rel="[\"nofollow\"]"}.
::

## Overview

By using the Mark as read API (old), "Read" can be displayed in all messages sent from a specific user.

## Disabling the automatic read setting function

The LINE Official Account is set to automatically display "Read" when receiving a message from the user (the automatic read setting function). However, this setting will be disabled when using the Mark as read API (old).

As a result, in a LINE Official Account that uses the Mark as read API (old), "Read" won't be displayed in messages from users unless a request for the Mark as read API (old) is sent.

::admonition{title="The timing of displaying "Read"" type="note"}
We recommend that you send a Mark as read API (old) request whenever a new message is sent from a user. If you send a message to the user before sending the request, the message will appear to have been sent from the official LINE account without "Read" being displayed on the user's screen.
::

## Using with the chat function

You can respond to the user via the chat function on your LINE Official Account in the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} or the LINE Official Account Manager App.

The chat function and the Mark as read API (old) can't be used together. Note that if you start using the Mark as read API (old), you won't be able to use the chat function.

## Retrying a failed Mark as read API (old) request

When sending a Mark as read API (old) request, if an error with status code 5xx occurs or if the request times out, retry the request.

Note that if you receive a new message from the user before the request is retried successfully, "Read" will be displayed in all messages including the new message.

## Reference

For details on the API specifications, see [Mark as read API (old)](/reference/partner-docs/#mark-as-read) in the options for corporate customers API reference.
