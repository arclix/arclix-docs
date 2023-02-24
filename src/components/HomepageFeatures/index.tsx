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
                instantly initiate your work by creating a new project.
            </>
        ),
    },
    {
        title: "Rich Features",
        img: "img/tool.png",
        description: (
            <>
                Out of the box support for Component Generation, TypeScript,
                CSS, SCSS/SASS, Test and more.
            </>
        ),
    },
    {
        title: "Trusty Dependencies",
        img: "img/trust.png",
        description: (
            <>
                We use Create React App, TypeScript and SASS under the hood,
                which are reliable, well maintained and widely used.
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
