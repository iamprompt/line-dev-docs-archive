---
title: LIFF v2.3.0 released
navigation: true
description: |-
  We've now released LIFF v2.3.0.
  The changes in LIFF v2.3.0 are as follows:
meta: '{"date":"2020-06-29 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2020/2020-06-29-release-liff-2.3
__hash__: IzPPGosh8edJpeSSgWbeu3vQl7rlFqH78rWJkriPJlo
seo:
  title: LIFF v2.3.0 released
  description: |-
    We've now released LIFF v2.3.0.
    The changes in LIFF v2.3.0 are as follows:
---

We've now released LIFF v2.3.0.
The changes in LIFF v2.3.0 are as follows:

- [You can now use paths and query parameters in the LIFF endpoint URL](#endpoint-url)
- [A condition for the liff.permanentLink.createUrl() method to throw an exception added](#permanentLink)
- [You can now get the send results of liff.shareTargetPicker()](#shareTargetPicker)
- [An error code returned by liff.sendMessages() added](#sendMessage)

### You can now use paths and query parameters in the LIFF endpoint URL

[As announced before](/news/2020/05/20/liff-endpoint-url-improvement/), you can now use paths (`/path`) and query parameters (`?key=value`) added to the LIFF endpoint URL in the LIFF tab of the [LINE Developers Console](/console/).

::admonition
---
title: Existing LIFF apps aren't effected until the setting is changed
type: note
---
It's necessary to change the setting in LINE Developers Console to use the new specs in existing LIFF apps. Existing LIFF apps aren't affected by the new spec until the setting is changed.

![Methods for converting additional information in the LIFF URL](/media/liff/preserve-full-endpoint-url-en.png){className="[\"border\",\"w-fix-640\"]"}

To use the new specs, set **Methods for converting additional information in the LIFF URL** to **Concatenate**.
Don't change the setting if your existing LIFF app doesn't support the new specs. If setting to **Replace (Backward compatibility mode)**, the LIFF app isn't affected by the new specs.
::

For more information, see [Opening a LIFF app](/docs/liff/opening-liff-app/) in the LIFF documentation.

### A condition for the liff.permanentLink.createUrl() method to throw an exception added

When executing the `liff.permanentLink.createUrl()` method, an exception is thrown if the current page URL doesn't start with the URL specified in **Endpoint URL**.

```javascript
try {
    const myLink = liff.permanentLink.createUrl()
}
catch (err) {
    console.log(err.code + ':' + err.message);
}
```

Especially when setting **Methods for converting additional information in the LIFF URL** to **Replace (Backward compatibility mode)**, the paths and query parameters (`/2020campaign/?key=value`) specified in **Endpoint URL** may not be included in the secondary redirect URL.
In this case, you can't get a permanent link because the `liff.permanentLink.createUrl()` method meets the above conditions.

For more information, see [`liff.permanentLink.createUrl()`](/reference/liff/#permanent-link-create-url) in the LIFF v2 API reference.

### You can now get the send results of liff.shareTargetPicker()

As announced on [April 21, 2020](/news/2020/04/21/notice-return-value-of-sharetargetpicker/), you can now get the send results of `liff.shareTargetPicker()`.

Before the spec change, the LIFF app was able to confirm whether the target picker was displayed, but not whether the message was sent after that.

After the change, the LIFF app is able to check whether the message has been sent, so you can change the behavior of the LIFF app depending on the user's situation.

::admonition{title="Note" type="note"}
- The return value of `liff.shareTargetPicker()` is changed due to this spec change.
- This spec change doesn't affect users using LINE 10.3.0 - 10.10.0.
::

#### Sample code for this spec change

We recommend you to handle the return value according to the LINE versions that users are using as shown below:

```javascript
if (liff.isApiAvailable('shareTargetPicker')) {
  liff.shareTargetPicker([
    {
      'type': 'text',
      'text': 'Hello, World!'
    }
  ])
    .then(function (res) {
      if (res) {
        // succeeded in sending a message through TargetPicker
        console.log(`[${res.status}] Message sent!`)
      } else {
        const [majorVer, minorVer] = (liff.getLineVersion() || "").split('.');
        if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
          // LINE 10.3.0 - 10.10.0
          // Old LINE will access here regardless of user's action
          console.log('TargetPicker was opened at least. Whether succeeded to send message is unclear')
        } else {
          // LINE 10.11.0 -
          // sending message canceled
          console.log('TargetPicker was closed!')
        }
      }
    }).catch(function (error) {
      // something went wrong before sending a message
      console.log('something wrong happen')
    })
}
```

For more information, see [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker) in the LIFF v2 API reference.

### An error code returned by liff.sendMessages() added

Previously, if passing the wrong parameters to `liff.sendMessages()`, `400` was returned as the error code of `LiffError`. After the spec change, `INVALID_ARGUMENT` is returned instead.

As long as the processing isn't split by error codes, this spec change doesn't effect your LIFF app.

Before the spec change:

```javascript
liff.sendMessages([
  {
    type: 'text',
    text: 'Hello, World!'
  }
])
  .then(() => {
    console.log('message sent');
  })
  .catch((err) => {
    // Returns "400" if invalid arguments are passed
    if (err.code === "400") {
      console.log("message format error!");
    }
  });
```

After the spec change:

```javascript
liff.sendMessages([
  {
    type: 'text',
    text: 'Hello, World!'
  }
])
  .then(() => {
    console.log('message sent');
  })
  .catch((err) => {
    // Returns "INVALID_ARGUMENT" if invalid arguments are passed
    if (err.code === "INVALID_ARGUMENT") {
      console.log("message format error!");
    }
  });
```

For more information, see [Error details](/reference/liff/#error-details) in the LIFF v2 API reference.
