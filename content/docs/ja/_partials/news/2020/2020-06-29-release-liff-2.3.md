---
title: LIFF v2.3.0をリリースしました
navigation: true
description: |-
  LIFF v2.3.0をリリースしました。
  LIFF v2.3.0における変更点は以下のとおりです。
meta: '{"date":"2020-06-29 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2020/2020-06-29-release-liff-2.3
__hash__: 3kZbQ-nXR3XYC-9Agwp3LPxdGClVulbNpmtYmJNO6_4
seo:
  title: LIFF v2.3.0をリリースしました
  description: |-
    LIFF v2.3.0をリリースしました。
    LIFF v2.3.0における変更点は以下のとおりです。
---

LIFF v2.3.0をリリースしました。
LIFF v2.3.0における変更点は以下のとおりです。

- [LIFFのエンドポイントURLでパスおよびクエリパラメータを利用できるようになりました](#endpoint-url)
- [liff.permanentLink.createUrl()メソッドで例外が発生する条件を追加しました](#permanentLink)
- [liff.shareTargetPicker()の送信結果を取得できるようになりました](#shareTargetPicker)
- [liff.sendMessages()で返されるエラーコードを追加しました](#sendMessage)

## LIFFのエンドポイントURLでパスおよびクエリパラメータを利用できるようになりました

以前[お知らせ](/news/2020/05/20/liff-endpoint-url-improvement/)したとおり、[LINE Developersコンソール](/console/)の［**エンドポイントURL**］に入力したパス（`/path`）およびクエリパラメータ（`?key=value`）を、LIFFアプリで利用できるようになりました。

::admonition{title="設定を変更するまでは既存のLIFFアプリへの影響はありません" type="note"}
既存のLIFFアプリで新仕様を利用する場合は、LINE Developersコンソールで設定を変更する必要があります。設定を変更するまでは、仕様変更の影響を受けません。

![LIFF URLの追加情報の処理方法](/media/liff/preserve-full-endpoint-url.png){className="[\"border\",\"w-fix-640\"]"}

新仕様を利用するには、LIFFアプリの［**LIFF URLの追加情報の処理方法**］を「**連結**」に設定します。
LIFFアプリが新仕様に対応していない場合は、設定を変更しないでください。「**置換（後方互換性モード）**」に設定されている場合は、仕様変更の影響を受けません。
::

詳しくは、『LIFFドキュメント』の「[LIFFアプリを開く](/docs/liff/opening-liff-app/)」を参照してください。

## liff.permanentLink.createUrl()メソッドで例外が発生する条件を追加しました

`liff.permanentLink.createUrl()`メソッドを実行したとき、現在のページのURLが［**エンドポイントURL**］に指定したURLで始まらない場合に、例外が発生します。

```javascript
try {
    const myLink = liff.permanentLink.createUrl()
}
catch (err) {
    console.log(err.code + ':' + err.message);
}
```

特に［**LIFF URLの追加情報の処理方法**］が「**置換（後方互換性モード）**」のときは、［**エンドポイントURL**］に指定したパスやクエリパラメータ（`/2020campaign/?key=value`）が、2次リダイレクト先に含まれないことがあります。
その場合、`liff.permanentLink.createUrl()`メソッドが上記の条件を満たすため、パーマネントリンクを取得できません。

詳しくは、『LIFF v2 APIリファレンス』の「[`liff.permanentLink.createUrl()`](/reference/liff/#permanent-link-create-url)」を参照してください。

## liff.shareTargetPicker()の送信結果を取得できるようになりました

[2020年4月21日にお知らせ](/news/2020/04/21/notice-return-value-of-sharetargetpicker/)したとおり、`liff.shareTargetPicker()`の送信結果を取得できるようになりました。

仕様変更前は、ターゲットピッカーを表示できたかどうかをLIFFアプリが確認できましたが、その後、メッセージを送信できたかどうかは確認できませんでした。

仕様変更後は、メッセージを送信できたかどうかを確認できるため、ユーザーの状況に合わせて、LIFFアプリの挙動を変更するように実装できます。

::admonition{title="注意" type="note"}
- この仕様変更により、`liff.shareTargetPicker()`の戻り値に変更があります。
- ユーザーがLINE 10.3.0～LINE 10.10.0を使用している場合は、この仕様変更の影響を受けません。
::

### 仕様変更に対応するサンプルコード

以下のように、ユーザーが使用しているLINEバージョンによって戻り値を処理することをお勧めします。

```javascript
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      'type': 'text',
      'text': 'Hello, World!'
    }
  ])
    .then(function (res) {
      if (res) {
        // succeeded in sending a message through TargetPicker
        console.log(`[${res.status}] Message sent!`)
      } else {
        const [majorVer, minorVer] = (liff.getLineVersion() || "").split('.');
        if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
          // LINE 10.3.0 - 10.10.0
          // Old LINE will access here regardless of user's action
          console.log('TargetPicker was opened at least. Whether succeeded to send message is unclear')
        } else {
          // LINE 10.11.0 -
          // sending message canceled
          console.log('TargetPicker was closed!')
        }
      }
    }).catch(function (error) {
      // something went wrong before sending a message
      console.log('something wrong happen')
    })
}
```

詳しくは、『LIFF v2 APIリファレンス』の「[`liff.shareTargetPicker()`](/reference/liff/#share-target-picker)」を参照してください。

## liff.sendMessages()で返されるエラーコードを追加しました

`liff.sendMessages()`に不正なパラメータを渡した場合、`LiffError`のエラーコードで`400`が返されていました。仕様変更後は、`400`の代わりに`INVALID_ARGUMENT`が返されます。

なお、エラーコードによって処理を分岐していない場合は、仕様変更の影響を受けません。

仕様変更前：

```javascript
liff.sendMessages([
  {
    type: 'text',
    text: 'Hello, World!'
  }
])
  .then(() => {
    console.log('message sent');
  })
  .catch((err) => {
    // Returns "400" if invalid arguments are passed
    if (err.code === "400") {
      console.log("message format error!");
    }
  });
```

仕様変更後：

```javascript
liff.sendMessages([
  {
    type: 'text',
    text: 'Hello, World!'
  }
])
  .then(() => {
    console.log('message sent');
  })
  .catch((err) => {
    // Returns "INVALID_ARGUMENT" if invalid arguments are passed
    if (err.code === "INVALID_ARGUMENT") {
      console.log("message format error!");
    }
  });
```

詳しくは、『LIFF v2 APIリファレンス』の「[エラー内容](/reference/liff/#error-details)」を参照してください。
