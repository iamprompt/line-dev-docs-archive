---
title: >-
  In October 2025, all LINE MINI App users will be able to use the service in a
  web browser
navigation: true
description: >-
  In the LINE MINI App, non-LINE users outside of Japan, Thailand and Taiwan can
  currently use the service in a web browser. We'd like to inform you that we're
  planning to change the specification of LINE MINI Apps so that all users can
  use the service with a web browser in October 2025.
meta: '{"date":"2025-04-02 00:00 UTC","tags":"line-mini-app","locale":"en"}'
path: /en/_partials/news/2025/2025-04-02-mini-app-browser
__hash__: smX-_075bqI7YFzloBFYoMy15erelO8sTbZljO8C-lE
seo:
  title: >-
    In October 2025, all LINE MINI App users will be able to use the service in
    a web browser
  description: >-
    In the LINE MINI App, non-LINE users outside of Japan, Thailand and Taiwan
    can currently use the service in a web browser. We'd like to inform you that
    we're planning to change the specification of LINE MINI Apps so that all
    users can use the service with a web browser in October 2025.
---

In the LINE MINI App, non-LINE users outside of Japan, Thailand and Taiwan can currently use the service in a web browser. We'd like to inform you that we're planning to change the specification of LINE MINI Apps so that all users can use the service with a web browser in October 2025.

### Scheduled date of change

October 2025

The content and date of this specification change are subject to change.

### Changes

The screen that users see when they open the LINE MINI App from their smartphone's web browser will change. The changes are as follows. The changes apply to all LINE MINI Apps, regardless of whether they are verified or not.

1. Display the LINE MINI App icon and logo at the top of the page
2. Display a link [**Open in web browser**] at the bottom of the page to go to the endpoint URL (*)

| Before change (current)                                                                        | After change                                                                                 |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| ![](/media/news/2025/mini-landing-page-current-en.png){className="[\"border\",\"w-fix-280\"]"} | ![](/media/news/2025/mini-landing-page-after-en.png){className="[\"border\",\"w-fix-280\"]"} |

The images shown here are samples. Therefore, they are subject to change.

Note that there will be no change to [behavior when opening the LINE MINI App on a computer](/docs/line-mini-app/discover/introduction/#what-you-can-do-with-the-liff-app-or-mini-app).

* The endpoint URL can be set in the **Web app settings** tab on the [LINE Developers Console](/console/).

### Important points about specification changes

With this change, users will be able to use the LINE MINI App service via a web browser.

Before the specification change in October 2025, make sure that users can use your service without any problems when opening the endpoint URL in a web browser. We'll announce the date of the specification change when it's determined.

For more information on opening the LINE MINI App in a web browser, see [Open a LINE MINI App in an external browser](/docs/line-mini-app/develop/external-browser/) in the LINE MINI App documentation.

### Discontinued features

The [redirect non-LINE users to a web browser](/docs/line-mini-app/discover/custom-features/#redirect-non-line-users-to-browser) feature will be discontinued.

After the specification change, users will be able to use the LINE MINI App service via a web browser regardless of whether they are using LINE or not. Therefore, the redirect non-LINE users to a web browser feature, which is a similar feature, will be discontinued on the same day as the specification change.

### Background

LINE MINI Apps provide functionality as web applications that run on the LINE app's :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"}. For this reason, there are some LINE MINI Apps that aren't designed to be used with a web browser such as Safari or Chrome.

On the other hand, the [LINE MINI App Policy](https://terms2.line.me/LINE_MINI_App?lang=en){rel="[\"nofollow\"]"} states that "The URL set in the endpoint URL of the LINE MINI App must be accessible from web browsers such as Safari and Chrome".

In order to comply with this web browser usage policy, we've decided to change the specifications of the LINE MINI App so that it can also be used with web browsers.

We'll continue to work to further improve its service to our customers. Thank you for your understanding.
