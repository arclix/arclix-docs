import React from "react";
import clsx from "clsx";
import styles from "./Feature.module.css";

interface Props {
    title: string;
    img: string;
    description: JSX.Element;
}

const Feature: React.FC<Props> = ({ title, img, description }) => {
    return (
        <div className={clsx("col col--4")}>
            <div className={`padding-horiz--md ${styles["feature__card"]}`}>
                <div className={styles.featureIcon}>
                    <img
                        className={styles.featureImg}
                        src={img}
                        alt="lightning icon"
                    />
                </div>
                <h3>{title}</h3>
                <p className={styles["feature__para"]}>{description}</p>
            </div>
        </div>
    );
};

export default Feature;
