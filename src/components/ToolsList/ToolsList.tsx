import React from "react";
import styles from "./ToolsList.module.css";
import Tools from "../Tools/Tools";

const tools = [
    {
        name: "React",
        img: "img/react.png",
        link: "https://react.dev/",
    },
    {
        name: "Node",
        img: "img/node.png",
        link: "https://nodejs.dev/",
    },
    {
        name: "Prettier",
        img: "img/prettier.png",
        link: "https://prettier.io/",
    },
    {
        name: "ESLint",
        img: "img/eslint.png",
        link: "https://eslint.org/",
    },
    {
        name: "Vitest",
        img: "img/vitest.png",
        link: "https://vitest.dev/",
    },
    {
        name: "JavaScript",
        img: "img/javascript.png",
        link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    },
    {
        name: "TypeScript",
        img: "img/typescript.png",
        link: "https://www.typescriptlang.org/",
    },
    {
        name: "CSS",
        img: "img/css.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "Sass",
        img: "img/sass.png",
        link: "https://sass-lang.com/",
    },
];

const ToolsList = () => {
    return (
        <section className={`container ${styles.tool}`}>
            <h1 className={styles["tool__title"]}>Tools Used in Arclix</h1>
            <Tools tools={tools} className={styles.tools} />
        </section>
    );
};

export default ToolsList;
