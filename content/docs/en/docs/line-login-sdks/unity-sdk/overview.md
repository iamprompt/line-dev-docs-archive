---
title: LINE SDK for Unity overview
navigation: true
description: >-
  The LINE SDK for Unity is a wrapper for LINE SDK iOS and Android to integrate
  the LINE Platform APIs into your Unity games.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login-sdks/unity-sdk/overview
__hash__: eIBQUfCUJyNhnuALAV0iDQJQ3nRvBMlM7KbKhftMZpk
seo:
  title: LINE SDK for Unity overview
  description: >-
    The LINE SDK for Unity is a wrapper for LINE SDK iOS and Android to
    integrate the LINE Platform APIs into your Unity games.
---

# :page-title

:markdown-controlsThe LINE SDK for Unity provides a modern way of implementing the LINE Platform APIs. The features included in this SDK will help you develop a Unity game with an engaging and personalized user experience.

## Features

The LINE SDK for Unity is a wrapper for [LINE SDK for iOS Swift](/docs/line-login-sdks/ios-sdk/) and [LINE SDK for Android](/docs/line-login-sdks/android-sdk/). It provides the following features in a Unity game running on iOS or Android.

### User authentication

This feature allows users to log in to your Unity game with their LINE accounts. With the help of the LINE SDK for Unity, it has never been easier to integrate LINE Login into your app. Your users will automatically log in to your app without entering their LINE credentials if they are already logged in to LINE on their Android devices. This offers a great way for users to get started with your app without having to go through a registration process.

### Utilizing user data with OpenID support

Once the user is authorized, you can get their LINE profile. You can make use of the user's information registered in LINE without building your own user system.

The LINE SDK supports the [OpenID Connect](https://openid.net/developers/how-connect-works/){rel="[\"nofollow\"]"} 1.0 specification. You can get ID tokens that contain the user’s LINE profile when you retrieve the access token.

### API calls

Use the methods included in the LINE SDK to get user profile information, log out users, and manage access tokens.

## Open-sourced SDK

The LINE SDK for Unity is an open-source project. Visit [our repository](https://github.com/line/line-sdk-unity){rel="[\"nofollow\"]"} to check the provided code and samples.

## Using the SDK

To use the LINE SDK with your Unity game, follow the steps below.

1. Create a channel. For more information, see [Getting started with LINE Login](/docs/line-login/getting-started/) in the LINE Login documentation.
2. Use the SDK to add LINE Login support to your Unity game. For more information, see [Integrating LINE Login with your Unity game](/docs/line-login-sdks/unity-sdk/integrate-line-login/).
3. Make API calls from your app using the SDK or from server-side code through the LINE Login API. For more information, see the [LINE SDK for Unity API reference](/reference/unity-sdk/) and the [LINE Login v2.1 API reference](/reference/line-login/).

### Trying the starter app

You can see how LINE Login works using our starter app. See [Trying the starter app](/docs/line-login-sdks/unity-sdk/try-line-login/).

## What's in this guide

This guide explains how to integrate the LINE SDK with your Unity game and use the available API functions in the SDK from your app. The table below lists the topics and their contents in this guide.

| Title                                                                                                | Content                                                                                                        |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [LINE SDK for Unity overview](/docs/line-login-sdks/unity-sdk/overview/)                             | SDK features and high-level steps for using the SDK.                                                           |
| [Setting up project](/docs/line-login-sdks/unity-sdk/project-setup/)                                 | The prerequisites and environment needed for integrating the LINE SDK for Unity.                               |
| [Trying the starter app](/docs/line-login-sdks/unity-sdk/try-line-login/)                            | How to run our starter app.                                                                                    |
| [Integrating LINE Login with your Unity game](/docs/line-login-sdks/unity-sdk/integrate-line-login/) | How to integrate the LINE SDK into your project and leverage LINE Login to improve your app's user experience. |
| [Using LINE SDK for other APIs and result handling](/docs/line-login-sdks/unity-sdk/using-sdk/)      | Usage and other details of LINE SDK for Unity.                                                                 |
| [LINE SDK for Unity reference](/reference/unity-sdk/)                                                | Detailed information on the interfaces and classes available in the SDK.                                       |

## Other resources

| Title                                                                                  | Content                 |
| -------------------------------------------------------------------------------------- | ----------------------- |
| [Release notes for LINE SDK for Unity](/docs/line-login-sdks/unity-sdk/release-notes/) | Change log for the SDK. |
