---
title: LINEログインボタン デザインガイドライン
navigation: true
description: null
meta: '{"tags":null,"author":null,"last_updated":null,"source_language":"ja"}'
path: /ja/docs/line-login/login-button
__hash__: YL6K8jA6cYi8KlsJKNYG_ce9wQsJ1IEEhZmUJWnWZJA
seo:
  title: LINEログインボタン デザインガイドライン
  description: null
---

# :page-title

:markdown-controlsLINEログインボタンを追加することによって、ユーザーが[LINEログイン](/docs/line-login/overview/)を利用してアプリにログインできるようになります。

![LINEログインボタンの画像](/media/line-login/login-button/login-button-ja.png){className="[\"border\",\"w-fix-360\"]"}

LINEログインボタンは、LINEアイコン、LINEアイコンの吹き出し、LINEログインボタンテキストの、3つの要素で構成されています。

LINEログインボタンを利用するには、「[Usage Guidelines for the LINE Login Button](https://terms2.line.me/LINE_Developers_Guidelines_for_Login_Button){rel="[\"nofollow\"]"}」を読み、内容に同意する必要があります。以下のLINEログインボタンのテンプレートをダウンロードすることにより、ガイドラインに同意したものとみなされます。

[LINEログインボタンのテンプレートをダウンロード](https://vos.line-scdn.net/line-developers/docs/media/line-login/login-button/LINE_Login_Button_Image.zip){rel="[\"nofollow\"]" className="[\"btn-in-docs\",\"custom\"]"}

  
ウェブ、iOS、またはAndroidアプリに利用できる画像セットがさまざまな画質で用意されています。ログインテキストを多言語にカスタマイズするには、PSDファイルを使います。

## デザインガイドライン

アプリにLINEログインボタンを追加する際は、本デザインガイドラインに従ってください。

### サイズ

以下の条件を満たしていれば、ログインボタンを表示させるデバイスに応じて、画像サイズを拡大または縮小してかまいません。

- LINEアイコンのアスペクト比が維持されている。
- LINEアイコンをはっきりと視認できる。

### 色

LINEログインボタンは、必ず以下の色で表示してください。

| 項目           | 色指定                                                                                                                                                                                                                                                       |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 基本色          | ![base color](/media/line-login/login-button/06c755.png){className="[\"inline-block\",\"mb-0-important\"]"}#06C755                                                                                                                                        |
| マウスオーバー      | ![base color](/media/line-login/login-button/06c755.png){className="[\"inline-block\",\"mb-0-important\"]"}#06C755 + ![hover color](/media/line-login/login-button/000000-10-per.png){className="[\"inline-block\",\"mb-0-important\"]"}#000000（不透明度：10％） |
| タップ/クリック     | ![base color](/media/line-login/login-button/06c755.png){className="[\"inline-block\",\"mb-0-important\"]"}#06C755 + ![press color](/media/line-login/login-button/000000-30-per.png){className="[\"inline-block\",\"mb-0-important\"]"}#000000（不透明度：30％） |
| 無効           | ![white color](/media/line-login/login-button/ffffff.png){className="[\"inline-block\",\"mb-0-important\"]"}#FFFFFF                                                                                                                                       |
| 文字色/ロゴ（無効以外） | ![logo white color](/media/line-login/login-button/ffffff.png){className="[\"inline-block\",\"mb-0-important\"]"}#FFFFFF                                                                                                                                  |
| 文字色/ロゴ（無効のみ） | ![logo grey color](/media/line-login/login-button/1e1e1e-20-per.png){className="[\"inline-block\",\"mb-0-important\"]"}#1E1E1E（不透明度：20％）                                                                                                                  |
| 縦線（無効以外）     | ![line color for other than disabled](/media/line-login/login-button/000000-8-per.png){className="[\"inline-block\",\"mb-0-important\"]"}#000000（不透明度：8％）                                                                                                 |
| 縦線（無効）       | ![line color for only disabled](/media/line-login/login-button/e5e5e5-60-per.png){className="[\"inline-block\",\"mb-0-important\"]"}#E5E5E5（不透明度：60％）                                                                                                     |
| 枠線（無効のみ）     | ![border color](/media/line-login/login-button/e5e5e5-60-per.png){className="[\"inline-block\",\"mb-0-important\"]"}#E5E5E5（不透明度：60％）                                                                                                                     |

::admonition{title="透明色のレイヤーにご注意ください" type="note"}
透明色は、配置するレイヤーにご注意ください。たとえば、マウスオーバーの縦線の場合、基本色（`#06C755`）のレイヤーの上に、マウスオーバー（`#000000（不透明度：30％）`）を配置し、さらにその上のレイヤーに縦線（`#000000（不透明度：8％）`）とテキスト／ロゴ（`#FFFFFF`）を配置します。

![LINEログインボタンのレイヤー](/media/line-login/login-button/login-button-color-layer-order-ja.png){className="[\"w-fix-440\"]"}

各レイヤーの配置について詳しくは、下図を参考にしてください。
::

![LINEログインボタンの色](/media/line-login/login-button/login-button-color-ja.png){className="[\"border\",\"w-fix-720\"]"}

### テキスト

LINEログインボタンのテキストは、「LINEでログイン」にすることを推奨しています。各言語での推奨文言については、以下の表を参照してください。

独自のボタンテキストを使用する場合は、以下のガイドラインに従ってください。

- 改行を入れないこと。
- LINEでアプリにログインすることがユーザーにはっきりと伝わること。

LINEアイコンをテキストなしでLINEログインボタンとして使用することも可能です。

| 言語    | ログインボタンテキスト（長文）           | ログインボタンテキスト（短文） |
| ----- | ------------------------- | --------------- |
| en    | Log in with LINE          | Log in          |
| ja    | LINEでログイン                 | ログイン            |
| ko    | LINE으로 로그인                | 로그인             |
| de    | Mit LINE anmelden         | Anmelden        |
| es    | Iniciar sesión con LINE   | Iniciar sesión  |
| fr    | Connexion avec LINE       | Se connecter    |
| id    | Masuk dengan LINE         | Masuk           |
| it    | Login con LINE            | Login           |
| ms    | Log masuk dengan LINE     | Log Masuk       |
| pt-BR | Login com o LINE          | Login           |
| pt-PT | Iniciar sessão com o LINE | Iniciar sessão  |
| ru    | Войти в LINE              | Войти           |
| th    | ล็อกอินด้วย LINE          | ล็อกอิน         |
| tr    | LINE ile oturum açın      | Oturum Aç       |
| ar    | تسجيل دخول باستخدام LINE  | تسجيل دخول      |
| vi    | Đăng nhập với LINE        | Đăng nhập       |
| zh-CN | 用LINE帐号登录                 | 登录              |
| zh-TW | 與LINE連動                   | 連動              |

### フォント

ボタンテキストのフォントは、判読可能なものでなければなりません。画像サイズ毎に推奨される文字の大きさについては、PSDファイルを参照してください。

### 余白

LINEログインボタンテキストの左右の余白は、LINEアイコンの吹き出しの幅以上である必要があります（以下の図でＸと定義されている部分です）。

上下の余白は吹き出しの幅の1/2を推奨します。文字サイズを選ぶ際は、これらの余白を確保できるようにご注意ください。

![LINEログインボタンの余白](/media/line-login/login-button/login-button-padding-ja.png){className="[\"border\",\"w-fix-520\"]"}

### 保護エリア

保護エリアとは、LINEログインボタンの周囲の、何も要素を含めない部分です。保護エリアの幅は、LINEアイコンの吹き出しの左の余白と同等以上にしてください（以下の図でAと定義されている部分です）。保護エリアを維持するだけでなく、LINEログインボタンの効果を損なわないよう、テキストやグラフィックを保護エリアの近くに配置しないでください。

![LINEログインボタンの保護エリア](/media/line-login/login-button/login-button-isolation-zone.png){className="[\"bg-border\",\"w-fix-520\"]"}

### よくある間違い

- 規定以外の色を使用する。
- 旧式のLINEアイコンを使用する。
- 別のアイコンまたは改変したLINEアイコンを使用する。
