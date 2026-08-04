---
title: Configure module channel settings
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/partner-docs/module-technical-console
__hash__: Z8pkGTY__OUctB8ktZYgmWsq_7MB-ILk7K8tsQSshrU
seo:
  title: Configure module channel settings
  description: null
---

# :page-title

:markdown-controls::admonition
---
title: Procedures are required to use optional functions
type: note
---
The functions described in this document are available only to corporate customers who have made the prescribed applications. If you would like to publish the extension function using the module, contact the sales representative or contact us from [LINE Marketplace Inquiry](https://line-marketplace.com/jp/inquiry){rel="[\"nofollow\"]"} (only available in Japanese).
::

In the module channel, a dedicated **module** tab appears in the [LINE Developers Console](/console/).

In the **module** tab, you can set the module channel's webhook URL, whether to receive webhook, and the `redirect_uri` specified when [requesting authorization from the LINE Official Account admin](/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin).

![Module tab in LINE Developers Console](/media/partner-docs/module-technical/module-tab-in-console-en.png){className="[\"w-fix-360\",\"border\"]"}

## 1. module tab

The **module** tab is a setting item dedicated only to the module channel.

## 2. Webhook settings

### Webhook URL

You can set one webhook URL for the module channel. See also [Receiving a webhook](/docs/partner-docs/module-technical-using-messaging-api/#get-webhook).

### Using webhook

You can set whether the module channel receives webhook events.

### Resend webhook

You can set whether or not to resend the webhook event from the LINE Platform when getting the webhook event fails in the webhook URL of the module channel.

### Error stats

You can set whether or not to display stats about webhook event reception failures on the **Webhook errors** tab.

## 3. Redirect settings

### Redirect URL

For the redirect URL, specify the value of the `redirect_uri` parameter used to [request authorization from the LINE Official Account admin](/docs/partner-docs/module-technical-attach-channel/#request-auth-from-line-oa-admin). The redirect URL scheme must be `https`.

You can specify multiple redirect URLs for a single channel.
