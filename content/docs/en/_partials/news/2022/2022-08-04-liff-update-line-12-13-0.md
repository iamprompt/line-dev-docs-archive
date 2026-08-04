---
title: >-
  In the LIFF browser on LINE version 12.13.0 or later, we'll change the
  specifications for transitions to the external site and the LIFF-to-LIFF
  transition
navigation: true
description: >-
  In the LIFF browser on LINE version 12.13.0 or later, we'll change the
  specifications as follows:
meta: '{"date":"2022-08-04 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2022/2022-08-04-liff-update-line-12-13-0
__hash__: oHrxvAV6tT261JrCn8YTmW1_GjnNSVIZx-dOAEFTRGU
seo:
  title: >-
    In the LIFF browser on LINE version 12.13.0 or later, we'll change the
    specifications for transitions to the external site and the LIFF-to-LIFF
    transition
  description: >-
    In the LIFF browser on LINE version 12.13.0 or later, we'll change the
    specifications as follows:
---

In the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} on LINE version 12.13.0 or later, we'll change the specifications as follows:

- [Display a popup when moving to an external site](#transition-to-external-site-20220804)
- [Changes to the specifications for the LIFF-to-LIFF transition](#liff-to-liff-transition-20220804)

### Display a popup when moving to an external site

When opening an external site that isn't a non-LIFF app from a LIFF app opened in the LIFF browser, a popup will appear indicating that "This is an external page".

![A popup when moving to an external site](/media/news/2022/liff-opening-external-site-en.jpg){className="[\"border\",\"w-fix-240\"]"}

The popup will only appear when opening the external site in the same window. If the external site is opened in a different window, the popup doesn't appear.

Displaying the popup will be applied gradually to users who are using LINE version 12.13.0 or later.

### Changes to the specifications for the LIFF-to-LIFF transition

The specification for LIFF-to-LIFF transitions in LIFF URL will be changed as follows. The same applies to LIFF URLs with additional path or query parameters.

- [The screen transitions on the LIFF-to-LIFF transition become smoother](#smooth-transition-20220804)
- [The "liff.sendMessages()" method can also be used in the transition destination LIFF app](#chat-message-write-20220804)

For more information about LIFF URL, see [Opening a LIFF app](/docs/liff/opening-liff-app/) in the LIFF documentation. Note that the LIFF-to-LIFF transition using the endpoint URL isn't subject to this specification change.

#### The screen transitions on the LIFF-to-LIFF transition become smoother

Login processing by `liff.login()`, which used to be executed automatically when transitioning between LIFF apps, is no longer performed. The screen transitions are smoother because redirects don't occur during the LIFF-to-LIFF transition.

#### The "liff.sendMessages()" method can also be used in the transition destination LIFF app

On LINE versions earlier than 12.13.0, after transitioning from LIFF A to LIFF B, the `chat_message.write` scope will be disabled in LIFF B, and the channel consent screen won't be displayed either.

On LINE version 12.13.0 or later, the `chat_message.write` scope of LIFF B is enabled. The `liff.sendMessages()` method is also available in LIFF B.

For more information about LIFF-to-LIFF transitions, see [Opening a LIFF app from another LIFF app (LIFF-to-LIFF transition)](/docs/liff/opening-liff-app/#move-liff-to-liff) in the LIFF documentation.
