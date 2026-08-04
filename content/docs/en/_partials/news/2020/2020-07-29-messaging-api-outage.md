---
title: '[Partially resolved] Notice of failure of some analytics APIs'
navigation: true
description: >-
  These problems occurred in the Messaging API, but it has been partially
  resolved. We apologize for any inconvenience caused to our customers.
meta: >-
  {"date":"2020-07-29 00:00 UTC","tags":"Outage report, Messaging
  API","locale":"en"}
path: /en/_partials/news/2020/2020-07-29-messaging-api-outage
__hash__: eJWnCtub-SOWIw9uSs1U1aSzQhIBCvvypiW0OJbmXWU
seo:
  title: '[Partially resolved] Notice of failure of some analytics APIs'
  description: >-
    These problems occurred in the Messaging API, but it has been partially
    resolved. We apologize for any inconvenience caused to our customers.
---

These problems occurred in the Messaging API, but it has been partially resolved. We apologize for any inconvenience caused to our customers.

### Date and time of outage

Issue 1: July 21, 2020 around 7:00 - 17:00 (UTC+9)

Issue 2: July 16, 2020 onwards (UTC+9)

### Situation

#### (Resolved) Issue 1

When premium and verified account users called the [Get number of followers](/reference/messaging-api/#get-number-of-followers) API endpoint, the endpoint returned an incorrect number of followers for July 21, 2020.

This issue is now resolved and you can get the correct number for July 21, 2020.

#### (Limitation) Issue 2

Some LINE Official Accounts (less than 0.5%) that used the [Get number of followers](/reference/messaging-api/#get-number-of-followers) API endpoint from July 16, 2020 to July 20, 2020 may have gotten incorrect numbers returned for `followers`, `targetedReaches`, and `blocks`.

The affected LINE Official Accounts may have had these issues:

- If you added friends during this period, they aren't added to the total amount of friends.
- The number of `followers` during this period is returned with less than the actual value.

For issue 2, the correct value can't be restored.

::admonition{title="Note" type="note"}
Neither issue has any effect on the total message delivery count.
::

We will continue to improve the quality of the services we provide to our developers and we greatly appreciate your understanding.
