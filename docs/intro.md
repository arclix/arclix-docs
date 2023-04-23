---
sidebar_position: 1
---

# Getting Started

### Overview

Arclix is an An Open Source CLI with Creation and Component Generation for React. It offers faster and developer friendly environment with rich features.

-   Uses [Create React App](https://create-react-app.dev/) under the hood for app creation.
-   Provides out-of-box support for [TypeScript](https://www.typescriptlang.org/) and [Sass](https://sass-lang.com/).
-   Can generate component with templates, styles and tests.

### What you'll need

-   [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
    -   When installing Node.js, you are recommended to check all checkboxes related to dependencies.
-   You can also use [nvm](https://github.com/nvm-sh/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

## Install Arclix Globally

```bash
npm i -g arclix@latest
```

## Quick Start

Generate a new React site using the **Arclix**.

The React app will be added to your project after you run the command:

```bash
npx arclix@latest create [PROJECT NAME]
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run for React.

## Start your site

Run the development server:

```bash
cd [PROJECT NAME]
npm start
```

The `cd` command changes the directory you're working with. In order to work with your newly created React app, you'll need to navigate the terminal there.

The `npm start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.
