# Custom Templates (coming soon)

:::note
Custom Templates feature is still in development and testing and will be released as part of `v0.1.6`
:::

Arclix config offers a unique feature that let's you provide your own custom templates instead of the default templates provided by Arclix.

To get started with custom templates you would need `arclix.config.json` config file setup in your react project.

Example property model for custom templates feature:

```json
{
    "customTemplate": {
        "component": "<path to component template>",
        "style": "<path to style template>",
        "test": "<path to test template>",
        "story": "<path to story template>"
    }
}
```

Also the whole component structure should have the name `TemplateName` like:

```
TemplateName
├── TemplateName.css
├── TemplateName.tsx
├── TemplateName.test.tsx
└── TemplateName.stories.tsx
```

Basically arclix would replace `TemplateName` in the custom template you provide in the config with the component you want to generate.

For example:

```bash
npx arclix g c Hero
```

```json
{
    "generate": {
        "default": {
            "customTemplate": {
                "component": "../TemplateName.tsx",
                "style": "../TemplateName.css",
                "test": "../TemplateName.test.tsx",
                "story": "../TemplateName.stories.tsx"
            }
            // other configurations...
        }
    }
}
```

So for the above command with the above config properties arclix will replace wherever the word `TemplateName` is used in the templates with `Hero` and generate the component.

:::info
`customTemplate` property is optional like other config properties and also the properties of `customTemplate` are also optional, so you can provide custom template for the items you want and other properties which was not defined under `customTemplate` in the config would use default templates provided by arclix.
:::

### `name` property in `customTemplate` (coming soon)

This feature even enhances the above feature where the user need to have separate component `TemplateName` and the only purpose of the `TemplateName` component is to provide templates which takes up space.

So the `name` property provides the user with two option `dynamic` and user defined name.

-   `dynamic` - this takes the component name from the template path provided in config and replaces it with the name provided while generation.

    For example:

    ```json
    {
        "customTemplate": {
            "name": "dynamic",
            "component": "../HeroAction.tsx",
            "style": "../HeroAction.css",
            "test": "../HeroAction.test.tsx",
            "story": "../HeroAction.stories.tsx"
        }
    }
    ```

    > **Note:** Here the component name used in the templates is `HeroAction` based on the general practice of naming the component file the same as component function, so `HeroAction` will be replaced with name provided while generation.

-   **Custom Name** - this can be used whe your project doesn't follow the practice of naming the component file the same as component function. So the component name provided for `name` property will be replaced with the component name provided in the generation.

    For example:

    ```json
    {
        "customTemplate": {
            "name": "Hero",
            "component": "../HeroAction.tsx",
            "style": "../HeroAction.css",
            "test": "../HeroAction.test.tsx",
            "story": "../HeroAction.stories.tsx"
        }
    }
    ```

    Here the `HeroAction.tsx` file will have component function named `Hero`, so component name `Hero` will be replaced by the component name provided while generation.
