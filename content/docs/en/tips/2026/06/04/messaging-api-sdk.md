---
title: Let's make use of the Messaging API SDK sample code
navigation: true
description: >-
  Hello! I'm Zenigami, a technical writer. When using the Messaging API SDKs
  provided by LY Corporation, have you ever wondered, "How do I actually
  translate these specifications into real code?"
meta: >-
  {"date":"2026-06-04 00:00 UTC","tags":"messaging-api,
  line-developers-site","locale":"en","sidebar":false}
path: /en/tips/2026/06/04/messaging-api-sdk
__hash__: B-zx2xMbKIFOr6cc51WJmJRMUmzPUGuSds0w4PsBQ4s
seo:
  title: Let's make use of the Messaging API SDK sample code
  description: >-
    Hello! I'm Zenigami, a technical writer. When using the Messaging API SDKs
    provided by LY Corporation, have you ever wondered, "How do I actually
    translate these specifications into real code?"
---

::Tips
# :page-title

  :::display-date{date="2026/06/04" .!mb-20}

  :::

Hello! I'm Zenigami, a technical writer. When using the Messaging API SDKs provided by LY Corporation, have you ever wondered, "How do I actually translate these specifications into real code?"

One of the best ways to solve this problem is to check out the SDK's sample code.

In this article, I'll introduce where to find the SDK sample code, the benefits of leveraging it, and walk through a portion of the sample code for the Ruby version.

  :::toc

  :::

## SDK sample code for each language

The Messaging API SDKs for various languages are all open-sourced and available on GitHub. Inside the `examples` (or `samples`) directory of each repository, you can find sample code that is ready to run.

| Language | Sample Code URL                                                                                                        |
| -------- | ---------------------------------------------------------------------------------------------------------------------- |
| Java     | [line-bot-sdk-java/samples](https://github.com/line/line-bot-sdk-java/tree/master/samples){rel="[\"nofollow\"]"}       |
| Python   | [line-bot-sdk-python/examples](https://github.com/line/line-bot-sdk-python/tree/master/examples){rel="[\"nofollow\"]"} |
| Node.js  | [line-bot-sdk-nodejs/examples](https://github.com/line/line-bot-sdk-nodejs/tree/master/examples){rel="[\"nofollow\"]"} |
| Go       | [line-bot-sdk-go/examples](https://github.com/line/line-bot-sdk-go/tree/master/examples){rel="[\"nofollow\"]"}         |
| PHP      | [line-bot-sdk-php/examples](https://github.com/line/line-bot-sdk-php/tree/master/examples){rel="[\"nofollow\"]"}       |
| Ruby     | [line-bot-sdk-ruby/examples](https://github.com/line/line-bot-sdk-ruby/tree/master/examples){rel="[\"nofollow\"]"}     |

## Benefits of leveraging sample code

The sample code includes fundamental implementations such as signature verification, Webhook handling, and error handling, giving you a solid base to build your development upon.

Additionally, it demonstrates how to utilize various Messaging API features such as sending push messages or reply messages. This makes the sample code incredibly valuable as a reference during your development process.

## Example: Sending a push message with the Ruby SDK

As a quick guide on how to read the sample code, let's take a look at how to send a push message using the Ruby SDK. The sample code for the Ruby SDK is located in [line-bot-sdk-ruby/examples](https://github.com/line/line-bot-sdk-ruby/tree/master/examples){rel="[\"nofollow\"]"}. Within this directory, [v2/kitchensink](https://github.com/line/line-bot-sdk-ruby/tree/master/examples/v2/kitchensink){rel="[\"nofollow\"]"} showcases code for a wide variety of features.

By exploring the sample code, you can easily see that sending a push message to a user is implemented like this:

```ruby
client = Line::Bot::V2::MessagingApi::ApiClient.new(channel_access_token: ENV.fetch("LINE_CHANNEL_ACCESS_TOKEN"))

push_request = Line::Bot::V2::MessagingApi::PushMessageRequest.new(
  to: "User ID",
  messages: [
    Line::Bot::V2::MessagingApi::TextMessage.new(text: "Hello, world!")
  ]
)

client.push_message(push_message_request: push_request)
```

## Conclusion

If you ever find yourself stuck while working with a Messaging API SDK, taking a look at the sample code for your language might just point you toward the solution. I hope this article helps pave the way for a fun and smooth development experience!

  :::style
  html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .suJrU, html code.shiki .suJrU{--shiki-default:#FF7B72}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sc3cj, html code.shiki .sc3cj{--shiki-default:#D2A8FF}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags
  ---
  tags: messaging-api, line-developers-site
  lang: en
  section: tips
  ---
  :::
::
