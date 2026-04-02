---
title: LINE SDK for Android v5.8.1をリリースしました
navigation: true
description: >-
  LINE SDK for Android
  v5.8.1をリリースしました。このリリースでは、android:allowBackupプロパティを削除するなどの変更を行っています。
meta: >-
  {"date":"2023-02-02 00:00 UTC","tags":"line-login, line-sdk,
  android","locale":"ja"}
path: /ja/_partials/news/2023/2023-02-02-android-sdk
__hash__: aHG7UR-N3tbTFPVgSk9Ci0boZKw3ZP24i40zdHKXDeA
seo:
  title: LINE SDK for Android v5.8.1をリリースしました
  description: >-
    LINE SDK for Android
    v5.8.1をリリースしました。このリリースでは、android:allowBackupプロパティを削除するなどの変更を行っています。
---

LINE SDK for Android v5.8.1をリリースしました。このリリースでは、`android:allowBackup`プロパティを削除するなどの変更を行っています。

`android:allowBackup`プロパティは、ユーザーデータの自動バックアップを有効にするかどうかを設定するプロパティです。ただ、自動バックアップの設定は、SDK側ではなくアプリ側で指定することが合理的であることから、このプロパティが削除されました。

今後は、自動バックアップの設定はアプリ側で行ってください。なお、アプリ側の`android:allowBackup`プロパティのデフォルト値は`true`です。バックアップについて詳しくは、『Android Developers』の「[バックアップを有効または無効にする](https://developer.android.com/guide/topics/data/autobackup#EnablingAutoBackup){rel="[\"nofollow\"]"}」を参照してください。

LINE SDK for Androidのリリースノートは、GitHubリポジトリで公開しています。詳しくは、「[Releases](https://github.com/line/line-sdk-android/releases){rel="[\"nofollow\"]"}」を参照してください。
