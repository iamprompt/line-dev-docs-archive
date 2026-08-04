---
title: LIFF v2にliff.shareTargetPicker()およびliff.readyが追加されました
navigation: true
description: LIFF v2に、liff.shareTargetPicker()およびliff.readyが追加されました。
meta: '{"date":"2020-03-03 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2020/2020-03-03-add-share-target-picker-and-ready
__hash__: DUv16e9c5V7NdZqPsZ3Gv_UWrk-qhFfqUnyL2QRBF4M
seo:
  title: LIFF v2にliff.shareTargetPicker()およびliff.readyが追加されました
  description: LIFF v2に、liff.shareTargetPicker()およびliff.readyが追加されました。
---

LIFF v2に、`liff.shareTargetPicker()`および`liff.ready`が追加されました。

### liff.shareTargetPicker()

ターゲットピッカー（グループまたは友だちを選択する画面）を表示し、ターゲットピッカーで選択した相手に、開発者が作成したメッセージを送信するメソッドが追加されました。このメッセージは、ユーザーが送信したかのように、グループまたは友だちに表示されます。

![target picker](/media/news/share-target-picker.png){className="[\"border\"]"}

詳しくは、『LIFFドキュメント』の「[ユーザーの友だちにメッセージを送信する](/docs/liff/developing-liff-apps/#share-target-picker)」を参照してください。

::admonition{title="ターゲットピッカーの動作環境について" type="note"}
ターゲットピッカーは、iOS版とAndroid版のLINE 10.3.0以降でサポートされます。
::

### liff.ready

LIFFアプリ起動後、[`liff.init()`](/reference/liff/#initialize-liff-app)の実行が初めて終了したときにresolveする`Promise`オブジェクトを利用できるようになりました。`liff.ready`を利用すると、`liff.init()`の終了を待って、任意の処理を実行できます。

詳しくは、『LIFF v2 APIリファレンス』の「[liff.ready](/reference/liff/#ready)」を参照してください。
