---
title: '[Updated] Publish API documentation to get a permanent link'
navigation: true
description: ''
meta: '{"date":"2020-05-21 00:00 UTC","tags":"LIFF","new":"false","locale":"en"}'
path: /en/_partials/news/2020/2020-05-21-permanentlink-related-api
__hash__: d5Re6l7iUAep9YLCzwMQ6pg-jzQbHXd_SOALLOVtZz4
seo:
  title: '[Updated] Publish API documentation to get a permanent link'
  description: ''
---

::admonition{title="Added on July 15, 2020" type="note"}
There was a mistake in the API method name. We've corrected the mistake and apologize for any inconvenience caused by this error.

**Incorrect:**

liff.permanentLink.setExtraQueryParams()

**Correct:**

liff.permanentLink.setExtraQueryParam()
::

The LIFF SDK keeps a permanent link for the current page.
We'll publish the documentation of the API that handles this permanent link.

- `liff.permanentLink.createUrl()`
- `liff.permanentLink.setExtraQueryParam()`

These APIs are already included in the latest LIFF SDK, so the LIFF SDK version doesn't change.

For more information on how to get a permanent link, see [Get a permanent link for the current page](/docs/liff/developing-liff-apps/#get-permanent-link) in the LIFF documentation.
