---
title: エラーを制御する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /ja/docs/line-login-sdks/android-sdk/handling-errors
__hash__: DpQ2VgTT5_oEzrY-CDSZUv-0fzDXqE1u0QQFgIF3URo
seo:
  title: エラーを制御する
  description: null
---

# :page-title

:markdown-controls`LineLoginResult`オブジェクトの`getResponseCode()`メソッドは、以下のレスポンスコードのいずれかを返します。

| レスポンスコード                   | 説明                                                     |
| -------------------------- | ------------------------------------------------------ |
| SUCCESS                    | ログインに成功しました。                                           |
| CANCEL                     | ユーザーがログインを中断したため、ログインに失敗しました。                          |
| AUTHENTICATION_AGENT_ERROR | ユーザーがアプリの利用条件の同意画面で［キャンセル］または［戻る］をタップしたため、ログインに失敗しました。 |
| SERVER_ERROR               | サーバー側のエラーにより、ログインに失敗しました。                              |
| NETWORK_ERROR              | SDKがLINEプラットフォームへ接続できなかったため、ログインに失敗しました。               |
| INTERNAL_ERROR             | 原因不明のエラーにより、ログインに失敗しました。                               |
