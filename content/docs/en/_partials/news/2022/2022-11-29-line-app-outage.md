---
title: '[Resolved] Notice about service outages for the Home tab of the LINE app'
navigation: true
description: >-
  We'd like to inform you about the following two service outages regarding the
  Home tab of the LINE app. These issues have now been resolved. We sincerely
  apologize for any inconvenience that this may have caused.
meta: >-
  {"date":"2022-11-29 00:00 UTC","tags":"outage-report,
  line-mini-app","locale":"en"}
path: /en/_partials/news/2022/2022-11-29-line-app-outage
__hash__: K_wnK5cHAImbLYO-cwM3p1jf3Orugb5xWrByueYh3pI
seo:
  title: '[Resolved] Notice about service outages for the Home tab of the LINE app'
  description: >-
    We'd like to inform you about the following two service outages regarding
    the Home tab of the LINE app. These issues have now been resolved. We
    sincerely apologize for any inconvenience that this may have caused.
---

We'd like to inform you about the following two service outages regarding the Home tab of the LINE app. These issues have now been resolved. We sincerely apologize for any inconvenience that this may have caused.

1. [An issue with some of the "Pinned services" being removed](#removed-20221129)
2. [An issue with "Pinned services" being changed to default settings](#changed-20221129)

Details of each outage are as follows.

### 1. An issue with some of the "Pinned services" being removed

#### Period of the outage

May 21, 2020 - October 16, 2022

#### Cause of the outage

An issue with LINE for iOS from `10.8.0` to `12.17.0`.

#### Impact

There was a problem with some users who met all of these conditions:

- A user uses LINE for iOS.
- A user uses LINE version from `10.8.0` to `12.17.0`.
- A user has added services to the "Pinned services" of the LINE Home tab.

#### Details

In the Home tab of LINE for iOS version `10.8.0` or later, the "Pinned services" weren't updated correctly and the services were unpinned when it failed to retrieve the data from the service list. This issue has been resolved in LINE for iOS version `12.17.1` or later, which has been available since October 17, 2022.

### 2. An issue with "Pinned services" being changed to default settings

#### Period of the outage

- LINE for iOS: May 19, 2022 - November 1, 2022
- LINE for Android: October 3, 2022 - October 24, 2022

#### Cause of the outage

- An issue with LINE for iOS from `12.7.0` to `12.17.1`.
- An issue with LINE for Android from `12.16.0` to `12.17.2`.

#### Impact

There was a problem with some users who met all of these conditions:

- A user uses LINE for iOS or LINE for Android.
- A user uses LINE for iOS version from `12.7.0` to `12.17.1` or LINE for Android version from `12.16.0` to `12.17.2`.
- A user has added services to the "Pinned services" of the LINE Home tab.

#### Details

In the Home tab of LINE for iOS version `12.7.0` or later or LINE for Android version `12.16.0` or later, when logging in again to reinstall the LINE app or transfer the account, the pinned services were changed to the default settings. On LINE for iOS, this issue only occurred when there was an error in the process of retrieving the "Pinned services" settings when logging in.

This issue has been resolved in LINE for iOS version `12.18.0` or later, which has been available since November 2, 2022, for LINE for iOS and since October 25, 2022, for LINE for Android.

### Notes

Once the services have been unpinned or changed due to these outages, they won't be restored automatically. To re-add the services, the user must manually add the services to the "Pinned services". Users affected by these issues will be notified individually via [service messages](/docs/line-mini-app/develop/service-messages/).

We'll continue to improve the quality of its services to prevent future outages. Thank you for your understanding.
