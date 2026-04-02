---
title: Update your code that uses the suspended LIFF SDK API
navigation: true
description: >-
  As announced on November 29, 2019, these APIs on LINE v9.19.0 and later for
  iOS were temporarily suspended due to technical issues.
meta: '{"date":"2020-01-14 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2020/2020-01-14-confirm-existence-of-some-liff-apis
__hash__: JlTmHxjuNxftsI6mcVNFQhMMtxNeev-jWd-sH5BOW70
seo:
  title: Update your code that uses the suspended LIFF SDK API
  description: >-
    As announced on November 29, 2019, these APIs on LINE v9.19.0 and later for
    iOS were temporarily suspended due to technical issues.
---

As announced on [November 29, 2019](/news/2019/11/29/liff-functions-suspended/), these APIs on LINE v9.19.0 and later for iOS were temporarily suspended due to technical issues.

- liff.scanCode()
- liff.bluetooth.*

Starting today, for end users using the LIFF app on **LINE v9.19.0 and later for iOS**, each API works as follows.

| API              | Function                                                                                                                      |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| liff.scanCode()  | API is `undefined`                                                                                                            |
| liff.bluetooth.* | If the Bluetooth plug-in fails to initialize when calling `liff.initPlugins(['bluetooth'])`, a `FORBIDDEN` error is returned. |

If you use `liff.scanCode()`, we recommend that you also consider the above case and verify that the function exists.

Before modification:

```text
liff.scanCode().then(result => {
  // result = { value: '' }
});
```

Modified:

```text
if (liff.scanCode) {
  liff.scanCode().then(result => {
    // result = { value: '' }
  });
}
```

For more information, see [LIFF v2 API reference](/reference/liff/).

LINE will continue to improve the quality of its services. Thank you for your understanding.
