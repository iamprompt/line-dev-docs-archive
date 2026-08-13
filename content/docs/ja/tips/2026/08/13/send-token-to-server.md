---
title: サーバーにはプロフィール情報ではなくトークンを送ろう
navigation: true
description: >-
  LINEログインを組み込んだりLINEミニアプリを開発したりする過程で、エンドユーザーのユーザーIDや表示名などのプロフィール情報を取得できることにお気づきの方も多いでしょう。取得したプロフィール情報を自社サービスのサーバーへ送れば、そのままログインや会員連携に活用できそうに見えるかもしれません。
meta: >-
  {"date":"2026-08-13 00:00 UTC","tags":"line-login, liff,
  line-mini-app","locale":"ja","sidebar":false}
path: /ja/tips/2026/08/13/send-token-to-server
__hash__: IVs6r0KyJUPYAbiatujQ4M2zl5Ky2kHLmF2xCQUlUWo
seo:
  title: サーバーにはプロフィール情報ではなくトークンを送ろう
  description: >-
    LINEログインを組み込んだりLINEミニアプリを開発したりする過程で、エンドユーザーのユーザーIDや表示名などのプロフィール情報を取得できることにお気づきの方も多いでしょう。取得したプロフィール情報を自社サービスのサーバーへ送れば、そのままログインや会員連携に活用できそうに見えるかもしれません。
---

::Tips
# :page-title

  :::display-date{date="2026/08/13" .!mb-20}

  :::

LINEログインを組み込んだりLINEミニアプリを開発したりする過程で、エンドユーザーのユーザーIDや表示名などのプロフィール情報を取得できることにお気づきの方も多いでしょう。取得したプロフィール情報を自社サービスのサーバーへ送れば、そのままログインや会員連携に活用できそうに見えるかもしれません。

しかし、セキュリティの観点から、クライアントはユーザーIDなどのプロフィール情報を、ユーザー認証の根拠としてそのままサーバー側に送信すべきではありません。この記事では、サーバーでユーザーを安全に識別するための基本的な考え方を紹介します。

## クライアントから送信されたプロフィール情報は改ざんされうる

たとえば、LIFFアプリで[`liff.getProfile()`](/reference/liff/#get-profile)を使うと、ユーザーIDや表示名などを取得できます。これらの情報は、LIFFアプリの画面にプロフィールを表示する用途には利用できます。

一方、次のように取得した情報をサーバーへ送り、`userId`をログイン中のユーザーとして扱う実装には、セキュリティ上の問題があります。

```javascript
// 不適切な例: サーバーにユーザーIDを送る
const profile = await liff.getProfile();

await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    userId: profile.userId,
    displayName: profile.displayName,
  }),
});
```

ブラウザやアプリ上で動くコードと、そのコードから送信されるリクエストは、ユーザーが変更できてしまいます。悪意のある攻撃者があなたの知らないうちにリクエストの`userId`を別の値に書き換えても、サーバーには、それがLINEプラットフォームから取得した値かどうかを判断する材料がありません。この値だけでログインや会員連携を行うと、別のユーザーになりすまされるおそれがあります。

次のシーケンス図は、攻撃者が別のユーザーのユーザーIDを知っている場合に、`userId`を書き換えてなりすます流れを示しています。

  :::interactive-svg
  ---
  src: /media/tips/2026/send-token-to-server-impersonation-ja.svg
  alt: 攻撃者がLIFFアプリから送るユーザーIDを書き換え、サーバーが検証せずに別のユーザーのセッションを発行するシーケンス図
  :border: true
  ---
  :::

攻撃者が何らかの方法で別のユーザーのユーザーIDを知り、ログインリクエストの`userId`をその値に書き換えたとします。サーバーが値を検証せずにセッションを発行すると、攻撃者がそのユーザーとしてログインし、会員情報や予約履歴を閲覧したり、ポイントやクーポンを不正に利用したりする可能性があります。ユーザーIDはパスワードではなく、それ自体で本人確認を行える情報ではありません。

同じ理由で、[`liff.getDecodedIDToken()`](/reference/liff/#get-decoded-id-token)で取得したプロフィール情報も、サーバーへ送ってユーザー認証に使わないでください。

## 生のトークンを送り、サーバーで検証する

サーバーでユーザーを識別するときは、クライアントからユーザーIDではなく、**生のIDトークンまたはアクセストークン**を送ります。そして、サーバーからLINEプラットフォームのAPIを呼び出してトークンを検証し、その結果からユーザーIDを取得します。

IDトークンを使う場合の全体の流れを、次のシーケンス図に示します。

  :::interactive-svg
  ---
  src: /media/tips/2026/send-user-profile-via-id-token-ja.svg
  alt: LIFFアプリがIDトークンを自社サービスのサーバーへ送り、サーバーがLINEプラットフォームで検証するシーケンス図
  :border: true
  ---
  :::

重要なのは、LIFFアプリがプロフィール情報ではなく生のIDトークンを自社サービスのサーバーへ送り、サーバーがLINEプラットフォームから直接受け取った検証結果を使うことです。具体的な手順は次のとおりです。

1. [`liff.init()`](/reference/liff/#initialize-liff-app)の完了後に、LIFFアプリで[`liff.getIDToken()`](/reference/liff/#get-id-token)を呼び出し、生のIDトークンを取得する
2. IDトークンをHTTPSで自社サービスのサーバーへ送る
3. サーバーから「[IDトークンを検証する](/reference/line-login/#verify-id-token)」エンドポイントへ、IDトークンと期待するチャネルIDを送る
4. 検証に成功したレスポンスの`sub`を、LINEのユーザーIDとして扱う

```javascript
const idToken = liff.getIDToken();
if (!idToken) {
  throw new Error("ID token is unavailable");
}

await fetch("/api/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ idToken }),
});
```

LINEログインをウェブアプリに組み込む場合は、ログイン後に「コールバックURLへ返された認可コード」を通常はバックエンドからLINEプラットフォームのトークンエンドポイントへ送ります。すると、バックエンドはアクセストークンと、`openid`スコープを指定している場合はIDトークンを取得できます。この場合は、ブラウザから送られたユーザーIDではなく、バックエンドが取得し検証したトークンの情報からユーザーを識別してください。

アクセストークンを使う方法もあります。サーバーで「[アクセストークンの有効性を検証する](/reference/line-login/#verify-access-token)」エンドポイントを呼び出し、検証結果の`client_id`が期待するチャネルIDと一致すること、`expires_in`が正の値であることを確認します。その後、「[ユーザープロフィールを取得する](/reference/line-login/#get-user-profile)」エンドポイントからユーザーIDを取得します。

## 検証後は自社サービスのセッションへ交換する

検証済みのユーザーIDを取得したら、自社サービス用のセッションを発行します。以降のリクエストでは、そのセッションを使ってログイン状態を管理します。

1. LIFFアプリでは、IDトークンまたはアクセストークンを自社サービスのサーバーへ送る。ウェブアプリに組み込んだLINEログインでは、バックエンドが認可コードをトークンと交換する
2. 自社サービスのサーバーからLINEプラットフォームのAPIを呼び出し、トークンを検証する
3. 検証結果からユーザーIDを取得する
4. 取得したユーザーIDに対して、自社サービス用のセッションを発行する

LINEプラットフォームのトークンを自社サービスのセッションとして長期間使い続ける設計は避けてください。特に、LIFFアプリで取得したアクセストークンは、ユーザーがLIFFアプリを閉じると無効化される場合があります。そのため、トークンを`localStorage`などに保存して次回の起動時に再利用するような実装は、予期せぬタイミングで認証に失敗する原因になります。

また、IDトークンやアクセストークンは認証情報です。ログや分析ツールに記録せず、HTTPSで送信してください。自社サービスのセッションをCookieで管理する場合は、`Secure`属性と`HttpOnly`属性を設定するなど、セッション自体も適切に保護する必要があります。

## 使い分けの整理

クライアントとサーバーでは、同じユーザー情報でも扱い方が異なります。

| 目的                           | 使用する情報                                                               |
| ---------------------------- | -------------------------------------------------------------------- |
| LIFFアプリの画面に表示名やプロフィール画像を表示する | `liff.getProfile()`または`liff.getDecodedIDToken()`で取得した情報              |
| サーバーでユーザーを識別する               | `liff.getIDToken()`または`liff.getAccessToken()`で取得した生のトークンをサーバーで検証した結果 |
| 検証後のログイン状態を維持する              | 自社サービスが発行したセッション                                                     |

## まとめ

クライアント側で取得したプロフィール情報は、エンドユーザーに表示する画面には利用できますが、改ざんされる可能性があります。そのため、そのままサーバーでユーザー認証の根拠にするのは危険です。サーバーでユーザーを識別するときは、IDトークンまたはアクセストークンを受け取り、LINEプラットフォームで検証した結果を使用してください。

詳しくは、『LIFFドキュメント』の「[LIFFアプリおよびサーバーでユーザー情報を使用する](/docs/liff/using-user-profile/)」および『LINEログインドキュメント』の「[LINEログインのセキュリティチェックリスト](/docs/line-login/security-checklist/)」を参照してください。

  :::style
  html pre.shiki code .sH3jZ, html code.shiki .sH3jZ{--shiki-default:#8B949E}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags
  ---
  tags: line-login, liff, line-mini-app
  lang: en
  section: tips
  ---
  :::
::
