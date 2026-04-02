---
title: Correction to documentation
navigation: true
description: >-
  There were errors in the news release and documentation for the new LIFF
  server API to update a LIFF app. We apologize for any inconvenience.
meta: '{"date":"2018-11-16 01:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2018/2018-11-16-put-api-about-liff
__hash__: 1PO3XkOtu-cdTgh8zejqi3GiJzTqNDDlitw8gxwwOgk
seo:
  title: Correction to documentation
  description: >-
    There were errors in the news release and documentation for the new LIFF
    server API to update a LIFF app. We apologize for any inconvenience.
---

There were errors in the news release and documentation for the new LIFF server API to update a LIFF app. We apologize for any inconvenience.

## News

【Incorrect】
The HTTP request to the API endpoint to update a LIFF app is changed from `PUT` to `PATCH`. Now you can partially update the properties of your LIFF apps.

【Correct】
The API endpoint for updating a LIFF app is changed. Now you can partially update the properties of your LIFF apps.

## API reference

【Incorrect】
`PATCH https://api.line.me/liff/v1/apps/{liffId}`

【Correct】
`PUT https://api.line.me/liff/v1/apps/{liffId}`

For more information, see [Update LIFF app](/reference/liff-server/#update-liff-app).
