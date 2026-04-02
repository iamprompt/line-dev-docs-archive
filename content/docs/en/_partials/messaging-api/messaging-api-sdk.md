---
title: Messaging Api Sdk
navigation: true
description: >-
  LINE Messaging API SDKs include libraries, tools, and samples to make it
  easier for you to start developing bot apps with the Messaging API. Both the
  official SDKs and community SDKs are open-sourced and available in different
  programming languages.
meta: '{}'
path: /en/_partials/messaging-api/messaging-api-sdk
__hash__: dXXYKGAO918eP2Cclrh9eNj6oxoucwGrWnbcbZQrDZQ
seo:
  description: >-
    LINE Messaging API SDKs include libraries, tools, and samples to make it
    easier for you to start developing bot apps with the Messaging API. Both the
    official SDKs and community SDKs are open-sourced and available in different
    programming languages.
---

LINE Messaging API SDKs include libraries, tools, and samples to make it easier for you to start developing bot apps with the Messaging API. Both the [official SDKs](#official-sdks) and [community SDKs](#community-sdks) are open-sourced and available in different programming languages.

### Official SDKs

Official SDKs support the following languages:

- [Java](https://github.com/line/line-bot-sdk-java){rel="[\"nofollow\"]"} ([Release notes](https://github.com/line/line-bot-sdk-java/releases){rel="[\"nofollow\"]"})
- [PHP](https://github.com/line/line-bot-sdk-php){rel="[\"nofollow\"]"} ([Release notes](https://github.com/line/line-bot-sdk-php/releases){rel="[\"nofollow\"]"})
- [Python](https://github.com/line/line-bot-sdk-python){rel="[\"nofollow\"]"} ([Release notes](https://github.com/line/line-bot-sdk-python/releases){rel="[\"nofollow\"]"})
- [Node.js](https://github.com/line/line-bot-sdk-nodejs){rel="[\"nofollow\"]"} ([Release notes](https://github.com/line/line-bot-sdk-nodejs/releases){rel="[\"nofollow\"]"})
- [Go](https://github.com/line/line-bot-sdk-go){rel="[\"nofollow\"]"} ([Release notes](https://github.com/line/line-bot-sdk-go/releases){rel="[\"nofollow\"]"})
- [Ruby](https://github.com/line/line-bot-sdk-ruby){rel="[\"nofollow\"]"} ([Release notes](https://github.com/line/line-bot-sdk-ruby/releases){rel="[\"nofollow\"]"})

#### Archives

The official SDKs for the following languages will no longer be updated. Each SDK can still be used, but no further changes will be made, such as the addition of new features, bug fixes, or security improvements.

- [Perl](https://github.com/line/line-bot-sdk-perl){rel="[\"nofollow\"]"} ([Release notes](https://github.com/line/line-bot-sdk-perl/releases){rel="[\"nofollow\"]"})

### LINE OpenAPI

LINE OpenAPI is a set of API interfaces provided by the LINE Platform, such as the Messaging API and LIFF server API, defined according to the OpenAPI specification. By using code generators such as [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator){rel="[\"nofollow\"]"} and [Swagger Codegen](https://github.com/swagger-api/swagger-codegen){rel="[\"nofollow\"]"}, you can easily use the features provided by the LINE Platform even in programming languages for which no SDK is provided.

- [LINE OpenAPI](https://github.com/line/line-openapi){rel="[\"nofollow\"]"}

### Community SDKs and libraries

The community SDKs and libraries are developed by third party developers and are available under general open source licenses. LY Corporation conducts limited reviews on the community SDKs, but doesn't provide official support or guarantee for the SDKs. See the licenses and disclaimers for each community SDK.

| Library                                                                                                                           | Language/   Technology | Description                                                                    | Publisher                                                               | License    | Stars                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [fireliff-cli](https://github.com/micksatana/fireliff-cli){rel="[\"nofollow\"]"}                                                  | N/A                    | CLI for LIFF                                                                   | [intocode](https://github.com/intocode-dev){rel="[\"nofollow\"]"}       | MIT        | [![GitHub stars](https://img.shields.io/github/stars/intocode-io/fireliff-cli.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/kenakamu/LINEChannelConnector){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                   |
| [LINEChannelConnector](https://github.com/kenakamu/LINEChannelConnector){rel="[\"nofollow\"]"}                                    | N/A                    | LINE Channel Connector for BotBuilder                                          | [kenakamu](https://github.com/kenakamu){rel="[\"nofollow\"]"}           | MIT        | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/LINEChannelConnector.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/kenakamu/LINEChannelConnector){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                              |
| [line_bot_framework](https://github.com/shidec/line_bot_framework){rel="[\"nofollow\"]"}                                          | PHP                    | Framework for bot development                                                  | [shidec](https://github.com/shidec){rel="[\"nofollow\"]"}               | MIT        | [![GitHub stars](https://img.shields.io/github/stars/shidec/line_bot_framework.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/shidec/line_bot_framework){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                      |
| [line-chatbot-boilerplate](https://github.com/mgilangjanuar/line-chatbot-boilerplate){rel="[\"nofollow\"]"}                       | Python                 | Templates for bot development                                                  | [mgilangjanuar](https://github.com/mgilangjanuar){rel="[\"nofollow\"]"} | MIT        | [![GitHub stars](https://img.shields.io/github/stars/mgilangjanuar/line-chatbot-boilerplate.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/mgilangjanuar/line-chatbot-boilerplate){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}            |
| [LINESimulator](https://github.com/kenakamu/linesimulator){rel="[\"nofollow\"]"}                                                  | N/A                    | LINE simulator for debugging bots                                              | [kenakamu](https://github.com/kenakamu){rel="[\"nofollow\"]"}           | MIT        | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/linesimulator.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/kenakamu/linesimulator){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                            |
| [line-richmenus-manager](https://github.com/kenakamu/line-richmenus-manager){rel="[\"nofollow\"]"}                                | N/A                    | GUI tool to create and manage rich menu                                        | [kenakamu](https://github.com/kenakamu){rel="[\"nofollow\"]"}           | MIT        | [![GitHub stars](https://img.shields.io/github/stars/kenakamu/line-richmenus-manager.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/kenakamu/line-richmenus-manager){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                          |
| [linebot](https://github.com/boybundit/linebot){rel="[\"nofollow\"]"}                                                             | Node.js                | LINE Messaging API SDK for Node.js                                             | [boybundit](https://github.com/boybundit){rel="[\"nofollow\"]"}         | MIT        | [![GitHub stars](https://img.shields.io/github/stars/boybundit/linebot.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/boybundit/linebot){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                                      |
| [botbuilder-linebot-connector](https://github.com/Wolke/botbuilder-linebot-connector){rel="[\"nofollow\"]"}                       | Node.js                | Microsoft Bot Framework v3 connector for the LINE Messaging API                | [Wolke](https://github.com/Wolke){rel="[\"nofollow\"]"}                 | MIT        | [![GitHub stars](https://img.shields.io/github/stars/Wolke/botbuilder-linebot-connector.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/Wolke/botbuilder-linebot-connector){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                    |
| [bottender](https://github.com/Yoctol/bottender){rel="[\"nofollow\"]"}                                                            | Node.js                | Framework that lets you quickly create bots that can run on multiple platforms | [Yoctol](https://github.com/Yoctol){rel="[\"nofollow\"]"}               | MIT        | [![GitHub stars](https://img.shields.io/github/stars/Yoctol/bottender.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/Yoctol/bottender){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                                        |
| [messaging-api-line](https://github.com/bottenderjs/messaging-apis/tree/master/packages/messaging-api-line){rel="[\"nofollow\"]"} | Node.js                | LINE Messaging API SDK for Node.js                                             | [Yoctol](https://github.com/Yoctol){rel="[\"nofollow\"]"}               | MIT        | [![GitHub stars](https://img.shields.io/github/stars/Yoctol/messaging-apis.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/bottenderjs/messaging-apis/tree/master/packages/messaging-api-line){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"} |
| [line-bot-sdk-dotnet](https://github.com/dlemstra/line-bot-sdk-dotnet){rel="[\"nofollow\"]"}                                      | C#                     | LINE Messaging API SDK for .NET Standard                                       | [dlemstra](https://github.com/dlemstra){rel="[\"nofollow\"]"}           | Apache-2.0 | [![GitHub stars](https://img.shields.io/github/stars/dlemstra/line-bot-sdk-dotnet.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/dlemstra/line-bot-sdk-dotnet){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                |
| [LineMessagingApi](https://github.com/pierre3/LineMessagingApi){rel="[\"nofollow\"]"}                                             | C#                     | LINE Messaging API SDK for C#                                                  | [pierre3](https://github.com/pierre3){rel="[\"nofollow\"]"}             | MIT        | [![GitHub stars](https://img.shields.io/github/stars/pierre3/LineMessagingApi.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/pierre3/LineMessagingApi){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                        |
| [line-bot-sdk](https://github.com/moleike/line-bot-sdk){rel="[\"nofollow\"]"}                                                     | Haskell                | LINE Messaging API SDK for Haskell                                             | [moleike](https://github.com/moleike){rel="[\"nofollow\"]"}             | BSD        | [![GitHub stars](https://img.shields.io/github/stars/moleike/line-bot-sdk.svg){className="[\"mb-0-important\",\"w-max-inherit\"]"}](https://github.com/moleike/line-bot-sdk){rel="[\"nofollow\"]" className="[\"no-external-icon\"]"}                                                |
