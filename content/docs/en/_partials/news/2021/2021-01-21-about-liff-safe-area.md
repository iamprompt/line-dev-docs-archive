---
title: The handling of "Safe Areas" for LIFF apps and LINE MINI Apps will be stricter
navigation: true
description: >-
  Starting with LINE v11.0.0 for iOS and iPadOS, the handling of the "Safe Area"
  will be stricter.
meta: '{"date":"2021-01-21 00:00 UTC","tags":"LIFF","locale":"en"}'
path: /en/_partials/news/2021/2021-01-21-about-liff-safe-area
__hash__: yhvWOuq4P_0NHOi0QIHwwlGqBEp8q0Zyoom0tRe0SHY
seo:
  title: >-
    The handling of "Safe Areas" for LIFF apps and LINE MINI Apps will be
    stricter
  description: >-
    Starting with LINE v11.0.0 for iOS and iPadOS, the handling of the "Safe
    Area" will be stricter.
---

Starting with LINE v11.0.0 for iOS and iPadOS, the handling of the "Safe Area" will be stricter.

From now on, to display LIFF apps and LINE MINI Apps with the [screen size](/docs/liff/overview/#screen-size) set to `Full` in a layout that covers the entire display on devices with rounded corner displays such as iPhone X, specify `viewport-fit=cover` in the `<meta>` tag.

**"viewport-fit=cover" specification example**

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,viewport-fit=cover"
/>
```

However, due to a bug caused by the current version of iOS and iPadOS, the safe area won't be disabled in LINE v11.0.0 even if `viewport-fit=cover` is specified in the `<meta>` tag. We're planning to fix this issue in a future version of LINE.

::admonition
---
title: How to disable the Safe Area in LINE v11.0.0
type: tip
---
If you want to lay out the entire display in LINE v11.0.0, you can disable the Safe Area by specifying `viewport-fit=cover` and then specifying `height: 100vh` in the `<html>` tag in CSS.

```css
html {
  height: 100vh;
}
```
::

::admonition{title="What is a "Safe Area?"" type="tip"}
"Safe Area" in iOS and iPadOS refers to an area that can be safely laid out on devices with rounded corner displays, leaving a margin in the header/footer area. You can usually disable the safe area and lay out the entire display by specifying `viewport-fit=cover` in the `<meta>` tag in the HTML.

![safe area](/media/news/safe-area_en.png){className="[\"w-fix-600\"]"}

For more information about safe areas, see [Layout](https://developer.apple.com/design/human-interface-guidelines/layout){rel="[\"nofollow\"]"} on the Apple Developer site. ::
::
