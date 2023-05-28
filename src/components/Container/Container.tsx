import React, { PropsWithChildren } from "react";
import styles from "./Container.module.css";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface Props extends PropsWithChildren {
    className?: string;
    gridTemplateColumns: string;
    flexDirection: FlexDirection;
}

const Container: React.FC<Props> = ({
    children,
    className,
    flexDirection,
    gridTemplateColumns,
}) => {
    const cls = className
        ? `${styles.container} ${className}`
        : styles.container;
    return (
        <section
            className={`container ${cls}`}
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
