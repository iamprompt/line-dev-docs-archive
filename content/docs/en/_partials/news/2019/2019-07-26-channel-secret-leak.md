---
title: '[Resolved] Member users were able to retrieve Channel secret because of a bug'
navigation: true
description: >-
  We discovered and fixed a bug in the LINE Developers Console that allowed
  Member users to obtain a channel secret. We sincerely apologize for any
  inconvenience caused.
meta: '{"date":"2019-07-26 2:00 UTC","tags":"Outage report, Console","locale":"en"}'
path: /en/_partials/news/2019/2019-07-26-channel-secret-leak
__hash__: 8qHA5jJ58rbEDeD43e45dJs_uXMcpUS7blcGfyhUl-k
seo:
  title: >-
    [Resolved] Member users were able to retrieve Channel secret because of a
    bug
  description: >-
    We discovered and fixed a bug in the LINE Developers Console that allowed
    Member users to obtain a channel secret. We sincerely apologize for any
    inconvenience caused.
---

We discovered and fixed a bug in the LINE Developers Console that allowed Member users to obtain a channel secret. We sincerely apologize for any inconvenience caused.

On July 24, 2019, we emailed this information to all administrators of channels with Member users.

#### Issue time

Issue inception: September 21, 2017

Issue solved: July 17, 2019

#### Details

There was a bug that allowed Member users to obtain the channel secret, which should have appeared only to Admin users.

The **Channel settings** tab did not display the channel secret when a Member user viewed the page. However, the API that the LINE Developers Console called in the background did return the channel secret. Therefore, a malicious Member user could have obtained and abused the channel secret.

::admonition{title="What is a channel secret?" type="tip"}
The channel secret is a secret key provided by LINE to call our APIs and validate identities. It should be kept secret from unauthorized parties.
::

::admonition{title="Member user permissions" type="tip"}
Originally, Member users can only view basic information and statistics for a channel. They don't have access to the channel secret.
::

### What you should do

If you're concerned that unauthorized Member users have obtained your channel secret, you should issue a new one. Doing so will invalidate the previous channel secret.

After you issue a new channel secret, you'll have to update it in the app which uses the channel secret. Carefully consider the impact of issuing a new channel secret on your app.

#### How to issue a new channel secret

You can issue a new channel secret on the **Channel settings** tab in the [LINE Developers Console](/console/).

::admonition{title="Forced reissue of channel secret" type="tip"}
LINE will not forcibly reissue new channel secrets. The Admin user for each channel should decide whether it's necessary to reissue a new channel secret.
::

### Acknowledgement

This bug was reported through the [LINE Security Bug Bounty Program](https://bugbounty.linecorp.com/en/){rel="[\"nofollow\"]"}.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
