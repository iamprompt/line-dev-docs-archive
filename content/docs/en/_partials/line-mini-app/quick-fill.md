---
title: Quick Fill
navigation: true
description: ''
meta: '{}'
path: /en/_partials/line-mini-app/quick-fill
__hash__: dxvGR6BqTeNhZabwME44vbJGcmj3Ln_m30FY3jBCzyc
seo:
  description: ''
---

## Common Profile Quick-fill

::admonition{title="Available only in verified MINI Apps" type="tip"}
To use Common Profile Quick-fill, your LINE MINI App must be verified and you must apply to use Quick-fill. For more information, see [Steps for using Quick-fill](/docs/line-mini-app/quick-fill/overview/#process).
::

Quick-fill is a feature that automatically fills in the necessary profile information by tapping the **Auto-fill** button on the LINE MINI App. You can easily use the Common Profile information that a user has set in the Account Center in the LINE MINI App. For more information, see [Overview of Common Profile Quick-fill](/docs/line-mini-app/quick-fill/overview/).

### liff.$commonProfile.get()

::reference-with-code
  :::reference-content
  Gets the information in the Common Profile that the user has set in the Account Center.

  When you execute the `liff.$commonProfile.get()` method, a modal will appear to confirm the user's profile. After confirming the profile in the displayed modal, the user can tap **Auto-fill** and the profile information will be entered automatically.

  Example of a modal display:

  ![](/media/line-mini-app/quick-fill/quick-fill-modal-screen.png){className="[\"bg-border\",\"w-fix-280\"]"}
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      const { data, error } = await liff.$commonProfile.get(
        ["family-name", "given-name", "email", "tel", "postal-code"],
        {
          formatOptions: {
            givenName: {
              excludeEmojis: false,
            },
            tel: {
              excludeNonJp: false,
            },
            postalCode: {
              digitsOnly: false,
            },
          },
        },
      );
      console.log(data);
      console.log(error);
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.$commonProfile.get(scopes, options);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  scopes

  #undefined
  Array of strings

  Specify the scope of the Common Profile you want to obtain.

  For information on the values that can be specified for `scopes`, see [The `scopes` parameters that can be specified and its return value](/docs/line-mini-app/quick-fill/overview/#common-profile-scope).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options

  #undefined
  Object

  Options for getting Common Profile information
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options.formatOptions

  #undefined
  Object

  Options related to the format of information. Specify a [`formatOptions` object](#get-common-profile-format-options) for each scope specified in the `scopes` property.

  Specify the scope for which you want to set the option in camel case format as the key. For example, when the scope is `given-name`, the key is `givenName`.
  :::
::

#### `formatOptions` object

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{optional=""}
      #undefined
      excludeEmojis

      #undefined
      Boolean

      Whether to remove emojis from the string. The default is `true`. This can only be specified in the following scopes:

      - givenName
      - familyName
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      excludeNonJp

      #undefined
      Boolean

      Whether to exclude phone numbers with 12 or more digits. The default is `true`. If `true`, an empty string and error information are returned when the phone number has 12 or more digits. This can only be specified in the following scope:

      - tel
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      digitsOnly

      #undefined
      Boolean

      Whether to exclude postal codes that contain non-numeric characters. The default is `true`. If `true`, an empty string and error information are returned when the postal code contains characters other than numbers. This can only be specified in the following scope:

      - postalCode
      :::::
    ::::
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      {
        givenName: {
          excludeEmojis: false,
        },
        tel: {
          excludeNonJp: false,
        },
        postalCode: {
          digitsOnly: false,
        },
      }
      ```
      :::::
    ::::
  :::
::

#### Return value

::reference-with-code
  :::reference-content
  Returns `Promise` object of type `{ data: Partial<CommonProfile>, error: Partial<CommonProfileError>}`.

  When `Promise` is resolved, an object of type `Partial<CommonProfile>` containing the user's Common Profile information is passed to the `data` property, and an object of type `Partial<CommonProfileError>` containing error information is passed to the `error` property.

  In the following cases, the property of `data` will be `undefined` or `null`:

  - Cases where the property value becomes `undefined`
    - If the target item isn't specified in the `scopes` parameter
    - If the target item is specified in the `scopes` parameter, but the user doesn't authorized permission for that item
  - Cases where the property value becomes `null`
    - If the user hasn't set a value for the target item in the Common Profile
    - If an error occurs when retrieving the target item in the Common Profile

  For information on the values of the properties that can be obtained according to the specified `scopes`, see [The `scopes` parameters that can be specified and its return value](/docs/line-mini-app/quick-fill/overview/#common-profile-scope).
  :::

  :::reference-code
  *Example of an object of type `Partial<CommonProfile>`*

    ::::code-tabs
      :::::tab{lang="json"}
      ```javascript
      {
        "family-name": "Yamada",
        "given-name": "Taro",
        "email": "sample@example.com",
        "tel": "09001234567",
        "postal-code": "1020094"
      }
      ```
      :::::
    ::::

  *Example of an object of type `Partial<CommonProfileError>`*

    ::::code-tabs
      :::::tab{lang="json"}
      ```javascript
      {
        "tel": ["Phone number has 12 or more digits"],
        "postal-code": ["Postal code contains non-numeric characters"]
      }
      ```
      :::::
    ::::
  :::
::

#### Error response

::reference-with-code
  :::reference-content
  When the `Promise` is rejected, [`LiffError`](/reference/liff/#liff-errors) is passed.
  :::

  :::reference-code
  *Example of calling the API without installing the plugin correctly*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      new Error(
        "LiffCommonProfilePlugin isn't installed properly. Did you call liff.use(new LiffCommonProfilePlugin()) before using it?"
      );
      ```
      :::::
    ::::

  *Example of API being called in a browser other than LIFF browser*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      new Error("liff.$commonProfile API is available only in LIFF browser.");
      ```
      :::::
    ::::
  :::
::

### liff.$commonProfile.getDummy()

::reference-with-code
  :::reference-content
  Gets the dummy data for the Common Profile. There are 10 types of dummy data available, and you can specify the dummy data to get using the `caseId`.

  When you execute the `liff.$commonProfile.getDummy()` method, a modal will appear to confirm the dummy profile. You can get dummy data for the Common Profile by tapping **Auto-fill**.

  Example of a modal display:

  ![](/media/line-mini-app/quick-fill/quick-fill-dummy-modal-screen.png){className="[\"bg-border\",\"w-fix-280\"]"}
  :::

  :::reference-code
  *Example*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      const { data, error } = await liff.$commonProfile.getDummy(
        ["family-name", "given-name", "email", "tel", "postal-code"],
        {
          formatOptions: {
            givenName: {
              excludeEmojis: false,
            },
            tel: {
              excludeNonJp: false,
            },
            postalCode: {
              digitsOnly: false,
            },
          },
        },
        1,
      );
      console.log(data);
      console.log(error);
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.$commonProfile.getDummy(scopes, options, caseId);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  scopes

  #undefined
  Array of strings

  Specify the scope of the Common Profile you want to obtain.

  For information on the values that can be specified for `scopes`, see [The `scopes` parameters that can be specified and its return value](/docs/line-mini-app/quick-fill/overview/#common-profile-scope).
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options

  #undefined
  Object

  Options for getting Common Profile information
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options.formatOptions

  #undefined
  Object

  Options related to the format of information. Specify a [`formatOptions` object](#get-common-profile-format-options) for each scope specified in the `scopes` property.

  Specify the scope for which you want to set the option in camel case format as the key. For example, when the scope is `given-name`, the key is `givenName`.
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  caseId

  #undefined
  number

  Specify the ID of the dummy data you want to get. Dummy data with IDs from `1` to `10` is available.

  For information about dummy data for each `caseId`, see [Dummy data for Common Profile that can be obtained](/docs/line-mini-app/quick-fill/overview/#get-dummy-common-profile).
  :::
::

#### Return value

::reference-with-code
  :::reference-content
  Returns `Promise` object of type `{ data: Partial<CommonProfile>, error: Partial<CommonProfileError>}`.

  When `Promise` is resolved, an object of type `Partial<CommonProfile>` containing the dummy data of the Common Profile is passed to the `data` property, and an object of type `Partial<CommonProfileError>` containing error information is passed to the `error` property.

  In the following cases, the property of `data` will be `undefined` or `null`:

  - Cases where the property value becomes `undefined`
    - If the target item isn't specified in the `scopes` parameter
  - Cases where the property value becomes `null`
    - If the dummy data doesn't have a value for the target item

  For information on the dummy data you can get for the specified ID, see [Dummy data for Common Profile that can be obtained](/docs/line-mini-app/quick-fill/overview/#get-dummy-common-profile).
  :::

  :::reference-code
  *Example of an object of type `Partial<CommonProfile>`*

    ::::code-tabs
      :::::tab{lang="json"}
      ```javascript
      {
        "family-name": "見本田",
        "given-name": "見本夫",
        "family-name-kana": "ダミータ",
        "given-name-kana": "ダミーオ",
        "sex-enum": 0,
        "bday-day": 12,
        "bday-month": 3,
        "bday-year": 1998,
        "tel": "09001234567",
        "email": "dummy_39@yahoo.co.jp",
        "postal-code": "1020094",
        "address-level1": "東京都",
        "address-level2": "千代田区",
        "address-level3": "紀尾井町1-2",
        "address-level4": "東京ガーデンテラス紀尾井町"
      }
      ```
      :::::
    ::::

  *Example of an object of type `Partial<CommonProfileError>`*

    ::::code-tabs
      :::::tab{lang="json"}
      ```javascript
      {
        "tel": ["Phone number has 12 or more digits"],
        "postal-code": ["Postal code contains non-numeric characters"]
      }
      ```
      :::::
    ::::
  :::
::

##### Error response

::reference-with-code
  :::reference-content
  When the `Promise` is rejected, [`LiffError`](/reference/liff/#liff-errors) is passed.
  :::

  :::reference-code
  *Example of calling the API without installing the plugin correctly*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      new Error(
        "LiffCommonProfilePlugin isn't installed properly. Did you call liff.use(new LiffCommonProfilePlugin()) before using it?"
      );
      ```
      :::::
    ::::

  *Example of API being called in a browser other than LIFF browser*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      new Error("liff.$commonProfile API is available only in LIFF browser.");
      ```
      :::::
    ::::
  :::
::

### liff.$commonProfile.fill()

::reference-with-code
  :::reference-content
  Automatically fills the form with the Common Profile information you have obtained. The `data-liff-autocomplete` attribute is used to link each profile information to the form.

    ::::admonition
    ---
    title: Automatically filling that doesn't match the scope
    type: tip
    ---
    Automatic input using `liff.$commonProfile.fill()` is performed using the `data-liff-autocomplete` attribute of the form. At this time, the value specified in the `data-liff-autocomplete` attribute of the form must match the scope of the profile information obtained (`family-name`, `tel`, `bday-year`, etc.)

    For example, if you want to automatically fill in a form after retrieving the year of birth (`bday-year`), month of birth (`bday-month`), and day of birth (`bday-day`) information and then process it into a format like `20110623`, you can use `document.getElementById().value` or `document.querySelector().value` instead of `liff.$commonProfile.fill()`.
    ::::
  :::

  :::reference-code
  *Example of automatically filling the family name, phone number, and gender as they were obtained*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // HTML
      <input type="text" data-liff-autocomplete="family-name" />
      <input type="tel" data-liff-autocomplete="tel" />
      <select data-liff-autocomplete="sex-enum">
        <option value="0">男性</option>
        <option value="1">女性</option>
        <option value="2">回答なし</option>
        <option value="3">その他</option>
      </select>

      // JavaScript
      const { data, error } = await liff.$commonProfile.get([
        "family-name",
        "tel",
        "sex-enum",
      ]);

      liff.$commonProfile.fill(data);
      ```
      :::::
    ::::

  *Example of automatically filling some of the common profile information that has been obtained in a slightly different format*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // HTML
      <input type="text" data-liff-autocomplete="bday-year" />
      <input type="text" data-liff-autocomplete="bday-month" />
      <input type="text" data-liff-autocomplete="bday-day" />

      // JavaScript
      const { data, error } = await liff.$commonProfile.get([
        "bday-year",
        "bday-month",
        "bday-day",
      ]);

      const year = data["bday-year"];
      const month = data["bday-month"];
      const day = data["bday-day"];

      // If the month or day is one digit, pad with 0s to
      const formattedMonth = month.toString().padStart(2, '0');
      const formattedDay = day.toString().padStart(2, '0');

      // Automatically fills the value after processing
      liff.$commonProfile.fill({
        "bday-year": year,
        "bday-month": formattedMonth,
        "bday-day": formattedDay,
      });
      ```
      :::::
    ::::
  :::
::

#### Syntax

```javascript
liff.$commonProfile.fill(profile);
```

#### Arguments

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  profile

  #undefined
  Partial<CommonProfile>

  Specify the profile information that is automatically fill into the form as a `Partial<CommonProfile>` type.

  For information on the `scopes`, that can be specified, see [The `scopes` parameters that can be specified and its return value](/docs/line-mini-app/quick-fill/overview/#common-profile-scope).
  :::
::

#### Return value

None
