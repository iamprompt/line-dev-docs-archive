---
title: LIFFのサーバーAPIへのリクエスト時は正しいエンドポイントを利用してください
navigation: true
description: >-
  LINEでは、開発者向けにLINE Front-end
  Framework（LIFF）のサーバーAPIを提供しています。サーバーAPIを用いると、LIFFアプリをチャネルに追加するといった管理をAPI経由で行えます。
meta: '{"date":"2022-03-09 01:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2022/2022-03-09-liff-server-api
__hash__: pU55vYY6tWx0LL5kcqiETv1lxu7k6hl5xGvfrok_WWU
seo:
  title: LIFFのサーバーAPIへのリクエスト時は正しいエンドポイントを利用してください
  description: >-
    LINEでは、開発者向けにLINE Front-end
    Framework（LIFF）のサーバーAPIを提供しています。サーバーAPIを用いると、LIFFアプリをチャネルに追加するといった管理をAPI経由で行えます。
---

LINEでは、開発者向けにLINE Front-end Framework（LIFF）の[サーバーAPI](/reference/liff-server/)を提供しています。サーバーAPIを用いると、LIFFアプリをチャネルに追加するといった管理をAPI経由で行えます。

このサーバーAPIの利用時に、エンドポイント内の文字列`v1`を別の文字列に置き換えてリクエストを実行するケースが見受けられます。サーバーAPIへのリクエストを実行する際は、正しいエンドポイントを利用してください。

| 項目           | エンドポイント                                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 正しいエンドポイントの例 | [https://api.line.me/liff/**v1**/apps](https://api.line.me/liff/**v1**/apps){rel="[\"nofollow\"]"}                                                                                                                  |
| 誤ったエンドポイントの例 | - [https://api.line.me/liff/**v2**/apps](https://api.line.me/liff/**v2**/apps){rel="[\"nofollow\"]"} - [https://api.line.me/liff/**example**/apps](https://api.line.me/liff/**example**/apps){rel="[\"nofollow\"]"} |

::admonition{title="LIFF SDKとはバージョン番号が異なります" type="tip"}
サーバーAPIのバージョン番号は、LIFF SDKのバージョン番号とは異なります。現在公開されているLIFF SDKのバージョンは`v2`ですが、サーバーAPIのバージョンは`v1`です。
::

サーバーAPIについて詳しくは、「[サーバーAPIリファレンス](/reference/liff-server/)」を参照してください。
