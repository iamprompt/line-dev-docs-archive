---
title: Use the correct endpoint when making requests to LIFF's server API
navigation: true
description: >-
  LINE provides a server API of the LINE Front-end Framework (LIFF) for
  developers. Using the server API, management such as adding LIFF apps to a
  channel can be done via the API.
meta: '{"date":"2022-03-09 01:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2022/2022-03-09-liff-server-api
__hash__: fQyMe25eqq6i_Y6OhUygJZ6A4c9J9cGA1XLhD7gn3Js
seo:
  title: Use the correct endpoint when making requests to LIFF's server API
  description: >-
    LINE provides a server API of the LINE Front-end Framework (LIFF) for
    developers. Using the server API, management such as adding LIFF apps to a
    channel can be done via the API.
---

LINE provides a [server API](/reference/liff-server/) of the LINE Front-end Framework (LIFF) for developers. Using the server API, management such as adding LIFF apps to a channel can be done via the API.

In using this server API, we've seen cases where the string `v1` in the endpoint is replaced with another string to make the request. Use the correct endpoint when making requests to the server API.

| Item                            | Endpoint(s)                                                                                                                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Example of the correct endpoint | [https://api.line.me/liff/**v1**/apps](https://api.line.me/liff/**v1**/apps){rel="[\"nofollow\"]"}                                                                                                                  |
| Examples of wrong endpoints     | - [https://api.line.me/liff/**v2**/apps](https://api.line.me/liff/**v2**/apps){rel="[\"nofollow\"]"} - [https://api.line.me/liff/**example**/apps](https://api.line.me/liff/**example**/apps){rel="[\"nofollow\"]"} |

::admonition{title="Version number differs from LIFF SDK" type="tip"}
The version number of the server API is different from that of LIFF SDK. The currently released version of LIFF SDK is `v2`, but the version of the server API is `v1`.
::

For more information on the server API, see [server API reference](/reference/liff-server/).
