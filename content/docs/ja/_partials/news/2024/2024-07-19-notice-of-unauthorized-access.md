---
title: ビジネスアカウントへの不正アクセスの注意喚起
navigation: true
description: 現在、「ビジネスアカウント」を対象とした、パスワードリスト攻撃によるものと思われる不正アクセスが発生していることを確認しております。
meta: '{"date":"2024-07-19 00:00 UTC","tags":"outage-report, console","locale":"ja"}'
path: /ja/_partials/news/2024/2024-07-19-notice-of-unauthorized-access
__hash__: TD9CriTWgxyXpyQTwPu2d_5hDP1wEVibaxANibZ-TyM
seo:
  title: ビジネスアカウントへの不正アクセスの注意喚起
  description: 現在、「ビジネスアカウント」を対象とした、パスワードリスト攻撃によるものと思われる不正アクセスが発生していることを確認しております。
---

現在、「ビジネスアカウント」を対象とした、パスワードリスト攻撃によるものと思われる不正アクセスが発生していることを確認しております。

パスワードリスト攻撃とは、攻撃者が何らかの方法で入手したIDとパスワードのリストを用いて、別のサービスにログインを試みる攻撃手法です。ユーザーが複数のサービスで同じIDとパスワードを使い回していた場合、第三者による不正なログインが可能となり得ます。

心当たりのないログイン通知（`LINE Business ID login notification`という件名のメール）が届いた場合は、第三者による不正アクセスの可能性があるため、パスワードの変更をお願いいたします。

また、アカウントを安全に保つため、他のサービスと同じIDとパスワードの組み合わせを使用している場合はパスワードを異なるものに変更すること、およびLINEビジネスIDの2段階認証を利用されることをお勧めします。2段階認証はLINEビジネスIDの[設定画面](https://account.line.biz/profile?redirectUri=https%3A%2F%2Fdevelopers.line.biz%2Fconsole%2F){rel="[\"nofollow\"]"}にて設定できます。

今回の不正アクセスは、「[ビジネスアカウントでのログイン](/docs/line-developers-console/login-account/#business-account)」においてのみ確認されています。LINEビジネスIDにメールアドレスを登録しておらず、[LINEアカウントでのログイン](/docs/line-developers-console/login-account/#line-account)のみを利用されている方への影響は確認されておりません。
