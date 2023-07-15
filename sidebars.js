/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        "intro",
        {
            type: "category",
            label: "Component Generation",
            collapsed: false,
            link: {
                type: "generated-index",
                title: "Component Generation",
                description:
                    "Learn about how to generate component using Arclix.",
            },
            items: [
                "component-generation/generate",
                "component-generation/multiple-nested",
                "component-generation/option",
                "component-generation/example",
            ],
        },
        {
            type: "category",
            label: "Arclix CLI Configuration",
            collapsed: false,
            link: {
                type: "generated-index",
                title: "Arclix CLI Configuration",
                description:
                    "Learn about how to configure and create Arclix config file.",
            },
            items: [
                "arclix-configuration/config",
                "arclix-configuration/option",
                "arclix-configuration/dynamic-component-types",
                "arclix-configuration/custom-templates",
            ],
        },
    ],
};

module.exports = sidebars;
