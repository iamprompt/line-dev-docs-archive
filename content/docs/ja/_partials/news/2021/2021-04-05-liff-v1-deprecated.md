---
title: LIFF v1が非推奨になりました
navigation: true
description: 2019年10月16日に告知したとおり、LIFF v1は廃止される予定です。これに伴い、2021年4月1日にLIFF v1は非推奨になりました。
meta: >-
  {"date":"2021-04-05 00:00 UTC","tags":"LIFF, Deprecated, Life
  cycle","locale":"ja"}
path: /ja/_partials/news/2021/2021-04-05-liff-v1-deprecated
__hash__: 9O6gcrhHgTNk_68nEnnodnRwmPgt8J5uXAxrE6EOlAY
seo:
  title: LIFF v1が非推奨になりました
  description: 2019年10月16日に告知したとおり、LIFF v1は廃止される予定です。これに伴い、2021年4月1日にLIFF v1は非推奨になりました。
---

[2019年10月16日に告知](/news/2019/10/16/liff-v2-released/)したとおり、LIFF v1は廃止される予定です。これに伴い、2021年4月1日にLIFF v1は非推奨になりました。

::admonition{type="tip" title="「非推奨」とは"}
「非推奨」とは将来のメジャーリリースでその機能や性能を削除する予定であることを意味します。 非推奨期間になると、メンテナンス期間で保証されていた、既存機能を維持するために必要なバグ修正やセキュリティ改善が行われません。たとえばLIFF v1に不具合があったり、セキュリティイシューがあったとしても、SDKやAPIは更新されません。非推奨期間は、LIFF v1が廃止される前に開発者が計画を立ててSDKを更新するために設けている期間です。LIFFのメジャーリリースの予定に関して詳しくは、『LIFFドキュメント』の「[メジャーバージョンのステータス](/docs/liff/versioning-policy/#version-support-status)」を参照してください。
::

### 影響

LIFF v1で提供されている機能は廃止まで引き続き動作しますが、LIFF v2への移行を推奨いたします。

### 必要なアクション

#### LIFF v1を現在使用している場合

LIFF v1廃止前にLIFF v2へ移行する必要があります。移行について詳しくは、「[LIFF v2に移行する](#migrate-to-v2)」を参照してください。

#### LIFF v1を使用していない場合

特に必要なアクションはありませんが、LIFF v1の新規の使用は推奨しません。

### LIFF v2に移行する

LIFFのバージョンはLIFF SDKのバージョンで決定されます。既存のLIFFアプリがLIFF v1を使用している場合は、LIFFアプリで読み込むSDKを変更し、動作確認を行えばLIFF v2に移行できます。

#### LIFF v1とLIFF v2の違い

LIFF v1とLIFF v2はLIFFアプリの初期化の方法や仕様が異なります。

- [最低動作環境の違い](#minimum-operating-environment-difference)
- [インストール方法の違い](#installation-difference)
- [初期化の方法の違い](#initialization-difference)
- [機能の違い](#functionality-difference)

##### 最低動作環境の違い

LIFF v2とLIFF v1では、LIFFアプリをLIFFブラウザで開く場合の最低動作環境が異なります。最低動作環境の違いおよびその詳細は以下を参照してください。

| LIFF SDKバージョン | 最低動作環境                                            | 詳細                                                                      |
| ------------- | ------------------------------------------------- | ----------------------------------------------------------------------- |
| LIFF v1       | - iOS：iOS 8以降 - Android：4.2以降 - LINE：v7.14以降      | 『LIFF v1 APIリファレンス』の「[動作環境](/reference/liff-v1/#operating-environment)」 |
| LIFF v2       | - iOS：iOS 12.0以降 - Android：5.0以降 - LINE：v9.14.0以降 | 『LIFFドキュメント』の「[推奨環境](/docs/liff/overview/#operating-environment)」       |

::admonition{type="note"}
最低動作環境以降のバージョンでも、機能や設定によっては動作しない場合や画面が正常に表示されない場合があります。
::

##### インストール方法の違い

LIFF v1はCDNでのインストール方法のみ提供していましたが、LIFF v2ではCDNに加えてnpmでのインストールが可能です。インストール方法およびその詳細は以下を参照してください。

| LIFF SDKバージョン | LIFF SDKのインストール方法        | 詳細                                                                                       |
| ------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| LIFF v1       | CDNパスを指定                 | 『LIFFドキュメント』の「[LIFF SDKを組み込む](/docs/liff/developing-liff-apps-v1/#integrating-sdk)」      |
| LIFF v2       | - CDNパスを指定 - npmパッケージを利用 | 『LIFFドキュメント』の「[LIFFアプリにLIFF SDKを組み込む](/docs/liff/developing-liff-apps/#integrating-sdk)」 |

##### 初期化の方法の違い

LIFF v1は引数なしで`liff.init()`を呼び出しますが、LIFF v2は`liff.init()`を呼び出す際に`liffId`プロパティと、その値としてLIFFアプリのLIFF IDを引数に渡す必要があります。

LIFF v1の初期化方法：

```javascript
liff.init(
  data => {
    // Now you can call LIFF API
    const userId = data.context.userId;
  },
  err => {
    // LIFF initialization failed
  }
);
```

LIFF v2の初期化方法：

```javascript
// Using a Promise object
liff
  .init({
    liffId: "123456-abcedfg" // Use own liffId
  })
  .then(() => {
    // Start to use liff's api
  })
  .catch((err) => {
    // Error happens during initialization
    console.log(err.code, err.message);
  });

// Using a callback
liff.init({ liffId: "123456-abcedfg" }, successCallback, errorCallback);
```

  
初期化方法の違いおよび関連ドキュメントについては、以下を参照してください。

| LIFF SDKバージョン | LIFFアプリの初期化方法                                              | 詳細・コード例                                                                      |
| ------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| LIFF v1       | `liff.init()`を呼び出す                                         | 『LIFF v1 APIリファレンス』の[`liff.init()`](/reference/liff-v1/#initialize-liff-app) |
| LIFF v2       | `liff.init()`に`liffId`プロパティと、その値としてLIFFアプリのLIFF IDを渡して呼び出す | 『LIFF v2 APIリファレンス』の[`liff.init()`](/reference/liff/#initialize-liff-app)    |

##### 機能の違い

LIFF v2では、LIFF v1に加えさらに多くの機能が利用できます。

1. **外部ブラウザでLIFFアプリの動作が可能**

LIFF v1では、LIFFアプリはLIFFブラウザでのみ動作していました。LIFF v2からは、外部ブラウザでも動作します。このため、一般のウェブアプリと同じ開発環境でLIFFアプリを開発できます。

1. **利用可能なLIFFメソッド**

LIFF v2はLIFF v1に加えさらに多くのLIFFメソッドが利用できます。LIFF v2で追加されたメソッドの一覧は以下を参照してください。

- [ユーザーがLIFFアプリを動作させている環境を取得する](/reference/liff/#get-os)
- [LIFFアプリを動作させている環境の言語設定を取得する](/reference/liff/#get-language)
- [LIFF SDKのバージョンを取得する](/reference/liff/#get-version)
- [ユーザーのLINEバージョンを取得する](/reference/liff/#get-line-version)
- [LIFFアプリをLIFFブラウザで動作させているかどうかを取得する](/reference/liff/#is-in-client)
- [ユーザーがログインしているかどうかを取得する](/reference/liff/#is-logged-in)
- [指定したAPIが、LIFFアプリを起動した環境で使用可能かどうかを確認する](/reference/liff/#is-api-available)
- [LINEログインの処理（ウェブログイン）を行う](/reference/liff/#login)
- [ログアウトする](/reference/liff/#logout)
- [LIFF SDKが取得した「現在のユーザーの生のIDトークン」を取得する](/reference/liff/#get-id-token)
- [LIFF SDKが取得したIDトークンの「ペイロード」を取得する](/reference/liff/#get-decoded-id-token)
- [LIFFアプリが起動された画面に関する情報を取得する](/reference/liff/#get-context)
- [ユーザーとLINE公式アカウントの友だち関係を取得する](/reference/liff/#get-friendship)
- [現在のページのパーマネントリンクを取得する](/reference/liff/#permanent-link-create-url)
- [現在のページのパーマネントリンクに、任意のクエリパラメータを追加する](/reference/liff/#permanent-linke-set-extra-query-param)
- [ターゲットピッカーを表示し、ターゲットピッカーで選択した相手にメッセージを送信する](/reference/liff/#share-target-picker)
- [LINEのQRコードリーダーを起動し、読み取った文字列を取得する](/reference/liff/#scan-code)

各メソッドのコード例や詳細は、『[LIFF v2 APIリファレンス](/reference/liff/)』を参照してください。

### 移行に役立つリソース

LIFF v2の仕様や開発方法の確認には、[LIFFスターターアプリ](https://github.com/line/line-liff-v2-starter){rel="[\"nofollow\"]"}が便利です。詳しくは、『LIFFドキュメント』の「[LIFFスターターアプリを試してみる](/docs/liff/trying-liff-app/)」を参照してください。
