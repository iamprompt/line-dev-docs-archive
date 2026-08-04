---
title: Creating permanent links
navigation: true
description: Learn how to create a permanent link for your LINE MINI App.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-mini-app/develop/permanent-links
__hash__: mBcxhKTOcLd_LTiV1iMHUnjxnoILTitnyk4ph64pDlg
seo:
  title: Creating permanent links
  description: Learn how to create a permanent link for your LINE MINI App.
---

# :page-title

:markdown-controlsUsers can use not only LIFF URLs but also permanent links to access LINE MINI Apps. However, permanent links should be used instead of LIFF URLs for the purpose of sharing LINE MINI App pages.

When you share a LINE MINI App page from the action button displayed in the [header](/docs/line-mini-app/discover/ui-components/#header), the LINE app automatically generates a permanent link of the page.

For every other instance, you need to create a permanent link yourself according to the following formula.

`LIFF URL + (LINE MINI App URL - Endpoint URL) = Permanent Link`

E.g.

| Item                          | Settings                                       |
| ----------------------------- | ---------------------------------------------- |
| LIFF URL*                     | `https://miniapp.line.me/123456-abcedfg`       |
| URL of the LINE MINI App page | `https://example.com/shop?search=shoes#item10` |
| Endpoint URL*                 | `https://example.com`                          |

* You can find it on the **Web app settings** tab of the [LINE Developers Console](/console/).

In this case, the permanent link corresponding to the URL of the LINE MINI App page is as follows:

```text
https://miniapp.line.me/123456-abcedfg/shop?search=shoes#item10
```

::admonition{title="Tip" type="tip"}
You can use raw path to your page, query parameters, and hash fragments in the URL of the LINE MINI App page.
::

::admonition
---
title: LIFF URL for LINE MINI App has been changed
type: note
---
As of [December 13, 2023](/news/2023/12/13/change-of-liff-url-for-line-mini-app/), the LIFF URL of the LINE MINI App has been changed to `https://miniapp.line.me/{liffId}`.

If a user accesses existing `https://liff.line.me/{liffId}`, the LINE MINI App will also open. Therefore, you can continue to use the QR code that you've already issued.
::

## Differences in domain names depending on the LINE app version

When you share a LINE MINI App page from the [action button](/docs/line-mini-app/discover/builtin-features/#action-button) displayed in the header, the domain name of the permanent link generated differs depending on the version of the LINE app.

| LINE app version   | Example of URLs generated          |
| ------------------ | ---------------------------------- |
| 13.20 or later     | `https://miniapp.line.me/{liffId}` |
| Earlier than 13.20 | `https://liff.line.me/{liffId}`    |

## If the user doesn't have LINE installed

When a user that has LINE installed clicks on a permanent link, LINE takes the user to the exact page directed by the link. If a user doesn't have LINE installed, a web browser will open and encourage the user to open the LINE MINI App within LINE. From this guidance, the user can also open the LIFF endpoint URL page in a web browser.
