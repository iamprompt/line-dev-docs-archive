---
title: LINE Login v1 to be discontinued
navigation: true
description: >-
  Note: This notice only applies to LINE Login v1 users. These changes do not
  apply if you are using the latest v2.1 or v2 endpoints.
meta: '{"date":"2017-12-05 00:00 UTC","tags":"LINE Login","local":"en"}'
path: /en/_partials/news/2017/2017-12-05-line-login-v1-notice
__hash__: XJZNvhnd7TFg5qyY4hTasJn_o65xOWl3rfio5eKWcQI
seo:
  title: LINE Login v1 to be discontinued
  description: >-
    Note: This notice only applies to LINE Login v1 users. These changes do not
    apply if you are using the latest v2.1 or v2 endpoints.
---

**Note:** This notice only applies to LINE Login v1 users. These changes do not apply if you are using the latest [v2.1](/reference/social-api/) or [v2](/reference/social-api-v2/) endpoints.

We will be discontinuing the LINE Login v1 endpoints listed below on March 31, 2018. Once these endpoints are discontinued, a 4xx status code and error message will be returned.

- Access token endpoint: [https://api.line.me/v1/oauth/accessToken](https://api.line.me/v1/oauth/accessToken){rel="[\"nofollow\"]"}
- Verify endpoint: [https://api.line.me/v1/oauth/verify](https://api.line.me/v1/oauth/verify){rel="[\"nofollow\"]"}
- Profile endpoint:  [https://api.line.me/v1/profile](https://api.line.me/v1/profile){rel="[\"nofollow\"]"}
- Logout endpoint: [https://api.line.me/v1/oauth/logout](https://api.line.me/v1/oauth/logout){rel="[\"nofollow\"]"}

Also note that versions 3.x.x and below of the [LINE SDK for iOS and Android](/docs/downloads/) will no longer work after LINE Login v1 is discontinued.

If you are currently using LINE Login v1, we highly recommend updating your app to the latest version of LINE Login as soon as possible to avoid any issues when LINE Login v1 is discontinued. For information on the latest version of LINE Login, see the following pages.

- [Integrating LINE Login with your iOS app](/docs/ios-sdk/objective-c/integrate-line-login/)
- [Integrating LINE Login with your Android app](/docs/android-sdk/integrate-line-login/)
- [Integrating LINE Login with your web app](/docs/line-login/integrate-line-login/)
- [Social API reference](/reference/social-api/)
