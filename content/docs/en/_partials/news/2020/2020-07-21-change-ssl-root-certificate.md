---
title: LINE API's SSL root certificate authority has been changed
navigation: true
description: ''
meta: >-
  {"date":"2020-07-21 00:00 UTC","tags":"LINE Platform, Maintenance,
  SSL","locale":"en"}
path: /en/_partials/news/2020/2020-07-21-change-ssl-root-certificate
__hash__: Btef7zqvu3Co8QuZ7QqvBOdu1ebpDK5llM-R6gfGfwk
seo:
  title: LINE API's SSL root certificate authority has been changed
  description: ''
---

::admonition{title="Added on July 30, 2020" type="note"}
For access to the APIs from outside of Japan, the root certification authority will be changed after August 4, 2020.
For more information, see the news on July 30, 2020, [LINE's APIs will support HTTP/2](/news/2020/07/30/LINE-api-supports-http2/).
::

We've changed the SSL certificate used in LINE's API servers.
As a result, we've changed the root certificate authority from DigiCert to GlobalSign.

### Domain names subject to this change

- api.line.me
- api-data.line.me
- access.line.me

### Date and time of change

- For access from Japan: July 10, 2020 17:17 - 17:54 (UTC+9)
- For access from outside Japan: August 4, 2020 12:00 - 16:00 (UTC+9)

### Impact

Due to this update, if an SSL communication problem occurs on the client side using the LINE API, it is possible that the corresponding root certificate (GlobalSign Root R3) does not exist.

If you observe this problem, please update the root certificate to the latest version on the client side using the API.

- [GlobalSign Root Certificates :: GlobalSign Support](https://support.globalsign.com/ca-certificates/root-certificates/globalsign-root-certificates){rel="[\"nofollow\"]"}

We will continue to improve the quality of the services we provide to our developers and we greatly appreciate your understanding.
