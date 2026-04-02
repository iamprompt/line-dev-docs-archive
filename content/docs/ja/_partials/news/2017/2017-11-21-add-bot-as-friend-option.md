---
title: LINEログインチャネルにボットをリンクできるようになりました
navigation: true
description: >-
  ユーザーがLINEログインを使ってあなたのアプリにログインするときに、ボットを友だち追加するオプションを表示できるようになりました。この機能を有効にするには、LINE
  Developersコンソールの［このチャネルにリンクされたボット］オプションを使ってLINEログインアカウントにボットをリンクしてから、LINEログインの認可URLにbot_promptクエリパラメータを含めます。
meta: >-
  {"date":"2017-11-21 00:00 UTC","tags":"Docs, Messaging API, LINE Login, Social
  API","locale":"ja"}
path: /ja/_partials/news/2017/2017-11-21-add-bot-as-friend-option
__hash__: 6znck_bQXoI59J332o240tvO1Ua47iUxQLk7p8Av1QY
seo:
  title: LINEログインチャネルにボットをリンクできるようになりました
  description: >-
    ユーザーがLINEログインを使ってあなたのアプリにログインするときに、ボットを友だち追加するオプションを表示できるようになりました。この機能を有効にするには、LINE
    Developersコンソールの［このチャネルにリンクされたボット］オプションを使ってLINEログインアカウントにボットをリンクしてから、LINEログインの認可URLにbot_promptクエリパラメータを含めます。
---

ユーザーがLINEログインを使ってあなたのアプリにログインするときに、ボットを友だち追加するオプションを表示できるようになりました。この機能を有効にするには、[LINE Developersコンソール](/console/)の［このチャネルにリンクされたボット］オプションを使ってLINEログインアカウントにボットをリンクしてから、LINEログインの認可URLに`bot_prompt`クエリパラメータを含めます。

この機能について詳しくは、「[ボットをLINEログインのチャネルにリンクする](/docs/line-login/link-a-bot/)」を参照してください。

また、ボットとユーザーの友だち関係を取得するための、Social APIの新しいリソースをリリースしました。`https://api.line.me/friendship/v1/status`にGETリクエストを送信すると、ユーザーがボットを友だち追加しているかどうかを確認できます。

このリソースについて詳しくは、APIリファレンスの「[ボットとの友だち関係を取得する](/reference/line-login/#get-friendship-status)」を参照してください。

注：現在この機能は企業ユーザー様にはご利用いただけません。この機能のご利用をご希望の企業ユーザー様は、LINEの貴社担当者までお問い合わせください。
