---
title: 自動ログインについて教えてください。
navigation: true
description: >-
  自動ログインはユーザーが以下の環境を利用している場合に利用可能です。自動ログインを利用できるようにするために、LINEログインを実装するウェブアプリ側で何らかの設定を行う必要はありません。
meta: >-
  {"date":"2017-11-08 00:00
  UTC","tags":"line-login","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/how-does-auto-login-work
__hash__: mKfpHd-hIKDZHTPuzzu9qAt7hgic3ORiu1HD_chPrQU
seo:
  title: 自動ログインについて教えてください。
  description: >-
    自動ログインはユーザーが以下の環境を利用している場合に利用可能です。自動ログインを利用できるようにするために、LINEログインを実装するウェブアプリ側で何らかの設定を行う必要はありません。
---

自動ログインはユーザーが以下の環境を利用している場合に利用可能です。自動ログインを利用できるようにするために、LINEログインを実装するウェブアプリ側で何らかの設定を行う必要はありません。

- iOSの場合
  - LINE内ブラウザまたはSafariブラウザで、LINEログイン v2.0またはv2.1を実装したウェブアプリにアクセスすると、自動ログインできます。
- Androidの場合
  - LINE内ブラウザまたはChromeなどの外部ブラウザで、LINEログイン v2.0またはv2.1を実装したウェブアプリにアクセスすると、自動ログインできます。

iOSやAndroid以外のデバイス、LINEがインストールされていないデバイス、iOSにおけるSafariブラウザ以外のブラウザでは自動ログインは動作しません。

また、外部ブラウザにおける自動ログインの動作は、iOSの[Universal Link](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/){rel="[\"nofollow\"]"}やAndroidの[アプリリンク](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"}の機能を利用しています。そのため、この機能が動作する際に表示されることがあるダイアログ、この機能を利用するためのOS側での条件、利用しないための設定方法など、詳細については各OSの仕様を確認してください。

自動ログインについて詳しくは、「[自動ログイン](/docs/line-login/integrate-line-login/#line-auto-login)」を参照してください。

::admonition{title="Yahoo! JAPANアプリからの自動ログインについて" type="tip"}
Yahoo! JAPANアプリからPKCEを実装したLINEログインを組み込んだウェブアプリにアクセスした際に、自動ログインが有効になります。LINEログインのPKCE対応について詳しくは、『LINEログインドキュメント』の「[LINEログインをPKCE対応する](/docs/line-login/integrate-pkce/)」を参照してください。
::
