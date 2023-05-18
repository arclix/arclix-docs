import React from "react";
import styles from "./ConfigShowCase.module.css";
import Container from "../Container/Container";
import Terminal from "../Terminal/Terminal";

const configTemplate = {
    flat: false,
    addStory: false,
    addIndex: false,
    skipTest: false,
    scopeStyle: false,
    template: "tsx",
    defaultPath: "./",
};

const ConfigShowCase = () => {
    return (
        <Container
            gridTemplateColumns="1.5fr 2fr"
            flexDirection="column-reverse"
        >
            <Terminal>
                <span style={{ color: "white" }}>{"{\n"}</span>
                <br />
                {Object.keys(configTemplate).map((key) => {
                    return (
                        <>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <span key={key}>
                                <span
                                    className={styles.key}
                                >{`"${key}": `}</span>
                                <span
                                    className={styles.value}
                                >{`${configTemplate[key]}\n`}</span>
                            </span>
                            <br />
                        </>
                    );
                })}
                <span style={{ color: "white" }}>{"}"}</span>
            </Terminal>

            <section className={styles["config__content"]}>
                <h1 className={styles["config__title"]}>
                    Configure Arclix Generation CLI
                </h1>
                <p className={styles["config__text"]}>
                    Tired of adding flags like "--flat", "--path", etc. to the
                    command ?
                </p>
                <p className={styles["config__text"]}>
                    Configure the generation part of the CLI by creating
                    <b>
                        {" "}
                        <i>arclix.config.json</i>
                    </b>{" "}
                    either manually or by the following command:
                </p>
                <code className={styles["config__code"]}>
                    npx arclix@latest init
                </code>
            </section>
        </Container>
    );
};

export default ConfigShowCase;
