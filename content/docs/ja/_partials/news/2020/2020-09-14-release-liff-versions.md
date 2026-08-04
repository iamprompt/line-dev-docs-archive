---
title: LIFF v2.1.14、v2.2.1、v2.3.2をリリースしました
navigation: true
description: LIFF v2.1.14、v2.2.1、v2.3.2をリリースしました。変更点は以下のとおりです。
meta: '{"date":"2020-09-14 00:00 UTC","tags":"LIFF","locale":"ja"}'
path: /ja/_partials/news/2020/2020-09-14-release-liff-versions
__hash__: tC3EqHA2mOJtmy3ihH8w7ptjLiCfF5CCkf_VOHEtajE
seo:
  title: LIFF v2.1.14、v2.2.1、v2.3.2をリリースしました
  description: LIFF v2.1.14、v2.2.1、v2.3.2をリリースしました。変更点は以下のとおりです。
---

LIFF v2.1.14、v2.2.1、v2.3.2をリリースしました。変更点は以下のとおりです。

- [LIFFエンドポイントURLに含まれるURLフラグメントがliff.permanentLink.createUrl()で正しく処理されない不具合を修正しました（対象：v2.3.2）](#liff-create-url-error-fix-endpoint-v-2-3-2)
- [LIFFエンドポイントURLに含まれるクエリパラメータがliff.permanentLink.createUrl()で正しく処理されない不具合を修正しました（対象：v2.3.2）](#liff-create-url-error-fix-query-parameter-v-2-3-2)
- [LIFFエンドポイントURLに含まれるパスがliff.permanentLink.createUrl()で正しく処理されない不具合を修正しました（対象：v2.3.2）](#liff-create-url-redirect-url-fix-2-3-2)
- [2次リダイレクト先URLにフラグメントが含まれない不具合を修正しました（対象：v2.3.2）](#liff-url-fragment-error-fix-v-2-3-2)
- [LIFF URLが意図しないURLへリダイレクトされる不具合を修正しました（対象：v2.1.14、v2.2.1、v2.3.2）](#bug-fix-redirect-2-3-2)

機能の変更はありません。

### LIFFエンドポイントURLに含まれるURLフラグメントがliff.permanentLink.createUrl()で正しく処理されない不具合を修正しました

  
**対象バージョン**

- LIFF v2.3.2

**変更点**

LIFFのエンドポイントURLにURLフラグメント（`#URL-fragment`）が含まれていた場合、[`liff.permanentLink.createUrl()`](/reference/liff/#permanent-link-create-url)を実行した際、［**LIFF URLの追加情報の処理方法**］が「**置換（後方互換性モード）**」に設定されいてるにも関わらずパーマネントリンクにURLフラグメントが含まれる不具合がありました。

::admonition{title="問題が発生する条件" type="tip"}
- LIFFのエンドポイントURLにURLフラグメントが含まれている
- ［**LIFF URLの追加情報の処理方法**］が「**置換（後方互換性モード）**」に設定されいてる
::

たとえば、［**エンドポイントURL**］が`https://example.com/path#section`に設定されていて、`liff.permanentLink.createUrl()`を実行すると`https://liff.line.me/{liffId}/path?liff.state=#section`がパーマネントリンクとして返されていました。LIFF v2.3.2では、`https://liff.line.me/{liffId}`が正しく返されるよう修正されています。

### LIFFエンドポイントURLに含まれるクエリパラメータがliff.permanentLink.createUrl()で正しく処理されない不具合を修正しました

  
**対象バージョン**

- LIFF v2.3.2

**変更点**

LIFFのエンドポイントURLにクエリパラメータ（`?key=value`）が含まれていて、同じクエリパラメータが含まれるLIFF URLで`liff.permanentLink.createUrl()`を実行するとクエリパラメータ部分が無限増殖したパーマネントリンクが返される不具合がありました。

::admonition{title="問題が発生する条件" type="tip"}
- LIFFのエンドポイントURLに含まれるクエリパラメータと`liff.permanentLink.createUrl()`を実行する際のLIFF URLのクエリパラメータが一致する
- ［**LIFF URLの追加情報の処理方法**］が「**連結**」に設定されいてる
::

たとえば、［**エンドポイントURL**］が`https://example.com/path1/?q1=v1&q2=v2`に設定されていて、`https://liff.line.me/{liffid}/?q1=v1&q2=v2`で`liff.permanentLink.createUrl()`を実行すると、`https://liff.line.me/{liffid}/?q1=v1&q1=v1&q2=v2&q2=v2`のようにクエリパラメータ部分が無限増殖したパーマネントリンクが返されていました。

LIFF v2.3.2では、`https://liff.line.me/{liffid}/?q1=v1&q2=v2`が正しく返されるよう修正されています。

### LIFFエンドポイントURLに含まれるパスがliff.permanentLink.createUrl()で正しく処理されない不具合を修正しました

  
**対象バージョン**

- LIFF v2.3.2

**変更点**

LIFFのエンドポイントURLにパスが含まれていて、パスの末尾にスラッシュ（`/`）が使用されていた場合、`liff.permanentLink.createUrl()`を実行して取得したパーマネントリンクをクリックすると以下のようにパスの末尾のスラッシュ（`/`）がリダイレクト先に含まれない不具合がありました。

::admonition{title="問題が発生する条件" type="tip"}
- LIFFのエンドポイントURLにパス（`/path/`）が含まれていて、パスの末尾にスラッシュ（`/`）が使用されている
- LIFFのエンドポイントURLにクエリパラメータ（`?key=value`）やURLフラグメント（`#URL-fragment`）が含まれている
- ［**LIFF URLの追加情報の処理方法**］が「**連結**」に設定されいてる
::

たとえば、［**エンドポイントURL**］が`https://example.com/path/?id=xxxxxxx`に設定されていて、`liff.permanentLink.createUrl()`を実行して取得したパーマネントリンクにアクセスするとパスの末尾のスラッシュ（`/`）がリダイレクト先に含まれず、`https://example.com/path?id=xxxxxxx`に遷移されていました。

LIFF v2.3.2では、`https://example.com/path/?id=xxxxxxx`へ正しく遷移されるよう修正されています。

::admonition{title="LIFF v2.4.0は修正済みです" type="note"}
[2020年8月31日にお知らせ](/news/2020/08/31/release-liff-2-4-0/#liff-create-url-error-fix)したとおり、この不具合の修正はLIFF v2.4.0にすでに反映されています。
::

### 2次リダイレクト先URLにフラグメントが含まれない不具合を修正しました

  
**対象バージョン**

- LIFF v2.3.2

**変更点**

LIFFのエンドポイントURLやLIFF URLにURLフラグメントが含まれていた場合、［**LIFF URLの追加情報の処理方法**］の設定に関わらず、2次リダイレクト先URLにフラグメントが含まれない不具合を修正しました。

2次リダイレクト先URLや［**LIFF URLの追加情報の処理方法**］の設定による2次リダイレクト先URLへの影響について詳しくは、LIFFドキュメントの「[LIFF URLにアクセスしてからLIFFアプリが開くまでの動作について](/docs/liff/opening-liff-app/#redirect-flow)」を参照してください。

### LIFF URLが意図しないURLへリダイレクトされる不具合を修正しました

  
**対象バージョン**

- LIFF v2.1.14
- LIFF v2.2.1
- LIFF v2.3.2

**変更点**

LIFF URLに指定した追加情報（例：`path/?key=value`）は、1次リダイレクト先URLでは`liff.state`クエリパラメータに含まれます。`liff.state`クエリパラメータに追加情報が含まれる場合に、以下のように意図しない2次リダイレクト先URLに遷移する不具合がありました。

::admonition{title="問題が発生する条件" type="tip"}
- `liff.state`クエリパラメータの先頭に`/`がない
- ［**LIFF URLの追加情報の処理方法**］が「**置換（後方互換性モード）**」に設定されいてる
::

たとえば、［**エンドポイントURL**］が`https://example.com`に設定されており、`liff.state`クエリパラメータが`path`だった場合、ドメイン名とパスが`/`で分離されず、`https://example.compath`にリダイレクトされていました。
LIFF v2.1.14、v2.2.1、v2.3.2では、`https://example.com/path`に正しくリダイレクトされるよう修正されています。

::admonition{title="意図しないリダイレクトによる脆弱性について" type="note"}
この不具合を利用することで、悪意あるサイトへ誘導される危険があります。v2.4.0より前のLIFF SDKをお使いの場合はアップデートをおすすめします。
::

LIFF URLへのアクセス時の動作について詳しくは、LIFFドキュメントの「[LIFF URLにアクセスしてからLIFFアプリが開くまでの動作について](/docs/liff/opening-liff-app/#redirect-flow)」を参照してください。
