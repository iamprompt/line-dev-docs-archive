---
title: LINEミニアプリにおいて、LIFF URLに独自の文字列を設定できるようになりました
navigation: true
description: >-
  LINEミニアプリにおいて、本番用のLIFF URLに独自の文字列を設定できるCustom Path機能をリリースしました。Custom
  Path機能を用いると、以下のように、LIFF URLに独自の文字列を設定できます。
meta: '{"date":"2024-05-29 00:00 UTC","tags":"console, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2024/2024-05-29-mini-custom-path
__hash__: Q10E1flQw0118PEKl8QR1-VYRQbujodvQ2dUxFTjiFI
seo:
  title: LINEミニアプリにおいて、LIFF URLに独自の文字列を設定できるようになりました
  description: >-
    LINEミニアプリにおいて、本番用のLIFF URLに独自の文字列を設定できるCustom Path機能をリリースしました。Custom
    Path機能を用いると、以下のように、LIFF URLに独自の文字列を設定できます。
---

LINEミニアプリにおいて、本番用のLIFF URLに独自の文字列を設定できるCustom Path機能をリリースしました。Custom Path機能を用いると、以下のように、LIFF URLに独自の文字列を設定できます。

| LIFF IDによるURLの例                          | Custom Pathを設定した例                     |
| ---------------------------------------- | ------------------------------------- |
| `https://miniapp.line.me/123456-abcdefg` | `https://miniapp.line.me/cony_coffee` |

たとえば、ユニークな名前をCustom Pathとして設定することにより、ユーザーはURLからどのブランドや店舗のLINEミニアプリなのかがわかるようになります。設定方法について詳しくは、『LINEミニアプリドキュメント』の「[Custom Pathを設定する](/docs/line-mini-app/develop/custom-path/)」を参照してください。

### リリース日

2024年5月29日

### 設定方法

Custom Path機能を利用するには、以下のフォームより申請してください。

[申請フォーム](https://form-business.yahoo.co.jp/claris/enqueteForm?inquiry_type=lmini-custompath){className="[\"btn-in-docs\",\"custom\"]" rel="[\"nofollow\"]"}

申請の受領確認や、審査結果はメールでご連絡します。なお、現時点では、本機能はサービスを提供する地域が日本の場合のみ利用できます。

### 備考

Custom Pathが設定されても、[LINE Developersコンソール](/console/)上では、Custom Pathが設定されたLIFF URLは表示されませんので注意してください。また、現在は申請フォームによる申請が必要ですが、今後のリリースによりLINE Developersコンソールで設定できるようになる予定です。
