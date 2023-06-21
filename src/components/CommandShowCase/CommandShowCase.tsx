import Typed from "typed.js";
import styles from "./CommandShowCase.module.css";
import React, { useEffect, useRef, useState } from "react";
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
    const [generateFinished, setGenerateFinished] = useState(false);
    const [generateMultipleFinished, setGenerateMultipleFinished] =
        useState(false);
    const {
        siteConfig: { customFields },
    } = useDocusaurusContext();

    const generateContent = (content: string[]) => {
        const components = content.join(", ");
        return (
            <>
                <b className={styles.primaryText}>
                    {customFields.version as string}
                </b>{" "}
                <br />
                <br />
                <span className={styles.tick}>✓</span> Component{" "}
                <span className={styles.created}>{components}</span> created
            </>
        );
    };

    useEffect(() => {
        const typed = new Typed(commandRef.current, {
            strings: [
                "npx arclix generate component Hero",
                "npx arclix generate component Heroes Hero/Heroes",
            ],
            typeSpeed: 65,
            loop: true,
            backDelay: 1000,
            backSpeed: 50,
            onStringTyped: (pos: number) => {
                if (pos == 0) {
                    setGenerateFinished(true);
                    setGenerateMultipleFinished(false);
                } else {
                    setGenerateFinished(false);
                    setGenerateMultipleFinished(true);
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
                                    display: generateFinished
                                        ? "block"
                                        : "none",
                                }}
                                className={styles.terminalPara}
                            >
                                {generateContent(["Hero"])}
                            </p>
                            <p
                                style={{
                                    display: generateMultipleFinished
                                        ? "block"
                                        : "none",
                                }}
                                className={styles.terminalPara}
                            >
                                {generateContent(["Heroes, Heroes/Hero"])}
                            </p>
                        </Terminal>
                    </section>
                </>
                <section className={styles.content}>
                    <h1 className={styles.terminalHeader}>
                        Are You a React Developer?
                    </h1>
                    <p className={styles.contentPara}>
                        Take react component generation to the command line.
                        Component generation is supported in all existing React
                        projects created by:
                    </p>
                    <Tools tools={reactTools} />
                </section>
            </Container>
        </>
    );
};

export default CommandShowCase;
