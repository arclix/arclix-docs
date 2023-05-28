import React from "react";
import Feature from "../Feature/Feature";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    img: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Easy to Use",
        img: "img/lightning.png",
        description: (
            <>
                Learning or configuring anything new is not necessary. You can
                instantly generate component in any React project.
            </>
        ),
    },
    {
        title: "Rich Features",
        img: "img/tool.png",
        description: (
            <>
                Out of the box support for Component Generation, TypeScript, CSS
                preprocessors, Storybook, Test and more.
            </>
        ),
    },
    {
        title: "Flexible Config",
        img: "img/config.png",
        description: (
            <>
                Configure how Arclix CLI should generate components according to
                your needs by creating arclix config file.
            </>
        ),
    },
];

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
