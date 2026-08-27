---
title: LINE公式アカウントの利用を停止する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/messaging-api/stop-using-line-official-account
__hash__: CyxhbndteuDnkjPj-FtEnCBxhffXcho75C_UrQDPkc0
seo:
  title: LINE公式アカウントの利用を停止する
  description: null
---

# :page-title

:markdown-controls::admonition{title="Messaging APIの利用を停止する" type="tip"}
Messaging APIチャネルに紐づいているLINE公式アカウントの利用は継続したいが、Messaging APIの利用は停止したい場合は、「[Messaging APIの利用を停止する](/docs/messaging-api/stop-using-messaging-api/)」を参照してください。
::

Messaging APIチャネルと紐づいているLINE公式アカウントの利用を停止するには、以下の手順に従って、LINE公式アカウントを削除してください。Messaging APIチャネルと紐づいているLINE公式アカウントを削除すると、Messaging APIチャネルも削除されます。

1. [LINE Developersコンソール](/console/)で、削除するMessaging APIチャネルを選択します。
2. ［**チャネル基本設定**］タブが表示されます。「チャネルの削除」セクションにある［**削除**］をクリックします。

![](/media/messaging-api/stop-using-line-official-account/delete-this-channel-ja.png){className="[\"border\",\"w-fix-720\"]"}

1. 「このチャネルを削除しますか？」モーダルが表示されます。［**LINE Official Account Managerを表示**］をクリックします。

![](/media/messaging-api/stop-using-line-official-account/display-line-official-account-manager-ja.png){className="[\"border\",\"w-fix-720\"]"}

1. LINE Official Account Managerが別タブで開かれ、「LINE公式アカウントを削除」画面が表示されます。以降の手順は、LINE Official Account Manager上で操作します。［**上記の注意事項を理解して、このLINE公式アカウントの削除に同意します。**］にチェックし、［**アカウントを削除**］をクリックします。

![](/media/messaging-api/stop-using-line-official-account/delete-account-ja.webp){className="[\"border\",\"w-fix-720\"]"}

::admonition
---
title: 「LINE公式アカウントを削除」画面ではなく「403 Forbidden」が表示される
type: note
---
LINE公式アカウントを削除するには、LINE公式アカウントの管理者権限が必要です。LINE公式アカウントの権限は、[LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}で設定できます。詳しくは、『LINEヤフー for Business』の「[権限設定](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings_permission/){rel="[\"nofollow\"]"}」および「[【LINE公式アカウント】管理者の追加・変更](https://help.linebiz.com/lineadshelp/s/article/L000001104?language=ja){rel="[\"nofollow\"]"}」を参照してください。
::

1. 「LINE公式アカウントを削除」モーダルが表示されます。［**削除**］をクリックすると、LINE公式アカウントが削除され、LINE公式アカウントに紐づくMessaging APIチャネルも削除されます。

![](/media/messaging-api/stop-using-line-official-account/delete-ja.png){className="[\"border\",\"w-fix-720\"]"}
