---
sidebar_position: 1
---

# Generating component

To generate component go inside any React project created by

-   [Vite](https://vitejs.dev/)
-   [Next](https://nextjs.org/)
-   [Remix](https://remix.run/)
-   [Arclix](https://arclix.github.io/arclix-docs/create-app/create)
-   [Create React App](https://create-react-app.dev/)

```bash
npx arclix generate component [COMPONENT NAME]
```

or

```bash
npx arclix g c [COMPONENT NAME]
```

The above command will

-   create a folder named `[COMPONENT NAME]` and generate the component inside the created folder that will reside on the folder you run the command.

-   will automatically take `template` and `stylings` for the component from the React project.

-   generate it inside `src` directory by default If you run the command in the root folder.

### Generate multiple components

To generate multiple components at once with shared options like `path`, `skipTest`, `flat`, etc. run the following:

```bash
npx arclix g c [COMPONENT NAME1] [COMPONENT NAME2] [COMPONENT NAME3]
```

#### Structure

```
[FOLDER]
└── [COMPONENT NAME1]
    ├── [COMPONENT NAME1].module.css
    ├── [COMPONENT NAME1].jsx
    └── [COMPONENT NAME1].test.jsx
└── [COMPONENT NAME2]
    ├── [COMPONENT NAME2].module.css
    ├── [COMPONENT NAME2].jsx
    └── [COMPONENT NAME2].test.jsx
└── [COMPONENT NAME3]
    ├── [COMPONENT NAME3].module.css
    ├── [COMPONENT NAME3].jsx
    └── [COMPONENT NAME3].test.jsx
```

### Generate nested components

To generate nested components at once with shared options like `path`, `skipTest`, `flat`, etc. run the following:

```bash
npx arclix g c [COMPONENT NAME1] [COMPONENT NAME1]/[COMPONENT NAME2]
```

:::info
Use `/` as separator to denote nesting structure of the component.

For example: If you want to generate Input and nest it inside Form use the following:

```bash
npx arclix g c Form Form/Input
```

:::

#### Structure

```
[FOLDER]
└── [COMPONENT NAME1]
    ├── [COMPONENT NAME1].module.css
    ├── [COMPONENT NAME1].jsx
    └── [COMPONENT NAME1].test.jsx
    └── [COMPONENT NAME2]
        ├── [COMPONENT NAME2].module.css
        ├── [COMPONENT NAME2].jsx
        └── [COMPONENT NAME2].test.jsx
```

:::caution
You cannot run this command outside of `React` project .
:::
