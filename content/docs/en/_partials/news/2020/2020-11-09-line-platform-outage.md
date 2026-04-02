---
title: '[Resolved] Notice about service outage for LINE Platform'
navigation: true
description: >-
  We'd like to inform you about a service outage regarding the LINE Platform.
  The issue has now been resolved. We sincerely apologize for any inconvenience
  that this may have caused.
meta: >-
  {"date":"2020-11-09 00:00 UTC","tags":"Outage report, LINE
  Platform","locale":"en"}
path: /en/_partials/news/2020/2020-11-09-line-platform-outage
__hash__: mweOLDSrTZh2bHo_uoWdbtp_DhItsHzhEsjuWfUG7ow
seo:
  title: '[Resolved] Notice about service outage for LINE Platform'
  description: >-
    We'd like to inform you about a service outage regarding the LINE Platform.
    The issue has now been resolved. We sincerely apologize for any
    inconvenience that this may have caused.
---

We'd like to inform you about a service outage regarding the LINE Platform. The issue has now been resolved. We sincerely apologize for any inconvenience that this may have caused.

### Date and time of outage

November 09, 2020 14:32 - 14:52 (UTC+9)

Regarding events that occurred due to network failures during the above hours, recovery measures were completed in stages by around 22:07 on the same day.

See **Details** for more information.

### Cause of the outage

Network failure.

### Impact

- Messaging API
- Social API
- LINE Login
- LIFF
- Other general functions provided by the LINE Platform

### Details

| Date and time of occurrence            | Event                                                                                                                                                                                                                                                 |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| November 9, 2020 14:32 - 14:52 (UTC+9) | API requests couldn't be processed and functions weren't working properly (e.g., error pages were displayed)                                                                                                                                          |
| November 9, 2020 14:32 - 16:30 (UTC+9) | Some webhook events were delayed or couldn't be sent                                                                                                                                                                                                  |
| November 9, 2020 14:32 - 16:51 (UTC+9) | For some Messaging API requests, the message wasn't delivered even though the request was successful                                                                                                                                                  |
| November 9, 2020 14:32 - 22:07 (UTC+9) | Messaging API channels or Blockchain Service channels couldn't be created in the LINE Developers Console. Details can be found in the [LINE Developers Console emergency maintenance](/news/2020/11/09/urgent-maintenance-for-console/) announcement. |

LINE will continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
