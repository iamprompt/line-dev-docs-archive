---
title: liff.shareTargetPicker() and liff.ready added to LIFF v2
navigation: true
description: We added liff.shareTargetPicker() and liff.ready to LIFF v2.
meta: '{"date":"2020-03-03 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2020/2020-03-03-add-share-target-picker-and-ready
__hash__: fy4I6-Z2nEv7mYVVtBto6mGa0RfrWqQXh3Pq9LYvADI
seo:
  title: liff.shareTargetPicker() and liff.ready added to LIFF v2
  description: We added liff.shareTargetPicker() and liff.ready to LIFF v2.
---

We added `liff.shareTargetPicker()` and `liff.ready` to LIFF v2.

### liff.shareTargetPicker()

Execute the `liff.shareTargetPicker()` method to display the target picker (screen for selecting a group or friend) and send the message created by the developer to the selected target. This message appears to your group or friends as if you had sent it.

![target picker](/media/news/share-target-picker.png){className="[\"border\"]"}

For more information, see [Sending messages to a user's friend (share target picker)](/docs/liff/developing-liff-apps/#share-target-picker) in the LIFF documentation.

::admonition{title="Target picker operating environment" type="note"}
Target picker is supported by LINE 10.3.0 for iOS and Android.
::

### liff.ready

With `liff.ready`, you can get the `Promise` object that resolves when you run [`liff.init()`](/reference/liff/#initialize-liff-app) for the first time after starting the LIFF app. If you use `liff.ready`, you can execute any process after the completion of `liff.init()`.

For more information, see [liff.ready](/reference/liff/#ready) in the LIFF v2 API reference.
