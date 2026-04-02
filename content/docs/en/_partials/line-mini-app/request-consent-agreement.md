---
title: Request Consent Agreement
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/request-consent-agreement
__hash__: upvcJly4AAA83_30UixaAk1FN4NKQMnIl9FkjRxHAwE
seo:
  description: ''
---

### liff.iap.requestConsentAgreement()

Requests user consent for the [Terms of Use: LINE In-App Purchase System](https://terms.line.me/line_iap_tou_1?lang=en){rel="[\"nofollow\"]"}.

If the user has not yet agreed to the "Terms of Use: LINE In-App Purchase System" or if new consent is required, a consent screen will be displayed.

::admonition{title="Always check the latest consent status" type="tip"}
If the [Terms of Use: LINE In-App Purchase System](https://terms.line.me/line_iap_tou_1?lang=en){rel="[\"nofollow\"]"} are updated, re-consent will be required. Before starting in-app purchase, be sure to call this method to check the latest consent status.
::

#### Syntax

```javascript
await liff.iap.requestConsentAgreement();
```

#### Arguments

None

#### Return value

A `Promise` object is returned.

- Resolves if the user agrees.
- Rejects with an error object if the user doesn't agree, or if the operation fails due to a network issue, a problem on the user's device, or an internal error on the LINE Platform.

#### Error response

::reference-with-code
  :::reference-content
  When the `Promise` is rejected, a [`LiffError`](/reference/liff/#liff-error-object) is passed.

  Possible errors include the following:

  | Error message                                      | Description                                                                                                                                     |
  | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
  | The user did not agree to the terms.               | The user did not agree to the [Terms of Use: LINE In-App Purchase System](https://terms.line.me/line_iap_tou_1?lang=en){rel="[\"nofollow\"]"} . |
  | Need access_token for api call, Please login first | The user is not logged in.                                                                                                                      |
  | In-App Purchase is not allowed in external browser | The method was executed in an external browser.                                                                                                 |
  | In-App Purchase is not allowed in this LIFF app    | The LINE MINI App being run by the user does not support in-app purchase.                                                                       |
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "code": "TERMS_AGREEMENT_ERROR",
        "message": "The user did not agree to the terms."
      }
      ```
      :::::
    ::::
  :::
::
