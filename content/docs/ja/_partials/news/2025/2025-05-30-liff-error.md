---
title: LIFF SDKのエラーを識別する際は、エラーコードとエラーメッセージの両方を参照してください
navigation: true
description: >-
  LIFF
  SDKのエラーはLiffErrorオブジェクトで返されます。LiffErrorオブジェクトの各プロパティの値を参照することで、エラーを識別できます。このLIFF
  SDKのエラーについて、エラーメッセージ（LiffErrorオブジェクトのmessageプロパティの値）の完全一致で識別している実装が見受けられます。
meta: '{"date":"2025-05-30 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2025/2025-05-30-liff-error
__hash__: BgGoZhanxsHU_hVLnzc67c_Ft70tVxPS_S7Al_HYJw4
seo:
  title: LIFF SDKのエラーを識別する際は、エラーコードとエラーメッセージの両方を参照してください
  description: >-
    LIFF
    SDKのエラーはLiffErrorオブジェクトで返されます。LiffErrorオブジェクトの各プロパティの値を参照することで、エラーを識別できます。このLIFF
    SDKのエラーについて、エラーメッセージ（LiffErrorオブジェクトのmessageプロパティの値）の完全一致で識別している実装が見受けられます。
---

[LIFF SDKのエラー](/reference/liff/#liff-errors)は`LiffError`オブジェクトで返されます。`LiffError`オブジェクトの各プロパティの値を参照することで、エラーを識別できます。このLIFF SDKのエラーについて、エラーメッセージ（`LiffError`オブジェクトの`message`プロパティの値）の完全一致で識別している実装が見受けられます。

エラーメッセージは予告なく変更されることがあるため、LIFF SDKのエラーをエラーメッセージの完全一致で識別すると、LIFFアプリが正常に動作しなくなる可能性があります。LIFF SDKのエラーを識別する際は、エラーメッセージが変更されてもLIFFアプリが正常に動作するよう、エラーコード（`LiffError`オブジェクトの`code`プロパティの値）とエラーメッセージ（`LiffError`オブジェクトの`message`プロパティの値）の両方を参照してください。

なお、エラーコードによってエラーを一意に識別できるよう、将来的に改善する予定です。
