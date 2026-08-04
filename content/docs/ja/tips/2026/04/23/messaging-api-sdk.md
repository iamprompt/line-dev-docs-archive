---
title: Messaging APIの新機能がSDKに反映されるまでのプロセス
navigation: true
description: こんにちは！テクニカルライターの銭神です。みなさんは、LINEヤフーが提供するMessaging APIのSDKを使っていますか？
meta: >-
  {"date":"2026-04-23 00:00 UTC","tags":"messaging-api,
  line-developers-site","locale":"ja","sidebar":false}
path: /ja/tips/2026/04/23/messaging-api-sdk
__hash__: 23J3pwPmlKKdezRUuyfqwjuAfmGbxYXSJVZ0XiUUwUo
seo:
  title: Messaging APIの新機能がSDKに反映されるまでのプロセス
  description: こんにちは！テクニカルライターの銭神です。みなさんは、LINEヤフーが提供するMessaging APIのSDKを使っていますか？
---

::Tips
# :page-title

  :::display-date{date="2026/04/23" .!mb-20}

  :::

こんにちは！テクニカルライターの銭神です。みなさんは、LINEヤフーが提供するMessaging APIのSDKを使っていますか？

以前は、Messaging APIの新機能に対応するSDKの更新を手動で行っていました。これが[OpenAPI Generatorによる自動生成に切り替わった](/news/2023/07/05/open-api/)ことにより、より早くSDKを通して新機能にアクセスできるようになっています。

今回は、Messaging APIに新しい機能が追加されてから、JavaやPythonをはじめとする各言語向けのSDKが更新されるまでのプロセスを紹介します。

  :::admonition{title="LINE Messaging API SDKとは" type="tip"}
  [LINE Messaging API SDK](/docs/messaging-api/line-bot-sdk/)は、Messaging APIを用いてボットを効率よく開発するための公式ライブラリです。SDKを用いることで、APIリクエストや署名の検証といった処理を簡単に行うことができるため、開発者はボットの機能開発に専念できます。
  :::

  :::toc

  :::

## 対象となるSDK

Messaging APIには、以下の言語向けのSDKがあります。この記事で紹介する内容は、これらすべてが対象となります。

- [Java](https://github.com/line/line-bot-sdk-java){rel="[\"nofollow\"]"}
- [Python](https://github.com/line/line-bot-sdk-python){rel="[\"nofollow\"]"}
- [Node.js](https://github.com/line/line-bot-sdk-nodejs){rel="[\"nofollow\"]"}
- [Go](https://github.com/line/line-bot-sdk-go){rel="[\"nofollow\"]"}
- [PHP](https://github.com/line/line-bot-sdk-php){rel="[\"nofollow\"]"}
- [Ruby](https://github.com/line/line-bot-sdk-ruby){rel="[\"nofollow\"]"}

## 新機能が反映されるまでのプロセス

それでは、Messaging APIに新機能が追加されてから、SDKに反映されるまでのプロセスを説明します。新機能をいち早くSDKから利用できるようにするために、以下のようなプロセスでSDKを更新しています。

1. LINE OpenAPIの仕様が更新される
2. SDKとプルリクエストが自動生成される
3. SDKがリリースされる

それぞれのプロセスについて説明します。

### 1. LINE OpenAPIの仕様が更新される

Messaging APIに新機能が追加されると、それにあわせてGitHubの[LINE OpenAPI](https://github.com/line/line-openapi){rel="[\"nofollow\"]"}が更新されます。このリポジトリでは、Messaging APIの仕様がOpenAPI仕様に準拠した形式で定義されています。

### 2. SDKとプルリクエストが自動生成される

LINE OpenAPIの仕様が更新されると、各SDKのリポジトリでOpenAPI Generatorが実行され、ソースコードが自動生成されます。またリポジトリごとに、プルリクエストも自動で作成されます。

たとえばLINE OpenAPIの[メッセージに既読をつける機能を追加するプルリクエスト](https://github.com/line/line-openapi/pull/115){rel="[\"nofollow\"]"}には、以下のように自動で作成されたプルリクエストからの参照が貼られています。

![](/media/tips/2026/messaging-api-sdk.png){className="[\"border\",\"w-fix-480\"]"}

### 3. SDKがリリースされる

自動生成されたプルリクエストは、メンテナーによるレビューを経てマージされます。プルリクエストがマージされると、Maven CentralやPyPIといった各言語のパッケージレジストリに、新しいバージョンのSDKが公開されます。

なお、SDKが更新されたことについて、LINE Developersサイトでは通知は行っていません。このため、ご利用のSDKのリポジトリを［**Watch**］しておくことをおすすめします。

  :::admonition{title="SDKの動作に不具合等を見つけたら" type="tip"}
  もしSDKの動作に不具合等を見つけましたら、各SDKのリポジトリのIssuesからご報告ください。
  :::

## おわりに

以上のようにして新しいバージョンのSDKがリリースされたら、開発者のみなさんはSDKを通して、Messaging APIの新機能を利用できるようになります。SDKを利用して、よりたのしく開発していただけたらうれしいです！

  :::tags
  ---
  tags: messaging-api, line-developers-site
  lang: en
  section: tips
  ---
  :::
::
