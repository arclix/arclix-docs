import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageHeader from "../components/HomepageHeader/HomepageHeader";
import GetStarted from "../components/GetStarted/GetStarted";
import Tools from "../components/Tools/Tools";

export default function Home(): JSX.Element {
    return (
        <Layout
            title=""
            description="An Open Source CLI with Creation and Component Generation for React. <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <GetStarted />
                <Tools />
            </main>
        </Layout>
    );
}
