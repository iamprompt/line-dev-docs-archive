---
title: I18n Set Lang
navigation: true
description: ''
meta: '{}'
path: /en/_partials/liff-v2/i18n-set-lang
__hash__: B6OYN0KwoZdLCOGNc0O4NYvd1DKiqJjj5o_ng8TZpJ4
seo:
  description: ''
---

### liff.i18n.setLang()

::reference-with-code
  :::reference-content
  Specify the language of the text displayed by the LIFF SDK.
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      liff.i18n.setLang("en");
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.i18n.setLang(language);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  language

  #undefined
  String

  Language tag as defined in [RFC 5646 (BCP 47)](https://datatracker.ietf.org/doc/html/rfc5646){rel="[\"nofollow\"]"}. If there is no translation for the specified language tag, `en` is used as a fallback.
  :::
::

#### Return value

Returns a `Promise` object.

##### Error response

When the `Promise` is rejected, [`LiffError`](#liff-errors) is passed.
