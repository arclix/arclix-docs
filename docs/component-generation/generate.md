---
sidebar_position: 1
---

# Generating component

To generate component go inside any existing `React` project and run the following:

```bash
npx arclix generate component [COMPONENT NAME]
```

or

```bash
npx arclix g c [COMPONENT NAME]
```

The above command will:

-   create a folder named `[COMPONENT NAME]` and generate the component inside the created folder that will reside on the folder you run the command.

-   use default `template` and `stylings` for generating the component.

:::info
`TypeScript` is the default template for component generation and if the developer wants `JavaScript` as the template they can set the [`usesTypeScript`](../arclix-configuration/option.md#usestypescript) config property to `false` in `arclix.config.json` file.
:::

:::caution
You cannot run this command outside of `React` project .
:::
