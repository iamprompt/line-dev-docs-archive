---
title: >-
  In the Messaging API, you can resume using the endpoints for retrieving
  membership information
navigation: true
description: >-
  The endpoints for retrieving membership information, which we had suspended
  since February 14, 2024, are now available again.
meta: '{"date":"2024-03-28 00:00 UTC","tags":"messaging-api","locale":"en"}'
path: /en/_partials/news/2024/2024-03-28-re-release-endpoints-for-membership
__hash__: tvh1JgHFA1hlKnCkrB6aSOqUAo7sTxuxcNz14QmfG8c
seo:
  title: >-
    In the Messaging API, you can resume using the endpoints for retrieving
    membership information
  description: >-
    The endpoints for retrieving membership information, which we had suspended
    since February 14, 2024, are now available again.
---

The endpoints for retrieving membership information, which we had suspended since [February 14, 2024](/news/2024/02/09/get-membership-plan-information/), are now available again.

Some specifications, such as endpoint URLs, have been changed. So please be careful if you've started using it before February 14.

- [Get a user's membership subscription status](#membership-20240328-01)
- [Get membership plans being offered](#membership-20240328-02)

::admonition{title="How to start a membership" type="tip"}
You can set up and publish your membership on the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}. For more information, see [You can easily create subscription services on LINE! What is the "Membership" feature of the LINE Official Account?](https://www.lycbiz.com/jp/column/line-official-account/service-information/membership/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.

Currently, the membership feature is only available for LINE Official Accounts in Japan.
::

### Get a user's membership subscription status

This endpoint allows you to get information about the memberships to which the user specified by the user ID is subscribed. For more information, see [Get a user's membership subscription status](/reference/messaging-api/#get-a-users-membership-subscription-status) in the Messaging API reference.

### Get membership plans being offered

This endpoint allows you to get the membership plans that are currently being offered through your LINE Official Account membership. For more information, see [Get membership plans being offered](/reference/messaging-api/#get-membership-plans) in the Messaging API reference.
