---
title: '[Resolved/Updated] Notice about service outage for the LINE Developers Console'
navigation: true
description: ''
meta: '{"date":"2023-03-01 00:00 UTC","tags":"console, outage-report","locale":"en"}'
path: /en/_partials/news/2023/2023-03-01-line-developers-console-outage
__hash__: spfnG7-CIf52QDf263wskqyvaHTOSHgalQc-8QbZqko
seo:
  title: >-
    [Resolved/Updated] Notice about service outage for the LINE Developers
    Console
  description: ''
---

::admonition{title="Updated on March 29, 2023" type="note"}
We've updated the [Details](#details-20230301).
::

We'd like to inform you about a service outage regarding the LINE Developers Console. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

November 16, 2022 around 11:16 - February 28, 2023 around 19:37 (UTC+9)

### Cause of the outage

Server failure

### Impact

LINE Developers Console

### Details

1. When developers who met all of the following conditions accessed the LINE Developers Console, the corresponding channels weren't displayed and developers couldn't reach the channel settings screen.

  - Originally had Admin or Member role for the provider
  - The provider role was removed between October 19, 2021 and July 13, 2022
  - Had Admin, Member, or Tester roles for the corresponding channels under the provider
2. When developers who met all of the following conditions accessed the LINE Developers Console, the corresponding providers were unintentionally displayed.

  - Did not have a role for the provider, but had Admin, Member, or Tester roles for the corresponding channels under the provider
  - The channels for which the developer had roles were deleted between October 19, 2021 and February 28, 2023, and the channels under the provider for which the developer had roles no longer exist

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
