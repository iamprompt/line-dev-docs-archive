---
title: The procedure for creating an Assertion Signing Key will be changed
navigation: true
description: >-
  The procedure for creating an Assertion Signing Key is scheduled to change in
  early May of 2021.
meta: >-
  {"date":"2021-04-01 00:00 UTC","tags":"Console, LINE Login, Messaging API,
  LINE MINI app, LINE Blockchain","locale":"en"}
path: /en/_partials/news/2021/2021-04-01-assertion-signing-key-flow-change
__hash__: N0QSA2zWUi5D6IyVTz0Mrp72b0G51IJqlQfcsToobSg
seo:
  title: The procedure for creating an Assertion Signing Key will be changed
  description: >-
    The procedure for creating an Assertion Signing Key is scheduled to change
    in early May of 2021.
---

The procedure for [creating an Assertion Signing Key](/docs/messaging-api/generate-json-web-token/#create-an-assertion-signing-key) is scheduled to change in early May of 2021.

::admonition
---
title: How it affects developers using Assertion Signing Keys
type: tip
---
This change affects developers who issue and use Assertion Signing Keys on the following [channels](/docs/line-developers-console/overview/#channel):

- LINE Login
- Messaging API
- LINE MINI App
- Blockchain Service

Review the details of the changes before making any changes.
::

### Overview

Currently, when you click the **Issue** button for the Assertion Signing Key in the [LINE Developers Console](/console/), a key pair (private key/public key) of the Assertion Signing Key is generated on LINE’s server side, and developers can download the private key. To increase the security of the Assertion Signing Key, we’ll change the issuing procedure as follows:

|                          | Before change                                                                                                                                                                                                                                                                                                                      | After change                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Issuing procedure**    | 1. Developer clicks the **Issue** button in the LINE Developers Console 2. A key pair for the Assertion Signing Key is generated on LINE’s server side 3. Developer downloads and saves the **private key**   * We only display the private key once when issued. LINE only stores the public key. We don't store the private key. | 1. Developer generates an Assertion Signing Key pair in their environment (PC or server) 2. Developer clicks the Assertion Signing Key's **Register a public key** button in the LINE Developers Console 3. Developer pastes **public key** into the form on the LINE Developers Console and clicks the **Register** button 4. Once developer succeeds in registering the public key, `kid` will be displayed in the LINE Developers Console |
| **Instructions for use** | Developer uses private key when issuing a [Channel access token v2.1](/reference/messaging-api/#issue-channel-access-token-v2-1).                                                                                                                                                                                                  | No change                                                                                                                                                                                                                                                                                                                                                                                                                                    |

You can continue using Assertion Signing Keys previously issued in the LINE Developer Console, even after the procedure changes.

### Estimated date of specification change

Early May 2021

We’ll announce the exact date and time as soon as possible. The contents and date of this specification change are subject to change without notice.

LINE will continue to improve the quality of its services for its customers. Thank you for your understanding.
