---
title: LINEバージョン12.17.0よりLIFFブラウザの仕様を一部変更します
navigation: true
description: LINEバージョン12.17.0よりLIFFブラウザの仕様を一部変更します。
meta: '{"date":"2022-10-11 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-10-11-liff-update-line-12-17-0
__hash__: ZS0uCJyjNy06VT5yqdYToZow9xLAIIG3ESyR43mezMA
seo:
  title: LINEバージョン12.17.0よりLIFFブラウザの仕様を一部変更します
  description: LINEバージョン12.17.0よりLIFFブラウザの仕様を一部変更します。
---

LINEバージョン12.17.0より:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}の仕様を一部変更します。

### 対象バージョン

LINEバージョン12.17.0以降

### 変更内容

- [画面サイズが「Full」のLIFFブラウザで、スクロール時にヘッダーが縮小されます](#shrink-header-20221011)
- [LIFFブラウザを最小化する方法を変更します](#liff-minimize-20221011)

#### 画面サイズが「Full」のLIFFブラウザで、スクロール時にヘッダーが縮小されます

これまで、ユーザーがLIFFブラウザを閲覧している際に、ヘッダーの閉じるボタンを誤ってタップし、LIFFブラウザを意図せず閉じてしまう問題がありました。

この問題を改善するため、画面サイズがFullのLIFFブラウザでは、スクロール時にヘッダーが縮小されるようにしました。ヘッダーの縮小時には、[アクションボタン](/docs/liff/overview/#action-button)やURLなど、ヘッダーの一部のコンポーネントが非表示になります。

| 通常時                                                                                                        | 縮小時                                                                                                        |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![通常時のLIFFブラウザのヘッダー](/media/news/2022/header-normal-20221011.jpeg){className="[\"border\",\"w-fix-320\"]"} | ![縮小時のLIFFブラウザのヘッダー](/media/news/2022/header-shrink-20221011.jpeg){className="[\"border\",\"w-fix-320\"]"} |

#### LIFFブラウザを最小化する方法を変更します

これまで、LIFFブラウザを最小化するには、以下の3つの方法がありました。

- [アクションボタンのオプションをタップする](/docs/liff/minimizing-liff-browser/#tap-action-button-option)
- [アプリ内通知をタップする](/docs/liff/minimizing-liff-browser/#tap-in-app-alert)
- [LIFFブラウザをドラッグする](/docs/liff/minimizing-liff-browser/#drag-liff-browser)

これらのうち、[LIFFブラウザをドラッグする](/docs/liff/minimizing-liff-browser/#drag-liff-browser)方法を、[LIFFブラウザをスワイプする](/docs/liff/minimizing-liff-browser/#swipe-liff-browser)方法に変更します。LIFFブラウザを下方向へスワイプすると、LIFFブラウザが最小化されます。

![LIFFブラウザの最小化（LIFFブラウザをスワイプする）](/media/liff/minimizing-liff-app/swipe-liff-browser-ja.png){className="[\"w-fix-600\"]"}

::admonition{title="LIFFブラウザとLINE内ブラウザの挙動の違い" type="note"}
LIFFブラウザと:glossary-tooltip[[LINE内ブラウザ](/glossary/#line-iab)]{glossary-id="line-iab"}では、下方向へスワイプした際の挙動が異なります。LINE内ブラウザを下方向へスワイプすると、LINE内ブラウザが閉じられます。
::

LIFFブラウザの最小化について詳しくは、『LIFFドキュメント』の「[LIFFブラウザを最小化する](/docs/liff/minimizing-liff-browser/)」を参照してください。
