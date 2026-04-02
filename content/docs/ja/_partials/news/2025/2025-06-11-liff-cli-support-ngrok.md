---
title: LIFF CLI v0.4でngrokを正式にサポートしました
navigation: true
description: LIFF CLI v0.4において、ローカルの開発サーバーを外部に公開する方法としてngrokを正式にサポートしました。
meta: '{"date":"2025-06-11 00:00 UTC","tags":"liff, line-mini-app","locale":"ja"}'
path: /ja/_partials/news/2025/2025-06-11-liff-cli-support-ngrok
__hash__: 2LQkaCarEzJjtwgJH7e8V3qoLDGwzLkC8w6Y8Q_qsWI
seo:
  title: LIFF CLI v0.4でngrokを正式にサポートしました
  description: LIFF CLI v0.4において、ローカルの開発サーバーを外部に公開する方法としてngrokを正式にサポートしました。
---

LIFF CLI v0.4において、ローカルの開発サーバーを外部に公開する方法として[ngrok](https://ngrok.com/){rel="[\"nofollow\"]"}を正式にサポートしました。

- [line/liff-cli](https://github.com/line/liff-cli){rel="[\"nofollow\"]"}

これまで、LIFF CLIはngrok v1のみをサポートしていましたが、ngrok v1はすでに開発やメンテナンスを終了しています。今回、現行の最新版であるngrokを正式にサポートしたことで、ngrokを安定して使用できるようになりました。

これにより、ngrok v1を使用する際に必要だった[ngrok v1](https://github.com/inconshreveable/ngrok){rel="[\"nofollow\"]"}と[node-pty](https://github.com/microsoft/node-pty){rel="[\"nofollow\"]"}のインストールも不要になりました。なお、LIFF CLI v0.4.0には`serve`コマンドを正常に実行できない不具合があるため、この不具合を修正したLIFF CLI v0.4.1以降を使用してください。

### 使い方

LIFF CLIの`serve`コマンドは、ローカルの開発サーバーを対象とするプロキシサーバーを起動します。`serve`コマンドの`--proxy-type`オプションに`ngrok`を指定すると、プロキシとしてngrokを使用します。ngrokを使用する際は、環境変数として`NGROK_AUTHTOKEN`にngrokの認証トークンを設定してください。

```bash
$ NGROK_AUTHTOKEN={認証トークン} liff-cli serve \
   --liff-id 1234567890-AbcdEfgh \
   --url http://localhost:3000/ \
   --proxy-type ngrok

Successfully updated endpoint url for LIFF ID: 1234567890-AbcdEfgh.

→  LIFF URL:     https://liff.line.me/1234567890-AbcdEfgh
→  Proxy server: https://1234abcd.ngrok.example.com/
```

プロキシサーバーの起動後にLIFF URLにアクセスすると、外部からローカルの開発サーバーにアクセスできます。なお、`serve`コマンドを実行すると、LIFFアプリのエンドポイントURLが変更されるため、公開済みのLIFFアプリでは実行しないでください。

LIFF CLIの`serve`コマンドについて詳しくは、『LIFFドキュメント』の「[ローカル開発サーバーをHTTPSで起動する](/docs/liff/liff-cli/#serve)」を参照してください。
