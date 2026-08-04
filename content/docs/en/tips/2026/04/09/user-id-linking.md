---
title: How to link user IDs on the LINE Platform
navigation: true
description: >-
  When developing with the LINE Platform, linking user IDs can significantly
  expand what you can build.
meta: >-
  {"date":"2026-04-09 00:00 UTC","tags":"line-login, messaging-api,
  liff","locale":"en","sidebar":false}
path: /en/tips/2026/04/09/user-id-linking
__hash__: ZdS4JN2Fg79Cm6NLeO-kBHnrRgJJCPU7xoIfJp7Irm0
seo:
  title: How to link user IDs on the LINE Platform
  description: >-
    When developing with the LINE Platform, linking user IDs can significantly
    expand what you can build.
---

::Tips
# :page-title

  :::display-date{date="2026/04/09" .!mb-20}

  :::

When developing with the LINE Platform, linking :glossary-tooltip[[user IDs](/glossary/#user-id)]{glossary-id="user-id"} can significantly expand what you can build.

For example, by linking user information in your service with LINE user information, you can simplify the login experience or deliver personalized messages to each user via your LINE Official Account. In this way, you can treat users consistently across both LINE and your service.

However, the LINE Platform provides multiple ways to identify users, which can make it difficult to decide which approach to use. In this article, I will outline the main methods for linking user IDs and explain their differences.

## What aspects of ID linking does the LINE Platform cover

The LINE Platform provides mechanisms for authenticating users and retrieving user information to identify LINE users.

However, it does not provide a mechanism to link and manage user IDs between LINE users and users in your service. Therefore, linking user IDs and managing that linkage data must be implemented on your service side.

## Methods for linking user IDs

There are three main ways to link user IDs:

- [Using LINE Login](#line-login-linking)
- [Using the Messaging API](#messaging-api-linking)
- [Using LIFF](#liff-linking)

Each method differs in when user IDs can be obtained and how the linking flow works. Below is an overview of each approach.

### Using LINE Login

With LINE Login, you can obtain a user ID when a user logs in and link it to a user in your service.

The basic flow is as follows:

1. The user performs LINE Login
2. Obtain an ID token or access token after authentication and authorization
3. Retrieve the user ID using the ID token or access token
4. Link the retrieved user ID with the user ID in your service

This approach allows you to link accounts not only for existing users but also during user registration for new users.

For more information, see [Integrating LINE Login with your web app](/docs/line-login/integrate-line-login/) in the LINE Login documentation and [Linking information obtained through LINE Login with information managed by your company (ID linking)](/docs/partner-docs/development-guidelines/#line-login-id-connect) in the options for corporate customers documentation.

### Using the Messaging API

With the Messaging API, you can use the [user account linking](/docs/messaging-api/linking-accounts/) feature to link user IDs based on interactions on a LINE Official Account.

The basic flow is as follows:

1. Retrieve the user ID from a webhook event
2. Issue a link token for that user ID
3. Send a linking URL containing the link token to the user
4. The user logs into your service via the linking URL
5. Generate a nonce and redirect the user to the account-linking endpoint
6. After linking is completed, retrieve the user ID from the account link event webhook
7. Link the retrieved user ID with the user ID in your service

This method enables secure ID linking without requiring a LINE Login channel.

For more information, see [User account linking](/docs/messaging-api/linking-accounts/) in the Messaging API documentation.

### Using LIFF

With LIFF, you can obtain user information from a LIFF app and use it to link IDs.

The basic flow is as follows:

1. The user launches the LIFF app
2. Obtain an ID token or access token after authentication and authorization
3. Retrieve the user ID using the ID token or access token
4. Link the retrieved user ID with the user ID in your service

LIFF is typically used together with the LINE Login API to retrieve user information rather than being used on its own.

For more information, see [Get user profile](/docs/liff/developing-liff-apps/#getting-user-profile) in the LIFF documentation.

## How to choose the right method

LINE Login, Messaging API, and LIFF can all be used to obtain user IDs and perform ID linking. However, each method differs in user flow and prerequisites, so you need to choose the appropriate one depending on your use case. The main differences are summarized below.

| Aspect                             | LINE Login                                                                   | Messaging API                                                                                                         | LIFF                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Entry point                        | Your website or the LINE Official Account chat screen (messages, rich menus) | The LINE Official Account chat screen (messages, rich menus)                                                          | LIFF app                                                      |
| Redirect destination after linking | Can be freely configured                                                     | The result screen provided by the LINE Platform for account linking                                                   | Can be freely configured                                      |
| Prerequisites                      | Need to design where login is integrated in your service flow                | - User must add your LINE Official Account as a friend - Link token is valid for 10 minutes and can only be used once | Need to design where login is integrated in your service flow |

There is no single correct choice when selecting a method, but it becomes easier to choose the right approach by considering where the user interaction starts and how your service flow is designed.

If your flow is centered around login in your service, LINE Login is a natural choice. If interactions start from your LINE Official Account chat room, the Messaging API is suitable. If you already have a LIFF app, adding ID linking functionality to it is also an option.

## Wrap-up

ID linking is a mechanism that connects LINE and your service, but it also enables more personalized user experiences.

For example, you can notify users via LINE when an item they favorited goes on sale, or remind them before their reward points expire. These types of timely interactions become easier to implement when your service is designed with ID linking in mind.

Over time, these small experiences can enhance the overall value of your service and foster user trust and loyalty. I hope this article helps you start thinking about how to implement ID linking in your service.

  :::tags
  ---
  tags: line-login, messaging-api, liff
  lang: en
  section: tips
  ---
  :::
::
