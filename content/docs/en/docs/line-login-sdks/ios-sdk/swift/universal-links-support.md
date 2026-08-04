---
title: Using universal links
navigation: true
description: How to set up universal links with LINE SDK for iOS Swift
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":null}'
path: /en/docs/line-login-sdks/ios-sdk/swift/universal-links-support
__hash__: 0xquxd9a4a7lP5VZkVywc4w-r4tZFS_YnAAKYBf101c
seo:
  title: Using universal links
  description: How to set up universal links with LINE SDK for iOS Swift
---

# :page-title

:markdown-controlsYou can improve the security of your app with Apple's [universal links](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html){rel="[\"nofollow\"]"} feature that securely communicates information between apps. If you set up a universal link, LINE tries to open your app with the universal link first. If the universal link is invalid, LINE falls back to a URL based on your iOS bundle ID (see [Linking your app to your channel](/docs/line-login-sdks/ios-sdk/swift/setting-up-project/#linking-app-to-channel)).

::admonition{title="Universal links are recommended" type="note"}
Although universal links are optional, we recommend using them to make your app more secure.
::

To enable users to open your app with a universal link, follow these steps:

1. [Create an association between your app and your server.](#ul-s1)
2. [Set up a universal link on the LINE Developers Console.](#ul-s2)
3. [Call the `LoginManager.setup` method with the universal link.](#ul-s3)
4. [Handle the login result after your app is opened by the universal link.](#ul-s4)

:partial{content="documentation-partials/ios-sdk/universal-links-step-1/"}## 2. Set up a universal link on the LINE Developers Console

For the procedure, see [Linking your app to your channel](/docs/line-login-sdks/ios-sdk/swift/setting-up-project/#linking-app-to-channel). In this example, we set it to `https://yourdomain.com/line-auth/`.

## 3. Call the `LoginManager.setup` method with the universal link

Pass the universal link to the LINE SDK for iOS Swift when you call the `LoginManager.setup` method. This lets LINE Login verify that the link is correctly set up on both the LINE Developers Console and your app to prevent the universal link from being abused. In the example below, the universal link is `https://yourdomain.com/line-auth/`.

```swift
let link = URL(string: "https://yourdomain.com/line-auth/")
LoginManager.shared.setup(channelID: "YOUR_CHANNEL_ID", universalLinkURL: link)
```

For more information about calling the `LoginManager.setup` method, see [Integrating LINE Login with your iOS app](/docs/line-login-sdks/ios-sdk/swift/integrate-line-login/).

## 4. Handle the login result after your app is opened by the universal link

To handle the authentication result returned from the LINE Platform, pass the received URL to the `application(_:open:options:)` method of `LoginManager`. This means modifying either your app delegate class or your scene delegate classes, depending on whether your project supports multiple windows (a feature [introduced in iOS 13](https://developer.apple.com/documentation/uikit/scenes){rel="[\"nofollow\"]"}).

### Modify app delegate

iOS 12 and earlier will open URLs by calling your `UIApplicationDelegate` object. If your app delegate class contains an `application(_:continue:restorationHandler:)` delegate method, add the following lines to it. If it doesn't exist, create it first, then add these lines:

```swift
func application(
    _ app: UIApplication,
    continue userActivity: NSUserActivity,
    restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool
{
    if LoginManager.shared.application(app, open: userActivity.webpageURL) {
        return true
    }
    // Your other code to handle universal links and/or user activities.
}
```

### Modify scene delegates

By default, iOS 13 or later will try to open URLs by calling a `UISceneDelegate` object.

If you created your project with Xcode 11 or later, then by default it will contain a `SceneDelegate.swift` file and your `Info.plist` file will contain a `UIApplicationSceneManifest` entry.

If your app supports multiple windows, add the following lines to any scene delegate class you want to use:

```swift
// SceneDelegate.swift
func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    _ = LoginManager.shared.application(.shared, open: URLContexts.first?.url)
}
```

::admonition{title="If you're not supporting multiple windows" type="note"}
If your app doesn't support multiple windows, iOS will call your `UIApplicationDelegate` object to open URLs. Modify your app delegate class instead.
::

Now LINE can open your app with the universal link and your app can handle the login result.
