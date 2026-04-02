---
title: サービスメッセージを送信する
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-mini-app/develop/service-messages
__hash__: JjodR1H7TvumTmIOYHGHYEJNcMGhvDm6QuUnOQnAOFY
seo:
  title: サービスメッセージを送信する
  description: null
---

# :page-title

:markdown-controls::admonition{title="認証済ミニアプリでのみ利用できます" type="tip"}
この機能は、認証済ミニアプリでのみ利用できます。未認証ミニアプリの場合、開発用の内部チャネルではテストできますが、公開用の内部チャネルでは利用できません。
::

サービスメッセージは、LINEミニアプリ上でのユーザーの操作（アクション）に対する確認や応答として、ユーザーが知っておくべき情報をLINEミニアプリから通知する機能です。たとえば、ユーザーがLINEミニアプリ上でレストランや宿泊施設を予約した場合、「予約」という1つの操作に対して、予約完了や前日のリマインドといったサービスメッセージを最大5回まで送信できます。

![LINEミニアプリ お知らせ](/media/line-mini-app/mini-service-messages-ja.png){className="[\"border\",\"w-fix-280\"]"}

::admonition{title="サービスメッセージの送信条件" type="note"}
サービスメッセージは、LINEミニアプリ上でのユーザーの操作（アクション）に対する確認や応答としてのみ送信できます。値下げ、ショッピング特典、新商品、割引クーポン、プロモーションなどの情報を含む広告やイベントの通知は禁止されています。サービスメッセージの条件について詳しくは、「[サービスメッセージの条件](/docs/line-mini-app/service/service-operation/#conditions-for-service-messages)」を参照してください。
::

## サービスメッセージが表示されるトークルーム

LINEミニアプリから送られたサービスメッセージは、LINEミニアプリの種類にかかわらず、LINEミニアプリを提供する地域ごとに決められたトークルームに表示されます。

| 日本                                                                                                           | タイ                                                                                                                 | 台湾                                                                                                             |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| LINEミニアプリ お知らせ                                                                                               | LINE MINI App Notice                                                                                               | LINE MINI App 通知                                                                                               |
| ![LINEミニアプリ お知らせ](/media/line-mini-app/mini_service_notifier_jp.png){className="[\"border\",\"w-fix-280\"]"} | ![LINE MINI App Notice](/media/line-mini-app/mini_service_notifier_th.png){className="[\"border\",\"w-fix-280\"]"} | ![LINE MINI App 通知](/media/line-mini-app/mini_service_notifier_tw.png){className="[\"border\",\"w-fix-280\"]"} |

## 送信できるサービスメッセージの種類

サービスメッセージは、あらかじめ用意されているテンプレートを利用して送信します。テンプレートは店舗の予約や順番待ち、配送通知といったカテゴリ別に、6言語（日本語、英語、中国語繁体字、タイ語、インドネシア語、韓国語）で用意されており、[LINE Developersコンソール](/console/)で確認できます。

![サービスメッセージのテンプレートはコンソールで確認できる](/media/line-mini-app/service-message-template-ja.png){className="[\"border\"]"}

## サービスメッセージのプレビューを確認する

[LINE Developersコンソール](/console/)でLINEミニアプリチャネルを選択し、［**サービスメッセージテンプレート**］タブの［**追加**］をクリックすると「サービスメッセージテンプレートを追加する」画面が表示されます。

この画面でテンプレートを選択してJSONを編集することで、メッセージのプレビューが確認できると共に、テストメッセージも送信できます。テストメッセージは、LINE DevelopersコンソールにログインしているユーザーのLINE開発者アカウントに紐づいているLINEアカウントに対して送信されます。

![JSONを変更するとプレビューに反映される](/media/line-mini-app/preview-service-message-ja.png){className="[\"bg-border\"]"}

## サービスメッセージを送信する際の流れ

サービスメッセージを送信するには、サービスメッセージテンプレートとサービス通知トークンが必要です。以下の手順に沿って、送信してください。

1. LINE Developersコンソールで、LINEミニアプリチャネルに[サービスメッセージのテンプレートを追加します。](#service-message-templates)
2. LINEミニアプリ上でのユーザーの操作（アクション）を元に[サービス通知トークンを発行してサービスメッセージを送信します。](#sending-service-messages-for-the-first-time)
3. 2で発行された新しいサービス通知トークンを利用して、リマインダーなど[後続のサービスメッセージを送信します。](#sending-subsequent-service-messages)

::admonition{title="審査を通過する必要があります" type="note"}
手順1でLINEミニアプリチャネルに追加したサービスメッセージテンプレートを[サービスメッセージを送るAPI](/reference/line-mini-app/#send-service-message)で利用するには、LINEヤフー株式会社による審査を通過する必要があります。
::

## サービスメッセージのテンプレートをチャネルに追加する

LINEヤフー株式会社が提供しているテンプレートの中から、[サービスメッセージ](/reference/line-mini-app/#service-messages)で利用するテンプレートを選択して、LINEミニアプリチャネルに追加します。サービスメッセージのテンプレートは、LINEミニアプリチャネルごとに20個まで追加できます。

テンプレートはカテゴリ別に提供しており、[LINE Developersコンソール](/console/)で確認できます。また、自分のLINEアカウントにテストメッセージを送信して、実際にプレビューを確認することもできます。サービスメッセージのテンプレートをチャネルに追加する手順は、以下のとおりです。

1. [LINE Developersコンソール](/console/)で、テンプレートを追加するLINEミニアプリチャネルを選択し、［**サービスメッセージテンプレート**］タブをクリックします。

::admonition{title="注意" type="note"}
1. チャネルを作成しながら、公式テンプレートの作成を進めることができます。

- **チャネルの作成中は、次のことができます：**
  - 新しいテンプレートの追加
  - すべてのテンプレートリストの参照
  - テンプレート詳細の参照
  - テンプレート`使用事例`の編集
  - テンプレートの削除
  - シミュレータ－でのテストメッセージ送信

1. 審査が進行中の場合、公式テンプレートの使用にいくつかの制限が適用されます。

- **チャネルの審査進行中でも次のことはできます：**
  - テンプレート詳細の参照
  - シミュレーターでのテストメッセージ送信
  - テンプレート詳細の参照
- **しかしこの段階では、次のことはできません：**
  - すべてのテンプレートのリストの参照
  - テンプレートの`使用事例`の編集
  - テンプレートの削除

1. チャネルが公開されたら、本番用チャネルで公式テンプレートを使用できます（#1の準備段階と同じ条件が適用されます）。

チャネルの審査中は、新しいテンプレートを追加できません。チャネルが審査を通過するまでは、シミュレーターで利用可能なテストメッセージのみ送信できます。ただし、審査プロセスは、過去に正常に追加された既存のテンプレートには影響しません。
::

1. ［**追加**］をクリックします。
2. 以下の項目を設定します。| 項目            | 説明                                                                                                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| テンプレートを選択する   | サービスメッセージAPIで利用するテンプレートを選択します。                                                                                                                                                                                           |
| テンプレート詳細      | 選択したテンプレートの詳細が表示されます。[サービスメッセージを送るAPI](/reference/line-mini-app/#send-service-message)を実行するときに、［**API用テンプレート名**］に表示されている文字列（`{template name}_{BCP 47 language tag}`）を`templateName`に指定してください。                            |
| プレビュー         | テストメッセージのプレビューが表示されます。テストメッセージは、［**テストメッセージを送信する**］の［**送信する**］をクリックすると、LINE DevelopersコンソールにログインしているLINEアカウントに送信されます。                                                                                                    |
| テストメッセージを送信する | テンプレート変数と値のペアを指定するJSONオブジェクトを入力します。入力した内容をもとに［**プレビュー**］が更新されます。   - ［**コピー**］：JSONオブジェクトをクリップボードにコピーします。   - ［**Reset**］：JSONオブジェクトの編集内容を破棄します。   - ［**送信する**］：LINE DevelopersコンソールにログインしているLINEアカウントに、テストメッセージが送信されます。 |
| 使用事例          | このテンプレートを送信する状況を正確に入力してください。                                                                                                                                                                                             |

::admonition{title="注意" type="note"}
［**使用事例**］に入力した事例から逸脱した方法でテンプレートを使用した場合は、テンプレートの使用を停止する場合があります。
::
3. ［**追加**］をクリックします。  
サービスメッセージテンプレートの一覧に戻ります。  
追加したテンプレートの［**公開状況**］に審査の状況が表示されます。| 公開状況 | 説明                                                                                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 開発中  | 開発中（審査未申請）。LINEミニアプリチャネルのAdmin権限またはTester権限を持つ開発者に対して、開発用のチャネルから[サービスメッセージを送る](/reference/line-mini-app/#send-service-message)場合にのみ使用できます。 |
| 公開中  | 審査通過済み。LINEミニアプリチャネルのユーザーに対して、本番用のチャネルから[サービスメッセージを送る](/reference/line-mini-app/#send-service-message)場合に使用できます。                           |

### テンプレートの各要素について

サービスメッセージは、（A）タイトル、（B）詳細内容、（C）ボタン、（D）フッターで構成されています。テンプレートは使用例に応じて、これらのセクションを組み合わせて作成してください。また、サービスメッセージの目的に最も適したテンプレートを利用してください。

![](/media/line-mini-app/mini_servicenotifier_layout.png){className="[\"border\",\"w-fix-240\"]"}

| ラベル | セクション | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A   | タイトル  | タイトルセクションは、以下の要素で構成されます。- タイトル（A-1） - サブタイトル（A-2）                                                                                                                                                                                                                                                                                                                                                                                                |
| B   | 詳細内容  | 詳細内容セクションには、テンプレートの種類に応じて次の2種類のレイアウトがあります。 - 「detailed」：1個のキーが必須です。キーの最大数は選択したテンプレートによって異なります。文字数については、「[各要素の最大文字数](#maximum-number-of-characters)」を参照してください。   ![](/media/line-mini-app/mini_detail_detailed.png){className="[\"border\",\"w-fix-280\"]"} - 「simple」: 最大1個のキーを指定できます。文字数については、「[各要素の最大文字数](#maximum-number-of-characters)」を参照してください。   ![](/media/line-mini-app/mini_detail_simple.png){className="[\"border\",\"w-fix-280\"]"} |
| C   | ボタン   | 選択したテンプレートによって、使用できるボタンの数は異なります。また、URLを設定したボタンのみが表示されます。URLは、LINEミニアプリのページの[パーマネントリンク](/docs/line-mini-app/develop/permanent-links/)を指定してください。- 1個目のボタンは必須で、［**詳細はこちら**］として表示されます。 - 2個目以降のボタンは任意で、選択したテンプレートによってあらかじめ定義されています。                                                                                                                                                                                                                  |
| D   | フッター  | ［**チャネル基本設定**］タブの［**チャネルアイコン**］で設定したアイコンと、［**チャネル名**］で設定したチャネル名が表示されます。ユーザーがフッターをタップすると、そのLINEミニアプリのトップページが表示されます。                                                                                                                                                                                                                                                                                                                               |

::admonition{title="LINEミニアプリのステータスが「反映済み」以外の場合のフッター" type="note"}
LINEミニアプリのステータスが「審査前」や「審査中」の場合は、本来のフッターの代わりにLINEのアイコンと、「Service Message」というテキストが表示されます。ステータスが「反映済み」に切り替わると、設定したLINEミニアプリのアイコンとLINEミニアプリの名前が表示されます。
::

### 各要素の最大文字数

詳細内容セクションの「detailed」と「simple」は、それぞれキーの値に推奨文字数および最大文字数（ソフトリミット、ハードリミット）があります。

| 項目           | 推奨文字数 | ソフトリミット | ハードリミット |
| ------------ | ----- | ------- | ------- |
| **detailed** | 10    | 36      | 50      |
| **simple**   | 32    | 100     | 150     |

それぞれのキーの値は、推奨文字数以下にすることを推奨します。推奨文字数を超えると、表示可能な領域から溢れた文字が省略記号（`...`）に置き換えられたり、サービスメッセージが送信できなくなったりします。

| 文字数                    | どう表示されるか                                |
| ---------------------- | --------------------------------------- |
| 推奨文字数以下                | テキストはすべて表示される                           |
| 推奨文字数より大きく、ソフトリミット以下   | 表示可能な領域から溢れた文字が省略記号（`...`）に置き換えられる場合がある |
| ソフトリミットより大きく、ハードリミット以下 | 表示可能な領域から溢れた文字が省略記号（`...`）に置き換えられる      |
| ハードリミットより大きい           | エラーとなり、サービスメッセージが送信できない                 |

キーの値の文字数はUTF-16の符号単位ではなく、[書記素クラスタ](https://unicode.org/reports/tr29/){rel="[\"nofollow\"]"}単位でカウントします。テキストの文字数のカウントについて詳しくは、『Messaging APIドキュメント』の「[テキストの文字数のカウント](/docs/messaging-api/text-character-count/)」を参照してください。

## 最初のサービスメッセージを送信する

ユーザーが操作を行ったり何かを要求したりした後で、LINEミニアプリから初めてサービスメッセージを送信する場合の手順を説明します。

::admonition{title="ステートレスチャネルアクセストークンの使用を推奨します" type="note"}
LINEミニアプリチャネルでは、[長期のチャネルアクセストークン](/docs/basics/channel-access-token/#long-lived-channel-access-token)および、[任意の有効期間を指定できるチャネルアクセストークン（チャネルアクセストークンv2.1）](/docs/basics/channel-access-token/#user-specified-expiration)は使用できません。

LINEミニアプリの開発では、[ステートレスチャネルアクセストークン](/docs/basics/channel-access-token/#stateless-channel-access-token)または[短期のチャネルアクセストークン](/docs/basics/channel-access-token/#short-lived-channel-access-token)を使用できます。このうち、ステートレスチャネルアクセストークンの使用を推奨します。ステートレスチャネルアクセストークンは、発行数に制限がないため、アプリケーション側でトークンのライフサイクルを管理する必要がありません。
::

以下はチャネルアクセストークンと[liff.getAccessToken()](/reference/liff/#get-access-token)で取得するアクセストークン（以降、LIFFのアクセストークン）を使って、サービス通知トークンを発行し、サービスメッセージを送信するまでのイメージ図です。このイメージ図では、チャネルアクセストークンに[ステートレスチャネルアクセストークン](/docs/basics/channel-access-token/#stateless-channel-access-token)を使用しています。

![relationship of tokens](/media/line-mini-app/mini-illust-01-ja.png){className="[\"w-fix-680\"]"}

1. 通知するときに、LINEミニアプリで[liff.getAccessToken()](/reference/liff/#get-access-token)を実行して、LIFFのアクセストークンを取得します。
2. 手順1で取得したLIFFのアクセストークンを、サーバーに送信します。
3. [チャネルアクセストークン](/docs/basics/channel-access-token/)を取得します。
4. [サービス通知トークンを発行](/reference/line-mini-app/#issue-notification-token)します。  
手順3で取得したチャネルアクセストークンと、手順1で取得したLIFFのアクセストークンを利用します。なお、ユーザーがLINEミニアプリを閉じると、有効期間内であってもLIFFのアクセストークンは無効化されます。```java
final OkHttpClient notifierApiClient = new OkHttpClient().newBuilder().build();
final MediaType mediaType = MediaType.parse("application/json");
final RequestBody notificationTokenRequestBody = RequestBody.create(mediaType, "{'liffAccessToken': 'eyJhbGciOiJIUzI1NiJ9…​'");
final Request notificationTokenRequest = new Request.Builder()
  .url(BASE_URL + "/notifier/token")
  .method("POST", notificationTokenRequestBody)
  .addHeader("Content-Type", "application/json")
  .addHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9...")
  .build();
final NotificationTokenResponse response = notifierApiClient.newCall(request).execute();
String notificationToken = notificationTokenResponse.getNotificationToken();
int tokenRemainingCount = notificationTokenResponse.getRemainingCount();
```
5. 最初の[サービスメッセージを送信します](/reference/line-mini-app/#send-service-message)。  
手順4で取得したサービス通知トークンを利用します。サービスメッセージの送信後は、[レスポンスに含まれるサービス通知トークンを保存](#save-service-notification-token)してください。  
なお、使用するテンプレートにテンプレート変数がある場合は、`params`にキーと値のペアを指定してください。必須要素のテンプレート変数を指定しないと、エラーが返されます。  
`params`の例：```json
{
  ...
  "params": {
    // params sample to be updated
    "variable-name": "value",
    "button_uri_1": "detailView?userId=1234&purchaseID=5678"
  }
  ...
}
```

```java
final RequestBody notificationRequestBody = RequestBody.create(mediaType,"{
  'templateName': 'reservation_confirmation_en',
  'notificationToken': '34c11a03-b726-49e3-8ce0-949387a9…​',
  'params': {
    'template-field-name': 'field-value',
    'template-field-name': 'field-value',
  }}");
final Request notificationRequest = new Request.Builder()
  .url(BASE_URL + "/notifier/send?target=service")
  .method("POST", notificationRequestBody)
  .addHeader("Content-Type", "application/json")
  .addHeader("Authorization", "Bearer W1TeHCgfH2Liwa...")
  .build();
final NotificationResponse notificationResponse = notifierApiClient.newCall(request).execute();
notificationToken = notificationResponse.getNotificationToken();
tokenRemainingCount = notificationResponse.getRemainingCount();
```

サービス通知トークンは、発行から1年間（31,536,000秒間）有効です。たとえば有効期間内であれば、ユーザーの「予約」という1つの操作に対して、LINEミニアプリから最大5回のサービスメッセージを送信できます。2回目以降のサービスメッセージ送信について詳しくは、「[後続のサービスメッセージを送信する](#sending-subsequent-service-messages)」を参照してください。

![AOA flow 2](/media/line-mini-app/mini-illust-03-ja.png){className="[\"w-fix-960\"]"}

## 後続のサービスメッセージを送信する

同じ操作に対する後続のサービスメッセージを送信するときは、前回[サービスメッセージを送信](/reference/line-mini-app/#send-service-message)したときにレスポンスに含まれていたサービス通知トークンを使用します。後続のサービスメッセージを送信するときも、[レスポンスに含まれるサービス通知トークンを保存](#save-service-notification-token)してください。

後続のサービスメッセージを送信するために、最初のサービスメッセージを送信する際に使ったチャネルアクセストークンとLIFFのアクセストークンを再利用して、新たにサービス通知トークンを発行してはいけません。

```java
...
JsonObject subsequentMessage = Json.createObjectBuilder()
  .add("notificationToken", notificationToken)
  .add("templateName", templateName)
  .add("params", templateData)
  .build();
...

if (tokenRemainingCount < 0)
{
  notificationRequestBody = RequestBody.create(mediaType, subsequentMessage.toString());
  notificationRequest = new Request.Builder()
        .url(BASE_URL + "/notifier/send?target=service")
        .method("POST", notificationRequestBody)
        .addHeader("Content-Type", mediaType.toString())
        .addHeader("Authorization", "Bearer W1TeHCgfH2Liwa...")
        .build();
  notificationResponse =
        notifierApiClient.newCall(notificationRequest).execute();
  notificationToken = notificationResponse.getNotificationToken();
  tokenRemainingCount = notificationResponse.getRemainingCount();
}
```

## レスポンスに含まれるサービス通知トークンを保存する

サービスメッセージの送信後、レスポンスに含まれる更新されたサービス通知トークン（`notificationToken`）を必ず保存してください。このサービス通知トークンは、同じ操作（アクション）に対して、後続のサービスメッセージを送信するときに使用します。

サービス通知トークンの有効期間内であれば、レスポンスに含まれる`remainingCount`の数だけ、同じ操作に対する後続のサービスメッセージを送信できます。それぞれの操作は、レスポンスに含まれるセッションID（`sessionId`）で区別できます。
