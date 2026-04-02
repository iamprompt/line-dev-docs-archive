---
title: Get Membership Plans
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-membership-plans
__hash__: g580Q2r5M_jDMkaiBiZX-ydOQ0WC-oDhIcqzn54ZNaU
seo:
  description: ''
---

### Get membership plans being offered

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/membership/list"}::reference-with-code
  :::reference-content
  You can get membership plans that are currently being offered through your LINE Official Account membership.

  Plans under review or plans that have been terminated aren't included in the response.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/membership/list \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

200 requests per second

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns status code `200` and a JSON object with the following properties.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      memberships

      #undefined
      Array

      An array of membership plans being offered.   

      Max number of plans: 5
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].membershipId

      #undefined
      Number

      Membership plan ID.
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].title

      #undefined
      String

      Membership plan name.
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].description

      #undefined
      String

      Membership plan description.
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].benefits

      #undefined
      Array of strings

      List of membership plan perks.   

      Max number of perks: 5
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].price

      #undefined
      Number

      Monthly fee for membership plan. (e.g. `1500.00`)
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].currency

      #undefined
      String

      The currency of `memberships[].price`. One of:

      - `JPY`: Japanese Yen
      - `TWD`: Taiwan Dollar
      - `THB`: Thai Baht
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].memberCount

      #undefined
      Number

      Number of members subscribed to the membership plan.
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].memberLimit

      #undefined
      Number

      The upper limit of members who can subscribe. If no upper limit is set, it will be `null`.
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].isInAppPurchase

      #undefined
      Boolean

      Payment method for users who subscribe to a membership plan.

      - `true`: In-app purchases
      - `false`: Browser payments
      :::::

      :::::parameter-table-entry
      #undefined
      memberships[].isPublished

      #undefined
      Boolean

      Membership plan status.

      - `true`: Public
      - `false`: Private (the plan has been discontinued and is no longer public, but still offers perks)
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      {
        "memberships": [
          {
            "membershipId": 3189,
            "title": "Basic Plan",
            "description": "You will receive messages and photos every Saturday.",
            "benefits": ["Members Only Messages", "Members Only Photos"],
            "price": 500.00,
            "currency": "JPY",
            "memberCount": 1,
            "memberLimit": null,
            "isInAppPurchase": true,
            "isPublished": true
          },
          {
            "membershipId": 3213,
            "title": "Premium Plan",
            "description": "Invitation to a special party.",
            "benefits": ["Members Only Party"],
            "price": 1500.00,
            "currency": "JPY",
            "memberCount": 0,
            "memberLimit": null,
            "isInAppPurchase": false,
            "isPublished": true
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  Returns the following HTTP status code and an error response:

  | Code  | Description                  |
  | ----- | ---------------------------- |
  | `404` | No membership plans offered. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Error response example*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // No membership plan offered (404 Not Found)
      {
        "message": "Membership plan not found"
      }
      ```
      :::::
    ::::
  :::
::
