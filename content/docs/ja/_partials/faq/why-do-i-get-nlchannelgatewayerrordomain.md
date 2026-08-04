---
title: LINEログインをアプリで利用しようとするとNLChannelGatewayErrorDomainエラーが発生するのはなぜでしょうか？
navigation: true
description: >-
  NLChannelGatewayErrorDomainエラー（例：NLChannelGatewayErrorDomain Error 102）は、LINE
  Developersコンソールの設定が間違っていたり、不足している場合に発生します。
meta: >-
  {"date":"2017-07-24 00:00
  UTC","tags":"line-login","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/why-do-i-get-nlchannelgatewayerrordomain
__hash__: ibxEsUSh8nP7fnXC4J6SsmqquGpj5Q2Dtm8w2GevZcM
seo:
  title: LINEログインをアプリで利用しようとするとNLChannelGatewayErrorDomainエラーが発生するのはなぜでしょうか？
  description: >-
    NLChannelGatewayErrorDomainエラー（例：NLChannelGatewayErrorDomain Error
    102）は、LINE Developersコンソールの設定が間違っていたり、不足している場合に発生します。
---

`NLChannelGatewayErrorDomain`エラー（例：`NLChannelGatewayErrorDomain Error 102`）は、LINE Developersコンソールの設定が間違っていたり、不足している場合に発生します。

あなたのiOSアプリでこのエラーが発生した場合、以下を確認してください。

- iOSのバンドルIDが、LINE Developersコンソールのチャネル設定にある［**LINEログイン設定**］タブで正しく登録されていますか？
- iOSユニバーサルリンクが、LINE Developersコンソールのチャネル設定にある［**LINEログイン設定**］タブで正しく登録されていますか？
- ログインに使用されているLINEアカウントが、LINE Developersコンソールの［**権限管理**］ページに正しく登録されていますか？
