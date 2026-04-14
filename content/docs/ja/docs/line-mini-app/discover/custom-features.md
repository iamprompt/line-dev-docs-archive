---
title: カスタム機能
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-mini-app/discover/custom-features
__hash__: sk3kSdX-0ZhHgzjTKtsCeR3LBq5TjffMZ6dPifzA4Es
seo:
  title: カスタム機能
  description: null
---

# :page-title

:markdown-controlsさらにユーザー体験を充実させるために、以下の機能をLINEミニアプリに追加できます。使用できる機能は、LINEミニアプリが未認証ミニアプリか認証済ミニアプリかによって異なります。

| 機能                                                                      | 未認証ミニアプリ | 認証済ミニアプリ |
| ----------------------------------------------------------------------- | -------- | -------- |
| [サービスメッセージ](#service-messages)                                          | ❌        | ✅        |
| [Custom Path](#custom-path)                                             | ❌        | ✅        |
| [ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加する](#create-shortcut-on-home-screen) | ❌        | ✅        |
| [共通プロフィールのクイック入力](#quick-fill)                                          | ❌        | ✅        |
| [ユーザーをLINE公式アカウントの友だち追加へ誘導する](#OA-friend)                               | ✅        | ✅        |
| [カスタムアクションボタン](#custom-action-button)                                   | ✅        | ✅        |
| [決済システムの利用](#using-payment-systems)                                     | ✅        | ✅        |
| [広告の掲載](#place-ads)                                                     | ✅        | ✅        |

## サービスメッセージ

レストランや宿泊施設の予約の確認通知をユーザーに送信する場合は、「サービスメッセージ」を利用できます。

サービスメッセージは、ユーザーからのリクエストに対する確認や応答としてユーザーが知るべき情報を、LINEミニアプリから通知する機能です。

LINEミニアプリから送られたサービスメッセージは、LINEミニアプリの種類にかかわらず、LINEミニアプリを提供する地域ごとに決められたトークルームに表示されます。

| 日本                                                                                                           | タイ                                                                                                                 | 台湾                                                                                                             |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| LINEミニアプリ お知らせ                                                                                               | LINE MINI App Notice                                                                                               | LINE MINI App 通知                                                                                               |
| ![LINEミニアプリ お知らせ](/media/line-mini-app/mini_service_notifier_jp.png){className="[\"border\",\"w-fix-280\"]"} | ![LINE MINI App Notice](/media/line-mini-app/mini_service_notifier_th.png){className="[\"border\",\"w-fix-280\"]"} | ![LINE MINI App 通知](/media/line-mini-app/mini_service_notifier_tw.png){className="[\"border\",\"w-fix-280\"]"} |

サービスメッセージを送信するには、サービスメッセージAPIを使用します。詳しくは、「[サービスメッセージを送信する](/docs/line-mini-app/develop/service-messages/)」を参照してください。

::admonition{title="サービスメッセージの送信条件" type="note"}
サービスメッセージは、LINEミニアプリ上でのユーザーの操作（アクション）に対する確認や応答としてのみ送信できます。値下げ、ショッピング特典、新商品、割引クーポン、プロモーションなどの情報を含む広告やイベントの通知は禁止されています。サービスメッセージの条件について詳しくは、「[サービスメッセージの条件](/docs/line-mini-app/service/service-operation/#conditions-for-service-messages)」を参照してください。
::

## Custom Path

Custom Pathとは、本番用のLIFF URLに設定する独自の文字列のことをいいます。Custom Path機能を用いると、以下のように、LIFF URLに独自の文字列を設定できます。

| LIFF IDによるURLの例                          | Custom Pathを設定した例                     |
| ---------------------------------------- | ------------------------------------- |
| `https://miniapp.line.me/123456-abcdefg` | `https://miniapp.line.me/cony_coffee` |

たとえば、ユニークな名前をCustom Pathとして設定することにより、ユーザーはURLからどのブランドや店舗のLINEミニアプリなのかがわかるようになります。Custom Pathについて詳しくは、「[Custom Pathを設定する](/docs/line-mini-app/develop/custom-path/)」を参照してください。

## ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加する

ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加できます。この機能を使うと、ユーザーは端末のホーム画面からLINEミニアプリに直接アクセスできるようになります。

![](/media/line-mini-app/develop/add-to-home-screen/add-shortcut-screen-ios-ja.png){className="[\"border\",\"w-fix-240\",\"inline-block\",\"mb-0-important\",\"mr-2\"]"}![](/media/line-mini-app/develop/add-to-home-screen/shortcut-ios-ja.png){className="[\"w-fix-240\",\"inline-block\"]"}

会員証やモバイルオーダーなど、ユーザーの利用頻度の高いサービスでこの機能を活用することで、ユーザー体験を向上させることができます。

詳しくは、「[ユーザー端末のホーム画面にLINEミニアプリへのショートカットを追加する](/docs/line-mini-app/develop/add-to-home-screen/)」を参照してください。

## 共通プロフィールのクイック入力

クイック入力とは、LINEミニアプリ上で［**自動入力**］をタップすることで、必要なプロフィール情報が自動で入力される機能です。ユーザーがアカウントセンターで設定した共通プロフィールの情報が、LINEミニアプリで簡単に利用できます。詳しくは、[共通プロフィールのクイック入力の概要](/docs/line-mini-app/quick-fill/overview/)を参照してください。

![](/media/line-mini-app/quick-fill/quick-fill-3-steps.png){className="[\"bg-border\",\"w-fix-680\"]"}

LINEミニアプリにクイック入力を導入すると、住所や電話番号の登録が必要な場面で、ボタンをタップするだけで必要な情報が自動で入力されます。これにより、たとえば店舗の予約やオンラインストアでの注文時に、ユーザーは面倒な手入力の手間を省くことができます。

## ユーザーをLINE公式アカウントの友だち追加へ誘導する

LINEミニアプリでは、友だち追加オプションを使って、[アクセス許可要求画面](/docs/line-mini-app/develop/configure-console/#verification-screen)、もしくは[チャネル同意画面](/docs/line-mini-app/develop/configure-console/#consent-screen-settings)からLINE公式アカウントの友だち追加への誘導ができます。

詳しくは、 「[LINEミニアプリ上でLINE公式アカウントを友だち追加する（友だち追加オプション）](/docs/line-mini-app/service/line-mini-app-oa/#link-a-line-official-account-with-your-channel)」を参照してください。

![bot link feature 1](/media/line-mini-app/miniguide-incremental-01-ja.png){className="[\"border\",\"w-fix-280\",\"inline-block\",\"mb-0-important\",\"mr-2\"]"}![bot link feature 2](/media/line-mini-app/miniguide-incremental-02-ja.png){className="[\"border\",\"w-fix-280\",\"inline-block\"]"}

また、[`liff.requestFriendship()`](/reference/liff/#request-friendship)メソッドを用いて、任意のタイミングでLINE公式アカウントの友だち追加、またはブロック解除を促すサブウィンドウを表示することも可能です。

## カスタムアクションボタン

友だち同士で、LINEミニアプリを簡単にシェアするために[ビルトインのアクションボタン](/docs/line-mini-app/discover/builtin-features/#action-button)が用意されていますが、[カスタムアクションボタンを実装](/docs/line-mini-app/develop/share-messages/)することもできます。

![](/media/line-mini-app/mini_share_custom.png){className="[\"w-fix-800\"]"}

## 決済システムの利用

LINE Payなどの支払い方法をLINEミニアプリに統合できます。また日本のみ、[LINEミニアプリのアプリ内課金](/docs/line-mini-app/in-app-purchase/overview/)機能を利用できます。

LINEミニアプリで利用できる決済システムは、国または地域によって異なります。

| 決済方法             | 日本  | 台湾  | タイ  |
| ---------------- | --- | --- | --- |
| LINE Pay         | ❌   | ✅   | ✅   |
| LINEミニアプリのアプリ内課金 | ✅   | ❌   | ❌   |
| その他の決済方法         | ✅   | ✅   | ✅   |

詳しくは、「[決済システムを利用する](/docs/line-mini-app/develop/payment/)」を参照してください。

![mini intro linepay](/media/line-mini-app/mini_intro_linepay.png){className="[\"w-fix-520\"]"}

## 広告の掲載

LINEミニアプリに[LINEヤフー広告ネットワークディスプレイ広告（Web）](https://www.lycbiz.com/jp/partner/adnetwork/ly-ads/){rel="[\"nofollow\"]"}を掲載し、収益化できます。広告の掲載は認証済ミニアプリ、未認証ミニアプリのいずれにおいても可能ですが、サービスを提供する地域が日本である必要があります。

詳しくは、「[LINEミニアプリに広告を掲載する](/docs/line-mini-app/service/line-mini-app-ads/)」を参照してください。
