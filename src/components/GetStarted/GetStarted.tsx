import React from "react";
import styles from "./GetStarted.module.css";

const GetStarted = () => {
    return (
        <article className={`container ${styles["get-started"]}`}>
            <img
                className={styles["get-started__img"]}
                src="img/latest_dependency.png"
                alt="get started image"
            />

            <section className={styles["get-started__content"]}>
                <h1 className={styles["get-started__title"]}>
                    Are You a React Developer?
                </h1>
                <p className={styles["get-started__text"]}>
                    If yes then you have arrived at one of the best CLI for
                    component generation and creation.
                </p>
                <p className={styles["get-started__text"]}>
                    When new versions of Arclix are released, you can upgrade
                    using a single command:
                </p>
                <code className={styles["get-started__code"]}>
                    npm install -g arclix@latest
                </code>
            </section>
        </article>
    );
};

export default GetStarted;
