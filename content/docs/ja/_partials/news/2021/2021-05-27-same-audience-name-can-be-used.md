---
title: Messaging APIで既存と同じ名前のオーディエンスが作れるようになりました
navigation: true
description: Messaging APIには、今まで「既存のオーディエンスと同じ名前は設定できない」という制限がありました。この制限が解除されたことをお知らせします。
meta: '{"date":"2021-05-27 00:00 UTC","tags":"Messaging API","locale":"ja"}'
path: /ja/_partials/news/2021/2021-05-27-same-audience-name-can-be-used
__hash__: Ki0CCOgncMRx53jTNagbt2fegfKupQsHkAZnlIn0h2k
seo:
  title: Messaging APIで既存と同じ名前のオーディエンスが作れるようになりました
  description: Messaging APIには、今まで「既存のオーディエンスと同じ名前は設定できない」という制限がありました。この制限が解除されたことをお知らせします。
---

Messaging APIには、今まで「既存のオーディエンスと同じ名前は設定できない」という制限がありました。この制限が解除されたことをお知らせします。

この制限解除により、たとえばすでに「audienceGroupName_01」という名前のオーディエンスが存在していた場合でも、同じ名前で別のオーディエンスが作れるようになりました。作成したそれぞれのオーディエンスは、レスポンスで渡されるオーディエンスIDで判別できます。

### 影響するエンドポイント

- [クリックリターゲティング用のオーディエンスを作成する](/reference/messaging-api/#create-click-audience-group)
- [インプレッションリターゲティング用のオーディエンスを作成する](/reference/messaging-api/#create-imp-audience-group)
- [ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file)
- [ユーザーIDアップロード用のオーディエンスを作成する（JSON指定）](/reference/messaging-api/#create-upload-audience-group)
- [オーディエンスの名前を更新する](/reference/messaging-api/#set-description-audience-group)

オーディエンスについて詳しくは、『Messaging APIドキュメント』の「[オーディエンスを使う](/docs/messaging-api/using-audience/)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
