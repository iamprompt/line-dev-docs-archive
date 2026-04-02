---
title: LINE公式アカウントを活用する
navigation: true
description: LINE公式アカウントを使ってLINEミニアプリを宣伝します。
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-mini-app/service/line-mini-app-oa
__hash__: zZ_jh0yAIWxsP4-wJhW6rn4KHAT23Dl99b5LhQwsiSc
seo:
  title: LINE公式アカウントを活用する
  description: LINE公式アカウントを使ってLINEミニアプリを宣伝します。
---

# :page-title

:markdown-controlsこのページでは、LINEミニアプリのプロモーションにLINE公式アカウントを活用する方法を紹介します。LINE公式アカウントを作成する方法について詳しくは、『Messaging APIドキュメント』の「[LINE公式アカウントを作成する](/docs/messaging-api/getting-started/#create-oa)」を参照してください。

![あなたのLINEミニアプリをLINE公式アカウントで宣伝](/media/line-mini-app/mini_with_oa.png){className="[\"w-fix-280\"]"}

## リッチメッセージを送る

視覚的な訴求が可能なリッチメッセージを送ることで、LINEミニアプリの魅力をわかりやすく伝えたり、LINEミニアプリへの誘導率を高めたりできます。

リッチメッセージについて詳しくは、『LINEヤフー for Business』の「[リッチメッセージ](https://www.lycbiz.com/jp/manual/OfficialAccountManager/rich-messages/){rel="[\"nofollow\"]"}」を参照してください。

## リッチメニューにLINEミニアプリへのリンクを設定する

リッチメニューにLINEミニアプリの:glossary-tooltip[[LIFF URL](/glossary/#liff-url)]{glossary-id="liff-url"}や:glossary-tooltip[[パーマネントリンク](/glossary/#permanent-link-liff)]{glossary-id="permanent-link-liff"}を設定すると、LINE公式アカウントのトーク画面からLINEミニアプリに簡単にアクセスできます。

リッチメニューについて詳しくは、『Messaging APIドキュメント』の「[リッチメニューの概要](/docs/messaging-api/rich-menus-overview/)」を参照してください。

## LINEミニアプリ上でLINE公式アカウントを友だち追加する（友だち追加オプション）

LINEミニアプリの[アクセス許可要求画面](/docs/line-mini-app/develop/configure-console/#verification-screen)や[チャネル同意画面](/docs/line-mini-app/develop/configure-console/#consent-screen-settings)に、LINE公式アカウントを友だち追加するオプションを表示できます。これを、友だち追加オプションと呼びます。

友だち追加オプションでLINEミニアプリとLINE公式アカウントをリンクするには、次の条件をすべて満たす必要があります。

- LINE公式アカウントがMessaging APIを利用している（※1）。
- LINE公式アカウントに紐づいているMessaging APIチャネルとLINEミニアプリチャネルが同じプロバイダーに属している。
- 操作するアカウントが、LINEミニアプリチャネルのAdmin権限（※2）とLINE公式アカウントの管理者権限（※3）の両方を持っている。

※1 LINE公式アカウントでMessaging APIを利用する方法について詳しくは、『Messaging APIドキュメント』の「[LINE公式アカウントでMessaging APIを有効にする](/docs/messaging-api/getting-started/#using-oa-manager)」を参照してください。  
※2 LINEミニアプリチャネルのAdmin権限は、[LINE Developersコンソール](/console/)で確認できます。  
※3 LINE公式アカウントの管理者権限は、[LINE Official Account Manager](https://manager.line.biz){rel="[\"nofollow\"]"}で確認できます。

### 友だち追加オプションの設定方法

1. [LINE Developersコンソール](/console/)でLINEミニアプリチャネルの［**チャネル基本設定**］タブをクリックします。
2. 「リンクされたLINE公式アカウント」セクションの［**編集**］をクリックします。
3. LINEミニアプリチャネルとリンクさせるLINE公式アカウントを選択し、［**更新**］をクリックします。
4. LINEミニアプリチャネルの［**ウェブアプリ設定**］タブをクリックします。
5. 「友だち追加オプション」セクションの［**編集**］をクリックします。
6. ［**On (normal)**］を選択し、［**更新**］をクリックします。

::admonition{title="認証プロバイダーの場合、認可画面上の友だち追加オプションはデフォルトでオンになります" type="tip"}
LINEミニアプリチャネルが[認証プロバイダー](/docs/line-developers-console/overview/#certified-provider)に属している場合、アクセス許可要求画面やチャネル同意画面上の友だち追加オプションは、デフォルトでオンになります。

ユーザーがオプションを手動でオフにしない限り、アクセス許可要求画面やチャネル同意画面で認可したときに、友だち追加オプションで指定したLINE公式アカウントが友だちとして追加されます。
::
