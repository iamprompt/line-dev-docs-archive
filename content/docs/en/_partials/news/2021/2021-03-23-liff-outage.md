---
title: '[Resolved/Updated] Notice about partial LIFF API outage'
navigation: true
description: ''
meta: '{"date":"2021-03-23 00:00 UTC","tags":"Outage report, LIFF","locale":"en"}'
path: /en/_partials/news/2021/2021-03-23-liff-outage
__hash__: 2aPpMt4nqImyFh4RsLQQaI_Zy4jrIIfanXVSJ0WrTaU
seo:
  title: '[Resolved/Updated] Notice about partial LIFF API outage'
  description: ''
---

::admonition{title="Updated on March 26, 2021" type="note"}
Initially, the date and time of the outage was given as "March 22, 2021 around 13:55 - 16:30 (UTC+9)", but the problem continued to occur for some `liff.getFriendship()` operations even after the reported recovery time. The time of the outage in this news article has also been changed as a result of our investigation. Consequently, we have corrected the "Date and time of outage". We sincerely apologize for the inconvenience caused.
::

We'd like to inform you about a service outage regarding LIFF. The issue has now been resolved but we sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

March 22, 2021 around 10:15 - March 25, 2021 around 11:36 (UTC+9)

### Cause of the outage

Server failure

### Impact

Using the [`liff.getFriendship()`](/reference/liff/#get-friendship) LIFF method to get the friendship between a user and the LINE Official Account

### Details

During the stated date and time, when using `liff.getFriendship()`, an error occurred in the browser that opened the LIFF app due to a violation of the [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS){rel="[\"nofollow\"]"} policy. The problem has been fixed, and you can now use `liff.getFriendship()` normally.

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
