---
title: 日本の新規LINEミニアプリチャネルにおいて、2026年1月8日より「チャネル同意の簡略化」機能が常に有効になりました
navigation: true
description: >-
  2025年10月31日にお知らせしたとおり、日本の新規LINEミニアプリチャネルにおいて、2026年1月8日より「チャネル同意の簡略化」機能の利用が必須になりました。
meta: '{"date":"2026-01-08 00:00 UTC","tags":"line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2026/2026-01-08-channel-consent-simplification
__hash__: dbAOEtG7jgXgl35dcBzAD49G-5l-y8jtfBjBeCLCz-4
seo:
  title: 日本の新規LINEミニアプリチャネルにおいて、2026年1月8日より「チャネル同意の簡略化」機能が常に有効になりました
  description: >-
    2025年10月31日にお知らせしたとおり、日本の新規LINEミニアプリチャネルにおいて、2026年1月8日より「チャネル同意の簡略化」機能の利用が必須になりました。
---

[2025年10月31日](/news/2025/10/31/channel-consent-simplification/)にお知らせしたとおり、日本の新規LINEミニアプリチャネルにおいて、2026年1月8日より「[チャネル同意の簡略化](/docs/line-mini-app/develop/channel-consent-simplification/#what-is-channel-consent-simplification)」機能の利用が必須になりました。

### 仕様変更日時

2026年1月8日 12:00（UTC+9）

### 仕様変更の対象となるLINEミニアプリチャネル

仕様変更後に作成し、かつ［**チャネル基本設定**］タブの［**サービスを提供する地域**］が「日本」のLINEミニアプリチャネル

### 仕様変更の対象外となるLINEミニアプリチャネル

- 仕様変更前に作成したLINEミニアプリチャネル
- ［**チャネル基本設定**］タブの［**サービスを提供する地域**］が「タイ」や「台湾」のLINEミニアプリチャネル

### 仕様変更点

[対象となるLINEミニアプリチャネル](#channel-consent-simplification-subject-20260108)において、次の変更が行われました。

- 「チャネル同意の簡略化」機能が常に有効になりました。

  - それに伴い、［**ウェブアプリ設定**］タブの［**チャネル同意の簡略化**］のトグルボタンが削除され、「チャネル同意の簡略化」機能を無効にできなくなりました。

上記の変更は、仕様変更の対象となるLINEミニアプリチャネルであれば、未認証ミニアプリにも適用されます。ただし、未認証ミニアプリで「チャネル同意の簡略化」機能が有効になるのは、開発用と審査用のみです。

### 友だち追加オプションへの影響

LINEミニアプリでは、[友だち追加オプション](/docs/line-mini-app/service/line-mini-app-oa/#link-a-line-official-account-with-your-channel)を使って、[アクセス許可要求画面](/docs/line-mini-app/develop/configure-console/#verification-screen)、もしくは[チャネル同意画面](/docs/line-mini-app/develop/configure-console/#consent-screen-settings)からLINE公式アカウントの友だち追加への誘導ができます。

![](/media/news/2025/line-mini-app-playground-verification-screen-ja.png){className="[\"border\",\"w-fix-280\",\"inline-block\",\"mb-0-important\",\"mr-2\"]"}![](/media/news/2025/line-mini-app-playground-channel-consent-screen-ja.png){className="[\"border\",\"w-fix-280\",\"inline-block\"]"}

しかし、LINEミニアプリチャネルの［**ウェブアプリ設定**］タブの「Scope」セクションで`openid`のみを指定している場合、「チャネル同意の簡略化」機能が有効になると、アクセス許可要求画面およびチャネル同意画面が表示されなくなります。このため、友だち追加オプションによる友だち追加を誘導できなくなります。

友だち追加オプションによる友だち追加を誘導したい場合は、LINEミニアプリチャネルの［**ウェブアプリ設定**］タブの「Scope」セクションで`openid`以外のスコープも指定した上で、次のいずれかの方法でアクセス許可要求画面を表示してください。

- [方法1. `liff.permission.query()`メソッドと`liff.permission.requestAll()`メソッドを使う](#channel-consent-simplification-method1-20260108)
- [方法2. `openid`スコープ以外の権限を必要とするメソッドを使う](#channel-consent-simplification-method2-20260108)

#### 方法1. `liff.permission.query()`メソッドと`liff.permission.requestAll()`メソッドを使う

[`liff.permission.query()`](/reference/liff/#permission-query)メソッドと[`liff.permission.requestAll()`](/reference/liff/#permission-request-all)メソッドを使うと、アクセス許可要求画面を表示できます。

```javascript
// profileスコープに未同意の場合にアクセス許可要求画面を表示する
liff.permission.query("profile").then((permissionStatus) => {
  if (permissionStatus.state === "prompt") {
    liff.permission.requestAll();
  }
});
```

詳しくは、『LIFF APIリファレンス』の「[`liff.permission.query()`](/reference/liff/#permission-query)」と「[`liff.permission.requestAll()`](/reference/liff/#permission-request-all)」を参照してください。

#### 方法2. `openid`スコープ以外の権限を必要とするメソッドを使う

`openid`スコープ以外の権限を必要とするメソッドを使うと、アクセス許可要求画面を表示できます。`openid`スコープ以外の権限を必要とするメソッドは次のとおりです。

| スコープ                 | メソッド                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `email`              | - [`liff.getIDToken()`](/reference/liff/#get-id-token) - [`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token) |
| `profile`            | - [`liff.getProfile()`](/reference/liff/#get-profile) - [`liff.getFriendship()`](/reference/liff/#get-friendship)            |
| `chat_message.write` | - [`liff.sendMessages()`](/reference/liff/#send-messages)                                                                    |

なお、チャネル同意画面のように、LINEミニアプリが起動した直後に友だち追加オプションによる友だち追加を誘導したい場合は、[方法1](#channel-consent-simplification-method1-20260108)や[方法2](#channel-consent-simplification-method2-20260108)をLINEミニアプリの起動直後に行うよう実装してください。

### 仕様変更の背景

ユーザーがLINEミニアプリをよりスムーズに利用できるようにすることで、ユーザー体験を向上させ、LINEミニアプリの利用を促進することを目的としています。

LINEヤフー株式会社は、今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
