---
title: LINE's APIs now support TLS 1.3
navigation: true
description: ''
meta: >-
  {"date":"2020-07-01 03:00 UTC","tags":"Messaging API, LINE Login, LIFF,
  SSL","locale":"en"}
path: /en/_partials/news/2020/2020-07-01-enabled-tls1.3
__hash__: Liy86JFSmG049wt8AzFk1g2Uj2LahirSQ-vXRBMXZgc
seo:
  title: LINE's APIs now support TLS 1.3
  description: ''
---

::admonition{title="Added on July 30, 2020" type="note"}
For access to the APIs from outside Japan, TLS 1.3 will be available after August 4, 2020.
For more information, see the news on July 30, 2020, [LINE's APIs will support HTTP/2](/news/2020/07/30/LINE-api-supports-http2/).
::

LINE's APIs now support TLS 1.3.

### Domain names subject to the update

- api.line.me
- api-data.line.me
- access.line.me

### SSL/TLS supported protocol versions

See this table for the differences before and after the update:

| Protocol version | Before update | After update |
| ---------------- | ------------- | ------------ |
| TLS 1.3          | ❌             | ✅            |
| TLS 1.2          | ✅             | ✅            |
| TLS 1.1          | ✅             | ✅            |
| TLS 1.0          | ✅             | ✅            |
| SSL 3.0          | ❌             | ❌            |
| SSL 2.0          | ❌             | ❌            |

### Impact

If you are using any of the above APIs, please confirm that your app can communicate using the updated supported protocol versions.

### Transition period

- For access from Japan: TLS 1.3 is available after July 1, 2020.
- For access from outside Japan: TLS 1.3 is available after August 4, 2020.

Support for TLS 1.0 and TLS 1.1 will be discontinued in the future.
The discontinuation schedule is undecided. We will make an announcement as soon as it is decided.

We will continue to improve the quality of the services we provide to our developers and we greatly appreciate your understanding.
