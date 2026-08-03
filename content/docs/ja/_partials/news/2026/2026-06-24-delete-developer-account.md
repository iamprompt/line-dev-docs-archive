---
title: LINE Developersコンソールで開発者アカウントを削除できるようになりました
navigation: true
description: LINE Developersコンソールで、開発者アカウントを削除できるようになりました。
meta: '{"date":"2026-06-24 00:00 UTC","tags":"console","locale":"ja"}'
path: /ja/_partials/news/2026/2026-06-24-delete-developer-account
__hash__: vu2GXZ9MkSzQW5Ubx6mnbKctrej2qOQdl0I-AkXXnKs
seo:
  title: LINE Developersコンソールで開発者アカウントを削除できるようになりました
  description: LINE Developersコンソールで、開発者アカウントを削除できるようになりました。
---

[LINE Developersコンソール](/console/)で、[開発者アカウント](/docs/line-developers-console/login-account/#register-as-developer)を削除できるようになりました。

開発者アカウントを削除すると、その開発者アカウントではLINE Developersコンソールにログインできなくなります。なお、開発者アカウントに紐づく[ビジネスID](https://help2.line.me/business_id/web/?lang=ja&contentId=20011264){rel="[\"nofollow\"]"}やLINEアカウントは削除されません。

::admonition{title="削除した開発者アカウントは元に戻せません" type="warning"}
一度削除した開発者アカウントは元に戻せません。そのため、削除した開発者アカウントが権限を持っていたプロバイダーやチャネルに他の開発者アカウントがアクセスできない場合、プロバイダーやチャネルの情報確認や設定変更ができなくなります。

開発者アカウントを削除する前に、運用中のサービスに影響が出ないよう、必要な権限を他の開発者アカウントに付与してください。
::

### 開発者アカウントを削除する方法

開発者アカウントは、LINE Developersコンソールの[プロフィール画面](/console/profile)にある「開発者アカウントの削除」セクションで削除できます。

なお、開発者アカウントを削除するには、自身がAdmin権限を持つプロバイダーやチャネルにおいて、他にもAdmin権限を持つ開発者アカウントが存在している必要があります。

詳しくは、『LINE Developersコンソールドキュメント』の「[開発者アカウントを削除する](/docs/line-developers-console/delete-developer-account/)」を参照してください。
