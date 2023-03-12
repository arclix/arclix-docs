/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        "intro",
        {
            type: "category",
            label: "Create App",
            collapsed: false,
            items: [
                "create-app/create-an-app",
                "create-app/project-structure",
                "create-app/available-scripts",
            ],
        },
        {
            type: "category",
            label: "Component Generation",
            collapsed: false,
            items: [
                "component-generation/generate",
                "component-generation/structure",
                "component-generation/option",
                "component-generation/example",
            ],
        },
    ],
};

module.exports = sidebars;
