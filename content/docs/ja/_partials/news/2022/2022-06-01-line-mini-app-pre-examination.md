---
title: 日本において、LINEミニアプリの事前審査がなくなり、より開発を始めやすくなりました
navigation: true
description: 日本において、LINEミニアプリを公開するまでのプロセスについて、次の2つの変更を行いました。
meta: '{"date":"2022-06-01 00:00 UTC","tags":"line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-06-01-line-mini-app-pre-examination
__hash__: tBmtrLsbbGOVpek_QI1rPYFeNmbFzW4n6BXxccvvv8o
seo:
  title: 日本において、LINEミニアプリの事前審査がなくなり、より開発を始めやすくなりました
  description: 日本において、LINEミニアプリを公開するまでのプロセスについて、次の2つの変更を行いました。
---

日本において、LINEミニアプリを公開するまでのプロセスについて、次の2つの変更を行いました。

1. 事前審査を撤廃しました
2. [アイコンのPSDファイル](/docs/line-mini-app/design/line-mini-app-icon/)の提出を不要としました

サービスをLINEミニアプリとして提供することで、ユーザーはアプリをダウンロードすることなくサービスを利用できます。また、LINEミニアプリ上で提供するサービスの通知を[サービスメッセージ](/docs/line-mini-app/discover/custom-features/#service-messages)として無料で送信できるなど、ユーザー体験の向上に大きくつながります。

LINEミニアプリを公開するまでのプロセスとして、これまでは開発前に行われる事前審査（LINEミニアプリ開発プログラム）と、LINEミニアプリの公開前に行われるリリース審査の2つがありました。このうち、今回の変更により、事前審査が撤廃されました。

またあわせて、これまで必須だったアイコンのPSDファイルの提出が不要となりました。これらの変更により、LINEミニアプリの開発をより始めやすくなりました。

::admonition{title="LINEミニアプリチャネルの作成について" type="tip"}
サービスを提供する地域が日本であるにもかかわらず、LINEミニアプリチャネルを作成できない場合は、以下の方法をお試しください。

- ビジネスアカウントにより[LINE Developersコンソール](/console/)にログインしている場合、LINEアカウントと連携してください。ビジネスアカウントとLINEアカウントの連携について詳しくは、『LINE Developersコンソールドキュメント』の「[ビジネスアカウントにLINEアカウントを連携させる](/docs/line-developers-console/login-account/#link-business-account-with-line-account)」を参照してください。
::

LINEミニアプリの開発および公開までの流れについて詳しくは、「[作業の流れ](/docs/line-mini-app/quickstart/#overall-process)」を参照してください。

### LINEミニアプリ開発に関する注意事項

LINEミニアプリにおける公開までのプロセスの変更に関して、次の3つに注意してください。

1. [チャネル説明に正しいサービス内容を記載してください](#mini-channel-description-20220601)
2. [LINEミニアプリポリシーを確認してください](#mini-policy-20220601)
3. [アイコンはガイドラインに従って作成してください](#mini-guideline-20220601)

#### 1. チャネル説明に正しいサービス内容を記載してください

事前審査の撤廃に伴い、企画書の提出が不要となりました。このため、リリース審査においては、サービスの内容を把握するために、[LINE Developersコンソール](/console/)の［**チャネル基本設定**］タブにある［**チャネル説明**］を確認します。この［**チャネル説明**］には、正しいサービス内容を記載してください。

![チャネル説明](/media/line-mini-app/line-mini-app-channel-description-ja.png){className="[\"border\",\"w-fix-640\"]"}

チャネル説明について詳しくは、「[チャネル説明の入力について](/docs/line-mini-app/discover/console-guide/#channel-description)」を参照してください。

#### 2. LINEミニアプリポリシーを確認してください

リリース審査では、LINEミニアプリが公開できるかどうかを確認します。リリース審査の結果、LINEミニアプリが公開できない場合もあるため、LINEミニアプリの開発を検討する際は、[LINEミニアプリポリシー](/docs/line-mini-app/submit/line-mini-app-policy/)を確認してください。

また、LINEミニアプリの企画や審査、開発などについて、よくお問い合わせいただく内容は、『LINE for Business』の「[LINEミニアプリ](https://help.linebiz.com/lineadshelp/s/topic/0TO5i000000DxxsGAC/line%E3%83%9F%E3%83%8B%E3%82%A2%E3%83%97%E3%83%AA?language=ja){rel="[\"nofollow\"]"}」を参照してください。

::admonition{title="LINEミニアプリの公開に関するお問い合わせ窓口" type="tip"}
上記を確認した上で、検討中のサービスがLINEミニアプリとして公開できるものかどうか判断がつかない場合は、『LINE for Business』の「[LINEミニアプリを開発する前に、自社のサービスの企画内容がリリース可能な対象か確認できる方法はありますか。](https://help.linebiz.com/lineadshelp/s/article/L000002024?language=ja){rel="[\"nofollow\"]"}」を参照してください。

なお、上記のページは日本においてLINEミニアプリを公開する方のみを対象としています。また、開発予定のLINEミニアプリの企画内容が公開可能なものかどうかを確認するためにのみ利用できます。
::

#### 3. アイコンはガイドラインに従って作成してください

LINEミニアプリにおいて、これまで必須だったアイコンのPSDファイルの提出が不要となりました。

PSDファイルの提出は必須ではなくなりますが、引き続きアイコンのテンプレートを利用した上で、ガイドラインに従い、ユーザーが認識しやすいアイコンを作成してください。

アイコンのテンプレートやガイドラインについて詳しくは、「[LINEミニアプリのアイコンを作成する](/docs/line-mini-app/design/line-mini-app-icon/)」を参照してください。
