---
sidebar_position: 2
---

# Multiple and Nested Components

`Arclix` provides you the option of generating **multiple** and **nested** components at once without a need to re-run the command repeatedly.

### Generate multiple components

To generate multiple components at once with shared options like `path`, `skipTest`, `flat`, etc. run the following:

```bash
npx arclix g c [COMPONENT NAME1] [COMPONENT NAME2] [COMPONENT NAME3]
```

#### Structure

```
[FOLDER]
└── [COMPONENT NAME1]
    ├── [COMPONENT NAME1].css
    └── [COMPONENT NAME1].tsx
└── [COMPONENT NAME2]
    ├── [COMPONENT NAME2].css
    └── [COMPONENT NAME2].tsx
└── [COMPONENT NAME3]
    ├── [COMPONENT NAME3].css
    └── [COMPONENT NAME3].tsx
```

### Generate nested components

To generate nested components at once with shared options like `path`, `skipTest`, `flat`, etc. run the following:

```bash
npx arclix g c [COMPONENT NAME1] [COMPONENT NAME1]/[COMPONENT NAME2]
```

:::info
Use **`/`** as separator to denote nesting structure of the component.

Eg: If you want to generate Input and nest it inside Form use the following:

```bash
npx arclix g c Form/Input
```

:::

#### Structure

```
[FOLDER]
└── [COMPONENT NAME1]
    ├── [COMPONENT NAME1].module.css
    └── [COMPONENT NAME1].tsx
    └── [COMPONENT NAME2]
        ├── [COMPONENT NAME2].module.css
        └── [COMPONENT NAME2].tsx
```

:::tip
You can also nest the component while generating multiple components as well.

Eg: If you want to generate Form and Input and nest it inside Form use the following:

```bash
npx arclix g c Form Form/Input
```

:::
