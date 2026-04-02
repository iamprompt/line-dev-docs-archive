---
title: ユーザーのプロフィール情報を取得する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/basics/user-profile
__hash__: wQLZE3xZyN4nNJz--R28PrdfKK-_ADIPO3D235C6P7s
seo:
  title: ユーザーのプロフィール情報を取得する
  description: null
---

# :page-title

:markdown-controls[Messaging API](/docs/messaging-api/overview/)、[LINEログイン](/docs/line-login/overview/)、[LINE Front-end Framework（LIFF）](/docs/liff/overview/)、および[LINEミニアプリ](/docs/line-mini-app/discover/introduction/)では、ユーザーのプロフィール情報を取得できます。

取得できるプロフィール情報の種類は、取得方法によって異なります。またメールアドレスや住所のように、取得するためには別途の申請や契約が必要なプロフィール情報もあります。

このページでは、ユーザーのプロフィール情報の種類と、その取得方法について説明します。

:toc## ユーザーのプロフィール情報とは

ユーザーはLINEアプリの［**設定**］>［**プロフィール**］から、名前やプロフィール画像といったプロフィール情報を設定できます。［**プロフィール**］で設定できる情報について詳しくは、LINEヘルプセンターの「[プロフィールとは？](https://help.line.me/line/smartphone/pc?lang=ja&contentId=20000134){rel="[\"nofollow\"]"}」を参照してください。

![ユーザーはLINEアプリでプロフィール情報を設定できます](/media/basics/my-profile-ja.png){className="[\"w-fix-320\",\"bg-border\"]"}

この［**プロフィール**］の他に、次のようなプロフィール情報があります。

- [共通プロフィール](#what-is-common-profile)
- [LINE Profile+](#what-is-line-profile-plus)

### 共通プロフィール

共通プロフィールとは、LINEアプリやYahoo! JAPANに登録しているプロフィール情報を組み合わせて作るプロフィールです。ユーザーはアカウントセンターで共通プロフィールを設定できます。

![ユーザーはアカウントセンターで共通プロフィールを設定できます](/media/basics/quick-fill-ja.png){className="[\"w-fix-320\"]"}

共通プロフィールについて詳しくは、『LINEみんなの使い方ガイド』の「[共通プロフィールを設定してクイック入力を利用する](https://guide.line.me/ja/services/quick-fill.html){rel="[\"nofollow\"]"}」を参照してください。

### LINE Profile+

通常のプロフィール情報に加えて、ユーザーはLINEアプリの［**設定**］>［**プロフィール**］>［**LINE Profile+**］から、住所や電話番号といった追加の情報を登録することもできます。

![ユーザーはLINE Profile+で追加のプロフィール情報を設定できます](/media/basics/profile-plus-ja.png){className="[\"w-fix-320\",\"bg-border\"]"}

［**LINE Profile+**］では、以下の情報を設定できます。

- 氏名（姓、名、ミドルネーム、フリガナなど）
- 性別
- 誕生日（［**設定**］>［**プロフィール**］>［**誕生日**］で登録した情報がLINE Profile+にも表示されます）
- 電話番号（［**設定**］>［**アカウント**］>［**電話番号**］で登録した情報がLINE Profile+にも表示されます）
- メールアドレス（［**設定**］>［**アカウント**］>［**メールアドレス**］で登録した情報がLINE Profile+にも表示されます）
- 住所（郵便番号、都道府県、市区町村、番地など）

ユーザーはLINE Profile+にこれらの情報を登録しておくことで、LINEのファミリーアプリや外部サービスの利用時に住所や電話番号などの面倒な手入力を省くことができます。詳しくは、LINEヘルプセンターの「プロフィールとは？」にある「[LINE Profile+](https://help.line.me/line/smartphone/pc?lang=ja&contentId=20000134){rel="[\"nofollow\"]"}」を参照してください。

LINE Profile+に登録されたプロフィール情報を利用する方法については、『法人ユーザー向けオプションドキュメント』の「[LINE Profile+](/docs/partner-docs/line-profile-plus/)」を参照してください。

## プロフィール情報を取得する方法

LINEプラットフォームでは、以下の方法でユーザーのプロフィール情報を取得できます。

- 方法1. Messaging APIの「[プロフィール情報を取得する](/reference/messaging-api/#get-profile)」エンドポイントで取得する
- 方法2. LINEログインの「[ユーザー情報を取得する](/reference/line-login/#userinfo)」エンドポイントで取得する
- 方法3. LINEログインの「[ユーザープロフィールを取得する](/reference/line-login/#get-user-profile)」エンドポイントで取得する
- 方法4. LINEログインのIDトークンの[ペイロード](/docs/line-login/verify-id-token/#payload)で取得する
- 方法5. LIFFの[liff.getProfile()](/reference/liff/#get-profile)メソッドで取得する
- 方法6. LIFFの[liff.getDecodedIDToken()](/reference/liff/#get-decoded-id-token)メソッドの[ペイロード](/docs/line-login/verify-id-token/#payload)で取得する
- 方法7. LINEミニアプリの「[共通プロフィールのクイック入力](/docs/line-mini-app/quick-fill/overview/)」で取得する

方法1から方法6では、LINEのプロフィールやLINE Profile+の情報を取得できます。方法7では、共通プロフィールの情報を取得できます。

なお取得できる情報はメインプロフィールのみです。ユーザーの:glossary-tooltip[[サブプロフィール](/glossary/#subprofile)]{glossary-id="subprofile"}は取得できません。

それぞれの方法で取得できるプロフィール情報の種類については、「[取得できるプロフィール情報の種類](#profile-information-types)」を参照してください。

## 取得できるプロフィール情報の種類

取得できるプロフィール情報の種類は、取得方法によって異なります。

以下の表は、「[プロフィール情報を取得する方法](#how-to-get-profile)」で説明した方法1から方法7で、それぞれ取得できるプロフィール情報の種類を示しています。

|            | 方法1   Messaging APIの   「[プロフィール情報を取得する](/reference/messaging-api/#get-profile)」 | 方法2   LINEログインの   「[ユーザー情報を取得する](/reference/line-login/#userinfo)」 | 方法3   LINEログインの   「[ユーザープロフィールを取得する](/reference/line-login/#get-user-profile)」 | 方法4   LINEログインの   IDトークンの[ペイロード](/docs/line-login/verify-id-token/#payload) | 方法5   LIFFの   [liff.getProfile()](/reference/liff/#get-profile) | 方法6   LIFFの[liff.getDecodedIDToken()](/reference/liff/#get-decoded-id-token)の   [ペイロード](/docs/line-login/verify-id-token/#payload) | 方法7   LINEミニアプリの   「[共通プロフィールのクイック入力](/docs/line-mini-app/quick-fill/overview/)」 |
| ---------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ユーザーID     | ✅（`userId`）                                                                     | ✅（`sub`）                                                           | ✅（`userId`）                                                                    | ✅（`sub`）                                                                    | ✅（`userId`）                                                     | ✅（`sub`）                                                                                                                           | ❌                                                                                |
| 表示名        | ✅（`displayName`）                                                                | ✅（`name`）                                                          | ✅（`displayName`）                                                               | ✅（`name`）                                                                   | ✅（`displayName`）                                                | ✅（`name`）                                                                                                                          | ❌                                                                                |
| プロフィール画像   | ✅（`pictureUrl`）                                                                 | ✅（`picture`）                                                       | ✅（`pictureUrl`）                                                                | ✅（`picture`）                                                                | ✅（`pictureUrl`）                                                 | ✅（`picture`）                                                                                                                       | ❌                                                                                |
| ステータスメッセージ | ✅（`statusMessage`）                                                              | ❌                                                                  | ✅（`statusMessage`）                                                             | ❌                                                                           | ✅（`statusMessage`）                                              | ❌                                                                                                                                  | ❌                                                                                |
| 言語         | ✅（`language`）                                                                   | ❌                                                                  | ❌                                                                              | ❌                                                                           | ❌                                                               | ❌                                                                                                                                  | ❌                                                                                |
| メールアドレス    | ❌                                                                               | ❌                                                                  | ❌                                                                              | ✅（`email`）                                                                  | ❌                                                               | ✅（`email`）                                                                                                                         | ✅（`email`）                                                                       |
| 氏名         | ❌                                                                               | ❌                                                                  | ❌                                                                              | ✅（`given_name`、`family_name`など）                                             | ❌                                                               | ✅（`given_name`、`family_name`など）                                                                                                    | ✅（`given-name`、`family-name`など）                                                  |
| 性別         | ❌                                                                               | ❌                                                                  | ❌                                                                              | ✅（`gender`）                                                                 | ❌                                                               | ✅（`gender`）                                                                                                                        | ✅（`sex-enum`）                                                                    |
| 誕生日        | ❌                                                                               | ❌                                                                  | ❌                                                                              | ✅（`birthdate`）                                                              | ❌                                                               | ✅（`birthdate`）                                                                                                                     | ✅（`bday-year`、`bday-month`など）                                                    |
| 住所         | ❌                                                                               | ❌                                                                  | ❌                                                                              | ✅（`address`）                                                                | ❌                                                               | ✅（`address`）                                                                                                                       | ✅（`address-level1`、`address-level2`など）                                           |
| 電話番号       | ❌                                                                               | ❌                                                                  | ❌                                                                              | ✅（`phone_number`）                                                           | ❌                                                               | ✅（`phone_number`）                                                                                                                  | ✅（`tel`）                                                                         |

方法4および方法6でメールアドレスを取得するには、メールアドレス取得権限の申請が必要です。詳しくは、『LINEログインドキュメント』の「[メールアドレスの取得権限を申請する](/docs/line-login/integrate-line-login/#applying-for-email-permission)」を参照してください。

また、方法4および方法6で氏名、性別、誕生日、住所、電話番号を取得するには、法人ユーザー向けオプションであるLINE Profile+の利用契約が必要です。LINE Profile+の利用契約について詳しくは、『法人ユーザー向けオプションドキュメント』の「[LINE Profile+](/docs/partner-docs/line-profile-plus/)」を参照してください。

方法7でプロフィール情報を取得するには、クイック入力の利用申請が必要です。クイック入力の利用申請について詳しくは、『LINEミニアプリドキュメント』の「[共通プロフィールのクイック入力の概要](/docs/line-mini-app/quick-fill/overview/)」を参照してください。
