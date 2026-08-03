---
title: Changes to LIFF browser header specifications from LINE version 26.7.0
navigation: true
description: >-
  Starting from LINE version 26.7.0, the specifications for the header of the
  LIFF browser used to display LINE MINI Apps and LIFF apps have been updated.
  These changes include updates to the action button icon and its behavior when
  tapped, as well as replacing the minimize button with the close button.
meta: '{"date":"2026-05-19 00:00 UTC","tags":"line-mini-app, liff","locale":"en"}'
path: /en/_partials/news/2026/2026-05-19-liff-browser
__hash__: DFEsl94zWJN6xx-nD7k9NeF0we5trdKwITacsaobZ00
seo:
  title: Changes to LIFF browser header specifications from LINE version 26.7.0
  description: >-
    Starting from LINE version 26.7.0, the specifications for the header of the
    LIFF browser used to display LINE MINI Apps and LIFF apps have been updated.
    These changes include updates to the action button icon and its behavior
    when tapped, as well as replacing the minimize button with the close button.
---

Starting from LINE version 26.7.0, the specifications for the header of the LIFF browser used to display LINE MINI Apps and LIFF apps have been updated. These changes include updates to the action button icon and its behavior when tapped, as well as replacing the minimize button with the close button.

### Target version

LINE version 26.7.0 or later

### Changes

The main changes are as follows:

- [Action button icon](#icon-20260519)
- [Action button tap behavior](#tap-20260519)
- [Minimize button](#minimize-20260519)

#### Action button icon

Previously, the action button used an icon representing the multi-tab view. From LINE version 26.7.0 or later, the action button icon has been changed to a vertical ellipsis icon.

| Before change                                                                             | LINE version 26.7.0 or later                                                              |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![](/media/news/2026/action-button-icon-asis.png){className="[\"border\",\"w-fix-300\"]"} | ![](/media/news/2026/action-button-icon-tobe.png){className="[\"border\",\"w-fix-300\"]"} |

#### Action button tap behavior

Previously, tapping the action button opened the multi-tab view. From LINE version 26.7.0 or later, tapping the action button now opens a dropdown menu.

| Before change                                                                               | LINE version 26.7.0 or later                                                                |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| ![](/media/news/2026/action-button-tap-asis-en.png){className="[\"border\",\"w-fix-300\"]"} | ![](/media/news/2026/action-button-tap-tobe-en.png){className="[\"border\",\"w-fix-300\"]"} |

The dropdown menu contains the following items:

| Item                    | Description                                                                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **All tabs**            | Displays the [multi-tab view](/docs/liff/overview/#multi-tab-view).                                                                                       |
| **Refresh**             | Reloads the currently open page.                                                                                                                          |
| **Minimize browser**    | Minimizes the LIFF browser.                                                                                                                               |
| **Share**               | Shares the :glossary-tooltip[[permanent link](/glossary/#permanent-link-liff)]{glossary-id="permanent-link-liff"} of the current page via a LINE message. |
| **Add to Home**         | Displays the screen to add a shortcut to the current page.                                                                                                |
| **Favorites**           | Adds the current LINE MINI App to your favorites.                                                                                                         |
| **Permission settings** | Opens the permission settings screen.                                                                                                                     |
| **About the service**   | Displays the [provider page](/docs/partner-docs/provider-page/).                                                                                          |
| **Report**              | Opens the LINE app inquiry form in an external browser.                                                                                                   |

The items displayed in the dropdown menu vary depending on factors such as whether the app is a LINE MINI App or a LIFF app, and whether the LINE MINI App is verified. For more information, see [Dropdown menu](/docs/line-mini-app/discover/builtin-features/#dropdown) in the LINE MINI App documentation and [Dropdown menu](/docs/liff/overview/#dropdown) in the LIFF documentation.

#### Minimize button

For verified MINI Apps, the minimize button was previously displayed in the header. From LINE version 26.7.0 or later, the minimize button has been moved into the dropdown menu, and the close button is now displayed in its place.

| Before change                                                                             | LINE version 26.7.0 or later                                                              |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![](/media/news/2026/action-button-icon-asis.png){className="[\"border\",\"w-fix-300\"]"} | ![](/media/news/2026/action-button-icon-tobe.png){className="[\"border\",\"w-fix-300\"]"} |

We'll continue to improve the quality of our products and developer documentation to make it easier for developers to create services using the LINE Platform.
