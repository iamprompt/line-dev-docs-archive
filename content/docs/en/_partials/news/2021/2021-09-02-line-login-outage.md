---
title: '[Resolved] Notice about outage for LINE Login and LIFF'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding LINE Login and LIFF.
  The issue has now been resolved, but we sincerely apologize for any
  inconvenience that this may have caused.
meta: >-
  {"date":"2021-09-02 00:00 UTC","tags":"Outage report, line-login,
  LIFF","locale":"en"}
path: /en/_partials/news/2021/2021-09-02-line-login-outage
__hash__: HaXKzU3-uK8Hg9OuZ2glAZT2Ii1J5dFT4MYG0a8qEj4
seo:
  title: '[Resolved] Notice about outage for LINE Login and LIFF'
  description: >-
    We'd like to inform you about a service outage regarding LINE Login and
    LIFF. The issue has now been resolved, but we sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding LINE Login and LIFF. The issue has now been resolved, but we sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

- September 1, 2021 around 20:05 - around 20:18 (UTC+9)
- September 1, 2021 around 20:42 - around 20:45 (UTC+9)
- September 1, 2021 around 21:19 - around 21:20 (UTC+9)

### Cause of the outage

Server failure

### Impact

#### LINE Login

- [Add a LINE Official Account as a friend when logged in (bot link)](/docs/line-login/link-a-bot/)
- [Get friendship status](/reference/line-login/#get-friendship-status)

#### LIFF

- [liff.getFriendship()](/reference/liff/#get-friendship)

### Details

In some LINE Official Accounts, adding as a friend and unblocking them with using the [bot link](/docs/line-login/link-a-bot/) feature didn't work properly.

Also, some requests to get the friendship status with the LINE Official Account weren't being processed properly and cause errors with status code 5xx.

  
LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
