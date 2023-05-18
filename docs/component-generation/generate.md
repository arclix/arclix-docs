---
sidebar_position: 1
---

# Generating component

To generate component go inside any existing `React` project and run the following:

```bash
npx arclix@latest generate component [COMPONENT NAME]
```

or

```bash
npx arclix@latest g c [COMPONENT NAME]
```

The above command will

-   create a folder named `[COMPONENT NAME]` and generate the component inside the created folder that will reside on the folder you run the command.

-   will automatically take `template` and `stylings` for the component from the React project.

-   generate it inside `src` directory by default If you run the command in the root folder.

:::info
`TypeScript` is the default template for component generation and if the developer wants `JavaScript` as the template they can customize the [`template`](../config.md#configure-template-property) property in `arclix.config.json` file.
:::

### Generate multiple components

To generate multiple components at once with shared options like `path`, `skipTest`, `flat`, etc. run the following:

```bash
npx arclix@latest g c [COMPONENT NAME1] [COMPONENT NAME2] [COMPONENT NAME3]
```

#### Structure

```
[FOLDER]
└── [COMPONENT NAME1]
    ├── [COMPONENT NAME1].module.css
    ├── [COMPONENT NAME1].tsx
    └── [COMPONENT NAME1].test.tsx
└── [COMPONENT NAME2]
    ├── [COMPONENT NAME2].module.css
    ├── [COMPONENT NAME2].tsx
    └── [COMPONENT NAME2].test.tsx
└── [COMPONENT NAME3]
    ├── [COMPONENT NAME3].module.css
    ├── [COMPONENT NAME3].tsx
    └── [COMPONENT NAME3].test.tsx
```

### Generate nested components

To generate nested components at once with shared options like `path`, `skipTest`, `flat`, etc. run the following:

```bash
npx arclix@latest g c [COMPONENT NAME1] [COMPONENT NAME1]/[COMPONENT NAME2]
```

:::info
Use `/` as separator to denote nesting structure of the component.

For example: If you want to generate Input and nest it inside Form use the following:

```bash
npx arclix@latest g c Form Form/Input
```

:::

#### Structure

```
[FOLDER]
└── [COMPONENT NAME1]
    ├── [COMPONENT NAME1].module.css
    ├── [COMPONENT NAME1].tsx
    └── [COMPONENT NAME1].test.tsx
    └── [COMPONENT NAME2]
        ├── [COMPONENT NAME2].module.css
        ├── [COMPONENT NAME2].tsx
        └── [COMPONENT NAME2].test.tsx
```

:::caution
You cannot run this command outside of `React` project .
:::
