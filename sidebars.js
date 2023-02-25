/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    tutorialSidebar: [
        "intro",
        {
            type: "category",
            label: "Create App",
            items: [
                "create-app/create-an-app",
                "create-app/project-structure",
                "create-app/available-scripts",
            ],
        },
        {
            type: "category",
            label: "Component Generation",
            items: [
                "component-generation/generate",
                "component-generation/structure",
                "component-generation/example",
            ],
        },
    ],
};

module.exports = sidebars;
