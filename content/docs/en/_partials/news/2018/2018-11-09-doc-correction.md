---
title: Correction to documentation
navigation: true
description: >-
  There were errors in the description of the new destination property added to
  webhook events released yesterday. We correct it as below:
meta: '{"date":"2018-11-09 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2018/2018-11-09-doc-correction
__hash__: cdy-2gHmgBc0dFdSBGjBTBK5edBUrVySVJ78yXseuBM
seo:
  title: Correction to documentation
  description: >-
    There were errors in the description of the new destination property added
    to webhook events released yesterday. We correct it as below:
---

There were errors in the description of the new `destination` property added to webhook events released yesterday. We correct it as below:

【Incorrect】The `destination` property includes the **MID** of a bot that should reeive the webhook events. The property value is a string that matches the regular expression, "**u**[0-9a-f]{32}".

【Correct】The `destination` property includes the **user ID** of a bot that should reeive the webhook events. The property value is a string that matches the regular expression, "**U**[0-9a-f]{32}".

For more information, see [Request body](/reference/messaging-api/#request-body).
