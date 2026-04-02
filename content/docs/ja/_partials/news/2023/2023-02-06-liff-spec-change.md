---
title: 【更新】2023年2月6日をもってLIFFアプリに対するトークルームの内部識別子の提供を廃止しました
navigation: true
description: ''
meta: >-
  {"date":"2023-02-06 00:00 UTC","tags":"liff, line-mini-app, line-login,
  end-of-life","locale":"ja"}
path: /ja/_partials/news/2023/2023-02-06-liff-spec-change
__hash__: _J67l35zNg8g0xi8dnm9efK1ukv0L-j_yDwte79h9AI
seo:
  title: 【更新】2023年2月6日をもってLIFFアプリに対するトークルームの内部識別子の提供を廃止しました
  description: ''
---

::admonition{title="2023年2月7日追記" type="note"}
「[提供廃止の影響](#impact-20230206)」を更新しました。
::

[2022年12月27日](/news/2022/12/27/liff-spec-change/)および[2023年1月25日](/news/2023/01/25/liff-spec-change/)にお知らせしたとおり、2023年2月6日をもって、LIFFアプリに対するトークルームの内部識別子（1対1トークID、グループID、トークルームID）の提供を廃止しました。

LIFFアプリの機能について見直しを行った結果、LIFFアプリに対するトークルームの内部識別子の提供を廃止する判断となりました。この仕様変更は、LIFFの[バージョニングポリシー](/docs/liff/versioning-policy/)とは関係なく、すべてのLIFF SDKに適用されます。LINEミニアプリはLIFFで提供される仕組みを利用しているため、LINEミニアプリについても同様です。

### 廃止日

2023年2月6日

### 提供廃止の影響

LIFFアプリに対するトークルームの内部識別子の提供廃止による影響は、以下のとおりです。

- [影響1. `liff.getContext()`の戻り値](#impact-20230206-01)
- [影響2. LINEログインでアクセストークンを発行、更新、検証するAPIの戻り値](#impact-20230206-02)

なお提供廃止の対象となったトークルームの内部識別子を保存していた場合は、削除をお願いいたします。詳しくは、セキュリティ＆プライバシーの「[LINEのトークルーム識別子のサードパーティへの連携に関するお知らせとお詫び](https://www.lycorp.co.jp/ja/privacy-security/archive/L/linecorp_com_ja_security_article_443.PDF){rel="[\"nofollow\"]"}」を参照してください。

#### 影響1. liff.getContext()の戻り値

[`liff.getContext()`](/reference/liff/#get-context)は、LIFFアプリが起動された画面（1対1のトーク、グループトーク、複数人トーク、または外部ブラウザ）に関する情報を取得するためのメソッドです。

仕様変更後は、この`liff.getContext()`の戻り値で、以下の内部識別子の代わりに、ランダムな文字列が返るようになります。このランダムな文字列は、LIFFアプリを開くたびに変わります。

- 1対1トークID（`utouId`）
- グループID（`groupId`）
- トークルームID（`roomId`）

詳しくは、『LIFF APIリファレンス』の「[`liff.getContext()`](/reference/liff/#get-context)」を参照してください。

#### 影響2. LINEログインでアクセストークンを発行、更新、検証するAPIの戻り値

LIFFアプリの動作に必要なスコープとして、`chat_message.write`を選択していた場合、以下のエンドポイントでレスポンスのスコープ（`scope`）にトークルームの内部識別子（1対1トークID、グループID、トークルームID）が含まれていました。

- [アクセストークンを発行する](/reference/line-login/#issue-access-token)
- [アクセストークンを更新する](/reference/line-login/#refresh-access-token)
- [アクセストークンの有効性を検証する](/reference/line-login/#verify-access-token)

仕様変更後は、このレスポンスのスコープに、トークルームの内部識別子が含まれなくなります。

| 変更前（現在）                                   | 変更後                  |
| ----------------------------------------- | -------------------- |
| `chat_message.write:UU29e6eb36812f484...` | `chat_message.write` |

詳しくは、『LINEログイン v2.1 APIリファレンス』の「[アクセストークンを発行する](/reference/line-login/#issue-access-token)」、「[アクセストークンを更新する](/reference/line-login/#refresh-access-token)」、「[アクセストークンの有効性を検証する](/reference/line-login/#verify-access-token)」を参照してください。

### 代替方法

現在、「[提供廃止の影響](#impact-20230206)」で示した内部識別子に依存したLIFFアプリを提供していた場合、以下のような代替方法を検討してください。

- [トークルームの内部識別子の代わりに独自に発行したIDを使用する](#alternatives-20230206-01)
- [Webhookイベントに含まれるグループIDやトークルームIDを使用する](#alternatives-20230206-02)

#### トークルームの内部識別子の代わりに独自に発行したIDを使用する

ユーザーがアクセスするLIFF URL（`https://liff.line.me/{liffId}`）に対して、トークルームごとにサービスが独自に発行したIDを付与することで、サービス側からトークルームの判別を行うようにしてください。

例：`https://liff.line.me/{liffId}/?talk_id={サービスが独自に発行したID}`

| 現在の実装例                                                                                                                                                                                                                                                                                                                  | 代替方法                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. ユーザーがLIFFアプリを開く 2. ユーザーがLIFFアプリ上で「ゲーム部屋を作る」「シェアする」などの操作を行う 3. [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker)や[`liff.sendMessages()`](/reference/liff/#send-messages)を用いてユーザーがLIFF URL（`https://liff.line.me/{liffId}`）をトークルームに共有する 4. サービスが`liff.getContext()`の戻り値に含まれるトークルームの内部識別子を元にセッションを生成する | 1. ユーザーがLIFFアプリを開く 2. ユーザーがLIFFアプリ上で「ゲーム部屋を作る」「シェアする」などの操作を行う 3. サービスが独自のIDを付与したURL（`https://liff.line.me/{liffId}/?talk_id={サービスが独自に発行したID}`）を生成する 4. [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker)や[`liff.sendMessages()`](/reference/liff/#send-messages)を用いてユーザーがURLをトークルームに共有する 5. サービスが2次リダイレクト先URLに含まれる独自に発行したIDを元にセッションを生成する |

なおLIFF URLの扱いについては、「[LIFFアプリ開発ガイドライン](/docs/liff/development-guidelines/)」に従ってください。

詳しくは、『LIFFドキュメント』の「[2次リダイレクト先URLを作成する](/docs/liff/opening-liff-app/#setting-second-redirect)」を参照してください。

#### Webhookイベントに含まれるグループIDやトークルームIDを使用する

LIFFアプリの[`liff.getContext()`](/reference/liff/#get-context)で戻り値からグループIDやトークルームIDを取得していた場合は、Messaging APIのWebhookイベントから取得する形での代替が可能です。

| 現在の実装例                                                                                                                                                                                                                                                            | 代替方法                                                                                                                                                                                      |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. グループトークや複数人トークにLINE公式アカウントが参加する 2. LINE公式アカウントがLIFF URLをトークルームに共有する 3. ユーザーがLIFF URLからLIFFアプリを開く 4. LIFFアプリの`liff.getContext()`で戻り値からグループIDやトークルームIDを取得する 5. 取得したグループIDやトークルームIDを用いてグループトークや複数人トークに[プッシュメッセージを送る](/reference/messaging-api/#send-push-message) | 1. グループトークや複数人トークにLINE公式アカウントが参加する 2. Messaging APIのWebhookイベントでグループIDやトークルームIDを取得する 3. 取得したグループIDやトークルームIDを用いてグループトークや複数人トークに[プッシュメッセージを送る](/reference/messaging-api/#send-push-message) |

詳しくは、『Messaging APIドキュメント』の「[1対1のトークまたはグループトークや複数人トークでのWebhookイベント](/docs/messaging-api/receiving-messages/#webhook-event-in-one-on-one-talk-or-group-chat)」および『Messaging APIリファレンス』の「[Webhookイベントオブジェクト](/reference/messaging-api/#webhook-event-objects)」を参照してください。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
