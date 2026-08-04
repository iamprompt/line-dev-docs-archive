---
title: LIFF Versioning policy and life cycle have been released
navigation: true
description: >-
  We released the LIFF Versioning policy to clarify the purpose of each version
  of LIFF.

  We've also released the life cycle of each MAJOR version so that developers
  can make appropriate preparations for the version upgrade of LIFF.
meta: '{"date":"2020-05-08 00:00 UTC","tags":"LIFF","new":"false","locale":"en"}'
path: /en/_partials/news/2020/2020-05-08-liff-versioning-policy
__hash__: Ph3GX5422VIKHB5NUrNahDtAGn9ZdMVui_hV9RwJ7Ak
seo:
  title: LIFF Versioning policy and life cycle have been released
  description: >-
    We released the LIFF Versioning policy to clarify the purpose of each
    version of LIFF.

    We've also released the life cycle of each MAJOR version so that developers
    can make appropriate preparations for the version upgrade of LIFF.
---

We released the LIFF Versioning policy to clarify the purpose of each version of LIFF.
We've also released the life cycle of each MAJOR version so that developers can make appropriate preparations for the version upgrade of LIFF.

::admonition{title="Use the latest version of LIFF SDK" type="warning"}
[As announced on October 16, 2019](/news/2019/10/16/liff-v2-released/), LIFF v1 will be discontinued.
After discontinuation, you cannot open LIFF apps that used LIFF v1.

For more information about the MAJOR version life cycle and the dates when LIFF v1 will be discontinued, see [Life cycle of the LIFF SDK](/docs/liff/versioning-policy/#life-cycle) in the LIFF documentation.
::

### The LIFF Versioning policy

Beginning with LIFF v2.2.0, the version number of LIFF will follow the rules set by [Semantic Versioning](https://semver.org/){rel="[\"nofollow\"]"} (SemVer).

SemVer defines this version format:

`MAJOR.MINOR.PATCH`

For example, in `v1.2.3`, `1` is the MAJOR version, `2` is the MINOR version, and `3` is the PATCH version.

The [LIFF Versioning policy](/docs/liff/versioning-policy/) also explains the life cycle of the MAJOR version and provides an explanation for what each version (MAJOR, MINOR, PATCH) means for developers.

### LIFF SDK (sdk.js) update policy

Since the LIFF v2.1.13 release, we prepare these two types of CDN paths. When [Integrating the LIFF SDK into LIFF app](/docs/liff/developing-liff-apps/#integrating-sdk), specify the CDN path that suits your purpose.

| CDN path       | Description                                                                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CDN edge path  | This is a method to specify only the MAJOR version. You can always use the new version of the LIFF SDK without updating your LIFF app.   e.g.: [https]://static.line-scdn.net/liff/edge/**2**/sdk.js                                                                                                        |
| CDN fixed path | This is a method to specify up to the PATCH version. You can continue to use the specified PATCH version as long as you don't update the LIFF app. It is not updated automatically and is not affected by the LIFF SDK update.    e.g.: [https]://static.line-scdn.net/liff/edge/**versions/2.1.13**/sdk.js |

Example of specifying a CDN edge path:

```html
<script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
```

::admonition
---
title: The CDN path to maintain backwards compatibility
type: tip
---
In order to certify the behavior of the created LIFF app, we will continue to provide the LIFF SDK with the following CDN path.
The LIFF SDK available with this CDN path is the same version as the LIFF SDK available with the CDN edge path.

CDN path for backwards compatibility:   
[https]://static.line-scdn.net/liff/edge/**2.1**/sdk.js
::

::admonition{title="Note" type="note"}
The CDN path to maintain backwards compatibility may be discontinued regardless of [Life Cycle Schedule of the LIFF SDK](/docs/liff/versioning-policy/#life-cycle-schedule).
We recommend changing the CDN path specified in your LIFF app to the CDN edge path.

We will inform you as soon as the policy is decided.
::

Learn more about the [LIFF Versioning policy](/docs/liff/versioning-policy/) in the LIFF documentation.
