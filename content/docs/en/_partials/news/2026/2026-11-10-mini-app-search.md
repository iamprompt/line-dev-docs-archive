---
title: >-
  Information displayed in search results for verified MINI Apps will change for
  users in Japan
navigation: true
description: >-
  Starting from LINE version 26.18.0, the information displayed when searching
  for verified MINI Apps will be changed for users in Japan.
meta: '{"date":"2026-11-10 00:00 UTC","tags":"line-mini-app","locale":"en"}'
path: /en/_partials/news/2026/2026-11-10-mini-app-search
__hash__: FtwKhTr3DRqcPOZ67IqjluWRouKn7hKobkxmQXerCcc
seo:
  title: >-
    Information displayed in search results for verified MINI Apps will change
    for users in Japan
  description: >-
    Starting from LINE version 26.18.0, the information displayed when searching
    for verified MINI Apps will be changed for users in Japan.
---

Starting from LINE version 26.18.0, the information displayed when searching for verified MINI Apps will be changed for users in Japan.

This applies when searching for verified MINI Apps on the tabs listed below:

- **Chats** tab
- **MINI Apps** tab

### Target versions

LINE version 26.18.0 or later (scheduled for release in early November 2026)

### Details

Previously, when users searched for a LINE MINI App, only the LINE MINI App name was displayed in the search results.

After this change, the following items are displayed in search results:

| Item                      | Description                                                           |
| ------------------------- | --------------------------------------------------------------------- |
| LINE MINI App name        | LINE MINI App name                                                    |
| Category                  | Category that the LINE MINI App belongs to (e.g., Restaurants, Games) |
| LINE MINI App description | Description of the LINE MINI App                                      |
| Service badge             | Main features of the LINE MINI App (e.g., Mobile Order, Membership)   |

The LINE MINI App name displays the **Channel name** of the LINE MINI App channel. Other items are configured by us based on the contents entered in the **Channel description** field under the **Basic settings** tab of the LINE MINI App channel and other relevant information.

### Display example

The following is an example of the search results displayed when users enter a query in the search field on the **Chats** tab and select **MINI App**.

![](/media/news/2026/mini-app-search-en.webp){className="[\"bg-border\",\"w-fix-400\"]"}

| Row        | Information displayed                | Note                                                                                                  |
| ---------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| First row  | LINE MINI App name                   |                                                                                                       |
| Second row | Category / LINE MINI App description | If the text is too long, it will be truncated. These items aren't displayed if no information is set. |
| Third row  | Service badge                        | Up to two badges are displayed. This item isn't displayed if no badge is set.                         |

### Request to developers

Developers don't need to make any additional settings for this change to the search results.

However, the category, LINE MINI App description, and service badge will be configured by us based on the contents entered in the **Channel description** field on the **Basic settings** tab of the relevant LINE MINI App channel and other relevant information.

Therefore, enter a specific and clear description of the app in the **Channel description** field.

For more information, see [Channel description](/docs/line-mini-app/discover/console-guide/#channel-description) in the LINE MINI App documentation.
