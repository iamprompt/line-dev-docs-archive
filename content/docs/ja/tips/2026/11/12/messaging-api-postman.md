---
title: PostmanでLINE OpenAPIを元にMessaging APIを試す方法
navigation: true
description: >-
  こんにちは！テクニカルライターの銭神です。みなさんは、Messaging
  APIを使って開発をはじめるとき、「コードを書く前に、まずはAPIの動作を試してみたい」と思うことはありませんか？
meta: >-
  {"date":"2026-11-12 00:00
  UTC","tags":"messaging-api","locale":"ja","sidebar":false}
path: /ja/tips/2026/11/12/messaging-api-postman
__hash__: Csj1b1WxHFMrlaUiKad7KoLAwn332tJK-YP3cTX3xhQ
seo:
  title: PostmanでLINE OpenAPIを元にMessaging APIを試す方法
  description: >-
    こんにちは！テクニカルライターの銭神です。みなさんは、Messaging
    APIを使って開発をはじめるとき、「コードを書く前に、まずはAPIの動作を試してみたい」と思うことはありませんか？
---

::Tips
# :page-title

  :::display-date{date="2026/11/12" .!mb-20}

  :::

こんにちは！テクニカルライターの銭神です。みなさんは、Messaging APIを使って開発をはじめるとき、「コードを書く前に、まずはAPIの動作を試してみたい」と思うことはありませんか？

APIを画面上で気軽に試せるツールとして広く使われているのが[Postman](https://www.postman.com/jp/){rel="[\"nofollow\"]"}ですが、私たちが公式に提供している[LINE OpenAPI](https://github.com/line/line-openapi){rel="[\"nofollow\"]"}を利用すると、エンドポイントやリクエストボディなどを手動で設定する手間が省け、よりスムーズにAPIを試すことができます。

この記事では、LINE OpenAPIの仕様定義ファイルをPostmanにインポートして、実際にMessaging APIでプッシュメッセージを送信するまでの手順を説明します。

  :::toc

  :::

## 動作環境

この記事の内容は、以下の環境で動作確認を行っています。

| 項目         | バージョン        |
| ---------- | ------------ |
| OS         | macOS 26.3.1 |
| Postmanアプリ | 12.34.4      |

OSやPostmanのバージョンによっては、以下に示す手順が異なる場合がありますのでご注意ください。

## 手順

それでは、Postmanを用いてMessaging APIでプッシュメッセージを送信する手順を以下に示します。

### 1. LINE OpenAPIの仕様定義ファイルのURLを取得する

まずは、LINE OpenAPIの仕様定義ファイルのURLを取得します。Messaging APIをはじめとする各種APIのOpenAPI仕様は、GitHubリポジトリで公開されています。

- [line/line-openapi](https://github.com/line/line-openapi){rel="[\"nofollow\"]"}

Messaging APIを試す場合は、リポジトリ内の`messaging-api.yml`を使用します。以下に示すURLをコピーしておいてください。

```text
https://raw.githubusercontent.com/line/line-openapi/refs/heads/main/messaging-api.yml
```

### 2. Postmanにインポートする

URLをコピーしたら、次は取得したURLをPostmanに読み込ませます。これは、以下の手順で行います。

1. Postmanを開き、メニューの［**File**］内の［**Import**］をクリックする
2. コピーしたOpenAPI仕様のURLをペーストし、［**Import**］をクリックする
3. インポートが完了すると、左側の［**Collections**］に`LINE Messaging API`というコレクションが作成される

![](/media/tips/2026/postman-import.png){className="[\"border\",\"w-fix-640\"]"}

これで、Messaging APIの各エンドポイントのURLやパラメータ、リクエストボディなどの構造がPostman上に自動で設定されました。

### 3. チャネルアクセストークンを取得する

Messaging APIを実行するためには、チャネルアクセストークンを設定する必要があります。APIの動作を確認する目的としては、[長期のチャネルアクセストークン](/docs/basics/channel-access-token/#long-lived-channel-access-token)を利用すると便利です。

長期のチャネルアクセストークンは、[LINE Developersコンソール](/console/)のMessaging APIチャネルにある［**Messaging API設定**］タブで取得できます。

  :::admonition{title="本記事の手順はAPIの動作確認でのみ利用してください" type="note"}
  長期のチャネルアクセストークンはLINE Developersコンソールから手軽に発行できて便利ですが、有効期限がないため、漏洩時のリスクが高くなります。また、Postmanは変数の設定方法によって入力した値がクラウドサーバー上に保存される場合があります。

  本記事で紹介するPostmanを使った手順は、APIの動作確認でのみ利用してください。実際の運用では、プログラムから[ステートレスチャネルアクセストークン](/docs/basics/channel-access-token/#stateless-channel-access-token)など、他の種類のトークンを使用してAPIを実行してください。
  :::

### 4. チャネルアクセストークンを設定する

手順3で取得したチャネルアクセストークンは、リクエストヘッダーに設定します。これについて、コレクション全体の変数としてチャネルアクセストークンを設定することで、効率的にAPIを実行できます。

コレクション全体の変数として設定するには、以下の手順で行います。

1. ［**LINE Messaging API**］コレクションをクリックする
2. 右側で［**Variables**］タブを開く
3. `channelAccessToken`という変数を追加し、［**Value**］にチャネルアクセストークンを入力する
4. ［**Authorization**］タブを開き、［**Auth type**］を`Bearer Token`に設定する
5. ［**Token**］の入力欄に`{{channelAccessToken}}`と入力する

![](/media/tips/2026/postman-channel-access-token.png){className="[\"border\",\"w-fix-640\"]"}

これにより、コレクション内のすべてのリクエストで、自動的に認証ヘッダーが付与されるようになります。

### 5. LINE公式アカウントと友だちになる

この後でMessaging APIでプッシュメッセージを送信するのですが、メッセージをLINEアプリで受信するには、メッセージを送信するLINE公式アカウントと友だちになっている必要があります。

まだ友だちになっていない場合は、LINE Developersコンソールの［**Messaging API設定**］タブにあるQRコードをお手元のLINEアプリでスキャンして、友だち追加しておいてください。

### 6. 送信先のユーザーIDを取得する

次に、プッシュメッセージの送信先となるユーザーIDを取得します。

送信先となるあなたのユーザーIDは、LINE Developersコンソールの［**チャネル基本設定**］タブのページ下部にある［**あなたのユーザーID**］から取得できます。このユーザーIDをコピーしておいてください。

### 7. プッシュメッセージを送信してみる

以上でMessaging APIを試す準備ができました。ここでは試しに、自分宛てに[プッシュメッセージ](/reference/messaging-api/#send-push-message)を送ってみます。以下の手順でメッセージを送信します。

1. コレクションの［**LINE Messaging API**］からプッシュメッセージを選択する。```text
v2 > bot > message > push > push Message
```
2. ［**Body**］タブを開き、リクエストボディを以下のように書き換える。`to`には、手順6でコピーした［**あなたのユーザーID**］を指定する。```json
{
  "to": "<あなたのユーザーID>",
  "messages": [
    {
      "type": "text",
      "text": "Hello, world!"
    }
  ]
}
```
3. ［**Send**］ボタンをクリックする。

![](/media/tips/2026/postman-send-push-message.png){className="[\"border\",\"w-fix-640\"]"}

［**Send**］ボタンをクリックしたときに、下部のレスポンスに`200 OK`と表示されていればリクエストは成功です。お手元のLINEアプリを開くと、メッセージが届いているはずです。

## おわりに

LINE OpenAPIとPostmanを組み合わせることで、APIリファレンスを見ながらURLやパラメータを手打ちする必要がなくなり、手軽にMessaging APIを試すことができます。

Messaging APIにはリッチメニューの操作やオーディエンスの管理などいろんなエンドポイントがありますが、この方法を使えばすぐに手元で試すことができます。ぜひ、日々の開発やテストの効率化にお役立てください。

  :::style
  html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sPWt5, html code.shiki .sPWt5{--shiki-default:#7EE787}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
