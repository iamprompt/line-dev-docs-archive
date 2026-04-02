---
title: The LIFF CLI v0.4 now officially supports ngrok
navigation: true
description: >-
  In the LIFF CLI v0.4, we've officially supported ngrok as a method for
  exposing your local development server.
meta: '{"date":"2025-06-11 00:00 UTC","tags":"liff, line-mini-app","locale":"en"}'
path: /en/_partials/news/2025/2025-06-11-liff-cli-support-ngrok
__hash__: 1BMttcDghU0by_Cn2qUQVRYfdavDbmhPkOaUTW6cV6o
seo:
  title: The LIFF CLI v0.4 now officially supports ngrok
  description: >-
    In the LIFF CLI v0.4, we've officially supported ngrok as a method for
    exposing your local development server.
---

In the LIFF CLI v0.4, we've officially supported [ngrok](https://ngrok.com/){rel="[\"nofollow\"]"} as a method for exposing your local development server.

- [line/liff-cli](https://github.com/line/liff-cli){rel="[\"nofollow\"]"}

Until now, the LIFF CLI has only supported ngrok v1, but ngrok v1 has already reached the end of its development and maintenance cycle. With this update, we've officially added support for the latest version of ngrok, enabling stable use of ngrok.

This eliminates the need to install [ngrok v1](https://github.com/inconshreveable/ngrok){rel="[\"nofollow\"]"} and [node-pty](https://github.com/microsoft/node-pty){rel="[\"nofollow\"]"}, which were previously required when using ngrok v1. The LIFF CLI v0.4.0 has an issue where the `serve` command couldn't be executed properly, so please use the LIFF CLI v0.4.1 or later, which has fixed this issue.

### Usage

The `serve` command in the LIFF CLI starts a proxy server targeting the local development server. Specifying `ngrok` as the `--proxy-type` option of the `serve` command uses ngrok as the proxy. When using ngrok, set the authtoken of ngrok as the environment variable `NGROK_AUTHTOKEN`.

```bash
$ NGROK_AUTHTOKEN={Authentication token} liff-cli serve \
   --liff-id 1234567890-AbcdEfgh \
   --url http://localhost:3000/ \
   --proxy-type ngrok

Successfully updated endpoint url for LIFF ID: 1234567890-AbcdEfgh.

→  LIFF URL:     https://liff.line.me/1234567890-AbcdEfgh
→  Proxy server: https://1234abcd.ngrok.example.com/
```

After starting the proxy server, you can access the local development server from an external location by accessing the LIFF URL. Executing the `serve` command will change the LIFF app's endpoint URL, so don't execute it on a published LIFF app.

For more information about the LIFF CLI `serve` command, see [Launch a local development server with HTTPS](/docs/liff/liff-cli/#serve) in the LIFF documentation.
