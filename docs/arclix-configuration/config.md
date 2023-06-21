# Create Arclix config file

Configure `Arclix` component generation by creating `arclix.config.json` either manually or by using the following command:

```bash
npx arclix init
```

:::info
The config file contains default options for `component generation` that is shared across the project.

If you need to add certain options only while generating a specific component you can still uses the available [flags](../component-generation/option#flags) to `override` the configs `temporarily` for that specific generation.
:::

### Default Options

```json
{
    "component": {
        "default": {
            "cssPreprocessor": "css",
            "usesTypeScript": true,
            "scopeStyle": false,
            "addStory": false,
            "addIndex": false,
            "addTest": false,
            "flat": false,
            "path": "./"
        }
    }
}
```
