import React from "react";
import styles from "./ConfigShowCase.module.css";
import Container from "../Container/Container";
import Terminal from "../Terminal/Terminal";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";

const configTemplate = {
    cssPreprocessor: "css",
    usesTypeScript: true,
    scopeStyle: false,
    addStory: false,
    addIndex: false,
    addTest: false,
    flat: false,
    path: "./",
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
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span className={styles.key}>"default": </span>
                <span style={{ color: "white" }}>{"{\n"}</span>
                <br />
                {Object.keys(configTemplate).map((key) => {
                    return (
                        <article key={key}>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <span>&nbsp;&nbsp;&nbsp;</span>
                            <span>
                                <span
                                    className={styles.key}
                                >{`"${key}": `}</span>
                                <span
                                    className={styles.value}
                                >{`${configTemplate[key]}\n`}</span>
                            </span>
                            <br />
                        </article>
                    );
                })}
                <span>&nbsp;&nbsp;&nbsp;</span>
                <span style={{ color: "white" }}>{"}\n"}</span>
                <br />
                <span style={{ color: "white" }}>{"}"}</span>
            </Terminal>

            <section className={styles["config__content"]}>
                <h1 className={styles["config__title"]}>
                    Configure Arclix Generation CLI
                </h1>
                <p className={styles["config__text"]}>
                    Tired of adding flags like <code>--flat</code>,{" "}
                    <code>--path</code>, etc. to the command ?
                </p>
                <p className={styles["config__text"]}>
                    Configure the generation part of the CLI by creating{" "}
                    <code>
                        <b>
                            <i>arclix.config.json</i>
                        </b>{" "}
                    </code>
                    either manually or by the following command:
                </p>
                <CodeBlock>npx arclix init</CodeBlock>
                <p className={styles["config__text"]}>
                    Create own dynamic component type and define their own
                    configuration in the config file and{" "}
                    <Link href="/docs/arclix-configuration/dynamic-component-types">
                        more
                    </Link>
                    .
                </p>
                <Link
                    className={styles["config__btn"]}
                    href="/docs/category/arclix-cli-configuration"
                >
                    Learn More ➜
                </Link>
            </section>
        </Container>
    );
};

export default ConfigShowCase;
