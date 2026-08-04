---
title: ユーザーID、グループID、トークルームIDとはどのような値ですか？
navigation: true
description: LINEプラットフォームで使用するユーザーIDは、ユーザーを識別するために利用する識別子であり、以下のような特徴を持ちます。
meta: >-
  {"date":"2018-01-09 00:00 UTC","tags":"line-platform, line-login, liff,
  line-mini-app, messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/what-are-userid-groupid-and-roomid
__hash__: Dal9wSv46oFpTzbSbzprC0mmiDyI-7KcvxMX8GIQpcA
seo:
  title: ユーザーID、グループID、トークルームIDとはどのような値ですか？
  description: LINEプラットフォームで使用するユーザーIDは、ユーザーを識別するために利用する識別子であり、以下のような特徴を持ちます。
---

LINEプラットフォームで使用するユーザーIDは、ユーザーを識別するために利用する識別子であり、以下のような特徴を持ちます。

- LINEでの友だち検索に利用するIDとは異なり、ユーザーではなくLINEプラットフォームが発行する値です。
- チャネルのプロバイダーごとに異なるユーザーIDが発行されます。チャネルのプロバイダーが同じであれば、サービスの種類（LINEログインやMessaging API）にかかわらず、同じユーザーIDが割り当てられます。
- ユーザーIDの値は、`U[0-9a-f]{32}`の正規表現にマッチする文字列になります。

[グループトーク](/docs/messaging-api/group-chats/#group)で使用するグループIDと、[複数人トーク](/docs/messaging-api/group-chats/#room)で使用するトークルームIDも、グループトークや複数人トークを識別するためにLINEプラットフォームが発行する識別子です。

グループIDの値は`C[0-9a-f]{32}`、トークルームIDの値は`R[0-9a-f]{32}`の正規表現にマッチする文字列になります。
