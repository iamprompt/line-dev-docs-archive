---
title: プロバイダーやMessaging APIチャネルの作成手順が変わりました
navigation: true
description: LINE Developersコンソールで、プロバイダーやMessaging APIチャネルの作成手順が一部変わり、より使いやすくなりました。
meta: '{"date":"2021-04-23 00:00 UTC","tags":"Messaging API, Console","locale":"ja"}'
path: /ja/_partials/news/2021/2021-04-23-improve-provider-creation
__hash__: d10JWV40stgEVYgx8a7fJNrvcLjTYYDJCMmki82rrZs
seo:
  title: プロバイダーやMessaging APIチャネルの作成手順が変わりました
  description: LINE Developersコンソールで、プロバイダーやMessaging APIチャネルの作成手順が一部変わり、より使いやすくなりました。
---

[LINE Developersコンソール](/console/)で、プロバイダーやMessaging APIチャネルの作成手順が一部変わり、より使いやすくなりました。

## 変更点

主な変更点は、以下のとおりです。

- [プロバイダー作成時にガイドテキストが表示されるようになりました](#add-guide-text)
- [Messaging APIチャネルの作成手順が変わりました](#updated-messaging-api-channel-creation)

### プロバイダー作成時にガイドテキストが表示されるようになりました

開発者がプロバイダーを新しく作成する際に、ポップアップ内に「プロバイダーとは何か？」を解説したガイドテキストが表示されるようになりました。

![新しいプロバイダーを作成するポップアップでプロバイダーの定義が一緒に表示される](/media/news/provider-popup-ja.png){className="[\"border\",\"w-fix-360\"]"}

新しくプロバイダーを作成する方法については、LINE Developersコンソールのドキュメントで「[プロバイダーを作成する](/docs/line-developers-console/overview/#creating-a-provider)」を参照してください。

### Messaging APIチャネルの作成手順が変わりました

今まで、プロバイダーとそのプロバイダーに紐づくMessaging APIチャネル、そしてLINE公式アカウントの関係は、開発者にとって理解しづらいものでした。そのため、一部の開発者は、誤って意図しないプロバイダーの下でMessaging APIチャネルを作成してしまうことがありました。この問題を解決するため、Messaging APIチャネルの作成手順を変更しました。

開発者がMessaging APIチャネルを作成すると、チャネル名、公式アカウント名、プロバイダー、注意事項が書かれたポップアップが表示されます。

![チャネル名、公式アカウント名、プロバイダーが書かれたポップアップが表示される](/media/news/messaging-api-creation-popup-ja.png){className="[\"border\",\"w-fix-680\"]"}

開発者が［**OK**］をクリックすると、「情報利用に関する同意について」というポップアップが表示されます。

新しくMessaging APIチャネルを作成する方法については、LINE Developersコンソールのドキュメントで「[チャネルを作成する](/docs/line-developers-console/overview/#creating-a-channel)」を参照してください。
