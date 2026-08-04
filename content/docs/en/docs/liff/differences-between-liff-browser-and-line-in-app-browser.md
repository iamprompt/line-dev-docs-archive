---
title: The differences between LIFF browser and LINE's in-app browser
navigation: true
description: ''
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"en"}'
path: /en/docs/liff/differences-between-liff-browser-and-line-in-app-browser
__hash__: 4bN_VRehCv29uRxj2W07F1eKAZsOlUJYN9wMHki0b8s
seo:
  title: The differences between LIFF browser and LINE's in-app browser
  description: ''
---

# :page-title

:markdown-controlsWhen you open a LIFF app within the LINE app, the LIFF app will open in either the :glossary-tooltip[[LIFF browser](/glossary/#liff-browser)]{glossary-id="liff-browser"} or :glossary-tooltip[[LINE's in-app browser](/glossary/#line-iab)]{glossary-id="line-iab"}. The LIFF browser and LINE's in-app browser are different browsers, and some LIFF app features are only available in the LIFF browser.

This page explains how to identify whether a browser is the LIFF browser or LINE's in-app browser and the differences in available features.

:toc## LIFF browser

A browser dedicated to LIFF apps. When you open a LIFF app using the following ways, the LIFF app will open in the LIFF browser:

- Tap the ::glossary-tooltip{glossary-id="liff-url"}
[LIFF URL](/glossary/#liff-url)
::

 in a chat room of the LINE app.
- Tap the LIFF URL in an external browser.

## LINE's in-app browser

A browser dedicated to use within the LINE app. When you open a LIFF app using the following way, the LIFF app will open in LINE's in-app browser:

- Tap the endpoint URL of the LIFF app in a chat room of the LINE app.

Note that in LIFF, LINE's in-app browser is treated as a type of external browser. For example if you execute the [`liff.getContext()`](/reference/liff/#get-context) method in LINE's in-app browser, the value of the `type` property in the return value will be `external` (external browser).

## Identify whether a browser is the LIFF browser or LINE's in-app browser

There are two ways to identify whether the browser running a LIFF app is the LIFF browser or LINE's in-app browser:

- [Identify from the user interface](#identify-from-ui)
- [Identify using the `liff.isInClient()` method](#identify-using-liff-is-in-client)

### Identify from the user interface

The interface of headers and footers differs between the LIFF browser and LINE's in-app browser. Therefore, you can identify whether a browser is the LIFF browser or LINE's in-app browser by checking the user interface of the browser where a LIFF app is open.

| LIFF browser                                                                                                                                                                                                                                         | LINE's in-app browser                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](/media/liff/differences-between-liff-browser-and-line-in-app-browser/liff-browser.png){className="[\"border\",\"w-fix-360\"]"}- Header   - Minimizing button is :b[not present]   - Action button is :b[present] (*) - Footer is :b[not present] | ![](/media/liff/differences-between-liff-browser-and-line-in-app-browser/line-in-app-browser.png){className="[\"border\",\"w-fix-360\"]"}- Header   - Minimizing button is :b[present]   - Action button is :b[not present] - Footer is :b[present] |

* The action button isn't displayed in module mode. For more information, see [Adding the LIFF app to your channel](/docs/liff/registering-liff-apps/#registering-liff-app).

### Identify using the `liff.isInClient()` method

You can identify whether a browser is the LIFF browser using the `liff.isInClient()` method. For more information, see [liff.isInClient()](/reference/liff/#is-in-client) in the LIFF API reference.

## The differences in features available between the LIFF browser and LINE's in-app browser

The differences in features available between the LIFF browser and LINE's in-app browser are as follows:

| Feature                                                                                                                                 | LIFF browser | LINE's in-app browser |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------- |
| Specifying the [view size](/docs/liff/overview/#screen-size)                                                                            | ✅            | ❌                     |
| [Action button](/docs/liff/overview/#action-button)                                                                                     | ✅            | ❌                     |
| [Multi-tab view](/docs/liff/overview/#multi-tab-view)                                                                                   | ✅            | ❌                     |
| [2D code reader](/docs/liff/developing-liff-apps/#opening-two-dimensional-code-reader)                                                  | ✅            | ❌                     |
| [Sending messages to the chat room](/docs/liff/developing-liff-apps/#sending-messages)                                                  | ✅            | ❌                     |
| [Share target picker](/docs/liff/developing-liff-apps/#share-target-picker)                                                             | ✅            | ❌                     |
| [Popup display when navigating to an external site that isn't a LIFF app](/docs/liff/developing-liff-apps/#transition-to-external-site) | ✅            | ❌                     |
| [LIFF-to-LIFF transition](/docs/liff/opening-liff-app/#move-liff-to-liff)                                                               | ✅            | ❌                     |

✅: Available  
❌: Not available
