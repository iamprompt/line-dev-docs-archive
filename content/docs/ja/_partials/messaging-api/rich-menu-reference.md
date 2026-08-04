---
title: Rich Menu Reference
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/rich-menu-reference
__hash__: '-38o1IXMPMjttWYn3Gx1SxVRXQvStnL-sHl5vNvcPtk'
seo:
  description: ''
---

## リッチメニューの構造

リッチメニューは以下のどちらかのオブジェクトで表されます。

- リッチメニューIDを含まない[リッチメニューオブジェクト](#rich-menu-object)。[リッチメニューの作成時](#create-rich-menu)にこのオブジェクトを使用します。
- リッチメニューIDを含む[リッチメニューレスポンスオブジェクト](#rich-menu-response-object)。[リッチメニューの取得時](#get-rich-menu)または[リッチメニューの配列の取得時](#get-rich-menu-list)にこのオブジェクトが返されます。

これらのオブジェクトは[領域オブジェクト](#area-object)と[アクションオブジェクト](#action-objects)から構成されます。
