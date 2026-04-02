---
title: Notice about the return value of liff.shareTargetPicker()
navigation: true
description: >-
  We will change the return value of liff.shareTargetPicker() on LIFF v2 in the
  future.

  If you are developing an app that uses the current specification, change the
  implementation.
meta: '{"date":"2020-04-21 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2020/2020-04-21-notice-return-value-of-sharetargetpicker
__hash__: 50jbpckltAjZQF4jOt3f9EIwy1nwjs9okOIWiwQFXdY
seo:
  title: Notice about the return value of liff.shareTargetPicker()
  description: >-
    We will change the return value of liff.shareTargetPicker() on LIFF v2 in
    the future.

    If you are developing an app that uses the current specification, change the
    implementation.
---

We will change the return value of `liff.shareTargetPicker()` on LIFF v2 in the future.
If you are developing an app that uses the current specification, change the implementation.

::admonition{title="Note" type="note"}
The specification for the return value of `liff.shareTargetPicker()` after the change isn't currently fixed.
::

## Summary

Before the specification change, the LIFF app could check whether the target picker could be displayed but couldn't check whether the message could be sent.

After the specification change, the LIFF app can check whether a message has been sent or not, so you can implement a change in LIFF app behavior to suit the user's situation.

## Before the specification change

### Sample

```javascript
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
    .then(
      console.log("ShareTargetPicker was launched")
    ).catch(function(res) {
      console.log("Failed to launch ShareTargetPicker")
    })
}
```

### Syntax

`liff.shareTargetPicker(messages)`

### Return value

Returns a `Promise` object.

When the target picker is displayed, the `Promise` resolves.

If a problem occurs before the target picker is displayed, the `Promise` is rejected and a `LiffError` is passed. For more information on the LiffError object, see [LIFF SDK errors](/reference/liff/#liff-errors).

::admonition{title="Note" type="note"}
- Situations after the target picker is displayed can't be detected, such as when the user doesn't select a destination in the displayed target picker.
- In the callback function where the `Promise` has been resolved and rejected, the LIFF app won't work on some devices if the developer uses `alert()`.
::

## After the specification change

### Sample

```javascript
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      type: "text",
      text: "Hello, World!"
    }
  ])
  .then(function(res) {
    if (res) {
      // succeeded to send message in TargetPicker
      console.log(`[${res.status}] Message [${this.msgType}] is sent!`)
    } else {
      // canceled to send message
      console.log('TargetPicker was closed!')
    }
  }).catch(function(error) {
    // something wrong happened before sending message properly
    console.log('something wrong happen')
  })
}
```

### Syntax

`liff.shareTargetPicker(messages)`

### Return value

Returns a `Promise` object.

If the message is sent correctly, the `Promise` is resolved and a success is passed.

If the user cancels and closes the target picker before sending the message, the `Promise` is resolved, but no success is passed.

If a problem occurs before the target picker is displayed, the `Promise` is rejected and a `LiffError` is passed. For more information on the LiffError object, see [LIFF SDK errors](/reference/liff/#liff-errors).

We plan to change the error definition as the specification changes in the future.

::admonition{title="Note" type="note"}
In the callback function where the `Promise` has been resolved and rejected, the LIFF app won't work on some devices if the developer uses `alert()`.
::

## Scheduled date of specification change

TBD
