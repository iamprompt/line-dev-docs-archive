---
title: Request Friendship
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/request-friendship
__hash__: NsrJk5klDCylO1OLVNsK7-cBVzxW72UTr_bB0QBinI4
seo:
  description: ''
---

### liff.requestFriendship()

::reference-with-code
  :::reference-content
  LINE公式アカウントの友だち追加、またはブロック解除を促すサブウィンドウを表示します。

  ![](/media/liff/request-friendship/request-friendship-add-friend-ja.png){className="[\"border\",\"w-fix-200\"]"}

  - LINE公式アカウントと友だちになっていない場合は、友だち追加を促すサブウィンドウが表示されます。
  - LINE公式アカウントをブロックしている場合は、ブロック解除を促すサブウィンドウが表示されます。
  - LINE公式アカウントと既に友だちになっている場合は、サブウィンドウが表示された後、自動で閉じられます。

  友だち追加、またはブロック解除を促すLINE公式アカウントは、[チャネルにLINE公式アカウントをリンクする](/docs/line-login/link-a-bot/#link-a-line-official-account)ことで指定できます。詳しくは、『LINEログインドキュメント』の「[LINEログインしたときにLINE公式アカウントを友だち追加する（友だち追加オプション）](/docs/line-login/link-a-bot/)」を参照してください。

  LIFFブラウザの画面サイズが`Full`の場合のみ利用できます。詳しくは、『LIFFドキュメント』の「[LIFFブラウザの画面サイズ](/docs/liff/overview/#screen-size)」を参照してください。
  :::

  :::reference-code
  *例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      try {
        await liff.requestFriendship();
      } catch (error) {
        console.log(error);
      }
      ```
      :::::
    ::::
  :::
::

#### 構文

```javascript
liff.requestFriendship();
```

#### 引数

なし

#### 戻り値

`Promise`オブジェクトが返されます。

::admonition{title="ユーザーの操作結果は戻り値では確認できません" type="note"}
ユーザーによって友だち追加やブロック解除が行われたかは、戻り値では確認できません。`liff.requestFriendship()`メソッドを実行後の友だち関係については、[`liff.getFriendship()`](#get-friendship)メソッドで確認してください。
::

##### エラーレスポンス

`Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。

友だち追加オプションの［**リンクされたLINE公式アカウント**］が未設定の場合や、LIFFアプリの画面サイズが`Full`でない場合、エラーコード`FORBIDDEN`が返ります。
