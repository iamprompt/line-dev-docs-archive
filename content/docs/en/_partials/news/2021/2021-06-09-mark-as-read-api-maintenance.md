---
title: Mark-as-Read API maintenance notice
navigation: true
description: >-
  Maintenance will be performed on the Mark-as-Read API, which marks messages
  from users as "Read". We sincerely apologize for any inconvenience that this
  may cause and thank you for your understanding.
meta: >-
  {"date":"2021-06-09 00:00 UTC","tags":"Maintenance, Options for corporate
  customers, Messaging API","locale":"en"}
path: /en/_partials/news/2021/2021-06-09-mark-as-read-api-maintenance
__hash__: 0Po14jz60vAXy9mIR-j3JVd0-8Mu1uhP_I4x8ImSpjU
seo:
  title: Mark-as-Read API maintenance notice
  description: >-
    Maintenance will be performed on the Mark-as-Read API, which marks messages
    from users as "Read". We sincerely apologize for any inconvenience that this
    may cause and thank you for your understanding.
---

Maintenance will be performed on the [Mark-as-Read API](/docs/partner-docs/mark-as-read/), which marks messages from users as "Read". We sincerely apologize for any inconvenience that this may cause and thank you for your understanding.

::admonition
---
title: Using the Mark-as-Read API requires an application
type: note
---
Only corporate users who have submitted the required applications can use the Mark-as-Read API.

For more informations, see [Overview](/docs/partner-docs/overview/) in the Options for corporate customers documentation.
::

### Date and time of maintenance

June 24, 2021 0:00 - 7:00 (UTC+9)

Note that the end time of maintenance may change without notice.

### Impact

During the stated period, LINE Official Accounts using the Mark-as-Read API won't be able to mark messages from users as read.

Requests for the [Mark-as-Read API](/reference/partner-docs/#mark-as-read) will return an error with status code 503. Requests with errors will be marked as read by retrying after maintenance is complete.
