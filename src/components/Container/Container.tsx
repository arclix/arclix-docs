import React, { PropsWithChildren } from "react";
import styles from "./Container.module.css";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface Props extends PropsWithChildren {
    gridTemplateColumns: string;
    flexDirection: FlexDirection;
}

const Container: React.FC<Props> = ({
    children,
    flexDirection,
    gridTemplateColumns,
}) => {
    return (
        <section
            className={`container ${styles.container}`}
            style={{
                gridTemplateColumns,
                flexDirection,
            }}
        >
            {children}
        </section>
    );
};

export default Container;
