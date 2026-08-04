---
title: LINE広告やLINEポイントADで作成したオーディエンスをMessaging APIから利用できるようになりました
navigation: true
description: LINE広告やLINEポイントADで作成、共有されたオーディエンスを、Messaging APIからも利用できるようになりました。
meta: '{"date":"2021-01-27 01:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-01-27-activate-audience-api
__hash__: _WRj--fiMYwysxZrxyTHJL0Em-uchmaU84aYS1maNFo
seo:
  title: LINE広告やLINEポイントADで作成したオーディエンスをMessaging APIから利用できるようになりました
  description: LINE広告やLINEポイントADで作成、共有されたオーディエンスを、Messaging APIからも利用できるようになりました。
---

[LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}や[LINEポイントAD](https://www.linebiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"}で作成、共有されたオーディエンスを、Messaging APIからも利用できるようになりました。

| 新たにMessaging APIから利用できるようになったオーディエンス | 作成方法                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| ユーザーIDアップロード用のオーディエンス                | [LINEポイントAD](https://www.linebiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} |
| ウェブトラフィックオーディエンス                     | [LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}                           |
| アプリイベントオーディエンス                       | [LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}                           |
| 動画視聴オーディエンス                          | [LINE広告](https://admanager.line.biz/){rel="[\"nofollow\"]"}                           |

::admonition{title="LINE広告で作成したオーディエンスを共有する方法" type="tip"}
LINE広告の管理画面で作成したオーディエンスを「共有」する方法については、『LINE for Business』の「[オーディエンスを使って配信する](https://www.linebiz.com/jp/manual/line-ads/tracking_006/){rel="[\"nofollow\"]"}」を参照してください。
::

なおLINE広告やLINEポイントADで作成したオーディエンスをMessaging APIから利用するには、今回新たに追加された「オーディエンスを有効化する」エンドポイントを使って、事前にオーディエンスを有効化しておく必要があります。詳しくは、『Messaging APIリファレンス』の「[オーディエンスを有効化する](/reference/messaging-api/#activate-audience-group)」を参照してください。

この変更に伴い、Messaging APIの次のエンドポイントにおいて、いくつかのプロパティが追加され、オーディエンスが有効かどうかや、オーディエンスを作成した広告アカウント名などが確認できるようになりました。

- [オーディエンスの情報を取得する](/reference/messaging-api/#get-audience-group)
- [複数のオーディエンスの情報を取得する](/reference/messaging-api/#get-audience-groups)
