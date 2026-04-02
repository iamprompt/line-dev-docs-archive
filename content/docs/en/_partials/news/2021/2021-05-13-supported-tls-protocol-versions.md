---
title: >-
  TLS 1.0 and TLS 1.1 support for LINE API will be discontinued at the end of
  August 2021
navigation: true
description: >-
  TLS 1.0 and TLS 1.1 support for LINE API will be discontinued at the end of
  August 2021.
meta: >-
  {"date":"2021-05-13 00:00 UTC","tags":"LINE Platform, SSL,
  end-of-life","locale":"en"}
path: /en/_partials/news/2021/2021-05-13-supported-tls-protocol-versions
__hash__: rT94zzX8Hu7QgfIaDeH0A5QWdOgsobISQzIbpjd3ud0
seo:
  title: >-
    TLS 1.0 and TLS 1.1 support for LINE API will be discontinued at the end of
    August 2021
  description: >-
    TLS 1.0 and TLS 1.1 support for LINE API will be discontinued at the end of
    August 2021.
---

TLS 1.0 and TLS 1.1 support for :glossary-tooltip[[LINE API](/glossary/#line-api)]{glossary-id="line-api"} will be discontinued at the end of August 2021.

### Domain names of the target LINE API

- api.line.me
- api-data.line.me

All APIs using the domain names above are targeted without exception.

### Supported SSL/TLS protocol versions

We no longer support TLS 1.0 and TLS 1.1.

| Protocol version | By the end of August 2021 | After September 2021 |
| ---------------- | ------------------------- | -------------------- |
| TLS 1.3          | ✅                         | ✅                    |
| TLS 1.2          | ✅                         | ✅                    |
| TLS 1.1          | ✅                         | ❌                    |
| TLS 1.0          | ✅                         | ❌                    |
| SSL 3.0          | ❌                         | ❌                    |
| SSL 2.0          | ❌                         | ❌                    |

### Estimated end-of-support date

August 31, 2021

The date and time are subject to change without notice.

### Impact

If the source of requests to the LINE API does not support TLS 1.2 or higher, you will no longer be able to use the LINE API. If your environment is TLS 1.1 or lower, please upgrade your OS, OpenSSL, etc. so that your app or server can continue to communicate using TLS 1.2 or higher.

LINE will continue to improve the quality of its services to its customers. Thank you for your understanding.
