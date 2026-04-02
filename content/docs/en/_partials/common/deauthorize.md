---
title: Deauthorize
navigation: true
description: ''
meta: '{}'
path: /en/_partials/common/deauthorize
__hash__: KnCeuvIA-cGW8l35fYDe14ikxmTrnFWYriFcUBnFEu0
seo:
  description: ''
---

1. The permissions that the user has granted to the authorized app must be deauthorized using the [Deauthorize your app to which the user has granted permissions](/reference/line-login/#deauthorize) endpoint on behalf of the user.
2. Write what happens when a user unregisters from your app or terminates the link between your app and the LINE app as follows near the function or in the terms and conditions that the user agrees to at the time of registration or authorization.

  - e.g. If you unsubscribe from the service, LY Corporation will be notified that you have unsubscribed and the link between the service and LINE app will be terminated.
  - e.g. If you do this, LY Corporation will be notified and the link between the service and LINE app will be terminated.

The following use cases require deauthorization.

![Steps from linking your account to deauthorize app](/media/line-login/development-guidelines/deauthorize-your-app-en.png)

When a user logs in to the app that integrates LINE Login with their LINE account and [authorize the app](/docs/line-login/integrate-line-login/#authorization-process) on the channel consent screen, the target app will appear in **Settings** > **Account** > **Authorized apps** in the LINE app. Deauthorize the app so that the permissions don't remain authorized after the user unregisters from your app.

For more information about how a user can deauthorize the permissions that the user has granted to the app, see [Managing authorized apps](/docs/line-login/managing-authorized-apps/) in the LINE Login documentation.
