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

    // Set the production url of your site here
    url: "https://arclix.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/arclix-docs",

    organizationName: "arclix",
    projectName: "arclix-docs",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
            // Replace with your project's social card
            // image: "img/docusaurus-social-card.jpg",
            // algolia: {
            //     apiKey: "04f78ee41d9067a9417662908de0a54d",
            //     indexName: "arclix-docs",
            //     contextualSearch: true,
            //     appId: "WFYK9B663W",
            // },
            colorMode: {
                defaultMode: "dark",
            },
            navbar: {
                title: "",
                logo: {
                    alt: "Arclix Logo",
                    src: "img/arclix.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "intro",
                        position: "left",
                        label: "Docs",
                    },
                    // { to: "/blog", label: "Blog", position: "left" },
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
