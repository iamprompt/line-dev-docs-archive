---
title: Developer accounts can now be deleted on the LINE Developers Console
navigation: true
description: You can now delete your developer account on the LINE Developers Console.
meta: '{"date":"2026-06-24 00:00 UTC","tags":"console","locale":"en"}'
path: /en/_partials/news/2026/2026-06-24-delete-developer-account
__hash__: u4A_AQpdhRqTnGphLXM55K9IS7ny8uc2KdF6nOXN1BU
seo:
  title: Developer accounts can now be deleted on the LINE Developers Console
  description: You can now delete your developer account on the LINE Developers Console.
---

You can now delete your [developer account](/docs/line-developers-console/login-account/#register-as-developer) on the [LINE Developers Console](/console/).

When you delete your developer account, you can no longer log in to the LINE Developers Console with that developer account. Note that the [Business ID](https://help2.line.me/business_id/web/pc?lang=en&contentId=20011264){rel="[\"nofollow\"]"} and LINE account associated with the developer account won't be deleted.

::admonition
---
title: Deleted developer accounts can't be restored
type: warning
---
Once you delete your developer account, it can't be restored. If no other developer account can access the providers or channels for which the deleted developer account had roles, no one will be able to view information or change settings for those providers or channels.

Before deleting your developer account, make sure to grant the necessary roles to other developer accounts to avoid disrupting active services.
::

### How to delete your developer account

You can delete your developer account from the **Delete your developer account** section on the [profile screen](/console/profile) of the LINE Developers Console.

To delete a developer account, at least one other developer account must have the Admin role for each provider or channel for which the account has the Admin role.

For more information, see [Delete your developer account](/docs/line-developers-console/delete-developer-account/) in the LINE Developers Console documentation.
