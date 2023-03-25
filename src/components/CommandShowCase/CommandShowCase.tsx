import Typed from "typed.js";
import styles from "./CommandShowCase.module.css";
import React, { ReactElement, useEffect, useRef, useState } from "react";

const CommandShowCase = () => {
    const commandRef = useRef(null);
    const [createFinished, setCreateFinished] = useState(false);
    const [generateFinished, setGenerateFinished] = useState(false);

    const createContent: ReactElement = (
        <>
            <b className={styles.primaryText}>ARCLIX v0.1.0</b> <br />
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
            <b className={styles.primaryText}>ARCLIX v0.1.0</b> <br />
            <br />
            <span className={styles.tick}>✓</span> Component{" "}
            <span className={styles.created}>Hero</span> created
        </>
    );

    useEffect(() => {
        const typed = new Typed(commandRef.current, {
            strings: [
                "npx arclix create todo",
                "npx arclix generate component Hero",
            ],
            typeSpeed: 50,
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
            <section className={styles.overlayContainer}></section>
            <section className={styles.terminalContainer}>
                <h1 className={styles.terminalHeader}>
                    Take React Creation and Component Generation to the Command
                    Line.
                </h1>
                <article className={styles.terminal}>
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
                            display: generateFinished ? "block" : "none",
                        }}
                        className={styles.terminalPara}
                    >
                        {generateContent}
                    </p>
                </article>
            </section>
        </>
    );
};

export default CommandShowCase;
