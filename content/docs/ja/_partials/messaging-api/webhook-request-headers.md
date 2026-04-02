---
title: Webhook Request Headers
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/messaging-api/webhook-request-headers
__hash__: EAypr1gxSt6LvrvK2Qj-ZEXikFvFMTQ7oINUugmY8jQ
seo:
  description: ''
---

::admonition{title="イベント処理を非同期化することを推奨します" type="tip"}
HTTP POSTリクエストの処理が後続のイベントの処理に遅延を与えないよう、イベント処理を非同期化することを推奨します。
::

::admonition{title="LINEプラットフォームのIPアドレスは開示していません" type="note"}
Webhookリクエスト送信元のLINEプラットフォームのIPアドレスは開示していません。セキュリティの担保はIPアドレスによるアクセス制御ではなく、[署名の検証](/reference/messaging-api/#signature-validation)で実施してください。
::

### リクエストヘッダー

::parameter-table
  :::parameter-table-entry
  #undefined
  x-line-signature

  [署名の検証](#signature-validation)に使う署名
  :::
::

::admonition{title="リクエストヘッダーのフィールド名は大文字小文字を区別せずに扱ってください" type="note"}
[リクエストヘッダー](/reference/messaging-api/#request-headers)のフィールド名は、大文字・小文字の表記が予告なく変更される可能性があります。Webhookを受け取るボットサーバー側では、ヘッダーフィールド名の大文字小文字を区別せずに扱ってください。*1

|              | 変更前                | 変更後                |
| ------------ | ------------------ | ------------------ |
| ヘッダーフィールド名の例 | `X-Line-Signature` | `x-line-signature` |

*1 [https://datatracker.ietf.org/doc/html/rfc7230#section-3.2](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2){rel="[\"nofollow\"]"}
::
