---
title: LINEバージョン15.12.0より複数のLIFFアプリを同時利用できるようになり、LIFFアプリ間の切り替えがよりスムーズになりました
navigation: true
description: LINEバージョン15.12.0よりLIFFブラウザのアクションボタンのUIおよび仕様を変更します。
meta: '{"date":"2025-08-04 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2025/2025-08-04-multi-tab-view
__hash__: f5bLchkkgdJDrx4_dsyUraRc3hxKWGA-d3ykQFJuyWg
seo:
  title: LINEバージョン15.12.0より複数のLIFFアプリを同時利用できるようになり、LIFFアプリ間の切り替えがよりスムーズになりました
  description: LINEバージョン15.12.0よりLIFFブラウザのアクションボタンのUIおよび仕様を変更します。
---

LINEバージョン15.12.0より:glossary-tooltip[[LIFFブラウザ](/glossary/#liff-browser)]{glossary-id="liff-browser"}の[アクションボタン](/docs/liff/overview/#action-button)のUIおよび仕様を変更します。

変更後は、アクションボタンを押すと、[マルチタブビュー](/docs/liff/overview/#multi-tab-view)が表示されます。マルチタブビューには、使用中のLIFFアプリのオプションと最近使用したサービスが表示されます。

| LINEバージョン15.12.0未満                                                                             | LINEバージョン15.12.0以降                                                                             |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| ![](/media/news/2025/liff-action-button-before.png){className="[\"w-fix-320\",\"border\"]"}    | ![](/media/news/2025/liff-action-button-after.png){className="[\"w-fix-320\",\"border\"]"}     |
| ![](/media/news/2025/liff-action-button-option-ja.png){className="[\"w-fix-320\",\"border\"]"} | ![](/media/news/2025/liff-multi-tab-view-news-ja.webp){className="[\"w-fix-320\",\"border\"]"} |

マルチタブビューの「最近使用したサービス」から、使用を中断したLIFFアプリを再開できます。これによりユーザーは、複数のLIFFアプリを同時に使用できるようになり、異なるLIFFアプリ間を簡単に切り替えたり移動したりできます。

詳しくは、「[最近使用したサービスの仕様](#recent-service-specification-20250804)」を参照してください。

### 対象バージョン

LINEバージョン15.12.0以降

### 最近使用したサービスの仕様

最近使用したサービスにはユーザーが開いたLIFFアプリが、利用履歴の新しい順に最大50件まで表示されます。ユーザーは利用履歴を使って、LIFFアプリを再度開くことができます。

LIFFアプリが利用履歴から再度開かれた際、LIFFアプリは再開または再読み込みされます。再開、再読み込みの仕様は、以下のとおりです。

| 再度開かれた際の挙動       | 条件                                                                | 仕様                                                                    |
| ---------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| LIFFアプリが再開される    | 以下の条件を両方満たすLIFFアプリ  - 12時間以内に使用したLIFFアプリ - 利用履歴の最新10件に含まれるLIFFアプリ | ユーザーが使用を中断した画面からLIFFアプリが再開します。アクセストークン、ブラウザの閲覧履歴、画面のスクロール位置は保持されています。 |
| LIFFアプリが再読み込みされる | 再開される条件を満たさない場合                                                   | ユーザーが使用を中断したURLでLIFFアプリが初期化されます。アクセストークン、ブラウザの閲覧履歴、画面のスクロール位置は破棄されます。 |

詳しくは、『LIFFドキュメント』の「[最近使用したサービス](/docs/liff/overview/#multi-tab-view-recent-service)」を参照してください。

### LIFFアプリを閉じたときの挙動について

LINEアプリのバージョンが15.12.0以降では、LIFFブラウザで開かれているLIFFアプリを、ユーザーの操作や[`liff.closeWindow()`](/reference/liff/#close-window)メソッドで閉じたときの挙動が変更されます。

[最近使用したサービスに表示される条件](/docs/liff/overview/#multi-tab-view-condition)を満たしているLIFFアプリを閉じた場合、「最近使用したサービス」にLIFFアプリが表示され、LIFFアプリを再開できます。

最近使用したサービスに表示される条件を満たしていないLIFFアプリを閉じた場合は、LIFFアプリを閉じると同時にLIFFアプリが終了します。

詳しくは、『LIFFドキュメント』の「[LIFFアプリを閉じたときの挙動](/docs/liff/developing-liff-apps/#behavior-when-closing-liff-app)」を参照してください。
