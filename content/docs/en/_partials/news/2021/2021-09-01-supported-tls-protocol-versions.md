---
title: >-
  TLS 1.0 and TLS 1.1 support for LINE API has been discontinued at the end of
  August 2021
navigation: true
description: >-
  As announced on May 13, 2021 and August 24, 2021, TLS 1.0 and TLS 1.1 support
  for LINE API has been discontinued at the end of August 2021.
meta: >-
  {"date":"2021-09-01 00:00 UTC","tags":"LINE Platform, SSL,
  end-of-life","locale":"en"}
path: /en/_partials/news/2021/2021-09-01-supported-tls-protocol-versions
__hash__: auBs9z9l8t1PiPCPq94NSkIbQIlNWlxMcJ9s_zHgqQo
seo:
  title: >-
    TLS 1.0 and TLS 1.1 support for LINE API has been discontinued at the end of
    August 2021
  description: >-
    As announced on May 13, 2021 and August 24, 2021, TLS 1.0 and TLS 1.1
    support for LINE API has been discontinued at the end of August 2021.
---

As announced on [May 13, 2021](/news/2021/05/13/supported-tls-protocol-versions/) and [August 24, 2021](/news/2021/08/24/supported-tls-protocol-versions/), TLS 1.0 and TLS 1.1 support for :glossary-tooltip[[LINE API](/glossary/#line-api)]{glossary-id="line-api"} has been discontinued at the end of August 2021.

### Domain names of the target LINE API

- api.line.me
- api-data.line.me

This applies to all LINE APIs using the domain names above, not just specific services.

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

### End-of-support date

August 31, 2021

### Impact

API requests that use TLS 1.0 or TLS 1.1 will sequentially result in error and no longer will be able to use the LINE API. If your environment is TLS 1.1 or lower, please upgrade your OS, OpenSSL, etc. so that your app or server can continue to communicate using TLS 1.2 or higher.

LINE will continue to improve the quality of its services to its customers. Thank you for your understanding.
