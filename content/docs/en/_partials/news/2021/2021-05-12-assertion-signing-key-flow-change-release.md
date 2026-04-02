---
title: The procedure for issuing an assertion signing key has changed
navigation: true
description: >-
  As announced on April 1, 2021, the procedure for creating an Assertion Signing
  Key has changed.
meta: >-
  {"date":"2021-05-12 00:00 UTC","tags":"Console, LINE Login, Messaging API,
  LINE MINI app, LINE Blockchain","locale":"en"}
path: /en/_partials/news/2021/2021-05-12-assertion-signing-key-flow-change-release
__hash__: t6B9e5eAGOBIhteZF-naV1qbEJsvptMOpc_NTF_AxHc
seo:
  title: The procedure for issuing an assertion signing key has changed
  description: >-
    As announced on April 1, 2021, the procedure for creating an Assertion
    Signing Key has changed.
---

As announced on [April 1, 2021](/news/2021/04/01/assertion-signing-key-flow-change/), the procedure for creating an Assertion Signing Key has changed.

::admonition
---
title: How it affects developers using Assertion Signing Keys
type: tip
---
This change affects developers who issue and use Assertion Signing Keys on these [channels](/docs/line-developers-console/overview/#channel). Review the details of the changes.

- LINE Login
- Messaging API
- LINE MINI App
- Blockchain Service
::

### Overview

These changes have been made to the issuing procedure for safer use of the Assertion Signing Key.

|                          | Before change                                                                                                                                                                                                                                                                                                                         | After change (Current state)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Issuing procedure**    | 1. Developer clicks the **Issue** button in the LINE Developers Console. 2. A key pair for the Assertion Signing Key is generated on LINE’s server side. 3. Developer downloads and saves the **private key**.   * We only display the private key once when issued. LINE only stores the public key. We don't store the private key. | 1. Developer generates an Assertion Signing Key pair in their environment (PC or server). 2. Developer clicks the Assertion Signing Key's **Register a public key** button in the LINE Developers Console. 3. Developer pastes **public key** into the form in the LINE Developers Console and clicks the **Register** button. 4. Once developer succeeds in registering the public key, `kid` will be displayed in the LINE Developers Console. |
| **Instructions for use** | Developer uses private key when issuing a [Channel access token v2.1](/reference/messaging-api/#issue-channel-access-token-v2-1).                                                                                                                                                                                                     | No change                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Diagram for issuing a channel access token v2.1

This diagram shows these three steps:

- [Create an Assertion Signing Key](/docs/messaging-api/generate-json-web-token/#create-an-assertion-signing-key) (Step 1 in the diagram)
- [Generate a JWT](/docs/messaging-api/generate-json-web-token/#generate-jwt) (Step 6 in the diagram)
- [Issue channel access tokens v2.1](/docs/messaging-api/generate-json-web-token/#issue_a_channel_access_token_v2_1) (Step 7 in the diagram)

![Procedure for issuing channel access token](/media/messaging-api/channel-access-token/channel-access-token-issue-flow-en.svg){className="[\"w-fix-960\"]"}

For more information on the procedure of creating an Assertion Signing Key after the change, see [Create an Assertion Signing Key](/docs/messaging-api/generate-json-web-token/#create-an-assertion-signing-key) in the Messaging API documentation.

You can continue using Assertion Signing Keys previously issued in the LINE Developers Console even though the procedure has changed.

LINE will continue to improve the quality of the services we provide to our developers, and we greatly appreciate your understanding.
