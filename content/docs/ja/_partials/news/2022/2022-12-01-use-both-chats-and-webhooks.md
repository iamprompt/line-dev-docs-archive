---
title: LINE公式アカウントでWebhookとチャットが併用できるようになりました
navigation: true
description: >-
  LINE公式アカウントでは、従来は［応答モード］という設定で、Webhookを利用するための［Bot］モードか、チャットを利用するための［チャット］モードのどちらかを選ぶ仕様となっていました。この仕様を変更し、2022年11月30日より、LINE公式アカウントでWebhookとチャットが併用できるようになりました。
meta: '{"date":"2022-12-01 00:00 UTC","tags":"messaging-api","locale":"ja"}'
path: /ja/_partials/news/2022/2022-12-01-use-both-chats-and-webhooks
__hash__: UyLz3vMYavXiSbxqcEqh54ZuwgKpLUKH3a9w4LCHPkA
seo:
  title: LINE公式アカウントでWebhookとチャットが併用できるようになりました
  description: >-
    LINE公式アカウントでは、従来は［応答モード］という設定で、Webhookを利用するための［Bot］モードか、チャットを利用するための［チャット］モードのどちらかを選ぶ仕様となっていました。この仕様を変更し、2022年11月30日より、LINE公式アカウントでWebhookとチャットが併用できるようになりました。
---

LINE公式アカウントでは、従来は［**応答モード**］という設定で、Webhookを利用するための［**Bot**］モードか、チャットを利用するための［**チャット**］モードのどちらかを選ぶ仕様となっていました。この仕様を変更し、2022年11月30日より、LINE公式アカウントでWebhookとチャットが併用できるようになりました。

### 仕様変更日

2022年11月30日

### 既存のLINE公式アカウントへの影響

既存のLINE公式アカウントの設定は、自動で以下のように変更されました。設定は[LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}で確認、変更できます。

| 変更前                              | 変更後（現在）       |
| -------------------------------- | ------------- |
| ［**応答モード**］で［**チャット**］モードを選択している | ［**チャット**］がオン |
| ［**応答モード**］で［**Bot**］モードを選択している  | ［**チャット**］がオフ |

詳しくは、『LINE Official Account Manager』の「[【仕様変更】「応答設定」について](https://manager.line.biz/announce/20208546?country=JP){rel="[\"nofollow\"]"}」を参照してください。
