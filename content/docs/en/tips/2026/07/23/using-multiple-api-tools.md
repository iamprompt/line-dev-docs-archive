---
title: >-
  Points to check when using the Messaging API from multiple tools with a single
  LINE Official Account
navigation: true
description: >-
  You may want to add another tool that uses the Messaging API to a LINE
  Official Account that already uses the Messaging API. For example, you may
  want to add a tool that manages rich menus to a LINE Official Account that
  already uses a tool for sending messages.
meta: >-
  {"date":"2026-07-23 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/07/23/using-multiple-api-tools
__hash__: wyF0OfWPBI0xjLxXk2U_peOwqVZ72zbO0KyksPpmM68
seo:
  title: >-
    Points to check when using the Messaging API from multiple tools with a
    single LINE Official Account
  description: >-
    You may want to add another tool that uses the Messaging API to a LINE
    Official Account that already uses the Messaging API. For example, you may
    want to add a tool that manages rich menus to a LINE Official Account that
    already uses a tool for sending messages.
---

::Tips
# :page-title

  :::display-date{date="2026/07/23" .!mb-20}

  :::

You may want to add another tool that uses the Messaging API to a LINE Official Account that already uses the Messaging API. For example, you may want to add a tool that manages rich menus to a LINE Official Account that already uses a tool for sending messages.

You can use multiple tools with a single LINE Official Account. However, only one Messaging API channel can be linked to a LINE Official Account. For this reason, you need to consider the settings and restrictions that apply at the channel level.

This article introduces points to check when using the Messaging API from multiple tools.

  :::toc

  :::

## Pay attention to channel access tokens when calling APIs

You can call APIs from multiple tools by using the Messaging API channel linked to the same LINE Official Account.

To call the Messaging API, you use a [channel access token](/docs/basics/channel-access-token/) to verify that the application has permission to use the channel.

There are four types of channel access tokens. The number of tokens that can be issued per channel differs depending on the type. If you exceed the number that can be issued, existing channel access tokens may be disabled or the issuance request may be denied.

| Type                                                                      | Max issuance limit | Behavior when max limit is exceeded                                        |
| ------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------- |
| Short-lived channel access token                                          | 30                 | Invalidate existing short-lived channel access tokens in order of issuance |
| Long-lived channel access token                                           | 1                  | Existing long-lived channel access tokens are disabled                     |
| Access token with a user-specified expiration (channel access token v2.1) | 30                 | API error and unable to issue additional tokens                            |
| Stateless channel access token                                            | limitless          | -                                                                          |

When using the same Messaging API channel with multiple tools, check in advance which type of channel access token each tool will use. If you use a channel access token that has an issuance limit, be careful that issuing or reissuing a token doesn't affect the channel access tokens used by other tools.

## Check whether webhook events need to be received

When a user adds your LINE Official Account as a friend or sends a message to the LINE Official Account, the LINE Platform sends webhook events.

Webhook events are sent to the URL set as the **Webhook URL** in the LINE Developers Console. However, only one webhook URL can be set. Therefore, even if you want multiple tools to receive webhook events, the LINE Platform can't send webhook events to multiple URLs.

Note that not all tools that use the Messaging API channel need to receive webhook events. For example, if a tool only sends messages to users, it may not need to receive webhook events.

When introducing multiple tools, check points such as the following in advance:

- Whether the tool you're introducing needs to receive webhook events
- If multiple tools need to receive webhook events, which tool will receive them
- Whether adding the tool may cause an existing tool to receive webhook events it doesn't expect
- Whether an existing tool can properly process webhook events it doesn't expect

## Pay attention to channel-level limits and restrictions

When using multiple tools, also pay attention to limits and restrictions that apply at the channel level.

For example, [rate limits](/reference/messaging-api/#rate-limits) apply to API calls. Rate limits are applied per channel and per API function. When multiple tools send requests to the same Messaging API channel, make sure that the total number of requests from those tools doesn't exceed the rate limit.

The Messaging API also has items with channel-level limits. Examples include:

- The number of messages that can be sent
- The number of rich menus that can be created
- The number of audiences that can be created
- The number of unit name types that can be specified when using the API to get unit-based statistics

When multiple tools use the same feature, check whether they affect the channel-level limits and restrictions. For more information about the limits and restrictions for each feature, see the [Messaging API reference](/reference/messaging-api/).

## Wrap-up

When using multiple tools with a single LINE Official Account, check in advance which Messaging API features each tool uses.

Channel access tokens, the webhook URL, rate limits, and feature-specific limits are points to check when considering a configuration that uses multiple tools. Checking these points together with the settings and usage status of existing tools makes it easier to choose a configuration that fits your purpose.

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
