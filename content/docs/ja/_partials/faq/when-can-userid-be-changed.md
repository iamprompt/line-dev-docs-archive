---
title: 一度発行されたユーザーIDが何かのタイミングで変わることはありますか？
navigation: true
description: >-
  ユーザーIDはチャネルのプロバイダーごとに発行されます。あるプロバイダー配下で発行されたユーザーID（userId）は、ユーザーがLINEアカウントを削除しない限り変わることはありません。
meta: >-
  {"date":"2019-11-25 00:00 UTC","tags":"line-platform, line-login, liff,
  line-mini-app, messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/when-can-userid-be-changed
__hash__: O7sSTXoME4Tg52ad8pCvavO-03R4sYvpI6WlBtxTU4Y
seo:
  title: 一度発行されたユーザーIDが何かのタイミングで変わることはありますか？
  description: >-
    ユーザーIDはチャネルのプロバイダーごとに発行されます。あるプロバイダー配下で発行されたユーザーID（userId）は、ユーザーがLINEアカウントを削除しない限り変わることはありません。
---

ユーザーIDはチャネルのプロバイダーごとに発行されます。あるプロバイダー配下で発行されたユーザーID（userId）は、ユーザーがLINEアカウントを削除しない限り変わることはありません。

ユーザーが機種変更をしてLINEアカウントの引き継ぎを行った場合も、**ユーザーIDは変わりません**。

LINEアカウントを削除したユーザーが、同じ電話番号で再度LINEアカウントを作りなおした場合は、**ユーザーIDが変わります**。

ユーザーIDの説明は、「[ユーザーID、グループID、トークルームIDとはどのような値ですか？](/faq/#what-are-userid-groupid-and-roomid)」も参照してください。
