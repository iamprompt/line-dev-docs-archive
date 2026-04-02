---
title: Messaging Api Sdk
navigation: true
description: >-
  LINE Messaging API SDKには、ライブラリ、ツール、およびサンプルが含まれています。SDKを使えば、Messaging
  APIを組み込んだボットアプリの開発を簡単に始めることができます。公式SDKとコミュニティSDKの両方とも、オープンソースとして提供されておりさまざまなプログラミング言語で利用できます。
meta: '{}'
path: /ja/_partials/messaging-api/messaging-api-sdk
__hash__: UrkAogE16aXS3yKnR4NKwQXRz-Sqty653cQq6RUux2c
seo:
  description: >-
    LINE Messaging API SDKには、ライブラリ、ツール、およびサンプルが含まれています。SDKを使えば、Messaging
    APIを組み込んだボットアプリの開発を簡単に始めることができます。公式SDKとコミュニティSDKの両方とも、オープンソースとして提供されておりさまざまなプログラミング言語で利用できます。
---

LINE Messaging API SDKには、ライブラリ、ツール、およびサンプルが含まれています。SDKを使えば、Messaging APIを組み込んだボットアプリの開発を簡単に始めることができます。[公式SDK](#official-sdks)と[コミュニティSDK](#community-sdks)の両方とも、オープンソースとして提供されておりさまざまなプログラミング言語で利用できます。

### 公式SDK

公式SDKは以下の言語をサポートしています。

- [Java](https://github.com/line/line-bot-sdk-java){rel="[\"nofollow\"]"}（[リリースノート](https://github.com/line/line-bot-sdk-java/releases){rel="[\"nofollow\"]"}）
- [PHP](https://github.com/line/line-bot-sdk-php){rel="[\"nofollow\"]"}（[リリースノート](https://github.com/line/line-bot-sdk-php/releases){rel="[\"nofollow\"]"}）
- [Python](https://github.com/line/line-bot-sdk-python){rel="[\"nofollow\"]"}（[リリースノート](https://github.com/line/line-bot-sdk-python/releases){rel="[\"nofollow\"]"}）
- [Node.js](https://github.com/line/line-bot-sdk-nodejs){rel="[\"nofollow\"]"}（[リリースノート](https://github.com/line/line-bot-sdk-nodejs/releases){rel="[\"nofollow\"]"}）
- [Go](https://github.com/line/line-bot-sdk-go){rel="[\"nofollow\"]"}（[リリースノート](https://github.com/line/line-bot-sdk-go/releases){rel="[\"nofollow\"]"}）
- [Ruby](https://github.com/line/line-bot-sdk-ruby){rel="[\"nofollow\"]"}（[リリースノート](https://github.com/line/line-bot-sdk-ruby/releases){rel="[\"nofollow\"]"}）

#### アーカイブ

以下の言語の公式SDKは、更新を終了しました。各SDKは引き続き使用できますが、今後は新機能の追加やバグフィックス、セキュリティの改善などの変更は一切行われません。

- [Perl](https://github.com/line/line-bot-sdk-perl){rel="[\"nofollow\"]"}（[リリースノート](https://github.com/line/line-bot-sdk-perl/releases){rel="[\"nofollow\"]"}）

### LINE OpenAPI

LINE OpenAPIは、Messaging APIやLIFFのサーバーAPIなど、LINEプラットフォームが提供しているAPIのインタフェースを、OpenAPIの仕様に従って定義したものです。LINE OpenAPIを用いることで、SDKが提供されていないプログラミング言語でも、[OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator){rel="[\"nofollow\"]"}や[Swagger Codegen](https://github.com/swagger-api/swagger-codegen){rel="[\"nofollow\"]"}などのコードジェネレーターにより、LINEプラットフォームが提供している機能を利用しやすくなります。

- [LINE OpenAPI](https://github.com/line/line-openapi){rel="[\"nofollow\"]"}

### コミュニティSDKとライブラリ

サードパーティの開発者が開発するSDKとライブラリです。一般的なオープンソースライセンスが適用されます。LINEヤフー株式会社はコミュニティSDKに対して限定的なレビューを行いますが、これらのSDKの公式サポートや動作保証は提供しません。各SDKの適用ライセンスと免責事項を参照してください。

| ライブラリ                                                                                                                             | 言語/   技術 | 概要                                                  | 公開者                                                                     | ライセンス      | GitHubスター数                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------- | ----------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [fireliff-cli](https://github.com/micksatana/fireliff-cli){rel="[\"nofollow\"]"}                                                  | N/A      | LIFF用のCLI                                           | [intocode](https://github.com/intocode-dev){rel="[\"nofollow\"]"}       | MIT        | [![GitHub stars](https://img.shields.io/github/stars/intocode-io/fireliff-cli.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/kenakamu/LINEChannelConnector){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                   |
| [LINEChannelConnector](https://github.com/kenakamu/LINEChannelConnector){rel="[\"nofollow\"]"}                                    | N/A      | BotBuilder用のコネクター                                   | [kenakamu](https://github.com/kenakamu){rel="[\"nofollow\"]"}           | MIT        | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/LINEChannelConnector.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/kenakamu/LINEChannelConnector){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                              |
| [line_bot_framework](https://github.com/shidec/line_bot_framework){rel="[\"nofollow\"]"}                                          | PHP      | ボット開発フレームワーク                                        | [shidec](https://github.com/shidec){rel="[\"nofollow\"]"}               | MIT        | [![GitHub stars](https://img.shields.io/github/stars/shidec/line_bot_framework.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/shidec/line_bot_framework){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                      |
| [line-chatbot-boilerplate](https://github.com/mgilangjanuar/line-chatbot-boilerplate){rel="[\"nofollow\"]"}                       | Python   | ボット開発テンプレート                                         | [mgilangjanuar](https://github.com/mgilangjanuar){rel="[\"nofollow\"]"} | MIT        | [![GitHub stars](https://img.shields.io/github/stars/mgilangjanuar/line-chatbot-boilerplate.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/mgilangjanuar/line-chatbot-boilerplate){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}            |
| [LINESimulator](https://github.com/kenakamu/linesimulator){rel="[\"nofollow\"]"}                                                  | N/A      | ボット開発デバッグ用のLINEシミュレーター                              | [kenakamu](https://github.com/kenakamu){rel="[\"nofollow\"]"}           | MIT        | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/linesimulator.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/kenakamu/linesimulator){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                            |
| [line-richmenus-manager](https://github.com/kenakamu/line-richmenus-manager){rel="[\"nofollow\"]"}                                | N/A      | リッチメニューの作成・管理のためのGUIツール                             | [kenakamu](https://github.com/kenakamu){rel="[\"nofollow\"]"}           | MIT        | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/line-richmenus-manager.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/kenakamu/line-richmenus-manager){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                          |
| [linebot](https://github.com/boybundit/linebot){rel="[\"nofollow\"]"}                                                             | Node.js  | Node.js向けLINE Messaging API SDK                     | [boybundit](https://github.com/boybundit){rel="[\"nofollow\"]"}         | MIT        | [![GitHub stars](https://img.shields.io/github/stars/boybundit/linebot.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/boybundit/linebot){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                                      |
| [botbuilder-linebot-connector](https://github.com/Wolke/botbuilder-linebot-connector){rel="[\"nofollow\"]"}                       | Node.js  | LINE Messaging API向けMicrosoft Bot Framework v3コネクター | [Wolke](https://github.com/Wolke){rel="[\"nofollow\"]"}                 | MIT        | [![GitHub stars](https://img.shields.io/github/stars/Wolke/botbuilder-linebot-connector.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/Wolke/botbuilder-linebot-connector){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                    |
| [bottender](https://github.com/Yoctol/bottender){rel="[\"nofollow\"]"}                                                            | Node.js  | 複数のプラットフォームで動作するボットを短時間で作成できるフレームワーク                | [Yoctol](https://github.com/Yoctol){rel="[\"nofollow\"]"}               | MIT        | [![GitHub stars](https://img.shields.io/github/stars/Yoctol/bottender.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/Yoctol/bottender){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                                        |
| [messaging-api-line](https://github.com/bottenderjs/messaging-apis/tree/master/packages/messaging-api-line){rel="[\"nofollow\"]"} | Node.js  | Node.js向けLINE Messaging API SDK                     | [Yoctol](https://github.com/Yoctol){rel="[\"nofollow\"]"}               | MIT        | [![GitHub stars](https://img.shields.io/github/stars/Yoctol/messaging-apis.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/bottenderjs/messaging-apis/tree/master/packages/messaging-api-line){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"} |
| [line-bot-sdk-dotnet](https://github.com/dlemstra/line-bot-sdk-dotnet){rel="[\"nofollow\"]"}                                      | C#       | .NET Standard向けLINE Messaging API SDK               | [dlemstra](https://github.com/dlemstra){rel="[\"nofollow\"]"}           | Apache-2.0 | [![GitHub stars](https://img.shields.io/github/stars/dlemstra/line-bot-sdk-dotnet.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/dlemstra/line-bot-sdk-dotnet){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                |
| [LineMessagingApi](https://github.com/pierre3/LineMessagingApi){rel="[\"nofollow\"]"}                                             | C#       | C#向けLINE Messaging API SDK                          | [pierre3](https://github.com/pierre3){rel="[\"nofollow\"]"}             | MIT        | [![GitHub stars](https://img.shields.io/github/stars/pierre3/LineMessagingApi.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/pierre3/LineMessagingApi){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                        |
| [line-bot-sdk](https://github.com/moleike/line-bot-sdk){rel="[\"nofollow\"]"}                                                     | Haskell  | Haskell向けLINE Messaging API SDK                     | [moleike](https://github.com/moleike){rel="[\"nofollow\"]"}             | BSD        | [![GitHub stars](https://img.shields.io/github/stars/moleike/line-bot-sdk.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/moleike/line-bot-sdk){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                                |
