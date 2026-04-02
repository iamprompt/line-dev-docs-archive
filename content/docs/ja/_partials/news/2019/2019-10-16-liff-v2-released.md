---
title: LIFF v2がリリースされました
navigation: true
description: LINE Front-end Framework（LIFF） v2は、LINEが提供するウェブアプリのプラットフォームです。
meta: '{"date":"2019-10-16 07:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2019/2019-10-16-liff-v2-released
__hash__: mNkelUEGhejNdygVQUW4zFx1uIJu6E5ZyEPu6e_s85I
seo:
  title: LIFF v2がリリースされました
  description: LINE Front-end Framework（LIFF） v2は、LINEが提供するウェブアプリのプラットフォームです。
---

LINE Front-end Framework（LIFF） v2は、LINEが提供するウェブアプリのプラットフォームです。

::admonition{title="最新バージョンのLIFFを使用してください" type="note"}
LIFF v1は、廃止される予定です。
::

### 外部ブラウザでLIFFアプリが動作します

LIFF v1では、LIFFアプリはLIFFブラウザでのみ動作していました。LIFF v2からは、外部ブラウザでも動作します。これにより、一般のウェブアプリと同じ開発環境で、LIFFアプリを開発できるようになりました。

### ユーザーのプロフィール情報とメールアドレスを取得できます

LINEログイン v2.1との互換性が向上したため、ユーザーIDやメールアドレスをLINEプラットフォームから取得できます。LIFFアプリではこれらを利用して、ユーザー情報を活用した機能を提供したり、メールを送信したりできます。

なお、外部ブラウザで動作しているときでも、LINEログインの処理（ウェブログイン）が利用できます。したがって、外部ブラウザで動作しているときも同様の情報を利用できます。

### QRコードを読み取れます

LINEのQRコードリーダーを起動し、ユーザーが読み取った文字列を取得できます。

### LIFFアプリの動作環境を細かく取得できます

LIFFアプリを動作させている環境の情報を細かく取得できます。取得できる情報は以下のとおりです。

- LIFFアプリが動作しているOS（iOS、Android、外部ブラウザ）
- LIFFブラウザで起動しているかどうか（true、false）
- 言語設定

詳しくは、「[LINE Front-end Framework](/docs/liff/overview/)」を参照してください。
