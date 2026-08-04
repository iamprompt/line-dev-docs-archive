---
title: Stop using the Messaging API
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/stop-using-messaging-api
__hash__: QFiWKOY4yctfi2TTod2CccWEgfJ3bHumODv2MdM079w
seo:
  title: Stop using the Messaging API
  description: null
---

# :page-title

:markdown-controls::admonition{title="Stop using your LINE Official Account" type="tip"}
If you want to stop using your LINE Official Account linked to a Messaging API channel, see [Stop using your LINE Official Account](/docs/messaging-api/stop-using-line-official-account/).
::

If you want to continue using your LINE Official Account linked to a Messaging API channel, but want to stop using the Messaging API, we recommend that you perform the following operations. Note that you can't delete only the Messaging API channel while leaving your LINE Official Account linked to the Messaging API channel.

:toc## Stop using webhooks

1. Select the Messaging API channel you want to stop using on the [LINE Developers Console](/console/).
2. Click the **Messaging API** tab.
3. Disable the **Use webhook** in the **Webhook settings** section.

![Use webhook in the Webhook settings section](/media/messaging-api/stop-using-messaging-api/disable-use-webhook-en.png){className="[\"border\",\"w-fix-720\"]"}

## Revoke channel access tokens

Endpoints for revoking channel access tokens vary depending on the type of channel access tokens. Use the endpoint corresponding to the channel access token you are using to revoke the channel access token. Note that [stateless channel access tokens](/docs/basics/channel-access-token/#stateless-channel-access-token) can't be revoked.

- [Revoke channel access token v2.1](/reference/messaging-api/#revoke-channel-access-token-v2-1) endpoint
- [Revoke short-lived or long-lived channel access token](/reference/messaging-api/#revoke-longlived-or-shortlived-channel-access-token) endpoint

## Display after stopping use of the Messaging API

You can stop using the Messaging API by disabling webhook and revoking the channel access token using the steps above.

However, even if you stop using the Messaging API using these steps, the Messaging API channel itself still exists. Therefore, when you check the channel list in the LINE Developers Console, there will be no visual difference between the channel that you have stopped using and other Messaging API channels that are in use.

Also, when you select **Messaging API** in the LINE Official Account Manager settings screen, the status will remain as **Enabled**.
