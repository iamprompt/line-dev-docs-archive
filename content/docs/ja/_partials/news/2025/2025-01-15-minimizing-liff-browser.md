---
title: Android版LINEバージョン15.0.0以降でLIFFブラウザを最小化できるようになりました
navigation: true
description: Android版LINEバージョン15.0.0以降で、トークルーム上で開いたLIFFブラウザを最小化できるようになりました。
meta: '{"date":"2025-01-15 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2025/2025-01-15-minimizing-liff-browser
__hash__: xWrkk9HT-FLnPmm7U0l9DFvYMMaA_mXuNTZ2phSNQek
seo:
  title: Android版LINEバージョン15.0.0以降でLIFFブラウザを最小化できるようになりました
  description: Android版LINEバージョン15.0.0以降で、トークルーム上で開いたLIFFブラウザを最小化できるようになりました。
---

Android版LINEバージョン15.0.0以降で、トークルーム上で開いた:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}を最小化できるようになりました。

LIFFブラウザの最小化とは、LIFFブラウザの閲覧を中断し、別の操作を行うための機能です。これまでは、この機能はiOS版LINEにのみ対応しており、Android版LINEは対象外となっていました。LINEバージョン15.0.0以降では、Android版LINEでもLIFFブラウザを最小化できるようになりました。

![](/media/news/2025/liff-minimize-android-ja.webp)

### LIFFブラウザの最小化の使用条件

LIFFブラウザを最小化するには、以下の条件をすべて満たす必要があります。

- iOS版LINEバージョン12.18.0以降またはAndroid版LINEバージョン15.0.0以降
- 端末の［**設定**］ > ［**アプリ**］ > ［**LINE**］ > ［**他のアプリの上に重ねて表示**］がオン（Android版LINEのみ）
- LIFFアプリの[画面サイズ](/docs/liff/overview/#screen-size)に`Full`を指定
- LIFFアプリの[`chat_message.write`スコープ](/docs/liff/registering-liff-apps/#registering-liff-app)がオフ
- LIFFブラウザがモーダルの上に重なっていない

LIFFブラウザの最小化について詳しくは、『LIFFドキュメント』の「[LIFFブラウザを最小化する](/docs/liff/minimizing-liff-browser/)」を参照してください。
