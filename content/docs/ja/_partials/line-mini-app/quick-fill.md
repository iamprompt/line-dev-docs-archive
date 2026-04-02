---
title: Quick Fill
navigation: true
description: ''
meta: '{}'
path: /ja/_partials/line-mini-app/quick-fill
__hash__: 7_ZMv9AGoAjQgtDGCnNH7s4N5rG-swyQKZonU9LdoKw
seo:
  description: ''
---

## 共通プロフィールのクイック入力

::admonition{title="認証済ミニアプリでのみ利用できます" type="tip"}
共通プロフィールのクイック入力を利用するには、LINEミニアプリが認証済みであり、かつクイック入力の利用申請を行う必要があります。詳しくは、「[クイック入力の利用手順](/docs/line-mini-app/quick-fill/overview/#process)」を参照してください。
::

クイック入力とは、LINEミニアプリ上で［**自動入力**］をタップすることで、必要なプロフィール情報が自動で入力される機能です。ユーザーがアカウントセンターで設定した共通プロフィールの情報が、LINEミニアプリで簡単に利用できます。詳しくは、「[共通プロフィールのクイック入力の概要](/docs/line-mini-app/quick-fill/overview/)」を参照してください。

### liff.$commonProfile.get()

::reference-with-code
  :::reference-content
  ユーザーがアカウントセンターで設定している共通プロフィールの情報を取得します。

  `liff.$commonProfile.get()`メソッドを実行すると、ユーザーがプロフィールの情報を確認するためのモーダルが表示されます。表示されたモーダルでプロフィールを確認後、ユーザーが［**自動で入力する**］をタップすると、共通プロフィールの情報を取得できます。

  モーダルの表示例：

  ![](/media/line-mini-app/quick-fill/quick-fill-modal-screen.png){className="[\"bg-border\",\"w-fix-280\"]"}
  :::

  :::reference-code
  *例*

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

#### 構文

```javascript
liff.$commonProfile.get(scopes, options);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  scopes

  #undefined
  Array of strings

  取得したい共通プロフィールのスコープを指定します。

  `scopes`に指定できる値については、「[取得できる共通プロフィールのスコープと戻り値](/docs/line-mini-app/quick-fill/overview/#common-profile-scope)」を参照してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options

  #undefined
  Object

  共通プロフィールの情報を取得するときのオプション
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options.formatOptions

  #undefined
  Object

  情報の形式に関するオプション。`scopes`プロパティで指定した各スコープに対して、[`formatOptions`オブジェクト](#get-common-profile-format-options)を指定します。

  キーには、オプションを設定したいスコープをキャメルケース形式で指定します。たとえば、スコープが`given-name`のとき、キーは`givenName`になります。
  :::
::

#### `formatOptions`オブジェクト

::reference-with-code
  :::reference-content
    ::::parameter-table
      :::::parameter-table-entry{optional=""}
      #undefined
      excludeEmojis

      #undefined
      Boolean

      文字列内の絵文字を削除するかどうか。デフォルトは`true`です。以下のスコープにのみ指定できます。

      - givenName
      - familyName
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      excludeNonJp

      #undefined
      Boolean

      12桁以上の電話番号を排除するかどうか。デフォルトは`true`です。`true`の場合、電話番号が12桁以上のときは、空文字とエラー情報を返します。以下のスコープにのみ指定できます。

      - tel
      :::::

      :::::parameter-table-entry{optional=""}
      #undefined
      digitsOnly

      #undefined
      Boolean

      数字以外の郵便番号を排除するかどうか。デフォルトは`true`です。`true`の場合、郵便番号に数字以外が含まれているときは、空文字とエラー情報を返します。以下のスコープにのみ指定できます。

      - postalCode
      :::::
    ::::
  :::

  :::reference-code
  *例*

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

#### 戻り値

::reference-with-code
  :::reference-content
  `{ data: Partial<CommonProfile>, error: Partial<CommonProfileError>}`型の`Promise`オブジェクトが返されます。

  `Promise`がresolveされると、`data`プロパティにユーザーの共通プロフィール情報を含む`Partial<CommonProfile>`型、`error`プロパティにエラー情報を含む`Partial<CommonProfileError>`型のオブジェクトが渡されます。

  次のような場合、`data`が持つプロパティは`undefined`もしくは`null`になります。

  - `undefined`になるケース

    - 引数の`scopes`で対象の項目を指定していない場合
    - 引数の`scopes`で対象の項目を指定したが、ユーザーがその項目の権限を許可していない場合
  - `null`になるケース

    - ユーザーが共通プロフィールで対象の項目に値を設定していない場合
    - 共通プロフィールで対象の項目を取得する時にエラーが発生した場合

  指定したスコープに応じて取得できるプロパティの値については、「[取得できる共通プロフィールのスコープと戻り値](/docs/line-mini-app/quick-fill/overview/#common-profile-scope)」を参照してください。
  :::

  :::reference-code
  *`Partial<CommonProfile>`型のオブジェクトの例*

    ::::code-tabs
      :::::tab{lang="json"}
      ```javascript
      {
        "family-name": "山田",
        "given-name": "太郎",
        "email": "sample@example.com",
        "tel": "09001234567",
        "postal-code": "1020094"
      }
      ```
      :::::
    ::::

  *`Partial<CommonProfileError>`型のオブジェクトの例*

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

#### エラーレスポンス

::reference-with-code
  :::reference-content
  `Promise`がrejectされたときは、[`LiffError`](/reference/liff/#liff-errors)が渡されます。
  :::

  :::reference-code
  *プラグインを正しくインストールせずにAPIを呼んだ場合の例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      new Error(
        "LiffCommonProfilePlugin isn't installed properly. Did you call liff.use(new LiffCommonProfilePlugin()) before using it?"
      );
      ```
      :::::
    ::::

  *LIFFブラウザ以外でAPIが呼ばれた場合の例*

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
  共通プロフィールのダミーデータを取得します。10種類のダミーデータが用意されており、`caseId`によって取得するダミーデータを指定できます。

  `liff.$commonProfile.getDummy()`メソッドを実行すると、プロフィールの情報を確認するためのモーダルが表示されます。［**自動で入力する**］をタップすると、共通プロフィールのダミーデータを取得できます。

  モーダルの表示例：

  ![](/media/line-mini-app/quick-fill/quick-fill-dummy-modal-screen.png){className="[\"bg-border\",\"w-fix-280\"]"}
  :::

  :::reference-code
  *例*

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

#### 構文

```javascript
liff.$commonProfile.getDummy(scopes, options, caseId);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  scopes

  #undefined
  Array of strings

  取得したい共通プロフィールのスコープを指定します。

  `scopes`に指定できる値については、「[取得できる共通プロフィールのスコープと戻り値](/docs/line-mini-app/quick-fill/overview/#common-profile-scope)」を参照してください。
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options

  #undefined
  Object

  共通プロフィールの情報を取得するときのオプション
  :::

  :::parameter-table-entry{optional=""}
  #undefined
  options.formatOptions

  #undefined
  Object

  情報の形式に関するオプション。`scopes`プロパティで指定した各スコープに対して、[`formatOptions`オブジェクト](#get-common-profile-format-options)を指定します。

  キーには、オプションを設定したいスコープをキャメルケース形式で指定します。たとえば、スコープが`given-name`のとき、キーは`givenName`になります。
  :::

  :::parameter-table-entry{required="true"}
  #undefined
  caseId

  #undefined
  number

  取得したいダミーデータのIDを指定します。IDが`1`から`10`までのダミーデータが用意されています。

  `caseId`ごとのダミーデータについては、「[取得できる共通プロフィールのダミーデータ](/docs/line-mini-app/quick-fill/overview/#get-dummy-common-profile)」を参照してください。
  :::
::

#### 戻り値

::reference-with-code
  :::reference-content
  `{ data: Partial<CommonProfile>, error: Partial<CommonProfileError>}`型の`Promise`オブジェクトが返されます。

  `Promise`がresolveされると、`data`プロパティにダミーデータを含む`Partial<CommonProfile>`型、`error`プロパティにエラー情報を含む`Partial<CommonProfileError>`型のオブジェクトが渡されます。

  次のような場合、`data`が持つプロパティは`undefined`もしくは`null`になります。

  - `undefined`になるケース

    - 引数の`scopes`で対象の項目を指定していない場合
  - `null`になるケース

    - ダミーデータで対象の項目に値が設定されていない場合

  指定したIDに応じて取得できるダミーデータについては、「[取得できる共通プロフィールのダミーデータ](/docs/line-mini-app/quick-fill/overview/#get-dummy-common-profile)」を参照してください。
  :::

  :::reference-code
  *`Partial<CommonProfile>`型のオブジェクトの例*

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

  *`Partial<CommonProfileError>`型のオブジェクトの例*

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

##### エラーレスポンス

::reference-with-code
  :::reference-content
  `Promise`がrejectされたときは、[`LiffError`](/reference/liff/#liff-errors)が渡されます。
  :::

  :::reference-code
  *プラグインを正しくインストールせずにAPIを呼んだ場合の例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      new Error(
        "LiffCommonProfilePlugin isn't installed properly. Did you call liff.use(new LiffCommonProfilePlugin()) before using it?"
      );
      ```
      :::::
    ::::

  *LIFFブラウザ以外でAPIが呼ばれた場合の例*

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
  取得した共通プロフィールの情報をフォームに自動入力します。それぞれのプロフィール情報とフォームの紐づけには、`data-liff-autocomplete`属性を用います。

    ::::admonition{title="スコープと一致しないフォームへの自動入力" type="tip"}
    `liff.$commonProfile.fill()`による自動入力は、フォームの`data-liff-autocomplete`属性を用いて行います。このとき、フォームの`data-liff-autocomplete`属性に指定する値は、取得したプロフィール情報のスコープ（`family-name`、`tel`、`bday-year`など）と一致している必要があります。

    たとえば、誕生年（`bday-year`）、誕生月（`bday-month`）、誕生日（`bday-day`）の情報をそれぞれ取得した後、`20110623`のような形式に加工した上でフォームに自動入力させたい場合は、`liff.$commonProfile.fill()`の代わりに、`document.getElementById().value`や`document.querySelector().value`を用いることができます。
    ::::
  :::

  :::reference-code
  *取得した姓、電話番号、性別をそのまま自動入力する例*

    ::::code-tabs
      :::::tab{lang="javascript"}
      ```javascript
      // HTML
      <input type="text" data-liff-autocomplete="family-name" />
      <input type="tel" data-liff-autocomplete="tel" />
      <select data-liff-autocomplete="sex-enum">
        <option value="0">男性</option>
        <option value="1">女性</option>
        <option value="2">その他</option>
        <option value="3">無回答</option>
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

  *取得した共通プロフィール情報の形式を一部変更して自動入力する場合*

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

      // 月と日が1桁の場合、2桁になるように0埋めする
      const formattedMonth = month.toString().padStart(2, '0');
      const formattedDay = day.toString().padStart(2, '0');

      // 加工後の値を自動入力
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

#### 構文

```javascript
liff.$commonProfile.fill(profile);
```

#### 引数

::parameter-table
  :::parameter-table-entry{required="true"}
  #undefined
  profile

  #undefined
  Partial<CommonProfile>

  フォームに自動入力させるプロフィール情報を、`Partial<CommonProfile>`型で指定します。

  指定できるスコープについては、「[取得できる共通プロフィールのスコープと戻り値](/docs/line-mini-app/quick-fill/overview/#common-profile-scope)」を参照してください。
  :::
::

#### 戻り値

なし
