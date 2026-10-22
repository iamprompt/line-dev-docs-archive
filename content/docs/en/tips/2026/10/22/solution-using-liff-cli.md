---
title: Reduce the effort of developing LIFF apps with the LIFF CLI
navigation: true
description: Hello! I’m Oka from the Technical Support team.
meta: >-
  {"date":"2026-10-22 00:00 UTC","tags":"liff,
  line-mini-app","locale":"en","sidebar":false}
path: /en/tips/2026/10/22/solution-using-liff-cli
__hash__: Ao6kprj5AnLIByHnGHonF_7uma69-79H1qi_-N_34I0
seo:
  title: Reduce the effort of developing LIFF apps with the LIFF CLI
  description: Hello! I’m Oka from the Technical Support team.
---

::Tips
# :page-title

  :::display-date{date="2026/10/22" .!mb-20}

  :::

Hello! I’m Oka from the Technical Support team.

When developing a LIFF app, do you ever find the initial setup, preparation of a local development environment, or debugging to be time-consuming or cumbersome?

The [LIFF CLI](/docs/liff/liff-cli/) is a tool designed to streamline these tasks.

With the LIFF CLI, you can create and manage LIFF apps, conduct local development over HTTPS, and debug within the LIFF browser—all from the command line.

In our previous Tips article, "[How to develop LIFF apps locally: tips for HTTPS support](/tips/2026/10/15/configure-the-liff-development-environment/)," we covered how to set up a local development environment for LIFF apps.

In this post, we’ll explore three specific use cases where the LIFF CLI proves helpful during the development process.

  :::toc

  :::

## Streamlining the initial setup of a LIFF app

Starting the development of a LIFF app typically requires several steps, such as configuring settings in the LINE Developers console and preparing an application template.

The `init` command in the LIFF CLI allows you to handle these tasks—adding a channel, creating a LIFF app, and generating a project template—all through an interactive, step-by-step process.

```bash
liff-cli init
```

By running this command and following the on-screen prompts to enter the required information, you can complete the various setup tasks in a single, continuous workflow.

This is especially useful when building your first LIFF app or launching a new project.

## Simplifying endpoint URL management during local development

To develop a LIFF app in a local environment, you need to ensure it is accessible via HTTPS. Furthermore, to allow the LIFF browser to connect to your local development server, you must configure the LIFF app's endpoint URL. The `serve` command in the LIFF CLI launches an HTTPS proxy for your local development server and updates your LIFF app's endpoint URL to point to this proxy.

For example, if your local development server is running at `http://localhost:3000/`, you can run the following command:

```bash
liff-cli serve --liff-id 1234567890-Abcdefgh --url http://localhost:3000/
```

This action simultaneously launches the HTTPS proxy and updates the endpoint URL.

Note that to use the `serve` command, you must have a valid certificate and private key for `localhost` prepared in advance. For more information, see the [operating conditions for the `serve` command](/docs/liff/liff-cli/#serve-operating-conditions).

  :::admonition{title="Do not use with published LIFF apps" type="note"}
  The `serve` command modifies the endpoint URL of a LIFF app. Running this on a LIFF app that has already been published will prevent users from accessing it; therefore, please use it only for LIFF apps intended for development or testing.
  :::

## Debugging apps running in the LIFF browser

If you need to investigate issues occurring within the LIFF browser, the [LIFF Inspector](/docs/liff/liff-plugin/#liff-inspector) is a useful tool.

In the LIFF CLI, you can launch the LIFF Inspector Server over HTTPS by adding the `--inspect` option to the `serve` command:

```bash
liff-cli serve --liff-id 1234567890-Abcdefgh --url http://localhost:3000/ --inspect
```

After integrating the LIFF Inspector Plugin into your LIFF app and accessing the LIFF URL, a URL beginning with `devtools://devtools/` will appear in the terminal where you ran the `serve` command.

You can debug your LIFF app by opening this URL in Google Chrome. For detailed instructions on how to use the LIFF Inspector and other related procedures, please refer to the [LIFF plugin](/docs/liff/liff-plugin/#liff-inspector) documentation.

## Wrap-up

In this article, we introduced three use cases where the LIFF CLI proves useful.

The LIFF CLI is valuable throughout the development process—not only for the initial setup of a LIFF app, but also for local development and debugging.

In addition to the features covered here, the LIFF CLI also includes commands such as `app`, which allows you to manage the registration details of your LIFF apps.

When developing LIFF apps, be sure to consider incorporating the LIFF CLI into your workflow.

  :::style
  html pre.shiki code .sQhOw, html code.shiki .sQhOw{--shiki-default:#FFA657}html pre.shiki code .s9uIt, html code.shiki .s9uIt{--shiki-default:#A5D6FF}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html pre.shiki code .sFSAA, html code.shiki .sFSAA{--shiki-default:#79C0FF}
  :::

  :::tags{tags="liff, line-mini-app" lang="en" section="tips"}

  :::
::
