import React from "react";
import styles from "./Tools.module.css";

const tools = [
    {
        text: "React",
        img: "img/react.png",
    },
    {
        text: "Node",
        img: "img/node.png",
    },
    {
        text: "Babel",
        img: "img/babel.png",
    },
    {
        text: "Webpack",
        img: "img/webpack.png",
    },
    {
        text: "ESLint",
        img: "img/eslint.png",
    },
    {
        text: "JavaScript",
        img: "img/javascript.png",
    },
    {
        text: "TypeScript",
        img: "img/typescript.png",
    },
    {
        text: "CSS",
        img: "img/css.png",
    },
    {
        text: "Sass",
        img: "img/sass.png",
    },
];

const Tools = () => {
    return (
        <article className={`container ${styles.tool}`}>
            <h1 className={styles["tool__title"]}>Some Tools Used in Arclix</h1>
            <section className={styles["tool__container"]}>
                {tools.map((tool) => (
                    <div className={styles["tool__row"]}>
                        <img
                            className={styles["tool__img"]}
                            src={tool.img}
                            alt={`${tool.text} image`}
                        />
                        <p>{tool.text}</p>
                    </div>
                ))}
            </section>
        </article>
    );
};

export default Tools;
