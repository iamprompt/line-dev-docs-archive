---
title: Universal Links Step 1
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/documentation-partials/ios-sdk/universal-links-step-1
__hash__: oqIbzY6e9t-tVT6VqJnQ1jeR7poCAgPrS4s4aRrSMBw
seo:
  description: ''
---

## 1. アプリとサーバーを関連づける

この手順については、Appleの「[Allowing Apps and Websites to Link to Your Content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content){rel="[\"nofollow\"]"}」を参照してください。

以下の作業を完了します。

- アプリで制御するURLのJSONデータを含む`apple-app-site-association`ファイルを作成して、HTTPSサーバーに配置する。
- Associated Domainsのエンタイトルメントをアプリに追加する。

このセクションは、LINEの認可レスポンスを制御するためのユニバーサルリンクが`https://yourdomain.com/line-auth/`であることを前提とします。

`apple-app-site-association`ファイルの`paths`フィールドに`/line-auth/*`を含めます。有効な`apple-app-site-association`ファイルは以下のようになります。

```json
{
    "applinks": {
        "apps": [],
        "details": [
            {
                "appID": "YOUR_TEAM_ID.com.yourcompany.yourapp",
                "paths": [ "/line-auth/*" ]
            }
        ]
    }
}
```

ユニバーサルリンクは実際のiOSデバイスでのみテストできることに注意してください。アプリのIDとプロファイルを正しく設定する必要があります。ユニバーサルリンクが動作しない場合は、Appleの「[Troubleshooting Universal Links](https://developer.apple.com/library/archive/qa/qa1916/_index.html){rel="[\"nofollow\"]"}」を参照してください。次の手順に進む前に、ユニバーサルリンクが動作することを確認してください。
