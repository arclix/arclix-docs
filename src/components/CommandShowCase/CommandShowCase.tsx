import Typed from "typed.js";
import styles from "./CommandShowCase.module.css";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Terminal from "../Terminal/Terminal";
import Container from "../Container/Container";
import Tools from "../Tools/Tools";

const reactTools = [
    {
        name: "Vite",
        img: "https://vitejs.dev/logo-with-shadow.png",
        link: "https://vitejs.dev/",
    },
    {
        name: "Next",
        img: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
        link: "https://nextjs.org/",
    },
    {
        name: "Remix",
        img: "img/remix.png",
        link: "https://remix.run/",
    },
    {
        name: "Gatsby",
        img: "img/gatsby.png",
        link: "https://www.gatsbyjs.com/",
    },
    {
        name: "Expo",
        img: "img/expo.png",
        link: "https://expo.dev/",
    },
    {
        name: "CRA",
        img: "https://create-react-app.dev/img/logo.svg",
        link: "https://create-react-app.dev/",
    },
];

const CommandShowCase = () => {
    const commandRef = useRef(null);
    const [createFinished, setCreateFinished] = useState(false);
    const [generateFinished, setGenerateFinished] = useState(false);
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext();

    const createContent: ReactElement = (
        <>
            <b className={styles.primaryText}>
                {customFields.version as string}
            </b>{" "}
            <br />
            <br />
            <span className={styles.question}>? </span> What template would you
            like to use? <span className={styles.answer}>TypeScript</span>{" "}
            <br />
            <span className={styles.question}>? </span> What styling would you
            like to use? <span className={styles.answer}>SCSS/SASS</span>
            <br />
            <span className={styles.tick}>✓</span> Finished installing
            dependencies <br />
            <span className={styles.tick}>✓</span> Finished installing
            additional dependencies <br />
            <span className={styles.tick}>✓</span> Finished creating{" "}
            <b className={styles.primaryText}>React.JS </b>
            project <br />
            <br />
            To run the project <br />
            &nbsp;- cd todo <br />
            &nbsp;- npm start <br />
        </>
    );

    const generateContent: ReactElement = (
        <>
            <b className={styles.primaryText}>
                {customFields.version as string}
            </b>{" "}
            <br />
            <br />
            <span className={styles.tick}>✓</span> Component{" "}
            <span className={styles.created}>Hero</span> created
        </>
    );

    useEffect(() => {
        const typed = new Typed(commandRef.current, {
            strings: [
                "npx arclix@latest create todo",
                "npx arclix@latest generate component Hero",
            ],
            typeSpeed: 65,
            loop: true,
            backDelay: 1000,
            backSpeed: 50,
            onStringTyped: (pos: number) => {
                if (pos == 0) {
                    setCreateFinished(true);
                    setGenerateFinished(false);
                } else {
                    setCreateFinished(false);
                    setGenerateFinished(true);
                }
            },
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <Container
                gridTemplateColumns="2fr 1.5fr"
                flexDirection="column-reverse"
            >
                <>
                    <section className={styles.overlayContainer}></section>
                    <section className={styles.terminalContainer}>
                        <Terminal className={styles.terminal}>
                            <h4 className={styles.terminalHeading}>
                                ${" "}
                                <span
                                    ref={commandRef}
                                    className={styles.command}
                                ></span>
                            </h4>

                            <p
                                style={{
                                    display: createFinished ? "block" : "none",
                                }}
                                className={styles.terminalPara}
                            >
                                {createContent}
                            </p>
                            <p
                                style={{
                                    display: generateFinished
                                        ? "block"
                                        : "none",
                                }}
                                className={styles.terminalPara}
                            >
                                {generateContent}
                            </p>
                        </Terminal>
                    </section>
                </>
                <section className={styles.content}>
                    <h1 className={styles.terminalHeader}>
                        Are You a React Developer?
                    </h1>
                    <p className={styles.contentPara}>
                        Take react creation and component generation to the
                        command line. Component generation is supported in all
                        existing React projects created by:
                    </p>
                    <Tools tools={reactTools} />
                </section>
            </Container>
        </>
    );
};

export default CommandShowCase;
