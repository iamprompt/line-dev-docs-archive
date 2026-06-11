---
title: Messaging APIのテキストメッセージ（v2）のシンタックスが決まるまで
navigation: true
description: こんにちは。Messaging APIの開発を担当しているエンジニアの羽原です。
meta: >-
  {"date":"2026-06-11 00:00
  UTC","tags":"messaging-api","locale":"ja","sidebar":false}
path: /ja/tips/2026/06/11/text-v2-message-design-history
__hash__: iKUclHoZJGQmxR-o0D93xAd9oJChwwdl3Sd6E4ElEUY
seo:
  title: Messaging APIのテキストメッセージ（v2）のシンタックスが決まるまで
  description: こんにちは。Messaging APIの開発を担当しているエンジニアの羽原です。
---

::Tips
# :page-title

  :::display-date{date="2026/06/11" .!mb-20}

  :::

こんにちは。Messaging APIの開発を担当しているエンジニアの羽原です。

Messaging APIには、メンションやLINE絵文字を簡単に埋め込むことができる[テキストメッセージ（v2）](/reference/messaging-api/#text-message-v2)というメッセージタイプがあります。従来の[テキストメッセージ](/reference/messaging-api/#text-message)と異なり、メンションや絵文字を入れる位置を本文の中で直接指定できるのが特徴です。

この記事では、テキストメッセージ（v2）のシンタックスが現在の形になるまでに行った設計判断を紹介します。

  :::toc

  :::

## テキストメッセージ（v2）のシンタックス

設計の話に入る前に、まずテキストメッセージ（v2）のシンタックスをおさらいしておきます。

```json
{
  "type": "textV2",
  "text": "Hello {you}! {smile}",
  "substitution": {
    "you": {
      "type": "mention",
      "mentionee": {
        "type": "user",
        "userId": "U0123456789ab..."
      }
    },
    "smile": {
      "type": "emoji",
      "productId": "...",
      "emojiId": "..."
    }
  }
}
```

`text`の中に`{you}`や`{smile}`のようなプレースホルダーを書き、`substitution`プロパティでそれぞれの中身（メンションやLINE絵文字の情報）を指定する形式です。

このシンタックスでは、置換内容を`substitution`プロパティに分けて指定します。また、既存の`text`タイプを拡張するのではなく、新しく`textV2`タイプとして定義しています。ここからは、この形に至るまでの設計判断を1つずつ振り返っていきます。

## なぜ`substitution`プロパティで置換する形にしたのか

最初の候補として挙がっていたのは、メンションや絵文字に必要な情報をテキストの中だけで完結させる形式でした。たとえば次のようなシンタックスです。

```json
{
  "type": "text",
  "text": "Hello {@U0123456789ab...}! {:smile:}"
}
```

しかし、この形式は採用を見送りました。その理由は、シンタックスの誤用によってユーザーIDが露出するような事態を避けるためです。たとえば`{}`を入れ忘れて`Hello @U0123456789ab...!`と送ってしまうと、本来メンションになるはずだった生のユーザーIDがそのまま本文として相手のトークに表示されてしまいます。LINE公式アカウントは、企業や店舗の顧客とのコミュニケーション手段としてご利用いただいているプロダクトです。そのため、保守的で事故を起こしにくい設計にする必要があったのです。

そこで採用したのが、冒頭で示した`substitution`プロパティによる置換方式です。この方式であれば、ユーザーIDのような取り扱いに注意が必要な情報を`substitution`の中だけで扱うことができます。そのため、`text`側でtypoしても相手に見えるのは`{you}`のようなプレースホルダー名にとどまり、生のユーザーIDが本文に露出する事態を避けやすい構造になっています。

## なぜ新しく`textV2`というタイプを設けたのか

当初は新しいタイプを作らず、既存の`text`タイプのまま機能を拡張する案も検討していました。しかし、プレースホルダーを扱うには`{`と`}`を制御文字として扱う必要があります。一方で、既存の`text`タイプでそのルールを導入すると後方互換性を保てないという問題に行き当たります。

`{`と`}`は制御文字として扱うため、これらをそのままテキストとして送信したい場合に備えて、`textV2`タイプではPythonの`str.format`で使われているエスケープシンタックス（`{{`、`}}`）を採用しました。もしこのルールを`text`タイプに適用してしまうと、これまで`{{example}}`という文字列をそのまま送信していた開発者の実装では、テキストの内容が`{example}`に変わってしまいます。既存のコードの挙動を変えてしまうわけにはいきません。

つまり、`text`タイプには次の2つのモードが必要になります。

- `{`と`}`を制御文字として扱い、文字として使う場合は`{{`や`}}`にエスケープが必要なモード
- `{`と`}`を単なる文字として扱う従来のモード

この2つを区別する方法として、`substitution`プロパティの有無で切り替える案が考えられます。新しいモードを使う開発者は`substitution`を指定しているはずで、一方既存のコードはこのプロパティを使っていないため、自然な発想と言えます。ただし、`substitution`の状態を「要素あり」「`{}`（空オブジェクト）」「`null`または未指定」の3パターンに分けたとき、真ん中の`{}`をどちらに分類するかが問題になります。

`{}`を新モード側として扱えば、`{}`と`null`で挙動が分かれることになります。この場合、空オブジェクトと`null`をどちらも空の値として扱う言語やフレームワークでは、開発者の意図とは違うモードで送信されるおそれがあります。これは、JSONベースのAPIを設計するときに注意が必要な罠の1つです。

逆に`{}`を従来モード側として扱う場合、置換要素数が0個のときには`{`や`}`のエスケープ処理を例外的に行わないか、ダミー要素を入れて新モードにするかの対応が必要になります。いずれの場合も、使い方に本来不要なはずの工夫が求められることになります。

どちらの分類でも問題が残るため、`substitution`プロパティの有無でモードを切り替える方式は諦め、モードを`type`の段階で固定することにしました。これが、`textV2`を新しいタイプとして切り出した最大の理由です。`text`タイプの挙動は従来のまま保ちつつ、`textV2`タイプでは後方互換性に縛られずに置換シンタックスを設計できるようになりました。

## おわりに

シンタックス1つを決めるのにも、利便性以外に誤用時のリスクや既存コードへの影響、JSONで表現できる値をAPIとしてどう解釈するかといった複数の観点を整理する必要がありました。

普段は表に出ないAPI設計の裏話でしたが、少しでも楽しんでいただけたなら幸いです。

  :::style
  html pre.shiki code .sZEs4, html code.shiki .sZEs4{--shiki-default:#E6EDF3}html pre.shiki code .sPWt5, html code.shiki .sPWt5{--shiki-default:#7EE787}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}
  :::

  :::tags{tags="messaging-api" lang="en" section="tips"}

  :::
::
