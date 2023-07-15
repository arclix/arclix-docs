# Config Options

Our configurable `options` simplify CLI configuration, making it easier and more efficient.

-   ## `cssPreprocessor`

    Takes `string` value to specify the preprocessor for the component to be generated which includes `css`, `pcss`, `scss`, etc.

    > **Note**: `css` is the default value for `cssPreprocessor`.

-   ## `usesTypeScript`

    Takes `boolean` value to specify whether to use `TypeScript` as template for the component or not.

    > **Note**: `true` is the default value for `usesTypeScript`.

-   ## [`scopeStyle`](../component-generation/option.md#with-scoped-style-modules)

    Takes `boolean` value to specify whether to use scoped css modules for the component or not.

    > **Note**: `false` is the default value for `scopeStyle`.

-   ## [`addStory`](../component-generation/option.md#with-story-file)

    Takes `boolean` value to specify whether to add `storybook` stories for the component or not.

    > **Note**: `false` is the default value for `addStory`.

-   ## [`addIndex`](../component-generation/option.md#and-import-it-without-folder-name)

    Takes `boolean` value to specify whether to add index file for the component or not.

    > **Note**: `false` is the default value for `addIndex`.

-   ## [`addTest`](../component-generation/option.md#with-test-file)

    Takes `boolean` value to specify whether to add test file for the component or not.

    > **Note**: `false` is the default value for `addTest`.

-   ## [`flat`](../component-generation/option.md#without-parent-folder)

    Takes `boolean` value to specify whether to generate component without parent folder or not.

    > **Note**: `false` is the default value for `flat`.

-   ## [`path`](../component-generation/option.md#at-given-path)

    Takes `string` value to specify the path to where the component should be generated.

    > **Note**: `./` is the default value for `path`.

    :::caution
    Only relative path is accepted by the `path` option. So using absolute path may lead to an unexpected error.
    :::

-   ## [`customTemplate`](../arclix-configuration/custom-templates)

    Takes an object structure with valid properties like `component`, `style`, `story` and `test` that allows user to provide their own custom templates for the component they want to generate [more](../arclix-configuration/custom-templates).

### Override the options for generating a certain component

You can `override` the options in `arclix.config.json`, if you want some `options` needed only for generating a certain component by adding the [flags](../component-generation/option#flags).

For example: If you want `Contact` to go in `pages` folder but you have configured `path` in config file to `./src/components` then you can use `--path or -p` flag to `override` the `path` **temporarily** only for that component.

```bash
npx arclix g c Contact --path="./src/pages"
```
