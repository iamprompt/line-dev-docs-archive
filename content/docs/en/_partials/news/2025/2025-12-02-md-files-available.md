---
title: >-
  In the LINE Developers site, we've started providing documentation in Markdown
  format and the llms.txt file
navigation: true
description: >-
  Some of the documents and references available on the LINE Developers site can
  now be displayed in Markdown format. We've also added llms.txt, which provides
  a list of key documentation pages for LLMs.
meta: >-
  {"date":"2025-12-02 00:00 UTC","tags":"line-developers-site,
  docs","locale":"en"}
path: /en/_partials/news/2025/2025-12-02-md-files-available
__hash__: ed3vNJUhGbtbtDyrlg_-ivP5qc8KrExBkO2iBMyMg2U
seo:
  title: >-
    In the LINE Developers site, we've started providing documentation in
    Markdown format and the llms.txt file
  description: >-
    Some of the documents and references available on the LINE Developers site
    can now be displayed in Markdown format. We've also added llms.txt, which
    provides a list of key documentation pages for LLMs.
---

Some of the documents and references available on the LINE Developers site can now be displayed in Markdown format. We've also added :file-link[`llms.txt`]{file="/llms.txt"}, which provides a list of key documentation pages for LLMs.

With this update, generative AI tools and AI agents used by developers can more easily access and process our documentation.

![](/media/news/2025/md-files-ui-en.png){className="[\"border\",\"w-fix-480\"]"}

### Release date

December 2, 2025

### Release details

The following content has been released:

- [Providing documentation and references in Markdown format](#release-md-20251202)
- [Providing llms.txt](#release-llmstxt-20251202)

### Providing documentation and references in Markdown format

You can now retrieve and display the documents and references under the following categories in Markdown format:

- [LINE Platform basics](/docs/basics/)
- [LINE Developers Console](/docs/line-developers-console/)
- [Messaging API](/docs/messaging-api/) (*)
- [LINE Login](/docs/line-login/)
- [LINE Front-end Framework (LIFF)](/docs/liff/)
- [LINE MINI App](/docs/line-mini-app/)
- [Options for corporate customers](/docs/partner-docs/)

* The [Stickers](/docs/messaging-api/sticker-list/) and [LINE emoji](/docs/messaging-api/emoji-list/) pages are not supported.

Pages in these categories now include the buttons shown below near the page title. You can use these buttons to copy or display the page's content in Markdown format.

| Button               | Description                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Copy for LLM**     | Copies the current page's content in Markdown format to the clipboard.                                                                            |
| **View as Markdown** | Opens the Markdown file for the current page in a new tab. You can access the Markdown file by adding `index.html.md` to the end of the page URL. |

### Providing llms.txt

We've added :file-link[`llms.txt`]{file="/llms.txt"} to the root directory of the LINE Developers site. This file contains a list of URLs for key documentation pages.

`llms.txt` is a structured text file designed to help LLMs efficiently access and process documentation. For more information, see [https://llmstxt.org/](https://llmstxt.org/){rel="[\"nofollow\"]"}.

```text
// Excerpt from llms.txt

## LINE Platform basics

The LINE Platform basics documentation provides an introduction to the core features of the LINE Platform.

- [Channel access token](https://developers.line.biz/en/docs/basics/channel-access-token/index.html.md): Describes how to issue and use channel access tokens for LINE API authentication.
- [Get user profile information](https://developers.line.biz/en/docs/basics/user-profile/index.html.md): Explains how to retrieve user profile information using the LINE API.
- [Check the availability of the LINE Platform (LINE API Status)](https://developers.line.biz/en/docs/basics/line-api-status/index.html.md): Provides the current status and availability information for the LINE API and platform services.
```

We'll continue to improve the quality of the LINE Developers site and developer documentation to make it even easier for developers to develop apps using our services.
