---
title: liff.isApiAvailable() added to LIFF v2
navigation: true
description: >-
  We added the method liff.isApiAvailable() to LIFF v2. This method checks
  whether a specified API can be used in the environment where the LIFF app was
  launched.
meta: '{"date":"2020-04-03 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2020/2020-04-03-add-is-api-available
__hash__: IF-2oWOaaVDjqnGCFm6o1Lp-_KkFVCGr9mICKQ_LIsU
seo:
  title: liff.isApiAvailable() added to LIFF v2
  description: >-
    We added the method liff.isApiAvailable() to LIFF v2. This method checks
    whether a specified API can be used in the environment where the LIFF app
    was launched.
---

We added the method `liff.isApiAvailable()` to LIFF v2. This method checks whether a specified API can be used in the environment where the LIFF app was launched.

::admonition{title="Note" type="note"}
The number of APIs you can specify is limited. Currently, you can only specify `liff.shareTargetPicker()`. We'll notify you when more APIs can be checked with `liff.isApiAvailable()` in the future.
::

### Check if share target picker is available

By executing `liff.isApiAvailable()` before you execute `liff.shareTargetPicker()`, you can avoid the user getting an error message on their screen if the share target picker isn't available in their device environment.

```javascript
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
    .then(
      alert("ShareTargetPicker was launched")
    ).catch(function(res) {
      alert("Failed to launch ShareTargetPicker")
    })
}
```

Learn more from [liff.isApiAvailable()](/reference/liff/#is-api-available) in the LIFF v2 API reference.
