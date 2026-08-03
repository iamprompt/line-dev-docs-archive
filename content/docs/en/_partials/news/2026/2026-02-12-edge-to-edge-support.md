---
title: >-
  Starting on 9 March 2026, edge-to-edge support in the Android version of LINE
  will affect the layout
navigation: true
description: >-
  Starting March 9, 2026, Edge-to-edge will be applied to the Android version of
  LINE.
meta: '{"date":"2026-02-12 01:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2026/2026-02-12-edge-to-edge-support
__hash__: DP3KK_JUkyi8KJ1DeSgRyxIaVW9nRjKCKb3NIchd85Y
seo:
  title: >-
    Starting on 9 March 2026, edge-to-edge support in the Android version of
    LINE will affect the layout
  description: >-
    Starting March 9, 2026, Edge-to-edge will be applied to the Android version
    of LINE.
---

Starting March 9, 2026, [Edge-to-edge](https://developer.android.com/develop/ui/views/layout/edge-to-edge){rel="[\"nofollow\"]"} will be applied to the Android version of LINE.

This may cause buttons and content placed at the bottom of LIFF apps and LINE MINI Apps to overlap with the navigation bar area, potentially impairing usability and visibility. Therefore, we ask developers to check for potential impacts and take necessary actions in advance.

### Specification change date

March 9, 2026 (UTC+9)

### Target versions

LINE version 26.3.0 or later for Android

### Affected LIFF apps/LINE MINI Apps

All LIFF apps and LINE MINI Apps are affected. Also, all of the [Size of the LIFF browser](/docs/liff/overview/#screen-size)—`Full`, `Tall`, and `Compact`—are affected.

### Specification changes

Google provides [Edge-to-edge enforcement](https://developer.android.com/about/versions/15/behavior-changes-15#edge-to-edge){rel="[\"nofollow\"]"} for all apps on Android 15 and later. Accordingly, the Android version of the LINE app will also support edge-to-edge, which will affect LIFF apps and LINE MINI Apps as follows:

| Navigation type    | Before (Current)                                         | After                                            |
| ------------------ | -------------------------------------------------------- | ------------------------------------------------ |
| Gesture navigation | WebView area extends up to the top of gesture navigation | WebView area extends to the bottom of the screen |

The WebView area remains unchanged in the status bar at the top of the screen.

### Impact and requests

This change may cause buttons and content placed at the bottom of LIFF apps and LINE MINI Apps to overlap with the navigation bar area, potentially impairing usability and visibility.

Developers providing LIFF apps and LINE MINI Apps are requested to check the following points by the specification change date:

- Ensure that elements at the bottom of the screen don't obstruct operation
- If necessary, use `safe-area-inset-bottom` to control content that should not overlap with the gesture navigation area

#### CSS example for handling the navigation area

For environments with WebView version 144 or later, use `safe-area-inset-bottom`. For environments with WebView version earlier than 144, use `--android-safe-area-inset-bottom` as a fallback.

```css
margin-bottom: var(
  --android-safe-area-inset-bottom,
  env(safe-area-inset-bottom)
);
```

When the device is in landscape orientation, the behavior remains unchanged. The left and right `safe-area-inset` and `--android-safe-area-inset` values will always be set to 0.

We'll continue to work to further improve our service to our customers. Thank you for your understanding.
