---
title: >-
  [Updated] Notice about service outage for the LIFF browser and the LINE's
  in-app browser
navigation: true
description: ''
meta: >-
  {"date":"2023-03-30 00:00 UTC","tags":"Outage report, liff,
  line-mini-app","locale":"en"}
path: /en/_partials/news/2023/2023-03-30-liff-mini-outage
__hash__: Q4XKh8A-zNL8uOIGuw1dtZF4n1fElW9zAhYjmoZgORs
seo:
  title: >-
    [Updated] Notice about service outage for the LIFF browser and the LINE's
    in-app browser
  description: ''
---

::admonition{title="Updated on May 19, 2023" type="note"}
This outage has been resolved in iOS 16.5. Updating the iOS version that the user is using to 16.5 will resolve the problem.
::

We'd like to inform you about a service outage regarding the LIFF browser and the LINE's in-app browser on iOS 16.4.

### Date and time of outage

March 28, 2023 (ongoing) *In case of iOS 16.4

### Cause of the outage

Under investigation.

[An issue about WebView behaving differently on iOS 16.4 and unable to get location information](https://developer.apple.com/forums/thread/727174){rel="[\"nofollow\"]"} has been reported on the Apple Developer Forums. The same problem is occurring in the LIFF browser and the LINE's in-app browser.

### Environment where the problem occurred

LIFF Browser (LIFF Apps and LINE Mini Apps) and the LINE's in-app browser on iOS 16.4.

### Details

Unable to get location information in the LIFF browser and LINE's in-app browser on iOS 16.4.

### Our response to this outage

There is no fundamental solution to the outage at this time. We don't plan to update the LIFF SDK to address the outage.

If you don't have timeout processing when retrieving location information, users may be kept waiting for a long time. We recommend that you add timeout handling and display an appropriate message to the user.

::admonition{title="About timeout processing" type="tip"}
In the outage, the callbacks `onSuccess` and `onError` of `window.navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 1000})` code aren't called and always remain in a wait state. Therefore, you can work around this issue by using `window.setTimeout` or similar to suspend processing if the processing doesn't proceed after a certain period of time has elapsed.
::

We apologize for any inconvenience. We will report more details soon.
