---
title: Request Friendship
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/request-friendship
__hash__: jGBPuh5Ic-MXEaJtXTXBnYdOHERnWpgoaRQ9I2Di-BM
seo:
  description: ''
---

### liff.requestFriendship()

::reference-with-code
  :::reference-content
  Displays a subwindow that prompts the user to add the LINE Official Account as a friend, or to unblock it.

  ![](/media/liff/request-friendship/request-friendship-add-friend-en.png){className="[\"border\",\"w-fix-200\"]"}

  - If the user has not added the LINE Official Account as a friend, a subwindow that prompts the user to add it as a friend is displayed.
  - If the user has blocked the LINE Official Account, a subwindow that prompts the user to unblock it is displayed.
  - If the user is already friends with the LINE Official Account, the subwindow is displayed and then automatically closed.

  The LINE Official Account to prompt the user to add as a friend or unblock can be specified by [linking a LINE Official Account with your channel](/docs/line-login/link-a-bot/#link-a-line-official-account). For more information, see [Add a LINE Official Account as a friend when logged in (add friend option)](/docs/line-login/link-a-bot/) in the LINE Login documentation.

  Only available when the screen size of the LIFF browser is `Full`. For more information, see [Size of the LIFF browser](/docs/liff/overview/#screen-size) in the LIFF documentation.
  :::

  :::reference-code
  *Example*

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

      // When Use multiple accounts is enabled for the LINE MINI App channel
      try {
        await liff.requestFriendship({
          officialAccount: {
            id: "@819...",
            fallback: true,
          },
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

#### Syntax

```javascript
liff.requestFriendship(params);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{optional=""}
  #undefined
  params

  #undefined
  Object

  Parameter object
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  params.officialAccount

  #undefined
  Object

  Object used to specify the LINE Official Account that users are prompted to add as a friend or unblock. If omitted, the default LINE Official Account is displayed.

  The `officialAccount` property is available only in LINE MINI Apps. LIFF SDK v2.30.0 or later is required, and **Use multiple accounts** must be enabled for the LINE MINI App channel. For more information, see [Add a LINE Official Account as a friend in a LINE MINI App (add friend option)](/docs/line-mini-app/service/add-friend-option/) in the LINE MINI App documentation.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  officialAccount.id

  #undefined
  String

  The ID of the LINE Official Account that users are prompted to add as a friend or unblock. Specify the basic ID or :glossary-tooltip[[premium ID](/glossary/#premium-id)]{glossary-id="premium-id"}.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  officialAccount.fallback

  #undefined
  Boolean

  Whether to display the default LINE Official Account if the LINE Official Account specified in the `officialAccount.id` property doesn't exist, isn't registered in the allowlist, or can't be used for another reason. The default value is `true`.

  - `true`: Display the default LINE Official Account.
  - `false`: Don't display any LINE Official Account.
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  params.template

  #undefined
  Object

  Object used to specify the [template](#request-friendship-template) for the message displayed in the subwindow that prompts users to add the LINE Official Account as a friend or unblock it.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  template.id

  #undefined
  String

  The ID of the [template](#request-friendship-template) for the message displayed in the subwindow that prompts users to add the LINE Official Account as a friend or unblock it.
  :::
::

##### Template

| ID                      | Category                       | Japanese                           | English                                                                        |
| ----------------------- | ------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------ |
|                         | Default                        | この公式アカウントを友だち追加しますか？               | Add this official account as a friend?                                         |
| `bonusContent`          | Bonus content                  | 公式アカウントから特典コンテンツやお得な情報をお届けします。     | Get bonus content and special offers from this official account.               |
| `bonusItem`             | Bonuses                        | 公式アカウントからボーナスやアイテムをお届けします。         | Get bonuses and items from this official account.                              |
| `campaign`              | Campaigns                      | 公式アカウントからキャンペーンなどのお得な情報をお届けします。    | Get campaign news and special offers from this official account.               |
| `coupon`                | Coupons                        | 公式アカウントからクーポンや特典情報をお届けします。         | Get coupons and special offers from this official account.                     |
| `couponUsefulInfo`      | Coupons and useful information | 公式アカウントから定期的にクーポンや有益な情報をお届けします。    | Get regular coupons and useful information from this official account.         |
| `eventReward`           | Events and rewards             | 公式アカウントからイベント情報や限定特典をお届けします。       | Get event info and exclusive rewards from this official account.               |
| `exclusiveContent`      | Exclusive content              | 公式アカウントからここでしか見られない限定コンテンツをお届けします。 | Get exclusive content you won’t find anywhere else from this official account. |
| `exclusiveUpdate`       | Exclusive updates              | 公式アカウントから特別なお知らせをお届けします。           | Get special updates from this official account.                                |
| `featureAccess`         | Feature access                 | 公式アカウントの便利な機能をご利用いただけます。           | Get access to useful features from this official account.                      |
| `gameInfoTips`          | Game information               | 公式アカウントからゲーム情報やプレイに役立つヒントをお届けします。  | Get game news and helpful gameplay tips from this official account.            |
| `gameNotification`      | Game information               | 公式アカウントでこのゲームからの通知を受け取れます。         | Get notifications from this game through its official account.                 |
| `importantAnnouncement` | Important announcements        | 公式アカウントから重要なお知らせをお届けします。           | Get important updates from this official account.                              |
| `newReleaseUpdate`      | New releases and updates       | 公式アカウントから新着・更新情報をお届けします。           | Get the latest news and updates from this official account.                    |
| `promotionalFlyer`      | Flyers                         | 公式アカウントからお得なチラシ情報をお届けします。          | Get flyers with the latest deals from this official account.                   |
| `usefulInfo`            | Useful information             | 公式アカウントから有益な情報をお届けします。             | Get useful information from this official account.                             |

#### Return value

Returns a `Promise` object.

::admonition
---
title: The result of the user's action cannot be confirmed from the return value
type: note
---
It isn't possible to confirm from the return value whether the user has added the LINE Official Account as a friend or unblocked it. To check the friendship status after calling the `liff.requestFriendship()` method, use the [`liff.getFriendship()`](#get-friendship) method.
::

#### Error response

When the `Promise` is rejected, a [`LiffError`](#liff-errors) is passed. The following errors are specific to the `liff.requestFriendship()` method:

| Error code         | Error message                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FORBIDDEN`        | `No bot could be resolved for the request.`     | The LINE Official Account to be displayed doesn't exist. Possible causes include:  - **Linked LINE Official Account** isn't configured for the LINE Login channel. - **Default LINE Official Account** isn't configured for the LINE MINI App channel, and **Use multiple accounts** is disabled. - **Default LINE Official Account** isn't configured for the LINE MINI App channel, and the `officialAccount.id` property isn't specified. - The LINE Official Account specified in the `officialAccount.id` property doesn't exist, and the value of the `officialAccount.fallback` property is `false`. - The LINE Official Account specified in the `officialAccount.id` property isn't registered in the allowlist, and the value of the `officialAccount.fallback` property is `false`. - The LINE Official Account specified in the `officialAccount.id` property is suspended or deleted, and the value of the `officialAccount.fallback` property is `false`. |
| `FORBIDDEN`        | `subwindowOpen is not allowed in this LIFF app` | The screen size of the LIFF app isn't set to `Full`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `INVALID_ARGUMENT` | `officialAccount.id must start with "@".`       | The value of the `officialAccount.id` property doesn't start with `@`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
