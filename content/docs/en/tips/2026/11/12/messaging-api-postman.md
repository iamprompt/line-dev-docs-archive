---
title: How to test the Messaging API on Postman using LINE OpenAPI
navigation: true
description: >-
  Hello! I'm Zenigami, a technical writer. When you start developing with the
  Messaging API, have you ever thought, "I want to test how the API works before
  writing any code"?
meta: >-
  {"date":"2026-11-12 00:00
  UTC","tags":"messaging-api","locale":"en","sidebar":false}
path: /en/tips/2026/11/12/messaging-api-postman
__hash__: DhMFwQrpRs_uGtdedxsPOp0obXFy5jCsrzHZfk3yMnM
seo:
  title: How to test the Messaging API on Postman using LINE OpenAPI
  description: >-
    Hello! I'm Zenigami, a technical writer. When you start developing with the
    Messaging API, have you ever thought, "I want to test how the API works
    before writing any code"?
---

::Tips
# :page-title

  :::display-date{date="2026/11/12" .!mb-20}

  :::

Hello! I'm Zenigami, a technical writer. When you start developing with the Messaging API, have you ever thought, "I want to test how the API works before writing any code"?

[Postman](https://www.postman.com/){rel="[\"nofollow\"]"} is widely used as a tool to easily test APIs via a GUI. By using our officially provided [LINE OpenAPI](https://github.com/line/line-openapi){rel="[\"nofollow\"]"}, you can save yourself the trouble of manually setting endpoints, request bodies, and other details, allowing you to test the API much more smoothly.

In this post, I will explain the steps from importing the LINE OpenAPI specification file into Postman to actually sending a push message using the Messaging API.

  :::toc

  :::

## Environment

I have verified the steps in this post using the following environment:

| Name        | Version      |
| ----------- | ------------ |
| OS          | macOS 26.3.1 |
| Postman app | 12.34.4      |

The steps shown below may differ depending on your OS or Postman version.

## Steps

Below are the steps for sending a push message using the Messaging API with Postman.

### 1. Get the URL of the LINE OpenAPI specification file

First, get the URL of the LINE OpenAPI specification file. The OpenAPI specifications for various APIs, including the Messaging API, are published on our GitHub repository.

- [line/line-openapi](https://github.com/line/line-openapi){rel="[\"nofollow\"]"}

To test the Messaging API, you will use `messaging-api.yml` in the repository. Copy the URL of the file shown below:

```text
https://raw.githubusercontent.com/line/line-openapi/refs/heads/main/messaging-api.yml
```

### 2. Import into Postman

Once you have the file URL, the next step is to load it into Postman. You can do this by following these steps:

1. Open Postman, and click **Import** in the **File** menu.
2. Paste the copied OpenAPI specification URL, and click **Import**.
3. Once the import is complete, a collection named `LINE Messaging API` will be created under **Collections** on the left.

![](/media/tips/2026/postman-import.png){className="[\"border\",\"w-fix-640\"]"}

The structure of each Messaging API endpoint, including URLs, parameters, and request bodies, is now automatically configured in Postman.

### 3. Get a channel access token

To execute the Messaging API, you need to set a channel access token. For the purpose of verifying how the API works, it is convenient to use a [long-lived channel access token](/docs/basics/channel-access-token/#long-lived-channel-access-token).

You can issue a long-lived channel access token from the **Messaging API** tab of your Messaging API channel in the [LINE Developers Console](/console/).

  :::admonition
  ---
  title: Use the steps in this post for API testing purposes only
  type: note
  ---
  Long-lived channel access tokens are convenient and easy to issue from the LINE Developers Console. However, because they have no expiration date, they carry a high risk if leaked. Additionally, depending on how variables are configured in Postman, the values you enter may be saved on its cloud servers.

  Use the Postman procedures introduced in this post solely for verifying API operations. In actual production environments, execute the API from your program using other types of tokens, such as [stateless channel access tokens](/docs/basics/channel-access-token/#stateless-channel-access-token).
  :::

### 4. Set the channel access token

The channel access token you obtained in step 3 must be set in the request header. By setting it as a variable for the entire collection, you can execute the API efficiently.

To set it as a collection variable, follow these steps:

1. Click the **LINE Messaging API** collection.
2. Open the **Variables** tab on the right.
3. Add a variable named `channelAccessToken`, and enter your channel access token in the **Value** field.
4. Open the **Authorization** tab, and set the **Auth type** to `Bearer Token`.
5. Enter `{{channelAccessToken}}` in the **Token** field.

![](/media/tips/2026/postman-channel-access-token.png){className="[\"border\",\"w-fix-640\"]"}

This will automatically add the authorization header to all requests within the collection.

### 5. Add the LINE Official Account as a friend

Later, you will send a push message using the Messaging API. To receive the message on the LINE app, you need to be friends with the LINE Official Account that will send the message.

If you haven't added it as a friend yet, scan the QR code found on the **Messaging API** tab of the LINE Developers Console using your LINE app to add it.

### 6. Get the destination user ID

Next, get the user ID that will be the destination of the push message.

You can find your user ID, which will be the destination, under **Your user ID** at the bottom of the **Basic settings** tab in the LINE Developers Console. Copy this user ID.

### 7. Try sending a push message

You are now ready to try out the Messaging API. Here, as a test, let's try sending a [push message](/reference/messaging-api/#send-push-message) to yourself. Send a message by following these steps:

1. Select the push message request from the **LINE Messaging API** collection:```text
v2 > bot > message > push > push Message
```
2. Open the **Body** tab and rewrite the request body as follows. For `to`, specify **Your user ID** that you copied in step 6.```json
{
  "to": "<Your user ID>",
  "messages": [
    {
      "type": "text",
      "text": "Hello, world!"
    }
  ]
}
```
3. Click the **Send** button.

![](/media/tips/2026/postman-send-push-message.png){className="[\"border\",\"w-fix-640\"]"}

If `200 OK` is displayed in the response section at the bottom after you click the **Send** button, the request was successful. If you open your LINE app, you should see that the message has arrived.

## Conclusion

By combining LINE OpenAPI and Postman, you no longer need to manually type URLs and parameters while looking at the API reference, allowing you to easily try out the Messaging API.

The Messaging API has various endpoints, such as those for managing rich menus and audiences. Using this method, you can quickly test them out on your end. I hope you find this useful for streamlining your day-to-day development and testing.

  :::style
  html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sPWt5, html code.shiki .sPWt5{--shiki-default:#7EE787}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
