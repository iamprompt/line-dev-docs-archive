---
title: LIFFのバージョニングポリシーおよびライフサイクルを公開しました
navigation: true
description: |-
  LIFFの各バージョンの目的を明確にするために、LIFFのバージョニングポリシーを公開しました。
  あわせて、開発者の方々がLIFFのバージョンアップに対して適切な準備を行えるようにするために、メジャーバージョンごとのライフサイクルも公開しました。
meta: '{"date":"2020-05-08 00:00 UTC","tags":"LIFF","new":"false","locale":"ja"}'
path: /ja/_partials/news/2020/2020-05-08-liff-versioning-policy
__hash__: ivAC6H96lCeEMOq7kUt8-KXb9lCAEEELXLHr9nUWJtg
seo:
  title: LIFFのバージョニングポリシーおよびライフサイクルを公開しました
  description: |-
    LIFFの各バージョンの目的を明確にするために、LIFFのバージョニングポリシーを公開しました。
    あわせて、開発者の方々がLIFFのバージョンアップに対して適切な準備を行えるようにするために、メジャーバージョンごとのライフサイクルも公開しました。
---

LIFFの各バージョンの目的を明確にするために、LIFFのバージョニングポリシーを公開しました。
あわせて、開発者の方々がLIFFのバージョンアップに対して適切な準備を行えるようにするために、メジャーバージョンごとのライフサイクルも公開しました。

::admonition{title="最新バージョンのLIFF SDKを使用してください" type="warning"}
[2019年10月16日にお知らせ](/news/2019/10/16/liff-v2-released/)したとおり、LIFF v1は廃止される予定です。
廃止後は、LIFF v1を組み込んだLIFFアプリは開けません。

メジャーバージョンのライフサイクルおよびLIFF v1が廃止される日程について詳しくは、LIFFドキュメントの「[LIFF SDKのライフサイクル](/docs/liff/versioning-policy/#life-cycle)」を参照してください。
::

### LIFFのバージョニングポリシー

LIFF v2.2.0以降、LIFFのバージョンナンバーは、[セマンティック バージョニング](https://semver.org/lang/ja/){rel="[\"nofollow\"]"}（SemVer）で定められたルールに従います。

SemVerでは、以下のバージョン形式を定義しています。

`メジャー.マイナー.パッチ`

たとえば、`v1.2.3`の場合、`1`はメジャーバージョン、`2`はマイナーバージョン、`3`はパッチバージョンを表します。

LIFFの新しい[バージョニングポリシー](/docs/liff/versioning-policy/)では、LIFFのメジャーバージョンのライフサイクルや、各バージョン（メジャー、マイナー、パッチ）の目的も説明しています。

### LIFF SDK（sdk.js）のアップデートポリシー

LINEでは、LIFF v2.1.13リリース以降、以下の2種類のCDNパスを用意しています。[LIFFアプリにLIFF SDKを組み込む](/docs/liff/developing-liff-apps/#integrating-sdk)ときに、目的に合ったCDNパスを指定してください。

| CDNパス    | 説明                                                                                                                                                                          |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CDNエッジパス | メジャーバージョンのみを指定する方法です。LIFFアプリを更新せずに、LIFF SDKの新バージョンを使用し続けることができます。   例：[https]://static.line-scdn.net/liff/edge/**2**/sdk.js                                                 |
| CDN固定パス  | パッチバージョンまで指定する方法です。LIFFアプリを更新しない限り、指定したパッチバージョンを使い続けることができます。自動的に更新されないため、LIFF SDKのアップデートの影響を受けません。   例：[https]://static.line-scdn.net/liff/edge/**versions/2.1.13**/sdk.js |

CDNエッジパスを指定する例：

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
```

::admonition{title="後方互換性を維持するためのCDNパスについて" type="tip"}
作成済みのLIFFアプリの動作を保証するために、以下のCDNパスでLIFF SDKの提供を継続します。
このCDNパスで利用できるLIFF SDKは、CDNエッジパスで利用できるLIFF SDKと同じバージョンです。

後方互換性を維持するためのCDNパス：  
[https]://static.line-scdn.net/liff/edge/**2.1**/sdk.js
::

::admonition{title="注意" type="note"}
後方互換性を維持するためのCDNパスは、[LIFF SDKのライフサイクルスケジュール](/docs/liff/versioning-policy/#life-cycle-schedule)に関わらず廃止される可能性があります。
LIFFアプリで指定するCDNパスを、CDNエッジパスに変更することをおすすめします。

方針が決まり次第改めてお知らせします。
::

詳しくは、『LIFFドキュメント』の「[バージョニングポリシー](/docs/liff/versioning-policy/)」を参照してください。
