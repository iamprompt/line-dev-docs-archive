---
title: The process of reflecting new Messaging API features in SDKs
navigation: true
description: >-
  Hello! I'm Zenigami, a technical writer. Are you using the Messaging API SDKs
  provided by LY Corporation?
meta: >-
  {"date":"2026-04-23 00:00 UTC","tags":"messaging-api,
  line-developers-site","locale":"en","sidebar":false}
path: /en/tips/2026/04/23/messaging-api-sdk
__hash__: AMy0kvJ5LWzMH9OsNkAWXe715rYg10cs2VFBBIL_YtQ
seo:
  title: The process of reflecting new Messaging API features in SDKs
  description: >-
    Hello! I'm Zenigami, a technical writer. Are you using the Messaging API
    SDKs provided by LY Corporation?
---

::Tips
# :page-title

  :::display-date{date="2026/04/23" .!mb-20}

  :::

Hello! I'm Zenigami, a technical writer. Are you using the Messaging API SDKs provided by LY Corporation?

Previously, SDK updates corresponding to new Messaging API features were done manually. [By switching to automatic generation using OpenAPI Generator](/news/2023/07/05/open-api/), you can now access new features through the SDKs much faster.

In this article, I will introduce the process from when a new feature is added to the Messaging API until SDKs for various languages like Java and Python are updated.

  :::admonition{title="What is the LINE Messaging API SDK?" type="tip"}
  The [LINE Messaging API SDKs](/docs/messaging-api/line-bot-sdk/) are official libraries designed to help developers efficiently build bots using the Messaging API. By using these SDKs, developers can easily handle tasks such as API requests and signature verification, allowing them to focus on developing bot functionality.
  :::

  :::toc

  :::

## Target SDKs

The Messaging API provides SDKs for the following languages. The process introduced in this article applies to all of them.

- [Java](https://github.com/line/line-bot-sdk-java){rel="[\"nofollow\"]"}
- [Python](https://github.com/line/line-bot-sdk-python){rel="[\"nofollow\"]"}
- [Node.js](https://github.com/line/line-bot-sdk-nodejs){rel="[\"nofollow\"]"}
- [Go](https://github.com/line/line-bot-sdk-go){rel="[\"nofollow\"]"}
- [PHP](https://github.com/line/line-bot-sdk-php){rel="[\"nofollow\"]"}
- [Ruby](https://github.com/line/line-bot-sdk-ruby){rel="[\"nofollow\"]"}

## Process of reflecting new features

Now, let me explain the process from when a new feature is added to the Messaging API until it is reflected in the SDKs. To ensure that new features are available through the SDKs as quickly as possible, we update the SDKs through the following process:

1. LINE OpenAPI specifications are updated
2. SDKs and pull requests are auto-generated
3. SDKs are released

I will explain each step in the process.

### 1. LINE OpenAPI specifications are updated

When new features are added to the Messaging API, the [LINE OpenAPI](https://github.com/line/line-openapi){rel="[\"nofollow\"]"} on GitHub will be updated accordingly. In this repository, the Messaging API specifications are defined in a format compliant with the OpenAPI specification.

### 2. SDKs and pull requests are auto-generated

When the LINE OpenAPI specification is updated, OpenAPI Generator is run on each SDK repository to automatically generate the source code. Pull requests are also automatically created for each repository.

For example, in the [pull request to add a feature for marking messages as read](https://github.com/line/line-openapi/pull/115){rel="[\"nofollow\"]"} in LINE OpenAPI, references from the automatically created pull requests are posted as shown below.

![](/media/tips/2026/messaging-api-sdk.png){className="[\"border\",\"w-fix-480\"]"}

### 3. SDKs are released

The automatically generated pull requests are reviewed by maintainers and then merged. Once the pull requests are merged, the new versions of the SDKs will be published to package registries for each language, such as Maven Central and PyPI.

The LINE Developers site does not send out notifications when SDKs are updated. For this reason, we recommend that you **Watch** the repository of the SDK you are using.

  :::admonition{title="If you encounter any issues with the SDK" type="tip"}
  If you encounter any issues with the SDK, please report them via the Issues section of each SDK's repository.
  :::

## Conclusion

Once new versions of the SDKs are released as described above, developers can start using the new Messaging API features through the SDKs. I hope you enjoy developing even more by using the SDKs!

  :::tags
  ---
  tags: messaging-api, line-developers-site
  lang: en
  section: tips
  ---
  :::
::
