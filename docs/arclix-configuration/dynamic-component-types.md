# Dynamic component types

Developers can create their own component type in the `config` file for their project which has it's own configuration.

If the user wants to generate certain components every time with certain configuration and not the common configuration in config file they can now create their own `type` for the component and add the `type` along with it's configuration in the config file.

For example the user wants certain component like `pages` to have different configuration than the `default` one then they could add any name for the type in the config file like:

```json title="arclix.config.json"
{
    "component": {
        "default": {
            "cssPreprocessor": "css",
            "usesTypeScript": true,
            "scopeStyle": true,
            "addStory": true,
            "addIndex": true,
            "addTest": true,
            "flat": false,
            "path": "./"
        },
        "pages": {
            "cssPreprocessor": "pcss",
            "path": "src/pages"
        }
    }
}
```

For this example we took the name as `pages`, user can name anything they want. So to use this `pages` configuration while generating the component, run the generate command with `--type` flag like:

```bash
npx arclix@latest g c UserPage --type=pages
```

Here, `--type` flag accepts only the valid types provided in the config file.

Now the `UserPage` component would be generated with the configuration provided in `pages` type in config file.

:::info
If the `--type` flag is not provided then `default` configuration will be used for component generation.
:::
