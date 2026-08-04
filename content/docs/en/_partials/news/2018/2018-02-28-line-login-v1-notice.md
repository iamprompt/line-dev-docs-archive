---
title: LINE Login v1 to be discontinued
navigation: true
description: >-
  Note: This notice only applies to LINE Login v1 users. These changes do not
  apply if you are using the latest v2.1 or v2 endpoints.
meta: '{"date":"2018-02-28 00:00 UTC","tags":"LINE Login","locale":"en"}'
path: /en/_partials/news/2018/2018-02-28-line-login-v1-notice
__hash__: 48JSRdAWO90ps1RFTH97E8L94bOrS8AczeHtStJfeE4
seo:
  title: LINE Login v1 to be discontinued
  description: >-
    Note: This notice only applies to LINE Login v1 users. These changes do not
    apply if you are using the latest v2.1 or v2 endpoints.
---

**Note:** This notice only applies to LINE Login v1 users. These changes do not apply if you are using the latest [v2.1](/reference/social-api/) or [v2](/reference/social-api-v2/) endpoints.

Starting from March 31, 2018 we will start terminating LINE Login V1 endpoints. See the following schedule on the termination date for each endpoint. After an endpoint is terminated, any access to it will result in a 4XX status code as a response.

##### Endpoints terminating on March 31, 2018

- Issue access token: [https://api.line.me/v1/oauth/accessToken](https://api.line.me/v1/oauth/accessToken){rel="[\"nofollow\"]"}

##### Endpoints terminating on April 30, 2018

- Get user profile: [https://api.line.me/v1/profile](https://api.line.me/v1/profile){rel="[\"nofollow\"]"}
- Logout: [https://api.line.me/v1/oauth/logout](https://api.line.me/v1/oauth/logout){rel="[\"nofollow\"]"}

##### Endpoints terminating on June 30, 2018

- Verify access token: [https://api.line.me/v1/oauth/verify](https://api.line.me/v1/oauth/verify){rel="[\"nofollow\"]"}
- API endpoints for the LINE SDK for iOS and Android version 3.x or earlier

To avoid any issue related to the termination of LINE Login V1, please make sure to update your service to the latest LINE Login version. For details on the latest LINE Login version, see [Social API overview](/docs/social-api/overview/).

Notice that the LINE user identifier is different between LINE Login V1 and LINE Login V2 or higher. If you're using the V1 user identifier on your service, you will need to convert the user identifier to use the latest LINE Login version. For details on how to convert the LINE user identifier, see [Converting an MID to a user ID](/docs/line-login/converting-mid-to-userid/).

If you are a partner, we will contact you individually for more details.
