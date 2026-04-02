---
title: Setting up your project
navigation: true
description: >-
  Set up your Unity project settings and development environment before trying
  LINE SDK for Unity.
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/line-login-sdks/unity-sdk/project-setup
__hash__: YuKmxbXDsg9OnBN7EeXx84ggFUNryHXYWee3VK-u4Ns
seo:
  title: Setting up your project
  description: >-
    Set up your Unity project settings and development environment before trying
    LINE SDK for Unity.
---

# :page-title

:markdown-controlsThe LINE SDK for Unity provides an interface for using LINE SDK on either iOS or Android platform. To use LINE SDK in Unity Editor and export it to a platform, your development environment needs a few things.

## Unity requirements

- Unity 2020.3.15 or later, with iOS and Android modules installed
- A valid subscription for Unity Personal, Unity Plus, or Unity Pro

## Installation on iOS

To integrate LINE SDK for Unity on iOS, you need:

- iOS 13.0 or higher as the deployment target
- Xcode 14.1 or higher

On iOS, LINE SDK for Unity works as a wrapper for the LINE SDK for iOS Swift. It adds the necessary libraries when you export your project to Xcode.

## Installation on Android

You must have the Android SDK installed, because Unity will use it to build your project to the Android platform. If you have previously [configured Unity for Android development](https://docs.unity3d.com/Manual/android-sdksetup.html){rel="[\"nofollow\"]"}, you already have the Android SDK.
