---
title: >-
  Web traffic audiences using Tracking Tag are now available in the Messaging
  API
navigation: true
description: >-
  You can now use web traffic audiences using Tracking Tag in the LINE Official
  Account and Messaging API, in addition to web traffic audiences using LINE
  Tag.
meta: >-
  {"date":"2026-01-21 00:00 UTC","tags":"messaging-api,
  line-official-account","locale":"en"}
path: /en/_partials/news/2026/2026-01-21-tracking-tag
__hash__: hW7outu4vgEu-1DnQaTGlBo0hjQVqLJm0kUgeJYhdTg
seo:
  title: >-
    Web traffic audiences using Tracking Tag are now available in the Messaging
    API
  description: >-
    You can now use web traffic audiences using Tracking Tag in the LINE
    Official Account and Messaging API, in addition to web traffic audiences
    using LINE Tag.
---

You can now use web traffic audiences using Tracking Tag in the LINE Official Account and Messaging API, in addition to web traffic audiences using LINE Tag.

Web traffic audiences using Tracking Tag can be created in the [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}. You can retrieve information about the created web traffic audiences using endpoints such as the [Get audience data](/en/reference/messaging-api/#get-audience-group) endpoint.

### About Tracking Tag

Tracking Tag is a tag used to measure performance across various LY Corporation services. For more information, see [Announcement: Launch of Tracking Tag for LINE Official Accounts](https://www.lycbiz.com/jp/news/line-official-account/20251218/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.

### Requirements for using Tracking Tag

In order to use Tracking Tag with your LINE Official Account, all of the following conditions must be met:

- The LINE Official Account is for Japan
- The LINE Official Account is connected to an authenticated organization in [Business Manager](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"} (only available in Japanese)
- The LINE Official Account is either a verified account or a ::glossary-tooltip{glossary-id="premium-account"}
[premium account](/glossary/#premium-account)
::

### About LINE Tag

LINE Tag will be discontinued in the future. If you plan to use tags for measurement, consider using Tracking Tag. We'll announce the details regarding the discontinuation once they have been determined.

::admonition{title="Tracking Tag isn't available in LINE Ads" type="tip"}
LINE Ads will continue to support LINE Tag only. If you are sharing LINE Tag between LINE Ads and your LINE Official Account, continue to use LINE Tag as well.
::

### LINE Messaging API SDK updates

For more information about the update status of each SDK release related to the above, see the [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) release notes.
