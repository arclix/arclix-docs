import React, { PropsWithChildren } from "react";
import styles from "./List.module.css";

const List: React.FC<PropsWithChildren> = ({ children }) => {
    return <ul className={styles.list}>{children}</ul>;
};

export default List;
