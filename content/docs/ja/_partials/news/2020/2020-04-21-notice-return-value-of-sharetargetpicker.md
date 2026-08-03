---
title: liff.shareTargetPicker()の戻り値に関するお知らせ
navigation: true
description: |-
  今後、LIFF v2のliff.shareTargetPicker()の戻り値を変更する予定があります。
  現在の仕様のみを想定しているアプリの開発者の方は、実装の変更をお願いします。
meta: '{"date":"2020-04-21 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2020/2020-04-21-notice-return-value-of-sharetargetpicker
__hash__: zLBtFoQoO3-mZYcpneNHvYeVdzHKZhmgxskFlouOe_w
seo:
  title: liff.shareTargetPicker()の戻り値に関するお知らせ
  description: |-
    今後、LIFF v2のliff.shareTargetPicker()の戻り値を変更する予定があります。
    現在の仕様のみを想定しているアプリの開発者の方は、実装の変更をお願いします。
---

今後、LIFF v2の`liff.shareTargetPicker()`の戻り値を変更する予定があります。
現在の仕様のみを想定しているアプリの開発者の方は、実装の変更をお願いします。

::admonition{title="注意" type="note"}
現時点では、変更後の`liff.shareTargetPicker()`の戻り値の仕様は確定していません。
::

### 概要

仕様変更前は、ターゲットピッカーを表示できたかどうかをLIFFアプリが確認できましたが、その後、メッセージを送信できたかどうかは確認できませんでした。

仕様変更後は、メッセージを送信できたかどうかを確認できるため、ユーザーの状況に合わせて、LIFFアプリの挙動を変更するように実装できます。

### 仕様変更前

#### サンプル

```javascript
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
    .then(
      console.log("ShareTargetPicker was launched")
    ).catch(function(res) {
      console.log("Failed to launch ShareTargetPicker")
    })
}
```

#### 構文

`liff.shareTargetPicker(messages)`

#### 戻り値

`Promise`オブジェクトが返されます。

ターゲットピッカーが表示されると、`Promise`がresolveされます。

ターゲットピッカーが表示される前に問題が発生した場合は、`Promise`がrejectされ、`LiffError`が渡されます。LiffErrorオブジェクトについては、「[LIFF SDKのエラー](/reference/liff/#liff-errors)」を参照してください。

::admonition{title="注意" type="note"}
- 表示されたターゲットピッカーでユーザーが送信先を選択しなかった場合など、ターゲットピッカーが表示されたあとの状況は検知できません。
- `Promise`がresolveした場合とrejectした場合のコールバック関数内で、`alert()`を実行すると一部端末で正しく動作しません。
::

### 仕様変更後

#### サンプル

```javascript
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
  .then(function(res) {
    if (res) {
      // succeeded to send message in TargetPicker
      console.log(`[${res.status}] Message [${this.msgType}] is sent!`)
    } else {
      // canceled to send message
      console.log('TargetPicker was closed!')
    }
  }).catch(function(error) {
    // something wrong happened before sending message properly
    console.log('something wrong happen')
  })
}
```

#### 構文

`liff.shareTargetPicker(messages)`

#### 戻り値

`Promise`オブジェクトが返されます。

正しくメッセージが送信されると、`Promise`がresolveされ、成功が渡されます。

メッセージを送信する前に、ユーザーがキャンセルしてターゲットピッカーを閉じると、`Promise`がresolveされますが、成功は渡されません。

ターゲットピッカーが表示される前に問題が発生した場合は、`Promise`がrejectされ、`LiffError`が渡されます。LiffErrorオブジェクトについては、「[LIFF SDKのエラー](/reference/liff/#liff-errors)」を参照してください。

なお、今後の仕様変更に合わせてエラー定義も変更する予定です。

::admonition{title="注意" type="note"}
`Promise`がresolveした場合とrejectした場合のコールバック関数内で、`alert()`を実行すると一部端末で正しく動作しません。
::

### 仕様変更予定日時

未定
