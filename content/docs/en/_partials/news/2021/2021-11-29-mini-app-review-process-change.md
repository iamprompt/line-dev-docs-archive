---
title: The review process for LINE MINI App has changed
navigation: true
description: ''
meta: '{"date":"2021-11-29 00:00 UTC","tags":"LINE MINI App","locale":"en"}'
path: /en/_partials/news/2021/2021-11-29-mini-app-review-process-change
__hash__: 5u_lAi8GFqvN3v-HpvcwDNwCFN8ZTyGNsH07pyfTIFs
seo:
  title: The review process for LINE MINI App has changed
  description: ''
---

::admonition{title="Updated on December 16, 2021" type="note"}
Due to some errors in the explanation of the review process, we've updated [Workflow for LINE MINI Apps being published for the first time](#being-published-for-the-first-time) and [Workflow for previously published LINE MINI Apps](#previously-published).
::

The review process for the LINE MINI App has changed starting November 29, 2021.

Going forward, once your LINE MINI App has been approved, the status of your channel will automatically change to "Approved" and immediately to "Published". Using the **Search enable** button button from the **Workflow** tab on the LINE Developers Console, you can publish your LINE MINI App within LINE and commence your service.

### Details of change

Prior to the change, you had to submit a separate request for publication, which had to be approved by LINE before the status of your LINE MINI App Channel changed from "Approved" to "Published". Going forward, there will be no separate process for requesting to publish your LINE MINI App.

#### Workflow for LINE MINI Apps being published for the first time

Once your status automatically becomes "Published", users can technically access your LINE MINI App, as your LIFF URL and the "Pin to home tab" feature will be enabled. However, because search hasn't been enabled within LINE, users won't be able to search for your service yet.

When you want to make your service searchable, click the **Search enable** button from the **Workflow** tab on the [LINE Developers Console](/console/) and users will be able to immediately search for your LINE MINI App in LINE. However, if **Search enable** isn't activated within 30 days (including weekends and holidays) after the status becomes "Published", it will automatically be enabled at 9:00 AM JST on the 31st day.

For example, if your LINE MINI App status became "Published" on August 1, the "Search enable" feature will be automatically activated on 9:00 AM of August 31.

#### Workflow for previously published LINE MINI Apps

The workflow is slightly different if your LINE MINI App has already been published before.

Once changes to your LINE MINI App have been approved, the status of your channel will change to "Approved". In order to change the status to "Published", you will have to manually change the status of your channel using the **Publish changes** button from the **Workflow** tab on the [LINE Developers Console](/console/).

Once your status becomes "Published", changes made at the time of the review request are updated in the Published channel and LIFF of the Published channel (e.g. LINE MINI App name, Channel settings, LIFF Settings, etc.).

When you want to publish your LINE MINI App, click the **Publish changes** button and the status will immediately change to "Published". However, if **Publish changes** isn't activated within 30 days (including weekends and holidays) after status becomes "Approved", the changes will automatically be reflected on 9:00 AM JST on the 31st day.

For example, if your LINE MINI App status became "Approved" on August 1, the new changes will be automatically activated on 9:00 AM of August 31.

::admonition
---
title: There may be a slight delay in status change
type: note
---
Although the status is supposed to be automatically changed at 9:00 AM JST on the 31st day, there may be a 1-2 hour delay.
This is applicable for both LINE MINI Apps being published for the first time and previously published LINE MINI Apps.
::

For more information, see [Review process](/docs/line-mini-app/submit/submission-guide/#review-request-checklist) in the LINE MINI App documentation.
