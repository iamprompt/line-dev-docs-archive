---
title: 2026年3月9日よりAndroid版LINEにおいてEdge-to-edgeが適用されます
navigation: true
description: 2026年3月9日より、Android版LINEにおいてEdge-to-edgeが適用されます。
meta: '{"date":"2026-02-12 01:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2026/2026-02-12-edge-to-edge-support
__hash__: nJ7D8S3KRThqLZX00l-b6DyFdGkwrXr2i1Eac79kz4c
seo:
  title: 2026年3月9日よりAndroid版LINEにおいてEdge-to-edgeが適用されます
  description: 2026年3月9日より、Android版LINEにおいてEdge-to-edgeが適用されます。
---

2026年3月9日より、Android版LINEにおいて[Edge-to-edge](https://developer.android.com/develop/ui/views/layout/edge-to-edge?hl=ja){rel="[\"nofollow\"]"}が適用されます。

これにより、LIFFアプリおよびLINEミニアプリにおいて、下端に配置されたボタンやコンテンツがナビゲーションバーエリアと重なり、操作性や視認性が損なわれる可能性があります。開発者の皆様には事前の影響確認と対応をお願いいたします。

### 仕様変更予定日

2026年3月9日（UTC+9）

### 対象バージョン

Android版LINEのバージョン26.3.0以降

### 影響を受けるLIFFアプリ/LINEミニアプリ

すべてのLIFFアプリおよびLINEミニアプリが対象です。[LIFFブラウザの画面サイズ](/docs/liff/overview/#screen-size)は、`Full`、`Tall`、`Compact`のすべてが対象となります。

### 仕様変更点

Google社が提供するAndroid 15以降では、すべてのアプリに対して[Edge-to-edgeが強制適用](https://developer.android.com/about/versions/15/behavior-changes-15?hl=ja#edge-to-edge){rel="[\"nofollow\"]"}されます。それに伴い、Android版LINEにおいても対象バージョン以降でEdge-to-edgeが適用され、LIFFアプリおよびLINEミニアプリに以下の影響があります。

| ナビゲーションの種類    | 変更前（現在）                       | 変更後                 |
| ------------- | ----------------------------- | ------------------- |
| ジェスチャーナビゲーション | WebViewの領域はジェスチャーナビゲーションの上端まで | WebViewの領域は画面の最下部まで |

なお画面最上部のステータスバーにおいては、WebViewの領域は変更ありません。

### 影響とお願い

この変更により、LIFFアプリおよびLINEミニアプリにおいて、下端に配置されたボタンやコンテンツがナビゲーションバーエリアと重なって、操作性や視認性が損なわれる可能性があります。

LIFFアプリおよびLINEミニアプリを提供している開発者は、仕様変更予定日までに以下の点をご確認ください。

- 画面最下部の要素が操作を妨げない位置にあるか
- 必要に応じて`safe-area-inset-bottom`を使用し、ジェスチャーナビゲーション領域と重ならないようにコンテンツを制御しているか

#### ナビゲーション領域を考慮したCSSの記述例

WebViewバージョン144以降の環境では`safe-area-inset-bottom`を使用し、WebViewバージョン144未満の環境ではフォールバックとして`--android-safe-area-inset-bottom`を使用します。

```css
margin-bottom: var(
  --android-safe-area-inset-bottom,
  env(safe-area-inset-bottom)
);
```

画面を横向きにした場合の挙動には変更ありません。左右の`safe-area-inset`および`--android-safe-area-inset`には常に0が設定されます。

LINEヤフー株式会社は、今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
