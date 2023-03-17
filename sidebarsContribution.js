/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    contribution: [
        {
            type: "category",
            label: "Guidelines",
            collapsed: false,
            link: {
                type: "generated-index",
                title: "Contribution Guidelines",
                description: "Learn about How to contribute to Arclix!",
                keywords: ["contribution"],
            },
            items: [
                "guidelines/contribute-core",
                "guidelines/contribute-docs",
                "guidelines/commit-convention",
                "guidelines/code-of-conduct",
            ],
        },
        {
            type: "link",
            label: "Changelog",
            href: "https://github.com/arclix/core/blob/master/CHANGELOG.md",
        },
        {
            type: "link",
            label: "File Core Issue",
            href: "https://github.com/arclix/core/issues/new/choose",
        },
        {
            type: "link",
            label: "File Docs Issue",
            href: "https://github.com/arclix/arclix-docs/issues/new/choose",
        },
    ],
};

module.exports = sidebars;
