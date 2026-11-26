---
title: LIFF app not working as expected? Check which browser you're using
navigation: true
description: >-
  Hi! I’m Okajima, a technical writer in charge of documentation for the LINE
  Developers site.
meta: '{"date":"2026-11-26 00:00 UTC","tags":"liff","locale":"en","sidebar":false}'
path: /en/tips/2026/11/26/identify-liff-browser
__hash__: tE7pi1R0km9F5Gue43LzjV1hOIjxg7AEVQnvJ90MEdE
seo:
  title: LIFF app not working as expected? Check which browser you're using
  description: >-
    Hi! I’m Okajima, a technical writer in charge of documentation for the LINE
    Developers site.
---

::Tips
# :page-title

  :::display-date{date="2026/11/26" .!mb-20}

  :::

Hi! I’m Okajima, a technical writer in charge of documentation for the LINE Developers site.

Have you ever opened a LIFF app from a LINE chat room, only to find that the [action button](/docs/liff/overview/#action-button) isn't displayed or that you can't send messages using the [`liff.sendMessages()`](/reference/liff/#send-messages) method?

If so, check which browser is running your LIFF app. You may think you're using the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"}, but you might actually be using :glossary-tooltip[[LINE's in-app browser](/glossary/#line-iab)]{glossary-id="line-iab"}.

## How to tell the LIFF browser and LINE's in-app browser apart

You can tell the LIFF browser and LINE's in-app browser apart by the appearance of their headers and footers. In the images below, colored borders highlight each browser's header and footer.

| LIFF browser                                                                                                                        | LINE's in-app browser                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](/media/liff/differences-between-liff-browser-and-line-in-app-browser/liff-browser.webp){className="[\"border\",\"w-fix-360\"]"} | ![](/media/liff/differences-between-liff-browser-and-line-in-app-browser/line-in-app-browser.webp){className="[\"border\",\"w-fix-360\"]"} |

Look for these three differences:

|                                 | LIFF browser | LINE's in-app browser |
| ------------------------------- | ------------ | --------------------- |
| Minimizing button in the header | Not present  | Present               |
| Action button in the header     | Present (*)  | Not present           |
| Footer                          | Not present  | Present               |

* The action button is displayed when the LIFF app's screen size is `Full` and module mode is off. For more information, see [Action button](/docs/liff/overview/#action-button) in the LIFF documentation.

  :::admonition
  ---
  title: Identify the browser using the liff.isInClient() method
  type: tip
  ---
  You can also use the `liff.isInClient()` method to check whether your LIFF app is running in the LIFF browser. For more information, see [`liff.isInClient()`](/reference/liff/#is-in-client) in the LIFF API reference.
  :::

## If the browser isn't what you expected, check the URL

If you thought you opened your LIFF app in the LIFF browser but it's actually running in LINE's in-app browser, check the URL you used to open it. You may have used the endpoint URL instead of the :glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}.

| URL          | Description                                                                                                                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LIFF URL     | The URL to access a LIFF app. Opening this URL from a LINE chat room opens the LIFF app in the LIFF browser.  Example: `https://liff.line.me/1234567890-abcdefgh`         |
| Endpoint URL | The URL of the web app that implements the LIFF app. Opening this URL from a LINE chat room opens the LIFF app in LINE's in-app browser.  Example: `https://example.com/` |

Even within the same LINE chat room, the browser that opens your LIFF app differs depending on whether you use the LIFF URL or the endpoint URL. Keep in mind that even if both URLs ultimately display the same page, the features available in the LIFF browser and LINE's in-app browser differ.

For more information about the differences between these browsers, see [The differences between LIFF browser and LINE's in-app browser](/docs/liff/differences-between-liff-browser-and-line-in-app-browser/) in the LIFF documentation.

## Wrap-up

Opening a LIFF app from a LINE chat room doesn't always mean it's running in the LIFF browser. If your LIFF app isn't working as expected, take a look at the header and footer to check which browser you're using.

  :::tags{tags="liff" lang="en" section="tips"}

  :::
::
