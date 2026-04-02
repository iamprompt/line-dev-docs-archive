---
title: 提供を一時停止しているLIFF SDKのAPIを使用している場合はコードを修正してください
navigation: true
description: 2019年11月29日に告知したとおり、iOS版のLINE 9.19.0以降では、以下のAPIは、技術的な問題があり提供を一時停止しています。
meta: '{"date":"2020-01-14 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2020/2020-01-14-confirm-existence-of-some-liff-apis
__hash__: qptQ0Kc5wArAJfnNjjghnkwhDVjuCIMmEAREsJPNnxA
seo:
  title: 提供を一時停止しているLIFF SDKのAPIを使用している場合はコードを修正してください
  description: 2019年11月29日に告知したとおり、iOS版のLINE 9.19.0以降では、以下のAPIは、技術的な問題があり提供を一時停止しています。
---

[2019年11月29日に告知](/news/2019/11/29/liff-functions-suspended/)したとおり、iOS版のLINE 9.19.0以降では、以下のAPIは、技術的な問題があり提供を一時停止しています。

- liff.scanCode()
- liff.bluetooth.*

さらに本日から、**iOS版のLINE 9.19.0以降を使用するエンドユーザーが**LIFFアプリを利用した場合は、それぞれのAPIは以下のように動作します。

| API              | 動作                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------- |
| liff.scanCode()  | APIが`undefined`になる                                                                    |
| liff.bluetooth.* | `liff.initPlugins(['bluetooth'])`を呼び出したときに、Bluetoothプラグインの初期化に失敗し、`FORBIDDEN`エラーが返される |

`liff.scanCode()`を利用する場合は、上記のケースも考慮し、関数の存在を確認することをお勧めします。

修正前：

```text
liff.scanCode().then(result => {
  // result = { value: '' }
});
```

修正後：

```text
if (liff.scanCode) {
  liff.scanCode().then(result => {
    // result = { value: '' }
  });
}
```

詳しくは、『[LIFF v2 APIリファレンス](/reference/liff/)』を参照してください。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
