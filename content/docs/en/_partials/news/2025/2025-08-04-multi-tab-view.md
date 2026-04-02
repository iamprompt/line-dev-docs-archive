---
title: >-
  On LINE version 15.12.0 or later, users can use multiple LIFF apps at the same
  time and easily switch between them
navigation: true
description: >-
  On LINE version 15.12.0 or later, we've made changes to the UI and
  specifications of the action button in the LIFF browser.
meta: '{"date":"2025-08-04 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2025/2025-08-04-multi-tab-view
__hash__: nN0bIC0dxyeQhWhuROCWiQilQNEeoEbZP6LfPJ8QcnE
seo:
  title: >-
    On LINE version 15.12.0 or later, users can use multiple LIFF apps at the
    same time and easily switch between them
  description: >-
    On LINE version 15.12.0 or later, we've made changes to the UI and
    specifications of the action button in the LIFF browser.
---

On LINE version 15.12.0 or later, we've made changes to the UI and specifications of the [action button](/docs/liff/overview/#action-button) in the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"}.

After the specification change, tapping the action button displays the [multi-tab view](/docs/liff/overview/#multi-tab-view). The multi-tab view displays options for the LIFF app currently in use and recently used services.

| LINE version earlier than 15.12.0                                                              | LINE version 15.12.0 or later                                                                 |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![](/media/news/2025/liff-action-button-before.png){className="[\"w-fix-320\",\"border\"]"}    | ![](/media/news/2025/liff-action-button-after.png){className="[\"w-fix-320\",\"border\"]"}    |
| ![](/media/news/2025/liff-action-button-option-en.png){className="[\"w-fix-320\",\"border\"]"} | ![](/media/news/2025/liff-multi-tab-view-news-en.png){className="[\"w-fix-320\",\"border\"]"} |

Users can resume LIFF apps that they left off from the "recently used services" section in the multi-tab view. This allows users to use multiple LIFF apps at the same time and easily switch or move between different LIFF apps.

For more information, see [Specifications of recently used services](#recent-service-specification-20250804).

### Target version

LINE version 15.12.0 or later

### Specifications of recently used services

The recently used services section includes LIFF apps opened by the user, displayed in order of most recent use, up to a maximum of 50 items. The user can use the usage history to reopen the LIFF apps.

When the LIFF app is opened again from the usage history, the LIFF app is resumed or reloaded. The specifications for resuming and reloading are as follows:

| Behavior when reopened | Conditions                                                                                                                                              | Specifications                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| LIFF apps will resume  | LIFF apps that meet both of the following conditions:  - LIFF apps used within the last 12 hours - LIFF apps included in the 10 most recent usage items | The LIFF app will resume from the screen where the user left off. The access token, browsing history, and screen scroll position will be retained.     |
| LIFF apps will reload  | If the conditions for resuming are not met                                                                                                              | The LIFF app will be initialized at the URL where the user left off. The access token, browsing history, and screen scroll position will be discarded. |

For more information, see [Recently used services](/docs/liff/overview/#multi-tab-view-recent-service) in the LIFF documentation.

### Behavior when closing the LIFF app

On LINE version 15.12.0 or later, the behavior when a LIFF app opened in the LIFF browser is closed by the user or via the [`liff.closeWindow()`](/reference/liff/#close-window) method has changed.

If the user closes a LIFF app that meets the [conditions for appearing in recently used services](/docs/liff/overview/#multi-tab-view-condition), the LIFF app will appear in the "recently used services" section and the user can resume it.

If the user closes a LIFF app that doesn't meet the conditions for appearing in recently used services, the LIFF app will close and exit at the same time.

For more information, see [Behavior when closing the LIFF app](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app) in the LIFF documentation.
