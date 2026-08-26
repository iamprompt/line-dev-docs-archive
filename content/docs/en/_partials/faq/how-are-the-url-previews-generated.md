---
title: How are URL previews generated in chats?
navigation: true
description: LINE uses Open Graph Protocol tags from websites to generate URL previews.
meta: >-
  {"date":"2017-07-24 00:00 UTC","tags":"line-app, line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/how-are-the-url-previews-generated
__hash__: TAivqajqUuXwggVTGhfiMCLIIVN5vK77aO5lKCQN0lU
seo:
  title: How are URL previews generated in chats?
  description: LINE uses Open Graph Protocol tags from websites to generate URL previews.
---

LINE uses Open Graph Protocol tags from websites to generate URL previews.

The three OGP tags used by LINE:

| #   | Open Graph Protocol tag | Example                                                                           |
| --- | ----------------------- | --------------------------------------------------------------------------------- |
| 1   | og:title                | `<meta property="og:title" content="LINE : Free Calls & Messages">`               |
| 2   | og:description          | `<meta property="og:description" content="LINE is a new communication app">`      |
| 3   | og:image                | `<meta property="og:image" content="http://static.naver.jp/line_lp/img/ogp.png">` |

Example of URL preview:

![URL preview in chat](/media/faq/chat-preview.png){className="[\"border\"]"}

::admonition{title="OGP configuration" type="note"}
Even if you don't configure OGP tags, any text or image within the URL will be automatically retrieved to generate a URL preview.

For example, for the Title, if there is no available information in `og:title`, the text within the title tag will be displayed. Likewise, for the Summary, if there is no available information in `og:description`, the text within either the description tag or the body will be displayed (If there is no retrievable information, nothing will be displayed in the preview).

LINE uses only the three OGP tags listed above. URL previews will not include information contained in any other OGP tags.
::
