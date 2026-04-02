---
title: LIFF v2にliff.getLineVersion()およびliff.idが追加されました
navigation: true
description: LIFF v2に、liff.getLineVersion()メソッドおよびliff.idプロパティが追加されました。
meta: '{"date":"2020-04-30 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2020/2020-04-30-liff-get-line-version-and-id-released
__hash__: 7FfvfKiai9Vkh6xJYgN1QlaxLn5cizL9RvjfmcOUZ4k
seo:
  title: LIFF v2にliff.getLineVersion()およびliff.idが追加されました
  description: LIFF v2に、liff.getLineVersion()メソッドおよびliff.idプロパティが追加されました。
---

LIFF v2に、`liff.getLineVersion()`メソッドおよび`liff.id`プロパティが追加されました。

`liff.getLineVersion()`を使用すると、ユーザーのLINEバージョンを取得できます。

ユーザーがLIFFブラウザでLIFFアプリを開くと、ユーザーのLINEバージョンが文字列で返されます。
ユーザーが外部ブラウザでLIFFアプリを開くと、 `null`が返されます。

`liff.id`は、 `liff.init()`に渡したLIFFアプリID（`String`型）を保持するプロパティです。

詳しくは、『LIFF v2 APIリファレンス』の「[liff.getLineVersion()](/reference/liff/#get-line-version)」および「[liff.id](/reference/liff/#id)」を参照してください。
