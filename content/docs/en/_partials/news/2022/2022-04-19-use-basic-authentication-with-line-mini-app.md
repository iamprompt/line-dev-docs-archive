---
title: Basic authentication is now available for LINE MINI App
navigation: true
description: >-
  Basic authentication is now available for LINE MINI Apps with the status
  "Developing" or "Reviewing". You can restrict access to pre-publishing LINE
  MINI Apps by using basic authentication.
meta: '{"date":"2022-04-19 00:00 UTC","tags":"line-mini-app","locale":"en"}'
path: /en/_partials/news/2022/2022-04-19-use-basic-authentication-with-line-mini-app
__hash__: 1nS3o4FJCFlmR7_haFZixuWPK9yVHLLjkKGC9AaotPw
seo:
  title: Basic authentication is now available for LINE MINI App
  description: >-
    Basic authentication is now available for LINE MINI Apps with the status
    "Developing" or "Reviewing". You can restrict access to pre-publishing LINE
    MINI Apps by using basic authentication.
---

Basic authentication is now available for LINE MINI Apps with the status "Developing" or "Reviewing". You can restrict access to pre-publishing LINE MINI Apps by using basic authentication.

### How to use basic authentication

In the **LIFF** tab on the [LINE Developers Console](/console/), specify the URL with basic authentication in the **Endpoint URL** for **Developing** or **Review**. Then open the LINE MINI App in the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} and a dialog box will appear prompting you to enter your username and password.

![Basic authentication screen](/media/line-mini-app/basic-auth.webp){className="[\"border\",\"w-fix-240\"]"}

### Conditions for basic authentication

Basic authentication is available when all of the following conditions are met:

- The status of your LINE MINI App is "Developing" or "Reviewing".
- LINE version is `12.2.0` or later.
- LINE MINI App is open in ::glossary-tooltip{glossary-id="liff-browser"}
[LIFF Browser](/glossary/#liff-browser)
::

.

Basic authentication isn't available for LIFF Apps and LINE MINI Apps whose status is "Published". Also, you can't use digest authentication.

::admonition
---
title: When basic authentication isn't available even though the conditions are met
type: tip
---
Basic authentication isn't available in a LINE MINI App after a LIFF-to-LIFF transition. For more information, see [Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)](/docs/liff/opening-liff-app/#move-liff-to-liff) in the LIFF documentation.
::

For more information about basic authentication specifications on LIFF browser, see [LIFF browser specifications](/docs/liff/overview/#liff-browser-spec) in the LIFF documentation.

### Notes on using basic authentication

Basic authentication is an authentication method used for simple access restrictions, and developers of LINE MINI Apps should evaluate and judge for themselves whether basic authentication meets their security requirements before using it.

The addition of this functionality doesn't recommend the use of basic authentication, nor does it guarantee the security of access restrictions based on basic authentication.

For more information, see [Use basic authentication to restrict access to your LINE MINI App before it is released](/docs/line-mini-app/develop/develop-overview/#use-basic-authentication) in the LINE MINI App documentation.
