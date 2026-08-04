---
title: '[Updated] As of November 28, 2024, anyone can now publish LINE MINI Apps'
navigation: true
description: ''
meta: >-
  {"date":"2024-11-27 06:00 UTC","tags":"console, liff,
  line-mini-app","locale":"en"}
path: /en/_partials/news/2024/2024-11-27-line-mini-app
__hash__: lzz18YmPwityrVkR0QCj0Q2d9LEpfkK4odc6BYJaOm4
seo:
  title: '[Updated] As of November 28, 2024, anyone can now publish LINE MINI Apps'
  description: ''
---

::admonition{title="Added on December 17, 2024" type="tip"}
There was an issue where the correct design wasn't applied to the header of verified MINI Apps, but this issue has been fixed in LINE version 14.21.0.
::

::admonition{title="Added on November 28, 2024" type="note"}
The release of this specification change has been completed. However, we're still working on the design issue indicated in [What are verified MINI Apps](#verified-mini-app-20241127-0600) and the delay in reflecting for some LINE MINI Apps indicated in [Date of change](#date-20241127-0600).
::

Previously, all LINE MINI Apps had to pass our review process. As of November 28, 2024, anyone who can create a LINE MINI App channel can now publish a LINE MINI App as an unverified MINI App without a review.

Our review process will continue to be carried out, and LINE MINI Apps that pass the review process will become verified MINI Apps. Check the following sections for the differences between unverified and verified MINI Apps:

::admonition
---
title: Creation of LINE MINI App channel (Added on December 5, 2024)
type: note
---
If your service area is Taiwan or Thailand, you can only create a LINE MINI App channel if you are approved by our local subsidiary. For more information, see [Overall Process](/docs/line-mini-app/quickstart/#overall-process) in the LINE MINI App documentation.
::

### What are unverified MINI Apps

Unverified MINI Apps are LINE MINI Apps that haven't yet passed our verification review. After you've created a LINE MINI App channel, the LINE MINI App will be an unverified MINI App until it passes the verification review.

Anyone can create an unverified MINI App, but as shown in the following section "[What are verified MINI Apps](#verified-mini-app-20241127-0600)", some features are restricted. To make your LINE MINI App a verified MINI App, [submit your LINE MINI App for review](/docs/line-mini-app/submit/submission-guide/).

### What are verified MINI Apps

If your LINE MINI App passes our verification review, it'll become a verified MINI App. Once it becomes a verified MINI App, it'll have a verified badge in the header, etc., as shown in the image below:

![](/media/news/2024/line-mini-app-header-after.png){className="[\"border\",\"w-fix-360\"]"}

::admonition
---
title: >-
  About an issue where the correct design isn't applied (Added on November 28,
  2024)
type: note
---
Currently, there's an issue occurring in the header of verified MINI Apps where the correct design isn't applied. This issue is scheduled to be fixed in LINE version 14.21.0, which will be distributed at a later date.
::

In addition, you'll be able to use such as the following features:

- [Add a shortcut to your LINE MINI App to the home screen of the user's device](/docs/line-mini-app/develop/add-to-home-screen/)
- [Configuring Custom Path](/docs/line-mini-app/develop/custom-path/)
- [Skipping the channel consent process](/docs/line-mini-app/develop/channel-consent-simplification/)

As described above, by making your LINE MINI App a verified MINI App, you can enhance the user experience in terms of reliability and convenience. For more information about the features that can be used for verified MINI Apps, see [Custom Features](/docs/line-mini-app/discover/custom-features/) in the LINE MINI App documentation.

### Date of change

November 27, 2024 - November 28, 2024

This change will be made between November 27 and 28, 2024, and some features may not work properly until the change is complete. We'll notify you again in this news when the change is complete.

::admonition
---
title: Delay in reflecting for some LINE MINI Apps
type: note
---
It's taking some time for some of the already published LINE MINI Apps to be reflected as verified MINI Apps. We apologize for any inconvenience.
::

### Notes on other changes

In line with these changes, the documentation provided on the LINE Developers site has also been updated. In addition, the user interface of the tabs and other parts of the LINE MINI App channel in the [LINE Developers Console](/console/) will also be changed. The tab names will be changed as follows:

| Before change | After change     |
| ------------- | ---------------- |
| LIFF          | Web app settings |
| Workflow      | Review request   |

Until the completion of the changes scheduled for November 28, 2024, there will be differences between the documentation and some of the content in the LINE Developers Console. Thank you for your understanding.
