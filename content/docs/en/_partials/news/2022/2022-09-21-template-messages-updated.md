---
title: >-
  [Updated] Messaging API template messages are now available for the desktop
  version of LINE
navigation: true
description: ''
meta: >-
  {"date":"2022-09-21 00:00 UTC","tags":"messaging-api,
  template-messages","locale":"en"}
path: /en/_partials/news/2022/2022-09-21-template-messages-updated
__hash__: hyPIXD8GbmAHgVzblB7PGtcgx2YjUmpGFEexeFEzNlU
seo:
  title: >-
    [Updated] Messaging API template messages are now available for the desktop
    version of LINE
  description: ''
---

::admonition{title="Updated on September 29, 2022" type="note"}
Template messages are now available for the desktop version of LINE.
::

::admonition{title="Updated on September 22, 2022" type="note"}
Due to a problem with supporting for the desktop version of LINE, we've reverted template messages to the state before the specification change. We'll make a new announcement when the support for the desktop version of LINE is completed.
::

::admonition{title="Updated on September 21, 2022 21:00" type="note"}
Some template messages aren't displaying properly on the desktop version of LINE. We apologize for any inconvenience.
::

Messaging API :glossary-tooltip[[template messages](/glossary/#template-message)]{glossary-id="template-message"} are now available for the desktop version of LINE (macOS and Windows).

Previously, template messages were only supported on LINE for iOS and LINE for Android, but now they are also supported on the desktop version of LINE. The changes and versions covered by this support are as follows:

- [Change of display](#change-of-display-20220921)
- [Sending GIF images](#send-gif-20220921)
- [Target version](#target-version-20220921)

These changes don't apply to template messages sent by [`liff.sendMessages()`](/reference/liff/#send-messages) and [`liff.shareTargetPicker()`](/reference/liff/#share-target-picker) in LIFF.

::admonition
---
title: About Template Messages that have already been sent
type: tip
---
Template messages that have already been sent aren't affected by the changes. Only template messages sent after the changes will be affected by the changes.
::

### Change of display

There are some minor partial changes in the display of template messages as a result of the support for the desktop version of LINE. The layout and the actions to be specified aren't affected by the changes.

### Sending GIF images

The `imageUrl` and `thumbnailImageUrl` properties of template messages don't support GIF format images. However, in the past, when a template message was sent with a GIF format image, the GIF animation would be played in some cases.

After the changes, GIF format images will no longer be displayed correctly even if GIF format images are specified in the template message.

::admonition
---
title: Images in unsupported file formats may not display properly
type: note
---
The `imageUrl` and `thumbnailImageUrl` properties of template messages support JPEG or PNG format images.
::

### Target version

The target LINE versions for which changes has been made are as follows:

| OS      | Target version |
| ------- | -------------- |
| iOS     | All versions   |
| Android | All versions   |
| macOS   | 7.8.1 or later |
| Windows | 7.8.1 or later |
