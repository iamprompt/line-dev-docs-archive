---
title: 意図したリッチメニューが表示されないのはなぜですか？
navigation: true
description: 意図したリッチメニューが表示されない理由はいくつか考えられます。
meta: >-
  {"date":"2025-05-19 00:00 UTC","tags":"line-official-account,
  messaging-api","priority":1000,"locale":"ja"}
path: /ja/_partials/faq/why-isnt-the-intended-rich-menu-displayed
__hash__: 0zRBA5diMfkGy9GScUD_zWuWI7A8TwjanXIdPTVy9Qs
seo:
  title: 意図したリッチメニューが表示されないのはなぜですか？
  description: 意図したリッチメニューが表示されない理由はいくつか考えられます。
---

意図したリッチメニューが表示されない理由はいくつか考えられます。

- 表示優先度がより高いリッチメニューが設定されている  
リッチメニューは、設定した日時ではなく表示優先度に基づいて表示されます。たとえば、ユーザー単位のリッチメニューを設定していたとします。その後にデフォルトのリッチメニューを設定した場合は、デフォルトのリッチメニューよりも優先順位が高いユーザー単位のリッチメニューが表示されます。  
詳しくは、『Messaging APIドキュメント』の「[意図したリッチメニューが表示されないときは](/docs/messaging-api/switch-rich-menus/#when-the-intended-rich-menu-isnt-displayed)」を参照してください。
- ユーザーがLINE公式アカウントをブロックした後、ブロック解除した  
ユーザー単位のリッチメニューをリンクした後に、ユーザーがそのLINE公式アカウントをブロックし、ブロック解除した場合は、[リッチメニューとユーザーのリンクは解除](/reference/messaging-api/#unlink-rich-menu-from-user)されます。
- 開発者がリッチメニューを削除した  
開発者がユーザー単位のリッチメニューを削除すると、そのリッチメニューは表示されなくなります。  
デフォルトのリッチメニューが設定されている場合は、デフォルトのリッチメニューが代わりに表示されます。デフォルトのリッチメニューが設定されていない場合は、リッチメニュー自体が表示されなくなります。
