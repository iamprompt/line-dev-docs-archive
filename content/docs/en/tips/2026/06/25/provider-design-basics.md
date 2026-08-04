---
title: Provider design basics to check before creating a channel
navigation: true
description: >-
  Before you create a channel on the LINE Developers Console, check which
  provider the channel should be created under.
meta: '{"date":"2026-06-25 00:00 UTC","tags":"console","locale":"en","sidebar":false}'
path: /en/tips/2026/06/25/provider-design-basics
__hash__: '-uNk4tTay0npJtwcJNgNmWdLZ8uiALKcUsXsWDggx7I'
seo:
  title: Provider design basics to check before creating a channel
  description: >-
    Before you create a channel on the LINE Developers Console, check which
    provider the channel should be created under.
---

::Tips
# :page-title

  :::display-date{date="2026/06/25" .!mb-20}

  :::

Before you create a channel on the LINE Developers Console, check which provider the channel should be created under.

This is especially important when your company or organization uses the LINE Platform. You might create a new provider without realizing that another department has already created one.

Once you create a channel, you can't move the channel to another provider later.
For services that use multiple channels, such as LINE Login, Messaging API, and LINE MINI App channels, provider design affects how user IDs are handled and whether you can use the add friend option.

This article explains the provider design basics to check before creating channels.

  :::toc

  :::

## What is a provider

On the LINE Developers site, an individual developer, company, or organization that provides services and acquires user information is referred to as a service provider. In the context of LINE MINI Apps, this is referred to as a service company. On the LINE Developers Console, this service provider is registered as a provider.

A channel enables service providers to use the features provided through the LINE Platform. For example, to use LINE Login, create a LINE Login channel. To use the Messaging API, create a Messaging API channel.

In other words, a provider represents who provides the service, and a channel represents which LINE Platform features the service uses.

Create a provider for each service provider.

For example, if you outsource the development of services using the LINE Platform to another company, normally create a provider for the outsourcer as the main service provider, not for the development company. Then, create channels under that provider.

If you create channels under the development company's provider, problems may occur in the future when the operational structure changes or when you want to link those channels with other channels.
Because you can't move channels to another provider later, it's important to check who the main service provider is before creating channels.

## Create channels that you want to link under the same provider

If you develop a service that links multiple channels, create the channels that you want to link under the same provider.

This is because user IDs are handled at the provider level.
Even for the same user, a different user ID is issued for each provider. On the other hand, if channels are under the same provider, the same user is assigned the same user ID regardless of the channel type.

For example, if a LINE Login channel and a Messaging API channel are under the same provider, the user IDs obtained by both channels for the same user are the same. In contrast, user IDs obtained by channels under different providers are different, even for the same user.

Therefore, before creating channels for a service that combines LINE Login and the Messaging API, or a service that links a LINE MINI App and a LINE Official Account, check which provider the channels should be grouped under.

![](/media/messaging-api/getting-user-ids/user-id-for-each-provider-en.png){className="[\"w-fix-520\",\"bg-border\"]"}

Note that although the same user is assigned the same user ID for channels under the same provider, this doesn't mean that LINE user information obtained from multiple services can be freely linked and used.

Under the LINE User Data Policy, linking and commonly using LINE user information obtained from multiple services by a provider is generally prohibited. However, the common use of LINE user information is permitted if you publish a [provider page](/docs/partner-docs/provider-page/) and meet the specified [terms and conditions of use](/docs/partner-docs/provider-page/#terms-and-conditions-of-use).

When using LINE user information, the provider must recognize that it is the acquirer of LINE user information and use the information responsibly, in compliance with applicable laws and regulations, and in a way that doesn't disadvantage users.

Having the same user ID and being able to commonly use LINE user information are different. When using LINE user information across services, check not only the technical implementation, but also the applicable policies and explanations to users.

## Check the provider when using the add friend option

LINE Login and LINE MINI Apps can use the [add friend option](/docs/line-login/link-a-bot/) to prompt users to add a LINE Official Account as a friend.

To use the add friend option with LINE Login, the Messaging API channel associated with the LINE Official Account and the LINE Login channel must belong to the same provider.

  :::admonition
  ---
  title: Requirements for linking a LINE Official Account to a LINE Login channel
  type: note
  ---
  To link a LINE Official Account to a LINE Login channel, the following requirements must be met:

  - The Messaging API channel associated with the LINE Official Account belongs to the same provider as the LINE Login channel.
  - The account used for the operation has the Admin role for the LINE Login channel and administrator privileges for the LINE Official Account.

    - You can check the Admin role for the LINE Login channel on the LINE Developers Console.
    - You can check the administrator privileges for the LINE Official Account on LINE Official Account Manager.
  :::

Similarly, to use the add friend option with a LINE MINI App, the Messaging API channel associated with the LINE Official Account and the LINE MINI App channel must belong to the same provider.

Even if you plan to link a LINE Official Account later, channels created under different providers might not meet the requirements. If you plan to use the add friend option, check the provider structure before creating channels.

## Checklist before creating channels

Before creating channels, check the following:

- Whether you created a provider for each service provider
- Whether, for outsourced development, you created channels under the provider of the outsourcer
- Whether the LINE Login, Messaging API, and LINE MINI App channels that you want to link are under the same provider
- Whether the Messaging API channel of the LINE Official Account that you want to link with the add friend option is under the same provider as the LINE Login channel or LINE MINI App channel
- Whether you have published a provider page and met the terms and conditions of use when commonly using LINE user information across multiple services

## Summary

A provider is not just a container for channels. It is an important design unit related to service providers, user IDs, LINE user information, and links with LINE Official Accounts.

When creating a new channel, refer to [Best practices for provider and channel management](/docs/line-developers-console/best-practices-for-provider-and-channel-management/) and make sure your plan covers not only the current implementation but also future channel linkage and operational structure.

  :::tags{tags="console" lang="en" section="tips"}

  :::
::
