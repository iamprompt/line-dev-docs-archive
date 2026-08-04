---
title: Can I keep a LINE Official Account private until its release date?
navigation: true
description: >-
  Hi, I'm Horikoshi. I'm a technical writer working on the documentation for the
  LINE Developers site.
meta: >-
  {"date":"2026-07-09 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/07/09/keep-a-line-official-account-private
__hash__: Qgqgr60uiW2dUkXcOrotf3HUGs6WB2ilvHNseTBVWAQ
seo:
  title: Can I keep a LINE Official Account private until its release date?
  description: >-
    Hi, I'm Horikoshi. I'm a technical writer working on the documentation for
    the LINE Developers site.
---

::Tips
# :page-title

  :::display-date{date="2026/07/09" .!mb-20}

  :::

Hi, I'm Horikoshi. I'm a technical writer working on the documentation for the [LINE Developers site](/).

When setting up a new LINE Official Account for a store or service, you may want to keep the account private until its official release date to prevent it from accidentally becoming visible to the public. Is it possible to keep a LINE Official Account private until its release date?

## LINE Official Accounts don't have "private" or "public" states

Unfortunately, LINE Official Accounts don't have states such as "private" or "public", or "in development" or "released". From the very moment a LINE Official Account is created, anyone can add it as a friend as long as they know the [basic ID](https://help.linebiz.com/lineadshelp/s/article/L000001191?language=ja){rel="[\"nofollow\"]"} — even if the account is still being prepared.

For this reason, care must be taken to ensure that the basic ID, premium ID, and friend add URL of a LINE Official Account that is still being prepared don't accidentally leak to outside parties.

## To prevent your account from appearing in search results

Depending on your settings, your account may appear in search results even if you don't share the URL to add the account as a friend.

In [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}, if **Publish public URL** (*1) under **Business profile** is enabled, the public URL (e.g. [LINE FRIENDS profile page](https://line.me/R/ti/p/@linecharacter){rel="[\"nofollow\"]"}) may appear in external search engine results. This setting is enabled by default, so make sure to turn it off before your official release.

To prevent your account from appearing in the LINE app search results, leave **Show in search results and recommendations** (*1) turned off by default in [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"} until the release date.

Furthermore, if you create a coupon using the Messaging API [Create a coupon](/reference/messaging-api/#create-coupon) endpoint or LINE Official Account Manager and set **Display coupon in LY Corporation services** (*2) to "Include coupon", users may inadvertently add your LINE Official Account as a friend from the coupon. If you create coupons before your release date, set it to "Don't include coupon".

*1 These settings are available only for verified accounts. For more information, see [Business profile](https://www.lycbiz.com/jp/manual/OfficialAccountManager/profile/){rel="[\"nofollow\"]"} (only available in Japanese) in LY for Business.  

*2 For more information, see [Display coupon in LY Corporation services](https://www.lycbiz.com/jp/manual/OfficialAccountManager/coupons-service/){rel="[\"nofollow\"]"} (only available in Japanese) in LY for Business.

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
