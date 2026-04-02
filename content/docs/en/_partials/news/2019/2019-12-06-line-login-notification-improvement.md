---
title: New LINE Login notification message
navigation: true
description: >-
  When a user logs in to a site that uses LINE Login v2.1, the content of the
  notification from the Official LINE account will be different.
meta: '{"date":"2019-12-06 00:00 UTC","tags":"LINE Login","locale":"en"}'
path: /en/_partials/news/2019/2019-12-06-line-login-notification-improvement
__hash__: mMgGPytUJP2yz_pgeegu-S4QJfwaScBcwjBf_2CCVcg
seo:
  title: New LINE Login notification message
  description: >-
    When a user logs in to a site that uses LINE Login v2.1, the content of the
    notification from the Official LINE account will be different.
---

When a user logs in to a site that uses LINE Login v2.1, the content of the notification from the Official LINE account will be different.

Before, the notification differed depending on the login method that was used. Starting December 9th, 2019, the notification content will be consistent regardless of how the user logs in.

![LINE Login notification message](/media/news/line-login-notification.png){className="[\"border\"]"}

| dummy            | dummy                                                                                                                                                                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Successful login | We've detected a login to X on Y (Z).   IP address: {ip_address}   Location: {Location}   If this wasn't you, you can log out here: {device_link}    We also recommend changing your password via the following link: {help_link}                                                               |
| Failed login     | We've detected an unsuccessful login attempt to X on Y (Z).   IP address: {ip_address}   Location: {Location}   If this wasn't you, you can check which devices are logged into your account here: {device_link}   We also recommend changing your password via the following link: {help_link} |

Note that (Z) represents a URL and may sometimes be omitted.

### Target users

For all LINE users that log in to a site using LINE Login v2.1.
