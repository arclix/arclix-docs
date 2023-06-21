import React, { ReactElement } from "react";
import styles from "./MultiComponentShowCase.module.css";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Terminal from "../Terminal/Terminal";
import Container from "../Container/Container";
import List from "../List/List";

const MultiComponentShowCase = () => {
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext();

    const generateContent: ReactElement = (
        <>
            <b className={styles.primaryText}>
                {customFields.version as string}
            </b>{" "}
            <br />
            <br />
            <span className={styles.tick}>✓</span> Component{" "}
            <span className={styles.created}>Heroes, Villain, Heroes/Hero</span>{" "}
            created.
        </>
    );

    return (
        <Container gridTemplateColumns="repeat(2, 1fr)" flexDirection="column">
            <article>
                <h3 className={styles["multi-component__title"]}>
                    Multiple and Nested Components
                </h3>
                <List>
                    <li>Generate nested components.</li>
                    <li>Generate multiple components at once.</li>
                    <li>Share same options for the components.</li>
                </List>
                <Link
                    className={styles["multi-component__btn"]}
                    href="/docs/component-generation/multiple-nested"
                >
                    Learn More ➜
                </Link>
            </article>
            <Terminal>
                <h4 className={styles.terminalHeading}>
                    ${" "}
                    <span className={styles.command}>
                        npx arclix g c Heroes Villain Heroes/Hero
                    </span>
                </h4>
                <p className={styles.terminalPara}>{generateContent}</p>
            </Terminal>
        </Container>
    );
};

export default MultiComponentShowCase;
