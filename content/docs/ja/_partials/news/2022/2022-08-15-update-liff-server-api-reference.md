---
title: LIFFのサーバーAPIで利用できるプロパティが増えました
navigation: true
description: LIFFのサーバーAPIで、以下のプロパティを利用できるようになりました。
meta: '{"date":"2022-08-15 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-08-15-update-liff-server-api-reference
__hash__: spRq79MxYyE_l5SA1odT2_L6fTMWDGSZ9jBcnUFbygQ
seo:
  title: LIFFのサーバーAPIで利用できるプロパティが増えました
  description: LIFFのサーバーAPIで、以下のプロパティを利用できるようになりました。
---

LIFFのサーバーAPIで、以下のプロパティを利用できるようになりました。

- `features.qrCode`
- `scope`
- `botPrompt`

これにより、従来は[LINE Developersコンソール](/console/)でしか設定できなかった、二次元コードリーダーやスコープ、ボットリンク機能を、LIFFのサーバーAPIからでも設定できるようになりました。

また、[すべてのLIFFアプリを取得する](/reference/liff-server/#get-all-liff-apps)エンドポイントのレスポンスに、これらのプロパティが含まれることで、LIFFアプリごとの設定状況を確認できるようになりました。

詳しくは、『[サーバーAPIリファレンス](/reference/liff-server/)』を参照してください。
