---
title: >-
  [Updated] In the Messaging API, you can now retrieve information about your
  LINE Official Account membership
navigation: true
description: ''
meta: '{"date":"2024-02-09 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2024/2024-02-09-get-membership-plan-information
__hash__: eL0tlk5eUy4cWX5y13HL-CgtFVgTWJTD-4tbp3mf8bY
seo:
  title: >-
    [Updated] In the Messaging API, you can now retrieve information about your
    LINE Official Account membership
  description: ''
---

::admonition{title="Added on March 28, 2024" type="note"}
The endpoints for retrieving membership information, which we had suspended since February 14, 2024, are now available again. Note that some specifications, such as endpoint URLs, have been changed.
::

::admonition{title="Added on February 14, 2024" type="note"}
Due to a technical issue, we suspended the endpoints for retrieving membership information via the Messaging API.

We sincerely apologize for any inconvenience this may have caused. We will notify you through this news article once the issue is fixed and the feature has been enabled again.
::

In the Messaging API, you can now retrieve information about your LINE Official Account membership.

[Membership](https://www.lycbiz.com/jp/service/line-official-account/Membership/){rel="[\"nofollow\"]"} (only available in Japanese) is a monthly membership subscription feature available for the LINE Official Account. Users can subscribe to the membership plan on your LINE Official Account to receive exclusive member perks.

The following two endpoints have been added to the Messaging API:

- [Get a user's membership subscription status](#membership-20240209-01)
- [Get membership plans being offered](#membership-20240209-02)

::admonition{title="How to start a membership" type="tip"}
You can set up and publish your membership on the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}. For more information, see [You can easily create subscription services on LINE! What is the "Membership" feature of the LINE Official Account?](https://www.lycbiz.com/jp/column/line-official-account/service-information/membership/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.

Currently, the membership feature is only available for LINE Official Accounts in Japan.
::

### Get a user's membership subscription status

::admonition{title="Added on March 28, 2024" type="note"}
This endpoint, which we had suspended since February 14, 2024, are now available again. Note that some specifications, such as endpoint URLs, have been changed.
::

This endpoint allows you to get information about the memberships to which the user specified by the user ID is subscribed. For more information, see [Get a user's membership subscription status](/reference/messaging-api/#get-a-users-membership-subscription-status) in the Messaging API reference.

### Get membership plans being offered

::admonition{title="Added on March 28, 2024" type="note"}
This endpoint, which we had suspended since February 14, 2024, are now available again. Note that some specifications, such as endpoint URLs, have been changed.
::

This endpoint allows you to get the membership plans that are currently being offered through your LINE Official Account membership. For more information, see [Get membership plans being offered](/reference/messaging-api/#get-membership-plans) in the Messaging API reference.
