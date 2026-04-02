---
title: >-
  On LINE version 12.17.0 or later, we'll be making changes to some of LIFF
  browser's specifications
navigation: true
description: >-
  On LINE version 12.17.0 or later, we'll be making changes to some of LIFF
  browser's specifications.
meta: '{"date":"2022-10-11 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2022/2022-10-11-liff-update-line-12-17-0
__hash__: SfZ-Vt35TPp-L6oTzV9WVihPtpual8gHHA7ZRfLlZaU
seo:
  title: >-
    On LINE version 12.17.0 or later, we'll be making changes to some of LIFF
    browser's specifications
  description: >-
    On LINE version 12.17.0 or later, we'll be making changes to some of LIFF
    browser's specifications.
---

On LINE version 12.17.0 or later, we'll be making changes to some of :glossary-tooltip[[LIFF browser's](/glossary/#liff-browser)]{glossary-id="liff-browser"} specifications.

### Target version

LINE version 12.17.0 or later

### Changes

- [In a LIFF browser with the screen size set to "Full", the header will shrink when scrolling](#shrink-header-20221011)
- [Changes to minimizing a LIFF browser](#liff-minimize-20221011)

#### In a LIFF browser with the screen size set to "Full", the header will shrink when scrolling

Previously, there was a problem with the user accidentally tapping the close button in the header while browsing a LIFF browser, causing the LIFF browser to close unintentionally.

To improve this problem, in a LIFF browser with the screen size set to "Full", the header will shrink when scrolling. When the header shrinks, some components of the header, such as [the action button](/docs/liff/overview/#action-button) or the URL, will be hidden.

| Normal header                                                                                                              | Shrinking header                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![Normal header in the LIFF browser](/media/news/2022/header-normal-20221011.jpeg){className="[\"border\",\"w-fix-320\"]"} | ![Shrinking header in the LIFF browser](/media/news/2022/header-shrink-20221011.jpeg){className="[\"border\",\"w-fix-320\"]"} |

#### Changes to minimizing a LIFF browser

Previously, there were three ways to minimize a LIFF browser.

- [Tapping an action button option](/docs/liff/minimizing-liff-browser/#tap-action-button-option)
- [Tapping an in-app alert](/docs/liff/minimizing-liff-browser/#tap-in-app-alert)
- [Dragging a LIFF browser](/docs/liff/minimizing-liff-browser/#drag-liff-browser)

Of these, [dragging a LIFF browser](/docs/liff/minimizing-liff-browser/#drag-liff-browser) will be changed to [swiping a LIFF browser](/docs/liff/minimizing-liff-browser/#swipe-liff-browser). Swiping a LIFF browser down will minimize the LIFF browser.

![LIFF browser minimization (swiping a LIFF browser)](/media/liff/minimizing-liff-app/swipe-liff-browser-en.png){className="[\"w-fix-600\"]"}

::admonition
---
title: The differences in behavior between the LIFF browser and LINE's in-app browser
type: note
---
The LIFF browser and :glossary-tooltip[[LINE's in-app browser](/glossary/#line-iab)]{glossary-id="line-iab"} behave differently when swiped down. Swiping LINE's in-app browser down will close LINE's in-app browser.
::

For more information on LIFF browser minimization, see [Minimizing LIFF browser](/docs/liff/minimizing-liff-browser/) in the LIFF documentation.
