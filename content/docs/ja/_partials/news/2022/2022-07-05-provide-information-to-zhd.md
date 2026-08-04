---
title: 【更新】「ZHDグループへの情報提供に関する個別規約」の制定について
navigation: true
description: ''
meta: >-
  {"date":"2022-07-05 00:00 UTC","tags":"messaging-api, line-blockchain,
  console","locale":"ja"}
path: /ja/_partials/news/2022/2022-07-05-provide-information-to-zhd
__hash__: g7vuQc87fdIQHLktutL6hSm8lwQSld-hoJQwMO4fxHM
seo:
  title: 【更新】「ZHDグループへの情報提供に関する個別規約」の制定について
  description: ''
---

::admonition{title="2022年10月3日追記" type="note"}
[制定予定日](#scheduled-effective-date-20220705)は2023年3月8日に延期となりました。詳しくは、2022年10月3日のニュース、「[「ZHDグループへの情報提供に関する個別規約」の制定予定日を2023年3月8日に延期します](/news/2022/10/03/provide-information-to-zhd/)」を参照してください。
::

::admonition{title="2022年9月8日追記" type="note"}
[制定予定日](#scheduled-effective-date-20220705)を2022年10月3日としておりましたが、2022年10月5日に変更となりました。
::

2023年3月8日より、特定のチャネルにおいて、「[ZHDグループへの情報提供に関する個別規約](https://terms2.line.me/provide_information_zhd_jp){rel="[\"nofollow\"]"}」（以下、個別規約といいます）への同意が必要となります。[LINE Developersコンソール](/console/)で対象のチャネルを新たに作成する際、あるいは既存のチャネルを選択した際に、個別規約の同意画面が表示されますので、表示内容を確認の上で同意してください。

### 対象チャネル

日本のLINE公式アカウントと紐づく、以下のチャネルが対象となります。

- Messaging APIチャネル
- ブロックチェーンサービスチャネル

### 既存のチャネルにおける注意事項

既存のチャネルにおいては、[チャネルの権限](/docs/line-developers-console/managing-roles/#roles-for-channel)に関わらず、対象チャネルに登録されている開発者が、LINE Developersコンソールでチャネルを選択した際に、個別規約の同意画面が表示されます。

個別規約に未同意でも、メッセージの送信やWebhookなど、Messaging APIの各機能は変わらず利用できますが、LINE Developersコンソール内の［**チャネル基本設定**］や［**Messaging API設定**］といった設定画面には進めません。

個別規約への同意は、チャネルごとに一度のみ行う必要があります。1つのチャネルに複数の開発者が登録されている場合、1人が同意を行えば、以降は同意画面は表示されません。また、[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}やLINE公式アカウント管理アプリで、対象のチャネルと紐づくLINE公式アカウントを選択して個別規約に同意済みの場合も、LINE Developersコンソールでは同意画面は表示されません。

### 制定予定日

2023年3月8日

内容および日時は、予告なく変更される可能性があります。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
