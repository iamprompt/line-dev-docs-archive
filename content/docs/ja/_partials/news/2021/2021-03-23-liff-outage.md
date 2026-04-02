---
title: 【復旧済み／更新】一部LIFF API障害のお知らせ
navigation: true
description: ''
meta: '{"date":"2021-03-23 00:00 UTC","tags":"Outage report, LIFF","locale":"ja"}'
path: /ja/_partials/news/2021/2021-03-23-liff-outage
__hash__: 6g-VA3jSi9kmFkNyG6OtQjJaqqMYaX12kFhfbt2G0rQ
seo:
  title: 【復旧済み／更新】一部LIFF API障害のお知らせ
  description: ''
---

::admonition{title="2021年3月26日追記" type="note"}
当初、障害の発生日時を「2021年3月22日 13:55頃 〜 16:30 頃（UTC+9）」としておりましたが、お伝えした復旧時刻以降も`liff.getFriendship()`の一部の動作において問題が継続して発生しておりました。また障害の発生時刻についても、調査の結果、変更がありました。
そのため、本ニュースの「発生日時」を正確な時刻に更新しております。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。
::

LIFFにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2021年3月22日 10:15頃 〜 2021年3月25日 11:36頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

ユーザーとLINE公式アカウントの友だち関係を取得するLIFFメソッド、[`liff.getFriendship()`](/reference/liff/#get-friendship)の利用

### 状況

発生日時において、`liff.getFriendship()`の利用時にLIFFアプリを開いているブラウザで[オリジン間リソース共有（CORS）](https://developer.mozilla.org/ja/docs/Web/HTTP/CORS){rel="[\"nofollow\"]"}ポリシー違反のエラーが発生し、正常に機能が利用できない場合がありました。すでに復旧しており、現在は正常に`liff.getFriendship()`をご利用いただけます。

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
