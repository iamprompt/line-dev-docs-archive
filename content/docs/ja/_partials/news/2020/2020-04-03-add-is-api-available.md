---
title: LIFF v2にliff.isApiAvailable()が追加されました
navigation: true
description: |-
  LIFF v2に、liff.isApiAvailable()が追加されました。
  指定したAPIが、LIFFアプリを起動した環境で使用可能かどうかを確認できます。
meta: '{"date":"2020-04-03 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2020/2020-04-03-add-is-api-available
__hash__: slfwCjSfu13hKQyyZfCQJwiEPNM6Ti5OUTpYcZtLjAY
seo:
  title: LIFF v2にliff.isApiAvailable()が追加されました
  description: |-
    LIFF v2に、liff.isApiAvailable()が追加されました。
    指定したAPIが、LIFFアプリを起動した環境で使用可能かどうかを確認できます。
---

LIFF v2に、`liff.isApiAvailable()`が追加されました。
指定したAPIが、LIFFアプリを起動した環境で使用可能かどうかを確認できます。

::admonition{title="注意" type="note"}
指定できるAPIは限られています。
現時点では、`liff.shareTargetPicker()`が対象です。
今後、`liff.isApiAvailable()`で指定できるAPIが増えたときには、改めてお知らせします。
::

### ターゲットピッカーの使用可否の確認

`liff.isApiAvailable()`を事前に実行することで、ターゲットピッカーが使用不可能な環境で`liff.shareTargetPicker()`を実行した際、ユーザーの画面にエラーメッセージが表示されることを避けられます。

```javascript
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
    .then(
      alert("ShareTargetPicker was launched")
    ).catch(function(res) {
      alert("Failed to launch ShareTargetPicker")
    })
}
```

詳しくは、『LIFF v2 APIリファレンス』の「[liff.isApiAvailable()](/reference/liff/#is-api-available)」を参照してください。
