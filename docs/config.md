# Configure Arclix

Configure `Arclix` component generation by creating `arclix.config.json` either manually or by using the following command:

```bash
npx arclix@latest init
```

:::info
The config file contains default options for `component generation` that is shared across the project.

If you need to add certain options only while generating a specific component you can still uses the available [flags](./component-generation/option#flags) to `override` the configs `temporarily` for that specific generation.
:::

### Default Options

```json
{
    "generate": {
        "flat": false,
        "addIndex": false,
        "skipTest": false,
        "scopeStyle": false,
        "defaultPath": "./src/"
    }
}
```

Look into [options](./component-generation/option#flags) for the usage and description of the available options.

:::caution
Make sure `defaultPath` options is followed by trailing `/`

For example: If you want the `defaultPath` to be `components` then the property `defaultPath` should look like

```json
"defaultPath": "./src/components/"
```

:::

### Override the options for generating a certain component

You can `override` the options in `arclix.config.json`, if you want some `options` needed only for generating a certain component by adding the [flags](./component-generation/option#flags).

For example: If you want `Contact` to go in `pages` folder but you have configured `defaultPath` in config file to `./src/components/` then you can use `--path` flag to `override` the `defaultPath` **temporarily** only for that component.

```bash
npx arclix@latest g c Contact --path="./src/pages/"
```
