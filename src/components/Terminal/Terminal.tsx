import React, { PropsWithChildren } from "react";
import styles from "./Terminal.module.css";

interface Props extends PropsWithChildren {
    className?: string;
}

const Terminal: React.FC<Props> = ({ children, className }) => {
    const terminalStyle = className
        ? className + " " + styles.terminal
        : styles.terminal;
    return (
        <article className={terminalStyle}>
            <div className={styles.nav}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
            {children}
        </article>
    );
};

export default Terminal;
