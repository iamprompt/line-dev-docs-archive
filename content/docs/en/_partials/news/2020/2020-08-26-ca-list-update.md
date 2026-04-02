---
title: Certificate authority that can be used in the Webhook URL added
navigation: true
description: >-
  The webhook URL must use HTTPS and have an SSL certificate issued by a
  certificate authority trusted by LINE.
meta: >-
  {"date":"2020-08-26 01:00 UTC","tags":"LINE Platform, Maintenance,
  SSL","locale":"en"}
path: /en/_partials/news/2020/2020-08-26-ca-list-update
__hash__: 7PkWbMsABH23KNbn2b-Kn4eOALZ-K455fmeWGT1ZO54
seo:
  title: Certificate authority that can be used in the Webhook URL added
  description: >-
    The webhook URL must use HTTPS and have an SSL certificate issued by a
    certificate authority trusted by LINE.
---

The webhook URL must use HTTPS and have an SSL certificate issued by a certificate authority trusted by LINE.

The following certificate authorities have been added to the list of certificate authorities trusted by LINE.

```text
CN=TWCA Global Root CA, OU=Root CA, O=TAIWAN-CA, C=TW
```

For more information on configuring Webhook URL settings, see [Webhook URL settings](/docs/messaging-api/building-bot/#setting-webhook-url).
