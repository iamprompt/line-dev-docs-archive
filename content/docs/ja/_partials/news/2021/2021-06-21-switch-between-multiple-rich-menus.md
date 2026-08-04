---
title: 複数のリッチメニューを簡単に切り替えられるようになりました
navigation: true
description: Messaging APIに、リッチメニューを切り替える機能が追加されました。
meta: '{"date":"2021-06-21 01:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-06-21-switch-between-multiple-rich-menus
__hash__: MP9dkovwCatUCjOxAyinWY_F0lBDaAY1qKyErCO8s4E
seo:
  title: 複数のリッチメニューを簡単に切り替えられるようになりました
  description: Messaging APIに、リッチメニューを切り替える機能が追加されました。
---

Messaging APIに、リッチメニューを切り替える機能が追加されました。

:glossary-tooltip[[リッチメニューエイリアス](/glossary/#rich-menu-alias)]{glossary-id="rich-menu-alias"}を使うと、タブ切替のように、複数のリッチメニューを簡単に切り替えられます。詳しくは、『Messaging APIドキュメント』の「[複数のリッチメニューを切り替える](/docs/messaging-api/switch-rich-menus/)」を参照してください。

![タブ切替のように、複数のリッチメニューを簡単に切り替えられます](/media/messaging-api/rich-menu/switching-richmenu-ja.png){className="[\"w-fix-640\"]"}

この機能追加に伴い、新たに追加されたエンドポイント、アクション、オブジェクトは以下のとおりです。

### エンドポイント

- [リッチメニューエイリアスを作成する](/reference/messaging-api/#create-rich-menu-alias)
- [リッチメニューエイリアスを削除する](/reference/messaging-api/#delete-rich-menu-alias)
- [リッチメニューエイリアスを更新する](/reference/messaging-api/#update-rich-menu-alias)
- [リッチメニューエイリアスの情報を取得する](/reference/messaging-api/#get-rich-menu-alias-by-id)
- [リッチメニューエイリアスの一覧を取得する](/reference/messaging-api/#get-rich-menu-alias-list)

### その他

- アクションオブジェクトに[リッチメニュー切替アクション](/reference/messaging-api/#richmenu-switch-action)が追加されました
- [ポストバックイベント](/reference/messaging-api/#postback-event)に[リッチメニュー切替アクションの`postback.params`オブジェクト](/reference/messaging-api/#postback-params-object-for-richmenu-switch-action)が追加されました
