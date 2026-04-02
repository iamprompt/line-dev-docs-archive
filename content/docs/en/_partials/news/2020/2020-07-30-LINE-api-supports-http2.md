---
title: LINE's APIs will support HTTP/2
navigation: true
description: LINE's APIs will support HTTP/2.
meta: >-
  {"date":"2020-07-30 00:00 UTC","tags":"LINE Platform, Maintenance,
  SSL","locale":"en"}
path: /en/_partials/news/2020/2020-07-30-line-api-supports-http2
__hash__: 5MrYaBNLhXM6wZlPE6qpj0eEhCSnDZYkQVDTik8bklM
seo:
  title: LINE's APIs will support HTTP/2
  description: LINE's APIs will support HTTP/2.
---

LINE's APIs will support HTTP/2.

### Domain names subject to the update

- api.line.me
- api-data.line.me
- access.line.me

### Supported HTTP versions

See this table for the differences before and after the update:

| HTTP version | Before update | After update |
| ------------ | ------------- | ------------ |
| HTTP/2       | ❌             | ✅            |
| HTTP/1.1     | ✅             | ✅            |
| HTTP/1.0     | ✅             | ✅            |

### Scheduled date of change

August 4, 2020 12:00 - 16:00 (UTC+9)

### Impact

If you are using any of the above APIs, please confirm that your app can communicate using the updated supported HTTP versions.

Due to this update, when using the above APIs from clients that support HTTP/2 or TLS 1.3, the handshake overhead is reduced and the connection efficiency is improved.

To use the latest protocols such as HTTP/2 and TLS 1.3, we recommend upgrading your development environment such as JDK and other development languages and LINE SDK to the latest versions.

- [LINE SDK for iOS Swift](/docs/ios-sdk/#line-sdk-v5-for-ios-swift)
- [LINE SDK for iOS Objective-C](/docs/ios-sdk/#line-sdk-v5-0-for-ios-objective-c)
- [LINE SDK for Android](/docs/android-sdk/)
- [LINE SDK for Unity](/docs/unity-sdk/)
- [LINE SDK for Flutter](/docs/flutter-sdk/)

### Other changes

For access the APIs from outside Japan, these 2 changes are made in addition to the above.

- TLS 1.3 will be available.  
For more information on TLS 1.3, see [LINE's APIs now support TLS 1.3](/news/2020/07/01/enabled-tls1.3/).
- The SSL root certificate authority will be changed to GlobalSign.  
For more information on the SSL root certificate authority, see [LINE API's SSL root certificate authority has been changed](/news/2020/07/21/change-ssl-root-certificate/).

We will continue to improve the quality of the services we provide to our developers and we greatly appreciate your understanding.
