---
sidebar_position: 3
---

# CLI options

We provide additional options that configures component generation to meet users needs.

### Flags

| Flag                                                                          | Description                                                                                                                                                           |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [--addIndex](#and-import-it-without-folder-name)                              | Let's to import component without the folder name.<br/> For e.g: Instead of `import Sample from "./Sample/Sample"`<br/> we can do `import { Sample } from "./Sample"` |
| [--scopeStyle](#with-scoped-style-modules)                                    | Scopes the style to the component.                                                                                                                                    |
| [--addTest](#with-test-file)                                                  | Adds the test file while generating component.                                                                                                                        |
| [--addStory](#with-story-file)                                                | Adds storybook story to the component                                                                                                                                 |
| [-p, --path [path]](#at-given-path)                                           | Generates component based on the path.                                                                                                                                |
| [-f, --flat](#without-parent-folder)                                          | Generates component without parent folder.                                                                                                                            |
| [--type [component type]](../arclix-configuration/dynamic-component-types.md) | Specify the component type based on config to be generated.                                                                                                           |
| -v, --version                                                                 | Displays version number of Arclix in use.                                                                                                                             |
| -h, --help                                                                    | Provides help about the use of Arclix.                                                                                                                                |

## Generate component

### And import it without folder name

To generate component and import without foldername use `--addIndex` flag.

#### Command

```bash
npx arclix generate component [COMPONENT NAME] --addIndex
```

This will create a separate `index.js|.ts` file and export everything within the folder.

So instead of importing with foldername like `import [COMPONENT NAME] from "./[COMPONENT NAME]/[COMPONENT NAME]"`
we can do `import { [COMPONENT NAME] } from "./[COMPONENT NAME]"`.

:::info
This will create separate file named `index.js|.ts` for each component
:::

#### Structure

```
[COMPONENT NAME]
├── index.js
├── [COMPONENT NAME].css
└── [COMPONENT NAME].tsx
```

### With Scoped Style modules

To generate component with scoped style modules use `--scopeStyle` flag.

#### Command

```bash
npx arclix generate component [COMPONENT NAME] --scopeStyle
```

#### Structure

```
[COMPONENT NAME]
├── [COMPONENT NAME].module.css
└── [COMPONENT NAME].tsx
```

### With test file

To generate component with test file use `--addTest` flag.

#### Command

```bash
npx arclix generate component [COMPONENT NAME] --addTest
```

#### Structure

```
[COMPONENT NAME]
├── [COMPONENT NAME].css
├── [COMPONENT NAME].tsx
└── [COMPONENT NAME].test.tsx
```

### With story file

To generate component with story file add `--addStory` flag.

#### Command

```bash
npx arclix generate component [COMPONENT NAME] --addStory
```

#### Structure

```
[COMPONENT NAME]
├── [COMPONENT NAME].css
├── [COMPONENT NAME].tsx
└── [COMPONENT NAME].stories.tsx
```

### At given path

To generate component at given path use `--path` or `-p` flag.

#### Command

```bash
npx arclix generate component [COMPONENT NAME] --path="<some path>"
```

or

```bash
npx arclix generate component [COMPONENT NAME] -p <some path>
```

:::caution
Only relative path is accepted by the `path` flag. So using absolute path may lead to an unexpected error.
:::

#### Structure

```
[SOME PATH FOLDER]
└── [COMPONENT NAME]
    ├── [COMPONENT NAME].css
    └── [COMPONENT NAME].tsx

```

### Without parent folder

To generate component without parent folder use `--flat` or `-f` flag.

#### Command

```bash
npx arclix generate component [COMPONENT NAME] --flat
```

or

```bash
npx arclix generate component [COMPONENT NAME] -f
```

#### Structure

```
├── [COMPONENT NAME].css
└── [COMPONENT NAME].tsx
```
