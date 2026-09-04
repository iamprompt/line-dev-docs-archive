---
title: 【復旧済み／更新】LINE Developersコンソール障害のお知らせ
navigation: true
description: ''
meta: '{"date":"2023-03-01 00:00 UTC","tags":"console, outage-report","locale":"ja"}'
path: /ja/_partials/news/2023/2023-03-01-line-developers-console-outage
__hash__: k1DawCRsw9aaCGE2JfwO8ihqZ2eE64D9ZfO-IFJLIDs
seo:
  title: 【復旧済み／更新】LINE Developersコンソール障害のお知らせ
  description: ''
---

::admonition{title="2023年3月29日追記" type="note"}
「[状況](#details-20230301)」を更新しました。
::

LINE Developersコンソールにおいて以下の障害が発生しておりましたが、すべて復旧いたしました。お客様には多大なご迷惑をお掛けし、誠に申し訳ございませんでした。

### 発生日時

2022年11月16日 11:16頃 〜 2023年2月28日 19:37頃（UTC+9）

### 原因

サーバー障害

### 影響範囲

LINE Developersコンソール

### 状況

1. 以下の条件をすべて満たす開発者がLINE Developersコンソールにアクセスした際に、該当するチャネルが表示されず、チャネルの設定画面にたどり着けない状態になっていました。

  - もともとプロバイダーのAdmin権限もしくはMember権限を持っていた
  - 2021年10月19日から2022年7月13日の期間に、プロバイダーの権限を削除された
  - 当該プロバイダーの配下にあるチャネルのAdmin権限、Member権限、もしくはTester権限を持っている
2. 以下の条件をすべて満たす開発者がLINE Developersコンソールにアクセスした際に、該当するプロバイダーが意図せず表示される状態になっていました。

  - プロバイダーの権限は持っていなかったが、プロバイダーの配下にあるチャネルのAdmin権限、Member権限、もしくはTester権限を持っていた
  - 2021年10月19日から2023年2月28日の期間に、権限を持っていたチャネルが削除され、該当するプロバイダーの配下に権限を持つチャネルが存在しなくなった

LINEは今後もお客様への一層のサービス向上に取組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
