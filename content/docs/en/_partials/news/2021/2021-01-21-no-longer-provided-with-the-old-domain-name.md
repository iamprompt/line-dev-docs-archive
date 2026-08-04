---
title: Some endpoints have stopped accepting requests with the old domain name
navigation: true
description: >-
  As we have announced on November 8, 2019, March 19, 2020, August 12, 2020, and
  October 9, 2020, the domain name for some endpoints in the Messaging API
  changed from "api.line.me" to "api-data.line.me".
meta: '{"date":"2021-01-21 01:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-01-21-no-longer-provided-with-the-old-domain-name
__hash__: QsIfIff7uAHo5b4dQ453UdIuaqJpOGlzWSzZN1DfXkE
seo:
  title: Some endpoints have stopped accepting requests with the old domain name
  description: >-
    As we have announced on November 8, 2019, March 19, 2020, August 12, 2020,
    and October 9, 2020, the domain name for some endpoints in the Messaging API
    changed from "api.line.me" to "api-data.line.me".
---

As we have announced on [November 8, 2019](/news/2019/11/08/domain-name-change/), [March 19, 2020](/news/2020/03/19/remind-domain-name-change/), [August 12, 2020](/news/2020/08/12/extention-of-domain-name-change-transition-period/), and [October 9, 2020](/news/2020/10/09/reminder-for-domain-name-change-transition-period/), the domain name for some endpoints in the Messaging API changed from "api.line.me" to "api**-data**.line.me".

This announcement is to inform you that we're no longer accepting requests under the old domain name as of today because the migration deadline expired.

### Target endpoints

- [Get content](/reference/messaging-api/#get-content)
- [Upload rich menu image](/reference/messaging-api/#upload-rich-menu-image)
- [Download rich menu image](/reference/messaging-api/#download-rich-menu-image)

### Impact

If you access these endpoints under the old domain name, the status code `404` will be returned. If the above endpoints were used under an old domain name, change the domain name to `api-data.line.me` as soon as possible.

We apologize for any inconvenience and appreciate your understanding.
