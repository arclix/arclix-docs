---
sidebar_position: 2
---

# Component Structure

## Structure of the component

The structure of the component depends on template, styles and the flags you use.

### Templates

```
    [TEMPLATE]
    ├── JavaScript
    └── TypeScript
```

### Styles

```
    [STYLING]
    ├── CSS
    └── SCSS/SASS
```

### Flags

| Flag       | Description                                    |
| ---------- | ---------------------------------------------- |
| -p --path  | Generates component based on the path.         |
| --flat     | Generates component without parent folder.     |
| --skipTest | Skip the test file while generating component. |

## Generate component

### Without test file

To generate component without test file use `--skipTest` flag.

#### Command

```bash
npx generate component [COMPONENT NAME] --skipTest
```

#### Structure

```
[COMPONENT NAME]
├── [COMPONENT NAME].css
└── [COMPONENT NAME].jsx
```

### Without parent folder

To generate component without parent folder use `--flat` flag.

#### Command

```bash
npx generate component [COMPONENT NAME] --flat
```

#### Structure

```
├── [COMPONENT NAME].css
├── [COMPONENT NAME].jsx
└── [COMPONENT NAME].test.jsx
```

### At given path

To generate component at given path use `--path` or `-p` flag.

#### Command

```bash
npx generate component [COMPONENT NAME] --path="<some path>"
```
