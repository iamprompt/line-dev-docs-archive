---
title: Always verify the signature on your Messaging API webhooks
navigation: true
description: Hi, I'm Okuzono (@mokuzon), an engineer working on the Messaging API.
meta: >-
  {"date":"2026-06-18 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/06/18/verify-webhook-signature
__hash__: B510t99HD94JdO6shodfXNXfIukywJOtFgnaHOfTs7E
seo:
  title: Always verify the signature on your Messaging API webhooks
  description: Hi, I'm Okuzono (@mokuzon), an engineer working on the Messaging API.
---

::Tips
# :page-title

  :::display-date{date="2026/06/18" .!mb-20}

  :::

Hi, I'm Okuzono (@mokuzon), an engineer working on the Messaging API.

When you build a bot with the Messaging API, events such as user messages and friend additions arrive at your bot server as [webhooks](/reference/messaging-api/#webhooks). Receiving and handling these webhooks is the starting point of bot development, but here's one thing worth thinking about: "Is that request really coming from the LINE Platform?"

In this article, I'll give a quick introduction to verifying the webhook signature as a defense against webhook spoofing.

  :::toc

  :::

## The problem of webhook spoofing

Webhooks arrive as HTTPS POST requests. The flip side of that is: anyone who learns the endpoint URL of your bot server can send a request of the same shape, not just the LINE Platform.

If you trust the request body as-is and process it without verifying the signature, an attacker could fabricate fake events and have your bot server handle them as if they came from real users. That's why you need a way to confirm that "this webhook really was sent by the LINE Platform."

## Restricting by source IP address, and its limits

When you want to confirm the sender, the first idea that comes to mind might be to restrict access by source IP address: block everything that doesn't come from a LINE Platform IP. At a glance, that does seem like it would prevent spoofing.

In practice, though, this approach isn't actually feasible. As the [Messaging API development guidelines](/docs/messaging-api/development-guidelines/#prohibiting-ip-address-restrictions) state, **the LINE Platform's IP addresses are not disclosed, and they may change without notice.** Since you can't even know which IP addresses to allow in the first place, restricting access by IP address simply isn't possible.

So what should you do instead? This is where the signature comes in.

## Verifying the signature

When the LINE Platform sends a webhook, it includes a "signature" in the `x-line-signature` request header. By verifying this signature, you can confirm the legitimacy of the sender without relying on IP addresses.

The mechanism is simple. There's a step-by-step explanation with diagrams in "[Verify webhook signature](/docs/messaging-api/verify-webhook-signature/)" in the Messaging API documentation, but here are just the key points:

- The LINE Platform generates the signature with HMAC-SHA256, using the request body as the input data and **the channel secret as the hash key**, then sets it in the `x-line-signature` header.
- On your bot server, you run the same calculation using the received request body and the channel secret you manage, producing your own signature.
- If the two match, you can confirm the webhook was sent by someone who knows the channel secret (that is, the LINE Platform) and was not tampered with along the way.

The channel secret is a secret key known only to the LINE Platform and you, the developer. A third party who doesn't know it can't produce a valid signature, which is exactly why verifying the signature is enough to prevent spoofing.

One caveat: **do not modify the request body before verifying the signature.** Deserializing it or replacing strings changes the calculation result and causes verification to fail. Verify against the raw body exactly as received.

## Make use of the SDK's signature verification

The [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) for each language provide utilities for signature verification. Verification is done simply by passing the channel secret, the request body, and the `x-line-signature` header.

The nice part is that **you can use just this signature-verification piece on its own.** Even when it's hard to adopt the full SDK because of your web framework or architecture, you can still use only the signature-verification utility. Rather than implementing the HMAC calculation yourself and risking a slip (such as picking the wrong algorithm or encoding), it's safer and more reliable to use what's already provided. Please make use of it.

## Wrap-up

Webhook signature verification is an unglamorous piece of processing you won't think about day to day once it's in place, but it's an important foundation for your bot server's security.

If you have a bot that doesn't verify signatures yet, now is a great time to add it.

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
