---
title: >-
  【更新】2022年3月29日より、ユーザーIDアップロード用のオーディエンスに追加できるユーザーは、プライバシーポリシー（2022年3月改定）に同意済みのユーザーのみとなります
navigation: true
description: ''
meta: '{"date":"2022-03-15 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2022/2022-03-15-upload-audience-group-specification-change
__hash__: BKEDS9QFkD8RRMbF32sEOwo1XsDOEVbSVyutVvtktPU
seo:
  title: >-
    【更新】2022年3月29日より、ユーザーIDアップロード用のオーディエンスに追加できるユーザーは、プライバシーポリシー（2022年3月改定）に同意済みのユーザーのみとなります
  description: ''
---

::admonition{title="2022年3月24日追記" type="note"}
[変更予定日](#update-audience-date-20220315)を2022年3月24日としておりましたが、2022年3月29日に変更となりました。
::

「[LINEプライバシーポリシー改定のご案内](https://guide.line.me/privacy-policy_update/2022/0001/?lang=ja-jp){rel="[\"nofollow\"]"}」でお知らせしたとおり、LINEのプライバシーポリシーを改定しました。

プライバシーポリシーの改定に伴い、ユーザーIDアップロード用のオーディエンスにユーザーIDを追加する場合には、改定後のプライバシーポリシーに同意済みのユーザーのみが追加される仕様変更を予定しています。

### 変更予定日

2022年3月29日

### 影響

2022年3月29日以降、オーディエンスにユーザーIDを追加する際に、プライバシーポリシーに同意していないユーザーのユーザーIDが含まれている場合、未同意のユーザーは無視され同意済みのユーザーのみが追加されます。

そのため、指定したユーザーIDの数よりもオーディエンスの有効な送信対象アカウントの数が少なくなることがあります。

仕様変更の影響を受けるAPIは以下のとおりです。

- [ユーザーIDアップロード用のオーディエンスを作成する（JSON指定）](/reference/messaging-api/#create-upload-audience-group)
- [ユーザーIDアップロード用のオーディエンスを作成する（ファイル指定）](/reference/messaging-api/#create-upload-audience-group-by-file)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（JSON指定）](/reference/messaging-api/#update-upload-audience-group)
- [ユーザーIDアップロード用のオーディエンスにユーザーIDまたはIFAを追加する（ファイル指定）](/reference/messaging-api/#update-upload-audience-group-by-file)

::admonition
---
title: オーディエンスを作成した時点でプライバシーポリシーに未同意のユーザーが、後からプライバシーポリシーに同意したとしても、オーディエンスには自動で追加されません
type: note
---
オーディエンスを作成した後で、プライバシーポリシーに同意したユーザーをオーディエンスに追加する場合は、再度APIを利用してください。
::

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
