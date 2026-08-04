---
title: Flex Message Simulatorからテストメッセージを送信できるようになりました
navigation: true
description: >-
  Messaging APIには、JSON形式で記述することでレイアウトを自由にカスタマイズできるFlex
  Messageというメッセージがあります。このFlex Messageを、より簡単に試していただくために、Flex Message
  Simulatorでテストメッセージを送信する機能を導入しました。
meta: >-
  {"date":"2021-05-20 00:00 UTC","tags":"Flex Message Simulator, Messaging
  API","locale":"ja"}
path: /ja/_partials/news/2021/2021-05-20-send-test-message-flex-message-simulator
__hash__: ZG6T8tgmuFk6yuE4rx7vB5mG6acSZ197xdeSh4-XNcQ
seo:
  title: Flex Message Simulatorからテストメッセージを送信できるようになりました
  description: >-
    Messaging APIには、JSON形式で記述することでレイアウトを自由にカスタマイズできるFlex
    Messageというメッセージがあります。このFlex Messageを、より簡単に試していただくために、Flex Message
    Simulatorでテストメッセージを送信する機能を導入しました。
---

Messaging APIには、JSON形式で記述することでレイアウトを自由にカスタマイズできる[Flex Message](/reference/messaging-api/#flex-message)というメッセージがあります。このFlex Messageを、より簡単に試していただくために、Flex Message Simulatorでテストメッセージを送信する機能を導入しました。

テストメッセージを送信するには、[Flex Message Simulator](/flex-simulator/)にアクセスします。LINE DevelopersコンソールにログインしているLINEアカウントと、同じLINEアカウントでFlex Message Simulatorにログインしてください。

右上の[**Send...**]ボタンをクリックします。

![Flex Message Simulatorの右上に表示されるSendボタン](/media/news/fms-buttons-en.png){className="[\"border\",\"w-fix-360\"]"}

「Send Message」のポップアップが表示され、ログインしたLINEアカウントがデフォルトで送信先として表示されます。

::admonition{title=" Flex Message Simulatorにログインするアカウントについて" type="note"}
LINE Developersコンソールにログインしているアカウントがビジネスアカウントで、LINEアカウントと連携していない場合は、そのアカウントは送信先として表示されません。

また、テストメッセージを受信するには事前に[Flex Message SimulatorのLINE公式アカウント](https://line.me/R/ti/p/@flexmessagesim?from=page){rel="[\"nofollow\"]"}と友だちになっておく必要があります。
::

![宛先と送信ボタンを表示するポップアップ](/media/news/fms-select-destination-ja.png){className="[\"border\",\"w-fix-360\"]"}

表示されたアカウントにテストメッセージを送信するには、アカウントを選択し、[**送信**]ボタンをクリックします。LINEアカウントにFlex Messageと、メッセージがサンプルだということを示すメッセージが届きます。

![Test Flex Message](/media/news/fms-test-message-en.png){className="[\"border\",\"w-fix-360\"]"}

また、[**送信先を登録**]をクリックすると、代替送信先を追加することができます。

![送信先ボタンを表示するポップアップ](/media/news/fms-register-destination-ja.png){className="[\"border\",\"w-fix-360\"]"}

表示されたQRコードを、送信先として登録したいアカウントのLINEアプリで読み取ります。LINEアプリ上で検証コードが表示されます。

![Popup display QR code](/media/news/fms-qr-code-ja.png){className="[\"border\",\"w-fix-360\"]"}

検証コードをFlex Message Simulatorに入力して確認すると、代替送信先が登録されます。

::admonition{title="登録できる代替送信先の数" type="tip"}
最大1件の代替送信先を登録することができます。すでに代替送信先を登録していて、さらに別の送信先を登録した場合、前の送信先は登録解除されます。
::

この機能を利用するために必要な申請はありません。
