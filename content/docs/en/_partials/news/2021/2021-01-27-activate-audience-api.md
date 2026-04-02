---
title: You can now use audiences created with LINE Ads and LINE Points Ads
navigation: true
description: >-
  Audiences created and shared by LINE Ads and LINE Points Ads (Japanese only)
  can now be used through the Messaging API.
meta: '{"date":"2021-01-27 00:00 UTC","tags":"Messaging API","locale":"en"}'
path: /en/_partials/news/2021/2021-01-27-activate-audience-api
__hash__: ePHiJHjnbaFj0iPfZRH9yH8_8TPWDN05JSGa3-qEgwY
seo:
  title: You can now use audiences created with LINE Ads and LINE Points Ads
  description: >-
    Audiences created and shared by LINE Ads and LINE Points Ads (Japanese only)
    can now be used through the Messaging API.
---

Audiences created and shared by [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"} and [LINE Points Ads](https://www.linebiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (Japanese only) can now be used through the Messaging API.

| Audiences now available through the Messaging API | How to create                                                                                              |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Audience for uploading user IDs                   | [LINE Points Ads](https://www.linebiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (Japanese only) |
| Web traffic audience                              | [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"}                                              |
| App event audience                                | [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"}                                              |
| Video view audience                               | [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"}                                              |

::admonition
---
title: How to share audiences created with LINE Ads
type: tip
---
For more information on how to "share" audiences created in the LINE Ads management screen, see [Delivering with Audiences](https://www.linebiz.com/jp/manual/line-ads/tracking_006/){rel="[\"nofollow\"]"} (Japanese only) in LINE for Business.
::

To use audiences created by LINE Ads or LINE Points Ads from the Messaging API, you will need to activate them using the newly added "Activate audience" endpoint. For more information, see [Activate audience](/reference/messaging-api/#activate-audience-group) in the Messaging API reference.

With this change, we added several properties in these Messaging API endpoints to check if an audience is activated or not, and the name of the ad account that created the audience group.

- [Get audience data](/reference/messaging-api/#get-audience-group)
- [Get data for multiple audiences](/reference/messaging-api/#get-audience-groups)
