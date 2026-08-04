---
title: >-
  Notification regarding information leakage due to unauthorized access and its
  impact on LINE Developers
navigation: true
description: >-
  As announced on November 27, 2023, LY Corporation has discovered that there
  has been unauthorized access of the company’s systems by a third party,
  leading to information leakage of users, business partners, employees and
  other personnel. We would like to inform users and relevant parties about the
  situation and sincerely apologize for any concerns or inconvenience caused.
meta: >-
  {"date":"2023-12-05 00:00 UTC","tags":"outage-report, line-platform,
  messaging-api, liff, line-mini-app, line-login","locale":"en"}
path: >-
  /en/_partials/news/2023/2023-12-05-notice-and-apology-regarding-information-leakage
__hash__: MPJLVutOwst7LZD0dBbsfIONDNxsUx4QNFj8Q7qgI84
seo:
  title: >-
    Notification regarding information leakage due to unauthorized access and
    its impact on LINE Developers
  description: >-
    As announced on November 27, 2023, LY Corporation has discovered that there
    has been unauthorized access of the company’s systems by a third party,
    leading to information leakage of users, business partners, employees and
    other personnel. We would like to inform users and relevant parties about
    the situation and sincerely apologize for any concerns or inconvenience
    caused.
---

As announced on [November 27, 2023](https://www.lycorp.co.jp/en/news/announcements/001003/){rel="[\"nofollow\"]"}, LY Corporation has discovered that there has been unauthorized access of the company’s systems by a third party, leading to information leakage of users, business partners, employees and other personnel. We would like to inform users and relevant parties about the situation and sincerely apologize for any concerns or inconvenience caused.

For more information about this incident, see [Notice and apology regarding information leakage due to unauthorized access](https://www.lycorp.co.jp/en/news/announcements/001003/){rel="[\"nofollow\"]"} in LY Corporation.

The [Details of the impact of this incident](https://www.lycorp.co.jp/en/news/2023/20231127_appendix_en.pdf){rel="[\"nofollow\"]"} mentioned in the above notice includes "Information related to LINE Developers." At this time, we have confirmed that certain provider names, provider’s internal identifiers, and the countries in which service are offered by providers have been leaked. However, we have not confirmed any leakage of information that could allow unauthorized contact with end users, except for the cases mentioned below.

We have already taken necessary actions such as access blocking regarding the unauthorized access, and there are currently no known incidents or impacts. We hope you will continue to use the [LINE Developers site](/) and products related to LINE Developers.

This news serves as a notification to the affected parties (developers) as stated in the "Information related to LINE Developers" section.

Regarding the following, we have already completed individual notifications and responses as exceptions mentioned above:

- Regarding some LINE MINI Apps, we have confirmed the leakage of information that could allow unauthorized contact with the end users. We have already contacted the administrators of the affected LINE MINI Apps and the end users individually.
- Regarding some Messaging API channels, we have confirmed the leakage of the ::glossary-tooltip{glossary-id="channel-secret"}
[channel secret](/glossary/#channel-secret)
::

. We have already contacted the administrators of the affected channels individually, and the invalidation of the corresponding channel secret has also been implemented.

For more information about the impact on LINE Official Accounts, see [Notification regarding the impact of information leakage due to unauthorized access on LINE Official Accounts](https://manager.line.biz/announce/20230093?country=JP){rel="[\"nofollow\"]"} (only available in Japanese) in the LINE Official Account Manager.

Once again, we sincerely apologize to our users and all relevant parties for any inconvenience or concern caused. We deeply regret this incident and will make our best efforts to prevent any reoccurrence.
