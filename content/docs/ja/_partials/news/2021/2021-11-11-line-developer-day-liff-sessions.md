---
title: LINE DEVELOPER DAY 2021のLIFFのセッション内で共有されたLIFFの機能を紹介します
navigation: true
description: LINE DEVELOPER DAY 2021にて、LIFFに関する2つのセッションが行われました。
meta: '{"date":"2021-11-11 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2021/2021-11-11-line-developer-day-liff-sessions
__hash__: zTatyiSQBjEkjqye0iEs6P0tfK8eWcv7XfXsngxfWU8
seo:
  title: LINE DEVELOPER DAY 2021のLIFFのセッション内で共有されたLIFFの機能を紹介します
  description: LINE DEVELOPER DAY 2021にて、LIFFに関する2つのセッションが行われました。
---

LINE DEVELOPER DAY 2021にて、LIFFに関する2つのセッションが行われました。

- [LIFF/LINEミニアプリ超入門 - 特徴と実践的な開発](https://linedevday.linecorp.com/2021/ja/sessions/151/){rel="[\"nofollow\"]"}
- [すべてのLIFFアプリ開発者の開発体験を向上させるために](https://linedevday.linecorp.com/2021/ja/sessions/142/){rel="[\"nofollow\"]"}

セッション中に出てきた、LIFFの機能に関連するリファレンスやドキュメントを紹介します。気になった機能や、実際に利用を始めようと考えている機能があれば、ぜひチェックしてみてください。

### 「LIFF/LINEミニアプリ超入門 - 特徴と実践的な開発」で紹介された機能

| 機能名                 | 概要                                                                                                                                                                                    | リファレンス／ドキュメント                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LINEログイン機能          | :glossary-tooltip[[外部ブラウザ](/glossary/#external-browser)]{glossary-id="external-browser"}および:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}上で、ログイン処理を行います。 | - [`liff.login()`](/reference/liff/#login) - [`liff.logout()`](/reference/liff/#logout)                                                                  |
| シェアターゲットピッカー        | ターゲットピッカーを表示し、ターゲットピッカーで選択した相手に、開発者が作成したメッセージを送信します。                                                                                                                                  | - [シェアターゲットピッカーを利用するには](/docs/liff/developing-liff-apps/#using-share-target-picker) - [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker) |
| liff.scanCodeV2     | LINEの二次元コードリーダーを起動し、読み取った文字列を取得します。                                                                                                                                                   | [`liff.scanCodeV2()`](/reference/liff/#scan-code-v2)                                                                                                     |
| liff.isApiAvailable | 指定したAPIが、LIFFアプリを起動した環境で使用可能かどうかを確認します。                                                                                                                                               | [`liff.isApiAvailable()`](/reference/liff/#is-api-available)                                                                                             |
| liff.getLineVersion | ユーザーのLINEバージョンを取得します。                                                                                                                                                                 | [`liff.getLineVersion()`](/reference/liff/#get-line-version)                                                                                             |
| liff.getOS          | ユーザーがLIFFアプリを動作させている環境を取得します。                                                                                                                                                         | [`liff.getOS()`](/reference/liff/#get-os)                                                                                                                |
| チャネル同意の簡略化          | ユーザーが、LINEミニアプリに初めてアクセスする際に表示される同意画面をスキップできる機能です。                                                                                                                                     | [チャネル同意のプロセスをスキップする](/docs/line-mini-app/develop/channel-consent-simplification/)                                                                        |

| liff.referrerクエリパラメータ | LIFF間遷移前のページのリファラーを取得できます。 | [LIFF間遷移前のURLを取得する](/docs/liff/opening-liff-app/#using-liff-referrer) |
| LIFFの開発を始める | [LINE Developersコンソール](/console/)でLIFFアプリ用のチャネルを追加し、LIFF SDKを利用して開発を行います。 | 

- [クイックスタート](/docs/liff/#%E3%82%AF%E3%82%A4%E3%83%83%E3%82%AF%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%88)

  - [LINE Front-end Framework](/docs/liff/overview/)
  - [チャネルを作成する](/docs/liff/getting-started/)
  - [LIFFスターターアプリを試してみる](/docs/liff/trying-liff-app/)
  - [LIFFアプリを開発する](/docs/liff/developing-liff-apps/)

### 「すべてのLIFFアプリ開発者の開発体験を向上させるために」で紹介された新機能

| 機能名                                                                        | 概要                                                                          | 過去の告知内容                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [LINE API Status](https://api.line-status.info/){rel="[\"nofollow\"]"}     | LINE API Statusは、LINEが提供するサービスの稼働状況や障害状況を確認できるサイトです。稼働状況や障害状況の情報は英語で提供されます。 | [LINE API Statusの対象サービスにLIFFとLINEログインが加わりました](/news/2021/11/08/liff-and-line-login-are-added-to-line-api-status/) |
| [LIFFプレイグラウンド](https://liff-playground.netlify.app/){rel="[\"nofollow\"]"} | LIFFプレイグラウンドを利用すると、LIFF APIを簡単に試すことができます。                                   | [新しいLIFFスターターアプリとLIFFプレイグラウンドを公開しました](/news/2021/11/02/new-liff-starter-and-playground/)                          |
| [LIFFスターターアプリ](https://liff-starter.netlify.app/){rel="[\"nofollow\"]"}    | LIFFスターターアプリは、LIFFアプリの開発の始め方を理解しやすいよう、LIFFアプリの初期化のデモのみを行っています。              | 同上                                                                                                                |

### LINE DEVELOPER DAY 2021関連リンク

- [LINE DEVELOPER DAY 2021公式サイト](https://linedevday.linecorp.com/2021/ja/){rel="[\"nofollow\"]"}
- [LINE Engineering](https://engineering.linecorp.com/ja/){rel="[\"nofollow\"]"}
- [Twitterアカウント](https://twitter.com/LINE_DEV){rel="[\"nofollow\"]"}
- [Facebookページ](https://www.facebook.com/line.developers.jp/){rel="[\"nofollow\"]"}
