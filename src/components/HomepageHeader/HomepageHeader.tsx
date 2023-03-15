import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./HomepageHeader.module.css";

const HomepageHeader = () => {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <article className={`container ${styles.heroContainer}`}>
                <section className={styles.heroSection}>
                    <h3 className={styles.heroTitle}>Arclix</h3>
                    <h3 className={styles.heroTagTitle}>
                        Easy To Use React CLI
                    </h3>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={`button button--secondary button--lg hero__button ${styles.heroButton}`}
                            to="/docs/intro"
                        >
                            GET STARTED
                        </Link>
                        <Link
                            className={`button button--secondary button--lg hero__button ${styles.heroButton} ${styles.githubButton}`}
                            to="https://github.com/arclix/core"
                        >
                            GITHUB
                            <svg
                                width="13.5"
                                height="13.5"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"
                            >
                                <path
                                    fill="currentColor"
                                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </section>
                <img
                    className={styles.heroImg}
                    src="svg/arclix.svg"
                    alt="Arclix Logo"
                />
            </article>
        </header>
    );
};

export default HomepageHeader;
