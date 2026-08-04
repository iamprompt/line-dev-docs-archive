---
title: LINE MINI App specifications
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/discover/specifications
__hash__: SwuYNfsK7okhTXDnCPEZYLDD-EXQO272B_JYRYQ4lH4
seo:
  title: LINE MINI App specifications
  description: null
---

# :page-title

:markdown-controlsThis page explains the specs for developing a LINE MINI App.

:toc## HTML5 Support

When developing a LINE MINI App, you can use almost any [HTML5](https://html.spec.whatwg.org/){rel="[\"nofollow\"]"} specification. For example, you can use [Geolocation API](https://www.w3.org/TR/geolocation/){rel="[\"nofollow\"]"} to acquire information regarding the user's location, and provide users with information on nearby shops. Most Map APIs that are compatible with HTML5 can be used, including the Google Maps API.

![](/media/line-mini-app/mini_map_api.png){className="[\"w-fix-280\"]"}

### Support Media Formats

Media formats supported by HTML5 are also supported by LINE MINI App. See these HTML5 Specifications:

- [img element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element){rel="[\"nofollow\"]"}
- [Media element](https://html.spec.whatwg.org/multipage/media.html){rel="[\"nofollow\"]"}

### HTML5 Support in the browser

This site is helpful in finding out how HTML5 is supported on an external browser:

- [https://caniuse.com](https://caniuse.com/){rel="[\"nofollow\"]"}

## Supported Platforms and Versions

LINE MINI Apps are developed using [LIFF](/docs/liff/overview/). Therefore, the supported OS versions and LINE versions of LINE MINI App are based on the [Recommended operating environment](/docs/liff/overview/#operating-environment) of LIFF.

::admonition{title="Note" type="note"}
Supported versions are subject to change without notice.
::

### Opening LINE MINI App in an external browser

::admonition
---
title: As of October 2025, LINE MINI Apps can be used in an external browser
type: tip
---
The screen that is displayed when users open LINE MINI Apps in an external browser has been changed. For more information, see the news from September 26, 2025, [On October 1, 2025, all LINE MINI App users will be able to use the service in a web browser](/news/2025/09/26/mini-app-browser/).
::

When a user who doesn't use LINE, or a LINE user in a situation where [deep links](https://en.wikipedia.org/wiki/Mobile_deep_linking){rel="[\"nofollow\"]"} don't work opens a LINE MINI App in an :glossary-tooltip[[external browser](/glossary/#external-browser)]{glossary-id="external-browser"}, a page like the one shown below will be displayed, and the user will be guided to open the LINE MINI App using LINE's smartphone app (:glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"}). Tapping [**Open in web browser**] on the page displays the LIFF endpoint URL page in the web browser.

![](/media/line-mini-app/landing-page-en.png){className="[\"w-fix-640\"]"}

## Supported LIFF Versions

LINE MINI Apps are developed using [LIFF](/docs/liff/overview/). The minimum version of the LIFF SDK available for use on LINE MINI App is v2.1.

LINE MINI App allows the use of all LIFF APIs provided by LIFF v2.1.x.
