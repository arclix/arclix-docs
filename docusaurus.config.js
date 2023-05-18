// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Arclix",
    tagline:
        "An Open Source CLI with Creation and Component Generation for React.",
    favicon: "img/favicon.png",
    url: "https://arclix.github.io",
    baseUrl: "/arclix-docs",
    organizationName: "arclix",
    projectName: "arclix-docs",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    customFields: {
        version: "ARCLIX v0.1.4",
    },
    plugins: [
        [
            "content-docs",
            {
                id: "contribution",
                path: "contribution",
                routeBasePath: "contribution",
                sidebarPath: require.resolve("./sidebarsContribution.js"),
            },
        ],
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            algolia: {
                apiKey: "9e850cce1205829df9f18fe094b0ef34",
                indexName: "arclix",
                contextualSearch: true,
                appId: "PC619Z89Q9",
            },
            colorMode: {
                defaultMode: "dark",
            },
            navbar: {
                title: "",
                logo: {
                    alt: "Arclix Logo",
                    src: "svg/arclix-icon.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Docs",
                    },
                    {
                        to: "/contribution/category/guidelines",
                        label: "Contribution",
                        position: "left",
                    },
                    {
                        href: "https://github.com/arclix/core",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                // links: [
                //     {
                //         title: "Docs",
                //         items: [
                //             {
                //                 label: "Tutorial",
                //                 to: "/docs/intro",
                //             },
                //         ],
                //     },
                //     {
                //         title: "Community",
                //         items: [
                //             {
                //                 label: "Stack Overflow",
                //                 href: "https://stackoverflow.com/questions/tagged/arclix",
                //             },
                //             {
                //                 label: "Discord",
                //                 href: "https://discordapp.com/invite/docusaurus",
                //             },
                //             {
                //                 label: "Twitter",
                //                 href: "https://twitter.com/docusaurus",
                //             },
                //         ],
                //     },
                //     {
                //         title: "More",
                //         items: [
                //             // {
                //             //     label: "Blog",
                //             //     to: "/blog",
                //             // },
                //             {
                //                 label: "GitHub",
                //                 href: "https://github.com/jitiendran/arclix",
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} Jitiendran KS & Arclix Contributors.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
