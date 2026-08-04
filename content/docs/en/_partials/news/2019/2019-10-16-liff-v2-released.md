---
title: LIFF v2 released
navigation: true
description: >-
  LINE Front-end Framework (LIFF) v2 is a platform for web apps provided by
  LINE.
meta: '{"date":"2019-10-16 07:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2019/2019-10-16-liff-v2-released
__hash__: A3ZQa8Qo9YxaehDNrpT21-jvA8515NpgnPRtPhWfZjQ
seo:
  title: LIFF v2 released
  description: >-
    LINE Front-end Framework (LIFF) v2 is a platform for web apps provided by
    LINE.
---

LINE Front-end Framework (LIFF) v2 is a platform for web apps provided by LINE.

::admonition{title="Use the latest version of LIFF" type="note"}
LIFF v1 will be deprecated.
::

### LIFF apps now run in external browsers

With LIFF v1, LIFF apps ran only in a LIFF browser. With LIFF v2, LIFF apps can also run in external browsers. This means you can develop LIFF apps using the same development environment as general web applications.

### Get user profile and email

Because compatibility with LINE Login v2.1 has improved, you can retrieve a user's ID and email address from the LINE Platform. Your LIFF app can use this data to provide features related to user information and sending emails.

Furthermore, you can use LINE Login (web login flow) even when your LIFF app is running in an external browser. This means you can use the same information even when the LIFF app is running in an external browser.

### Read QR codes

You can start LINE's QR code reader and get the strings read by the user.

### Get LIFF app environment information

You can get the following details about the environment in which your LIFF app is running:

- Operating system in which the LIFF app is running (iOS, Android, external browser)
- Whether the LIFF app is running in a LIFF browser (true, false)
- Language settings

For more information, see [LINE Front-end Framework](/docs/liff/overview/).
