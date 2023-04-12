import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import GetStarted from "../components/ConfigShowCase/ConfigShowCase";
import Tools from "../components/ToolsList/ToolsList";
import CommandShowCase from "../components/CommandShowCase/CommandShowCase";
import MultiComponentShowCase from "../components/MultiComponentShowCase/MultiComponentShowCase";

export default function Home(): JSX.Element {
    return (
        <Layout
            title=""
            description="An Open Source CLI with Creation and Component Generation for React. <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <CommandShowCase />
                <MultiComponentShowCase />
                <GetStarted />
                <Tools />
            </main>
        </Layout>
    );
}
