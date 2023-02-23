import React from "react";
import clsx from "clsx";
import styles from "./Feature.module.css";

interface Props {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
}

const Feature: React.FC<Props> = ({ title, Svg, description }) => {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                {/* <Svg className={styles.featureSvg} role="img" /> */}
            </div>
            <div
                className={`text--center padding-horiz--md ${styles["feature__card"]}`}
            >
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Feature;
