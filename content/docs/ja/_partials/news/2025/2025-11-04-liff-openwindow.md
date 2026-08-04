---
title: LINEバージョン15.20.0よりliff.openWindow()メソッドの挙動が変更されます
navigation: true
description: >-
  LINEバージョン15.20.0より、liff.openWindow()メソッドでユニバーサルリンクやアプリリンクが有効なURLを開く場合の挙動を変更します。
meta: '{"date":"2025-11-04 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2025/2025-11-04-liff-openwindow
__hash__: kCt5zfATIB56c2D9VavIRuds2oUHnWhHbbWpwEUuVSQ
seo:
  title: LINEバージョン15.20.0よりliff.openWindow()メソッドの挙動が変更されます
  description: >-
    LINEバージョン15.20.0より、liff.openWindow()メソッドでユニバーサルリンクやアプリリンクが有効なURLを開く場合の挙動を変更します。
---

LINEバージョン15.20.0より、[`liff.openWindow()`](/reference/liff/#open-window)メソッドで[ユニバーサルリンク](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content/){rel="[\"nofollow\"]"}や[アプリリンク](https://developer.android.com/training/app-links){rel="[\"nofollow\"]"}が有効なURLを開く場合の挙動を変更します。

### 対象バージョン

LINEバージョン15.20.0 （2025年12月初旬リリース予定）

なお、この仕様変更の内容および日時は、予告なく変更される可能性があります。

### 変更点

既にリリースされているLINEバージョン14.20.0以降では、`liff.openWindow()`メソッドでユニバーサルリンクやアプリリンクが有効なURLを開いた場合、常にURLに対応するアプリへ遷移する挙動となっています。

この挙動をLINEバージョン15.20.0から変更し、`params.external`パラメータ（※）の値によってURLに対応するアプリへ遷移するか、LINE内ブラウザでURLを開くかを制御できるようにします。

※ `params.external`パラメータは、指定したURLを外部ブラウザで開くかどうかを指定するためのオプションです。

#### LINEバージョンごとの挙動の違い

`liff.openWindow()`メソッドでユニバーサルリンクやアプリリンクが有効なURLを開いた場合、LINEバージョンと`params.external`パラメータの設定によって挙動が異なります。挙動の違いは以下のとおりです。

|                         | `params.external`が`false`   （デフォルト値）                  | `params.external`が`true`                              |
| ----------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| LINE 14.20.0未満（※）       | - iOSの場合：LINE内ブラウザでURLを開く - Androidの場合：URLに対応するアプリに遷移 | - iOSの場合：URLに対応するアプリに遷移 - Androidの場合：デフォルトブラウザでURLを開く |
| LINE 14.20.0以上15.20.0未満 | URLに対応するアプリに遷移                                        | URLに対応するアプリに遷移                                        |
| LINE 15.20.0以上          | LINE内ブラウザでURLを開く                                      | URLに対応するアプリに遷移                                        |

※ LINEバージョン14.20.0以降はOSによる挙動の違いはありません。

### 仕様変更に伴う注意点

[変更点](#changes-20251104)で示したとおり、ユーザーのOSやLINEのバージョンによって`liff.openWindow()`メソッドの挙動が異なります。`liff.openWindow()`メソッドを使ってLIFFブラウザからLINE以外のアプリを開きたい場合は、LIFFアプリの[動作環境](/reference/liff/#getting-environment)に応じて処理を実装してください。

LINEヤフー株式会社は今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
