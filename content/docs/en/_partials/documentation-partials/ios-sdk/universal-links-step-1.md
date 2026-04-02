---
title: Universal Links Step 1
navigation: true
description: ''
meta: '{}'
path: /en/_partials/documentation-partials/ios-sdk/universal-links-step-1
__hash__: xoUE78XIhShxQbeHUpoK3RXImRRlBNT3L4MtHQbOfRA
seo:
  description: ''
---

## 1. Create an association between your app and your server

For this step, see [Allowing Apps and Websites to Link to Your Content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content){rel="[\"nofollow\"]"} by Apple.

Complete these tasks:

- Create an `apple-app-site-association` file that contains JSON data about the URLs that your app can handle and put it in your HTTPS server.
- Add an Associated Domains entitlement to your app.

This section assumes that you use `https://yourdomain.com/line-auth/` as the universal link to handle a LINE authorization response.

Include `/line-auth/*` in the `paths` field of your `apple-app-site-association` file. An example of a valid Apple App Site Association file looks like below:

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

Note that you can test universal links only on a real iOS device. You need to set up your app ID and profile correctly. If your universal links don’t work, see [Troubleshooting Universal Links](https://developer.apple.com/library/archive/qa/qa1916/_index.html){rel="[\"nofollow\"]"} on Apple's developer site. Ensure that your universal links work before you proceed with the next steps.
