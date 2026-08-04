---
title: >-
  As of March 26, 2025, we will no longer provide the feature to change the
  authority level of the audience
navigation: true
description: >-
  As of March 26, 2025, the feature to set and check the public/private setting
  of audiences created with the Messaging API will be discontinued.
meta: >-
  {"date":"2025-02-06 00:00 UTC","tags":"messaging-api, end-of-life,
  life-cycle","locale":"en"}
path: /en/_partials/news/2025/2025-02-06-cross-targeting-closing
__hash__: vxWkOFbgWiZro0iOMZxO86-PiqtRnzI4Ho-VX3Y7Rkc
seo:
  title: >-
    As of March 26, 2025, we will no longer provide the feature to change the
    authority level of the audience
  description: >-
    As of March 26, 2025, the feature to set and check the public/private
    setting of audiences created with the Messaging API will be discontinued.
---

As of March 26, 2025, the feature to set and check the public/private setting of audiences created with the Messaging API will be discontinued.

Even after the discontinuation of the public/private setting of audiences, audiences created with the Messaging API and the LINE Official Account Manager will continue to be mutually usable.

### Endpoints to be discontinued

The following endpoints will no longer be provided:

- [Change the authority level of the audience](/reference/messaging-api/#change-authority-level)
- [Get the authority level of the audience](/reference/messaging-api/#get-authority-level)

If you send a request to these endpoints after they are discontinued, an HTTP status code `404 Not Found` will be returned.

### Details

In order to use audiences created with the Messaging API in the LINE Official Account Manager, it was previously necessary to set the audience's authority level to `PUBLIC` using the [Change the authority level of the audience](/reference/messaging-api/#change-authority-level) endpoint in the Messaging API.

As of March 26, 2025, this conventional feature for setting the audience authority level to public or private will be discontinued.

Even after the feature to set the authority level of an audience to public or private is discontinued, the audiences in the Messaging API and the LINE Official Account Manager will continue to be mutually usable. In addition, all existing audiences that couldn't be used with the LINE Official Account Manager because they were set to private (`PRIVATE`) will be available from March 26, 2025.

| Create                        | Use                           | Authority level | Before discontinuation (current) | After discontinuation |
| ----------------------------- | ----------------------------- | --------------- | -------------------------------- | --------------------- |
| Messaging API                 | LINE Official Account Manager | Private         | ❌                                | ✅                     |
| Messaging API                 | LINE Official Account Manager | Public          | ✅                                | ✅                     |
| LINE Official Account Manager | Messaging API                 | Private         | ❌                                | ✅                     |
| LINE Official Account Manager | Messaging API                 | Public          | ✅                                | ✅                     |

You can use the audience created by the Messaging API with the tools other than LINE Official Account Manager, such as [LINE Ads Manager](https://admanager.line.biz/){rel="[\"nofollow\"]"}, by using the audience sharing function in [Business Manager](https://www.lycbiz.com/jp/service/business-manager/){rel="[\"nofollow\"]"}.

In addition, you can share audiences between Messaging API channels under the same provider by using the audience sharing function in the Business Manager. However, only verified accounts and :glossary-tooltip[[premium accounts](/glossary/#premium-account)]{glossary-id="premium-account"} can set audience sharing in Business Manager.

For more information, see [Notice regarding the discontinuation of the cross targeting feature (audience disclosure and LINE Tag sharing feature)](https://www.lycbiz.com/jp/news/line-ads/20241113/){rel="[\"nofollow\"]"} (only available in Japanese) in LINE for Business.

### Schedule

The schedule for the end of feature provision is as follows:

| Date              | Content                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| February 12, 2025 | Start providing an endpoint for retrieving a list of audiences shared in Business Manager via the Messaging API |
| March 26, 2025    | End of provision of conventional feature to set and check the public/private setting of audiences               |

The details and date of this specification change are subject to change without notice.
