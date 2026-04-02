---
title: How can I find out the file format of the retrieved content?
navigation: true
description: >-
  When you get content, the file format of the binary data returned in the
  response is indicated in the Content-Type header of the response.
meta: >-
  {"date":"2023-03-23 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"en"}
path: /en/_partials/faq/how-can-i-find-out-content-file-format
__hash__: TrNOZaI8MPzfSopFl0Ish9kj2Di7PR727QU-xax8l5Q
seo:
  title: How can I find out the file format of the retrieved content?
  description: >-
    When you get content, the file format of the binary data returned in the
    response is indicated in the Content-Type header of the response.
---

When you [get content](/reference/messaging-api/#get-content), the file format of the binary data returned in the response is indicated in the [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type){rel="[\"nofollow\"]"} header of the response.

By checking the value of the `Content-Type` header, you can find out the file format of the content. Examples of file format indicated by the `Content-Type` header are as follows:

| Content sent by users                       | Content-Type header example |
| ------------------------------------------- | --------------------------- |
| [Image](/reference/messaging-api/#wh-image) | image/jpeg                  |
| [Video](/reference/messaging-api/#wh-video) | video/mp4                   |
| [Audio](/reference/messaging-api/#wh-audio) | audio/x-m4a                 |
| [File](/reference/messaging-api/#wh-file)   | text/plain                  |
