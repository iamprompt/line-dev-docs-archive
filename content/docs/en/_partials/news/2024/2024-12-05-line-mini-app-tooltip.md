---
title: LINE MINI Apps now display a tooltip for adding shortcuts to the home screen
navigation: true
description: >-
  Verified MINI Apps on LINE MINI Apps now display a tooltip for adding a
  shortcut to your LINE MINI App to the home screen.
meta: '{"date":"2024-12-05 00:00 UTC","tags":"line-mini-app","locale":"en"}'
path: /en/_partials/news/2024/2024-12-05-line-mini-app-tooltip
__hash__: euFeAbSXxYTjB9TRZPlpIYcIuNvtHsDJAbAJdGabyY8
seo:
  title: LINE MINI Apps now display a tooltip for adding shortcuts to the home screen
  description: >-
    Verified MINI Apps on LINE MINI Apps now display a tooltip for adding a
    shortcut to your LINE MINI App to the home screen.
---

Verified MINI Apps on LINE MINI Apps now display a tooltip for adding a shortcut to your LINE MINI App to the home screen.

This allows users to add a shortcut directly without having to tap the [action button](/docs/line-mini-app/discover/builtin-features/#action-button). The tooltip can also prompt your users to add a shortcut.

![The tooltip has a notice that says, “You can add this MINI App to your home screen.” and a button to add a shortcut to the home screen and a button to close the tooltip.](/media/news/2024/line-mini-app-header-tooltiop-en.png){className="[\"border\",\"w-fix-280\"]"}

For more information about shortcuts to your LINE MINI App, see [Add a shortcut to your LINE MINI App to the home screen of the user's device](/docs/line-mini-app/develop/add-to-home-screen/) in the LINE MINI App documentation.

### Target version

LINE version 14.20.0 or later for iOS or Android.

### Specifications

#### Conditions for displaying the tooltip

The tooltip will be displayed when all of the following conditions are met:

- Your LINE MINI App is a verified MINI App.
- A user accesses your LINE MINI App for the first time.
- A user's LINE app must be the [target version](#target-version-20241205).

#### Conditions for hiding the tooltip

The tooltip will be hidden in one of the following cases:

- When 24 hours have passed since the user first accessed your LINE MINI App.
- When the user closes the tooltip with the close button.
- When the user adds a shortcut to your LINE MINI App to the home screen.

Note that the tooltip will not be hidden even if the user operates the LINE MINI App by tapping somewhere other than the tooltip.
