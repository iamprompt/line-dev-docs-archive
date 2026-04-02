---
title: LINEバージョン12.13.0以降でLIFF間遷移後にliff.referrerが付与されない不具合を修正しました
navigation: true
description: >-
  LINEバージョン12.13.0以降において、LIFF間遷移時にLIFFブラウザがRefererリクエストヘッダーを送信せず、遷移後のLIFFアプリのURLにliff.referrerクエリパラメータが付与されない不具合がありました。
meta: '{"date":"2023-11-30 01:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2023/2023-11-30-liff-update-line-13-20-0
__hash__: MdUMXPaCdg9sK23qxoxPBqtARnGBDG1pMNM_pELHLEM
seo:
  title: LINEバージョン12.13.0以降でLIFF間遷移後にliff.referrerが付与されない不具合を修正しました
  description: >-
    LINEバージョン12.13.0以降において、LIFF間遷移時にLIFFブラウザがRefererリクエストヘッダーを送信せず、遷移後のLIFFアプリのURLにliff.referrerクエリパラメータが付与されない不具合がありました。
---

LINEバージョン12.13.0以降において、[LIFF間遷移](/docs/liff/opening-liff-app/#move-liff-to-liff)時に:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}が`Referer`リクエストヘッダーを送信せず、遷移後のLIFFアプリのURLに`liff.referrer`クエリパラメータが付与されない不具合がありました。

遷移後のLIFFアプリのURLに`liff.referrer`クエリパラメータが付与されるよう、LINEバージョン13.20.0において、不具合を修正しました。
