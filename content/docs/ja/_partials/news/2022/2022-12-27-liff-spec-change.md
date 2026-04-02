---
title: LIFFアプリに対するトークルームの内部識別子の提供廃止を予定しています
navigation: true
description: 2023年前半に、LIFFアプリに対するトークルームの内部識別子（1対1トークID、グループID、トークルームID）の提供廃止を予定しています。
meta: >-
  {"date":"2022-12-27 00:00 UTC","tags":"liff, line-mini-app,
  line-login","locale":"ja"}
path: /ja/_partials/news/2022/2022-12-27-liff-spec-change
__hash__: Bn0IahbzVesMhJO5PFqdMVRxUmDRwd0fHTC2Vd4Jr9g
seo:
  title: LIFFアプリに対するトークルームの内部識別子の提供廃止を予定しています
  description: 2023年前半に、LIFFアプリに対するトークルームの内部識別子（1対1トークID、グループID、トークルームID）の提供廃止を予定しています。
---

2023年前半に、LIFFアプリに対するトークルームの:glossary-tooltip[[内部識別子](/glossary/#company-internal-identifier)]{glossary-id="company-internal-identifier"}（1対1トークID、グループID、トークルームID）の提供廃止を予定しています。

LIFFアプリの機能について見直しを行った結果、LIFFアプリに対するトークルームの内部識別子の提供を廃止する判断となりました。この仕様変更は、LIFFの[バージョニングポリシー](/docs/liff/versioning-policy/)とは関係なく、すべてのLIFF SDKに適用されます。LINEミニアプリはLIFFで提供される仕組みを利用しているため、LINEミニアプリについても同様です。

### 提供廃止の影響

LIFFアプリに対するトークルームの内部識別子の提供廃止による影響は、以下のとおりです。

- [影響1. `liff.getContext()`の戻り値](#impact-20221227-01)
- [影響2. LINEログインでアクセストークンを発行、更新、検証するAPIの戻り値](#impact-20221227-02)

#### 影響1. liff.getContext()の戻り値

[`liff.getContext()`](/reference/liff/#get-context)は、LIFFアプリが起動された画面（1対1のトーク、グループトーク、複数人トーク、または外部ブラウザ）に関する情報を取得するためのメソッドです。

仕様変更後は、この`liff.getContext()`の戻り値に、以下の内部識別子を返すプロパティが含まれなくなります。

- 1対1トークID（`utouId`）
- グループID（`groupId`）
- トークルームID（`roomId`）

詳しくは、『LIFF APIリファレンス』の「[`liff.getContext()`](/reference/liff/#get-context)」を参照してください。

#### 影響2. LINEログインでアクセストークンを発行、更新、検証するAPIの戻り値

LIFFアプリの動作に必要なスコープとして、`chat_message.write`を選択していた場合、以下のエンドポイントでレスポンスのスコープ（`scope`）に1対1トークID（`utouId`）が含まれていました。

- [アクセストークンを発行する](/reference/line-login/#issue-access-token)
- [アクセストークンを更新する](/reference/line-login/#refresh-access-token)
- [アクセストークンの有効性を検証する](/reference/line-login/#verify-access-token)

仕様変更後は、このレスポンスのスコープに、1対1トークID（`utouId`）が含まれなくなります。

| 変更前（現在）                                   | 変更後                  |
| ----------------------------------------- | -------------------- |
| `chat_message.write:UU29e6eb36812f484...` | `chat_message.write` |

詳しくは、『LINEログイン v2.1 APIリファレンス』の「[アクセストークンを発行する](/reference/line-login/#issue-access-token)」、「[アクセストークンを更新する](/reference/line-login/#refresh-access-token)」、「[アクセストークンの有効性を検証する](/reference/line-login/#verify-access-token)」を参照してください。

### 代替方法

現在、「[提供廃止の影響](#impact-20221227)」で示した内部識別子に依存したLIFFアプリを提供している場合、以下のような代替方法を検討してください。

- [トークルームの内部識別子の代わりに独自に発行したIDを使用する](#alternatives-20221227-01)
- [Webhookイベントに含まれるグループIDやトークルームIDを使用する](#alternatives-20221227-02)

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

### 仕様変更予定日

2023年前半

なお、この仕様変更の内容および日時は、予告なく変更される可能性があります。仕様変更の日時は決まり次第、追ってお知らせします。

LINEは今後もお客様への一層のサービス向上に取り組んでまいります。何卒ご理解を賜りますよう、よろしくお願い申し上げます。
