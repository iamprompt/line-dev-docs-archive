---
title: Managing authorized apps
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login/managing-authorized-apps
__hash__: 2U-e5IZaXNkTh3-PnkqIvossM98FQ24T8btJzPYnZ0A
seo:
  title: Managing authorized apps
  description: null
---

# :page-title

:markdown-controlsUsers must consent to their information, such as :glossary-tooltip[[User ID](/glossary/#user-id)]{glossary-id="user-id"}, being obtained when they use a LINE Login channel. After consenting, users can review the terms of consent or revoke consent at any time.

1. From your LINE app, tap **Settings** > **Account** > **Authorized apps**.   
 The settings screen for "Authorized apps" will be displayed.
2. Tap the app you wish to unauthorize.  
 The authorized app screen will be displayed.  
 ![Authorized app](/media/line-login/managing-authorized-apps/authorized-app-en.png){className="[\"border\",\"w-fix-240\"]"}  
 To review the terms of consent, tap "View permissions".   
 To revoke consent, tap "Unlink".

## When user revokes consent

Access tokens and refresh tokens are deactivated as soon as the user revokes consent, impacting users and providers in these ways:

| Target   | Description                                                                                                                                                                                                                                                                                                 |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User     | - When you try to use LINE Login on an app for which you revoked consent, the consent screen will be displayed again. - LINE Login will be prohibited until consent is obtained.                                                                                                                            |
| Provider | - You won't be able to obtain user ID or profile information even with an access token that you've already acquired. - Access token can't be updated because refresh token isn't available. - You won't be able to obtain user ID or profile information until the user consents again and uses LINE Login. |

::admonition
---
title: Respect the user's decision to revoke consent
type: note
---
Each LINE user has a different user ID per provider. Even if the user consents again after revoking consent, their user ID doesn't change. This means that information associated with a given user ID can continue being used, even after the user revokes consent.

However, respect the user's decision to revoke consent and reacquire the user's information upon verifying the access token.

Take these actions if the access token has become invalid:

- If the access token expires and becomes invalid, use the refresh token to update the access token.
- However, if the user revokes consent, neither the access token nor the refresh token will be available.

You must handle user's information correctly according to the [LINE User Data Policy](https://terms2.line.me/LINE_Developers_user_data_policy?lang=en){rel="[\"nofollow\"]"}. Failure to adhere to the LINE User Data Policy will result in service discontinuation.
::
