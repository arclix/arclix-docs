import React from "react";
import styles from "./Tools.module.css";

interface Tool {
    img: string;
    name: string;
    link: string;
}

interface Props {
    className?: string;
    tools: Tool[];
}

const Tools: React.FC<Props> = (props) => {
    const cssClass = props.className
        ? `${styles["tool__container"]} ${props.className}`
        : styles["tool__container"];
    return (
        <article className={cssClass}>
            {props.tools.map((tool) => (
                <a
                    className={styles["tool__row"]}
                    href={tool.link}
                    target="_blank"
                    key={tool.name}
                >
                    <img
                        className={styles["tool__img"]}
                        src={tool.img}
                        alt={tool.name + " icon"}
                    />
                    <p className={styles["tool__content"]}>{tool.name}</p>
                </a>
            ))}
        </article>
    );
};

export default Tools;
