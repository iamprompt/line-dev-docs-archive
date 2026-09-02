---
title: Deauthorize
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/common/deauthorize
__hash__: cEMHO77GC_M9qBvRfMpRNvfUJtD0xHaI0qDCwD49SVA
seo:
  description: ''
---

1. ユーザーがその連動アプリに対して認可していた権限を、[連動アプリに認可した権限を取り消す](/reference/line-login/#deauthorize)エンドポイントを用いて、ユーザーの代わりに取り消してください。
2. 退会や連携解除を行ったことで何が起きるのかを、その機能のそば、もしくは会員登録時や連携時にユーザーが同意する規約などに記載してください。

  - 例：本サービスを退会すると、退会したことがLINEヤフー株式会社に通知され、本サービスとLINEの連携は解除されます。
  - 例：この操作により、LINEヤフー株式会社に通知が行われ、本サービスとLINEの連携が解除されます。

次のようなユースケースにおいて、権限の取消が必要となります。

![アカウントを連携してから解除するまでの流れ](/media/line-login/development-guidelines/deauthorize-your-app-ja.webp)

ユーザーがLINEログインを組み込んだアプリにLINEアカウントでログインし、チャネル同意画面で[認可を行う](/docs/line-login/integrate-line-login/#authorization-process)と、LINEアプリの［**設定**］ > ［**アカウント**］ > ［**連動アプリ**］に対象アプリが表示されるようになります。ユーザーが連動アプリを退会した後も、認可した権限がそのままにならないよう、権限の取消を行ってください。

なお連動アプリに対して認可した権限をユーザー自身が取り消す方法については、『LINEログインドキュメント』の「[ユーザーによる連動アプリの管理について](/docs/line-login/managing-authorized-apps/)」を参照してください。
