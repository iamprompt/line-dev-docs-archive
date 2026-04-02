---
title: Consent on getting user profile information
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/messaging-api/user-consent
__hash__: KxNZ7UbEKVwkFN59loV5-aU148c7ce3fjuYKGqbTpGs
seo:
  title: Consent on getting user profile information
  description: null
---

# :page-title

:markdown-controlsTo access a user's :glossary-tooltip[[profile information](/glossary/#profile-information)]{glossary-id="profile-information"} through :glossary-tooltip[[LINE Official Accounts](/glossary/#line-official-account)]{glossary-id="line-official-account"}, the user must consent to allow access to their profile information.

## Users of LINE for iOS and LINE for Android

On LINE for iOS and LINE for Android, users consent to allow access to their profile information when they begin using LINE. For example, here the term "users" include those who:

- Created a LINE account on LINE for iOS or LINE for Android and still use the account
- Originally created a LINE account on LINE for PC, but use their account on LINE for iOS or LINE for Android

## Users who aren't using LINE for iOS or LINE for Android

Users who never used LINE for iOS or LINE for Android can't consent to allow access to their profile information. For example, these are the users who created their LINE account on LINE for PC and continue to use LINE for PC only. These users still can add your LINE Official Account as a friend or even invite it to a chat.

::admonition{title="Note" type="note"}
From April 2020, you can't create an account on LINE for PC.
::

If a user didn't consent to allow access to their profile information, the user's profile information won't be included in these webhook event objects and endpoint responses. In addition, a webhook [membership event](/reference/messaging-api/#membership-event) won't be sent.

- The [source user](/reference/messaging-api/#source-user) of a [webhook event object](/reference/messaging-api/#webhook-event-objects)
- The `mention` object of a [text message object](/reference/messaging-api/#wh-text)
- The [Get a list of users who added your LINE Official Account as a friend](/reference/messaging-api/#get-follower-ids) endpoint
- The [Get a list of users who have joined the membership](/reference/messaging-api/#get-membership-user-ids) endpoint
- The [Get group chat member user IDs](/reference/messaging-api/#get-group-member-user-ids) endpoint
- The [Get multi-person chat member user IDs](/reference/messaging-api/#get-room-member-user-ids) endpoint

::admonition{title="If you can't get user profile information" type="tip"}
A possible cause for not being able to get a user's profile information can be the user, because they:

- Didn't consent to allow access to their profile information
- Didn't add your LINE Official Account as a friend
- Blocked your LINE Official Account after they added it as a friend
- Removed your LINE Official Account from the group chat or multi-person chat
- Left a group chat or multi-person chat that your LINE Official Account is a member of
::
