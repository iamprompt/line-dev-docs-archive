---
title: LINE SDK for Android v5.8.1 released
navigation: true
description: >-
  We've released LINE SDK for Android v5.8.1. In this release, we've made
  several changes, including the removal of the android:allowBackup property.
meta: >-
  {"date":"2023-02-02 00:00 UTC","tags":"line-login, line-sdk,
  android","locale":"en"}
path: /en/_partials/news/2023/2023-02-02-android-sdk
__hash__: ytzwJ75Gk6ZSvpTmpghwu2qQWMmnv54JbfiuEN7aJis
seo:
  title: LINE SDK for Android v5.8.1 released
  description: >-
    We've released LINE SDK for Android v5.8.1. In this release, we've made
    several changes, including the removal of the android:allowBackup property.
---

We've released LINE SDK for Android v5.8.1. In this release, we've made several changes, including the removal of the `android:allowBackup` property.

The `android:allowBackup` property sets whether an automatic backup of user data is enabled. However, this property has been removed because it makes sense to specify the automatic backup setting on the application side, not on the SDK side.

From now on, the automatic backup setting should be set on the application side. Note that the default value of the `android:allowBackup` property on the application side is `true`. For more information about backup, see [Enable and disable backup](https://developer.android.com/guide/topics/data/autobackup#EnablingAutoBackup){rel="[\"nofollow\"]"} in Android Developers.

Release notes for the LINE SDK for Android are available on the GitHub repository. For more information, see [Releases](https://github.com/line/line-sdk-android/releases){rel="[\"nofollow\"]"}.
