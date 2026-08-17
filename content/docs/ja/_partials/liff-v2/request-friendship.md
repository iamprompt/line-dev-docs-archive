---
title: Request Friendship
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/liff-v2/request-friendship
__hash__: '-XOX_5czfDjZZeREl1RtN-1jDVdj_p50hfIvWdfK0XM'
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
        await liff.requestFriendship({
          template: { id: "coupon" },
        });
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
liff.requestFriendship(params);
```

#### 引数

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  params

  #undefined
  Object

  パラメータオブジェクト
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  params.officialAccount

  #undefined
  Object

  友だち追加、またはブロック解除を促すLINE公式アカウントを指定するためのオブジェクト。省略すると、デフォルトのLINE公式アカウントが表示されます。

    ::::admonition
    ---
    title: 友だち追加オプションで複数アカウントを使用する機能は2026年9月の提供を予定しています
    type: note
    ---
    LIFF SDKのバージョンがv2.30.0以上、かつLINEミニアプリチャネルの［**複数アカウントを使用**］がオンの場合のみ利用できます。［**複数アカウントを使用**］は、日本のLINEミニアプリ向けに、2026年9月の提供を予定しています。
    ::::
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  officialAccount.id

  #undefined
  String

  友だち追加、またはブロック解除を促すLINE公式アカウントのID。ベーシックIDまたは:glossary-tooltip[[プレミアムID](/glossary/#premium-id)]{glossary-id="premium-id"}で指定します。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  officialAccount.fallback

  #undefined
  Boolean

  `officialAccount.id`プロパティで指定したLINE公式アカウントが存在しない場合や、許可リストに登録されていない場合などに、デフォルトのLINE公式アカウントを表示するかどうか。デフォルト値は`true`です。

  - `true`：デフォルトのLINE公式アカウントを表示する。
  - `false`：LINE公式アカウントを表示しない。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  params.template

  #undefined
  Object

  友だち追加、またはブロック解除を促すサブウィンドウに表示するメッセージの[テンプレート](#request-friendship-template)を指定するためのオブジェクト。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  template.id

  #undefined
  String

  友だち追加、またはブロック解除を促すサブウィンドウに表示するメッセージの[テンプレート](#request-friendship-template)のID。
  :::
::

##### テンプレート

| ID                      | カテゴリー     | 日本語                                | 英語                                                                             |
| ----------------------- | --------- | ---------------------------------- | ------------------------------------------------------------------------------ |
|                         | デフォルト     | この公式アカウントを友だち追加しますか？               | Add this official account as a friend?                                         |
| `bonusContent`          | 特典コンテンツ   | 公式アカウントから特典コンテンツやお得な情報をお届けします。     | Get bonus content and special offers from this official account.               |
| `bonusItem`             | ボーナス      | 公式アカウントからボーナスやアイテムをお届けします。         | Get bonuses and items from this official account.                              |
| `campaign`              | キャンペーン    | 公式アカウントからキャンペーンなどのお得な情報をお届けします。    | Get campaign news and special offers from this official account.               |
| `coupon`                | クーポン      | 公式アカウントからクーポンや特典情報をお届けします。         | Get coupons and special offers from this official account.                     |
| `couponUsefulInfo`      | クーポン・有益情報 | 公式アカウントから定期的にクーポンや有益な情報をお届けします。    | Get regular coupons and useful information from this official account.         |
| `eventReward`           | イベント・報酬   | 公式アカウントからイベント情報や限定特典をお届けします。       | Get event info and exclusive rewards from this official account.               |
| `exclusiveContent`      | 限定配信      | 公式アカウントからここでしか見られない限定コンテンツをお届けします。 | Get exclusive content you won’t find anywhere else from this official account. |
| `exclusiveUpdate`       | 特別情報      | 公式アカウントから特別なお知らせをお届けします。           | Get special updates from this official account.                                |
| `featureAccess`         | 機能利用      | 公式アカウントの便利な機能をご利用いただけます。           | Get access to useful features from this official account.                      |
| `gameInfoTips`          | ゲーム情報     | 公式アカウントからゲーム情報やプレイに役立つヒントをお届けします。  | Get game news and helpful gameplay tips from this official account.            |
| `gameNotification`      | ゲーム情報     | 公式アカウントでこのゲームからの通知を受け取れます。         | Get notifications from this game through its official account.                 |
| `importantAnnouncement` | 重要なお知らせ   | 公式アカウントから重要なお知らせをお届けします。           | Get important updates from this official account.                              |
| `newReleaseUpdate`      | 新着・更新     | 公式アカウントから新着・更新情報をお届けします。           | Get the latest news and updates from this official account.                    |
| `promotionalFlyer`      | チラシ       | 公式アカウントからお得なチラシ情報をお届けします。          | Get flyers with the latest deals from this official account.                   |
| `usefulInfo`            | 有益情報      | 公式アカウントから有益な情報をお届けします。             | Get useful information from this official account.                             |

#### 戻り値

`Promise`オブジェクトが返されます。

::admonition{title="ユーザーの操作結果は戻り値では確認できません" type="note"}
ユーザーによって友だち追加やブロック解除が行われたかは、戻り値では確認できません。`liff.requestFriendship()`メソッドを実行後の友だち関係については、[`liff.getFriendship()`](#get-friendship)メソッドで確認してください。
::

#### エラーレスポンス

`Promise`がrejectされたときは、[`LiffError`](#liff-errors)が渡されます。`liff.requestFriendship()`メソッドに特有のエラーは次のとおりです。

| エラーコード             | エラーメッセージ                                        | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------ | ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FORBIDDEN`        | `No bot could be resolved for the request.`     | 表示するLINE公式アカウントが存在しない。次のような原因が考えられます。  - LINEログインチャネルの［:b[リンクされたLINE公式アカウント]］を設定していない。 - LINEミニアプリチャネルの［:b[デフォルトのLINE公式アカウント]］を設定していない、かつ［:b[複数アカウントを使用]］がオフになっている。 - LINEミニアプリチャネルの［:b[デフォルトのLINE公式アカウント]］を設定していない、かつ`officialAccount.id`プロパティを指定していない。 - `officialAccount.id`プロパティで指定したLINE公式アカウントが存在しない、かつ`officialAccount.fallback`プロパティの値が`false`になっている。 - `officialAccount.id`プロパティで指定したLINE公式アカウントが許可リストに登録されていない、かつ`officialAccount.fallback`プロパティの値が`false`になっている。 - `officialAccount.id`プロパティで指定したLINE公式アカウントが一時停止されているか削除されている、かつ`officialAccount.fallback`プロパティの値が`false`になっている。 |
| `FORBIDDEN`        | `subwindowOpen is not allowed in this LIFF app` | LIFFアプリの画面サイズが`Full`に設定されていない。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `INVALID_ARGUMENT` | `officialAccount.id must start with "@".`       | `officialAccount.id`プロパティの値が`@`から始まっていない。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
