---
title: Provider and Messaging API channel creation flow updated
navigation: true
description: >-
  We updated the process to create a provider and a Messaging API channel on the
  LINE Developers Console to improve the developer experience.
meta: '{"date":"2021-04-23 00:00 UTC","tags":"Messaging API, Console","locale":"en"}'
path: /en/_partials/news/2021/2021-04-23-improve-provider-creation
__hash__: kXJbHjWq3AVjYK019W3UvLD75nbPdwrZJUMimYVWH9A
seo:
  title: Provider and Messaging API channel creation flow updated
  description: >-
    We updated the process to create a provider and a Messaging API channel on
    the LINE Developers Console to improve the developer experience.
---

We updated the process to create a provider and a Messaging API channel on the [LINE Developers Console](/console/) to improve the developer experience.

### What's changed?

We've made these changes:

- [Added a guide text when creating a provider](#add-guide-text)
- [Updated the Messaging API channel creation flow](#updated-messaging-api-channel-creation)

#### Added a guide text when creating a provider

To make it easy for developers to understand the definition of a provider, we've added a guide text explaining the definition of a provider to the pop-up displayed when creating a new provider.

![Pop-up to create a new provider with the definition of a provider](/media/news/provider-popup-en.png){className="[\"border\",\"w-fix-360\"]"}

For instructions on how to create a new provider, see [Creating a provider](/docs/line-developers-console/overview/#creating-a-provider) in the LINE Developers Console documentation.

#### Updated the Messaging API channel creation flow

Before the update, the relationship between a provider, the Messaging API channels belonging to the provider, and their LINE Official Accounts was unclear to some developers. This lead to some developers creating Messaging API channels under unintended providers. To resolve this issue, we've updated the process of creating a Messaging API channel.

When a developer creates a Messaging API channel, a pop-up appears, showing the names of the channel, LINE Official Account, the provider, and some precautions.

![Pop-up showing names of the channel, Official Account, and the provider](/media/news/messaging-api-creation-popup-en.png){className="[\"border\",\"w-fix-680\"]"}

Once the developer clicks **OK**, a secrecy of communication agreement is displayed.

For instructions on how to create a new Messaging API channel, see [Creating a channel](/docs/line-developers-console/overview/#creating-a-channel) in the LINE Developers Console documentation.
