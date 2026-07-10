---
title: Get Audience Group
navigation: true
description: ''
meta: '{}'
path: /en/_partials/messaging-api/get-audience-group
__hash__: kM2Qtg4L-_0-pUcs-PbWy7wgM-dyQq_hiNnDbklazyo
seo:
  description: ''
---

### Get audience data

:api-endpoint{protocol="get" endpoint="https://api.line.me/v2/bot/audienceGroup/{audienceGroupId}"}::reference-with-code
  :::reference-content
  Gets audience data.
  :::

  :::reference-code
  *Example request*

    ::::code-tabs
      :::::tab{lang="shell"}
      ```sh
      curl -v -X GET https://api.line.me/v2/bot/audienceGroup/{audienceGroupId} \
      -H 'Authorization: Bearer {channel access token}'
      ```
      :::::
    ::::
  :::
::

#### Rate limit

60 requests per minute

For more information on rate limits, see [Rate limits](#rate-limits).

#### Request headers

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  Authorization

  Bearer `{channel access token}`
  :::
::

#### Path parameters

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  audienceGroupId

  The audience ID.
  :::
::

#### Response

::reference-with-code
  :::reference-content
  Returns a `200` HTTP status code and a JSON object with the following information.

    ::::parameter-table
      :::::parameter-table-entry
      #undefined
      audienceGroup

      #undefined
      Object

      Audience group object.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.audienceGroupId

      #undefined
      Number

      The audience ID.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.createRoute

      #undefined
      String

      How the audience was created. One of:

      - `OA_MANAGER`: Audience created with [LINE Official Account Manager](https://manager.line.biz/){rel="[\"nofollow\"]"}
      - `MESSAGING_API`: Audience created with Messaging API
      - `POINT_AD`: Audience created with [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (Japanese only)
      - `AD_MANAGER`: Audience created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"}
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.type

      #undefined
      String

      The audience type. One of:

      - `UPLOAD`: An audience used for uploading user IDs
      - `CLICK`: Message click audience
      - `IMP`: Message impression audience
      - `CHAT_TAG`: Chat tag audience
      - `FRIEND_PATH`: Friend path audience
      - `RESERVATION`: Reservation audience
      - `RICHMENU_IMP`: Rich menu impression audience
      - `RICHMENU_CLICK`: Rich menu click audience
      - `APP_EVENT`: App event audience
      - `VIDEO_VIEW`: Video view audience
      - `WEBTRAFFIC`: Web traffic audience (LINE Tag)
      - `TRACKINGTAG_WEBTRAFFIC`: Web traffic audience (Tracking Tag)
      - `IMAGE_CLICK`: Image click audience
      - `POP_AD_IMP`: LINE Beacon Network ad impression audience

      For more information, see the [Audience](https://www.lycbiz.com/jp/manual/OfficialAccountManager/messages-audience/){rel="[\"nofollow\"]"} page on LINE for Business. This page isn't currently available in English.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.description

      #undefined
      String

      The audience's name.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.status

      #undefined
      String

      The audience's status. One of:

      - `IN_PROGRESS`: Pending. It may take several hours for the status to change to `READY`. If the number of users included in the audience is insufficient (at least 50 are required) for an audience with a user count restriction, the status will remain `IN_PROGRESS` and won't be updated.
      - `READY`: Ready to accept messages (*).
      - `FAILED`: An error occurred while creating the audience.
      - `EXPIRED`: Expired. Audiences are automatically deleted a month after they expire.
      - `INACTIVE`: The audience is inactive.
      - `ACTIVATING`: The audience is activating.

      * For an audience for uploading user IDs, after you add user IDs or IFAs to an audience whose `audienceGroup.status` is `READY`, the status remains `READY`. If you want to send messages to the users including the added target recipients, confirm that `jobs[].jobStatus` for the relevant job is `FINISHED`.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.audienceCount

      #undefined
      Number

      The number of users included in the audience. To protect the users' privacy, 0 is returned when it is less than 20, unless the audience type is one of the following:

      - An audience used for uploading user IDs (in case of recipients being specified by their user IDs)
      - Chat tag audience

      Since the audience may include users who have already blocked LINE Official Account, the value of `audienceGroup.audienceCount` and the number of users to whom messages will be sent will differ.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.created

      #undefined
      Number

      When the audience was created in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.permission

      #undefined
      String

      Update permissions for the audience. Returns `READ_WRITE` if the current Messaging API channel can update the target audience, or `READ` if it can't.

      - `READ`: Can use, but can't update the audience.
      - `READ_WRITE`: Can use and update the audience.
      :::::

      :::::parameter-table-entry
      #undefined
      audienceGroup.isIfaAudience

      #undefined
      Boolean

      The value indicating the type of account to be sent, as specified when creating the audience for uploading user IDs. One of:

      - `true`: Accounts are specified with IFAs.
      - `false` (default): Accounts are specified with user IDs.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.requestId

      #undefined
      String

      The request ID that was specified when the audience was created. This is only included when `audienceGroup.type` is `CLICK` or `IMP`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.clickUrl

      #undefined
      String

      The URL that was specified when the audience was created. This is only included when `audienceGroup.type` is `CLICK` and link URL is specified.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.failedType

      #undefined
      String

      The reason why the operation failed. This is only included when `audienceGroup.status` is `FAILED`. One of:

      - `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Insufficient number of users included in the audience (at least 50 are needed)
      - `INTERNAL_ERROR`: Internal server error
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.activated

      #undefined
      Number

      Time the audience was activated. Only returned for audiences created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"} or [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (Japanese only).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.inactivatedTimestamp

      #undefined
      Number

      Time of audience inactivation. Only returned for audiences created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"} or [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (Japanese only).
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      audienceGroup.expireTimestamp

      #undefined
      Number

      Audience expiration time in UNIX time (in seconds). Only returned for specific audiences.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs

      #undefined
      Array

      An array of jobs. This array is used to keep track of each attempt to add new user IDs or IFAs to an audience for uploading user IDs. Empty array is returned for any other type of audience.  
      Max: 50
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceGroupJobId

      #undefined
      Number

      A job ID.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceGroupId

      #undefined
      Number

      An audience ID.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].description

      #undefined
      String

      The job's description. If you don't specify a value with the `uploadDescription` property when adding a user ID or IFA, `null` will be returned.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].type

      #undefined
      String

      The job's type. One of:

      - `DIFF_ADD`: Indicates that a user ID or IFA was added via the Messaging API.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].status

      #undefined
      String

      This property is deprecated. See `jobs[].jobStatus` for the status of jobs.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].failedType

      #undefined
      String

      The reason why the operation failed. This is only included when `jobs[].jobStatus` is `FAILED`. One of:

      - `AUDIENCE_GROUP_AUDIENCE_INSUFFICIENT`: Insufficient number of users included in the audience (at least 50 are needed)
      - `INTERNAL_ERROR`: Internal server error

      If `jobs[].jobStatus` isn't `FAILED`, `null` is returned.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].audienceCount

      #undefined
      Number

      The number of accounts (recipients) that were added or removed.
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].created

      #undefined
      Number

      When the job was created in UNIX time (in seconds).
      :::::

      :::::parameter-table-entry
      #undefined
      jobs[].jobStatus

      #undefined
      String

      The job's status. One of:

      - `QUEUED`: Waiting to run
      - `WORKING`: Running
      - `FINISHED`: Completed
      - `FAILED`: Failed

      Jobs whose status is `QUEUED` or `WORKING` haven't completed the process of adding user IDs or IFAs. If you want to send messages to the users including the added target recipients, confirm that `jobs[].jobStatus` for the relevant job is `FINISHED`.
      :::::

      :::::parameter-table-entry{annotation="Not always included"}
      #undefined
      adaccount

      #undefined
      Object

      Ad account object. Only returned for audiences created with [LINE Ads](https://admanager.line.biz/){rel="[\"nofollow\"]"} or [LINE Points Ads](https://www.lycbiz.com/jp/service/line-point-ad/){rel="[\"nofollow\"]"} (Japanese only).
      :::::

      :::::parameter-table-entry
      #undefined
      adaccount[].name

      #undefined
      String

      Name of the ad account that created the shared audience.
      :::::
    ::::
  :::

  :::reference-code
  *Example response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // Example of an audience used for uploading user IDs
      {
          "audienceGroup": {
              "audienceGroupId": 1234567890123,
              "createRoute": "OA_MANAGER",
              "type": "UPLOAD",
              "description": "audienceGroupName_01",
              "status": "READY",
              "audienceCount": 1887,
              "created": 1608617466,
              "permission": "READ",
              "isIfaAudience": false,
              "expireTimestamp": 1624342266
          },
          "jobs": [
              {
                  "audienceGroupJobId": 12345678,
                  "audienceGroupId": 1234567890123,
                  "description": "audience_list.txt",
                  "type": "DIFF_ADD",
                  "status": "FINISHED",
                  "failedType": null,
                  "audienceCount": 0,
                  "created": 1608617472,
                  "jobStatus": "FINISHED"
              }
          ]
      }

      // Example of a message click audience
      {
          "audienceGroup": {
              "audienceGroupId": 1234567890987,
              "createRoute": "OA_MANAGER",
              "type": "CLICK",
              "description": "audienceGroupName_02",
              "status": "IN_PROGRESS",
              "audienceCount": 8619,
              "created": 1611114828,
              "permission": "READ",
              "isIfaAudience": false,
              "expireTimestamp": 1626753228,
              "requestId": "c10c3d86-f565-...",
              "clickUrl": "https://example.com/"
          },
          "jobs": []
      }

      // Example of an audience used for app events
      {
          "audienceGroup": {
              "audienceGroupId": 2345678909876,
              "createRoute": "AD_MANAGER",
              "type": "APP_EVENT",
              "description": "audienceGroupName_03",
              "status": "READY",
              "audienceCount": 8619,
              "created": 1608619802,
              "permission": "READ",
              "activated": 1610068515,
              "inactiveTimestamp": 1625620516,
              "isIfaAudience": false
          },
          "jobs": [],
          "adaccount": {
              "name": "Ad Account Name"
          }
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

  | Code  | Description                           |
  | ----- | ------------------------------------- |
  | `400` | A non-existent audience is specified. |

  For more information, see [Status codes](#status-codes) and [Error responses](#error-responses) in the [Common specifications](#common-specifications) section.
  :::

  :::reference-code
  *Example error response*

    ::::code-tabs
      :::::tab{lang="json"}
      ```json
      // If you specify a non-existent audience (400 Bad Request)
      {
        "message": "audience group not found",
        "details": [
          {
            "message": "AUDIENCE_GROUP_NOT_FOUND"
          }
        ]
      }
      ```
      :::::
    ::::
  :::
::
