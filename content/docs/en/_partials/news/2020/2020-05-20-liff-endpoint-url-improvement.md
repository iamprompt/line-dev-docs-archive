---
title: '[Updated] You can soon add and use paths to your LIFF endpoint URL'
navigation: true
description: ''
meta: '{"date":"2020-05-20 00:00 UTC","tags":"LIFF","new":"false","locale":"en"}'
path: /en/_partials/news/2020/2020-05-20-liff-endpoint-url-improvement
__hash__: YeVyrSWoa4GU7vtd1JeY6Kmc9ZRAjDt9KP9d3HHCk-g
seo:
  title: '[Updated] You can soon add and use paths to your LIFF endpoint URL'
  description: ''
---

::admonition{title="Added on May 29, 2020" type="note"}
This specification change was scheduled to take place in the last week of May, 2020, but in consideration of the impact on existing LIFF applications, we will apply the following changes:

- As announced on May 20, 2020, we will add the functionality to allow paths in endpoint URLs.
- **We plan to change specifications in such a way that existing LIFF apps will not be affected.**
- Specification change is scheduled for the second half of June 2020.

We apologize again for the inconvenience caused by the repeated specification changes.
::

Currently, developers are able to enter the path (`/path`), query parameters (`?key=value`), and URL fragments (`#URL-fragment`) in the URL in the LIFF tab of the [LINE Developers Console](/console/), but only the domain name and query parameters of the URL string are used.

With the upcoming update, these improvements will be made to the LIFF endpoint URL:

- The path (`/path`) can be used.
- The URL fragments (`#URL-fragment`) can no longer be entered.

For example, if you're deploying the LIFF app on Heroku, you can enter `https://{Heroku app name}.herokuapp.com/path/?key=value` as the **Endpoint URL** in the **Basic information** section of the LINE Developers Console.

![LIFF URL with paths appended in the LINE Developers Console](/media/news/liff-url-with-path-appended.png){className="[\"border\",\"w-fix-480\"]"}

The URL scheme must use https.

Being able to use the paths you entered in the LINE Developers Console means less time is required to publish new web pages. For example, when publishing a page for a campaign, you can register the campaign page such as `https://example.com/2020campaign` directly in the endpoint URL.

::admonition{title="Note" type="note"}
The endpoint URLs registered in the LINE Developers Console and the URL scheme for opening a LIFF app differ in the use of URL fragments. Be careful not to confuse them.

**Endpoint URL**:
`https://example.com/2020campaign` or `https://example.com/2020campaign/?key=value`  
You can't add URL fragments.

**URL scheme for opening a LIFF app**:
`https://liff.line.me/{liffId}/path_A/path_B/#URL-fragment`
You can add URL fragments.
::

Learn more about [Adding a LIFF app to your channel](/docs/liff/registering-liff-apps/#registering-liff-app) in the LIFF documentation.

We apologize for the confusion caused by the previous specification. We will continue to improve the quality of the services we provide to our developers and we greatly appreciate your understanding.

## Scheduled date of specification change

Second half of June, 2020
