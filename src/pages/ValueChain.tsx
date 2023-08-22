import React, { useLayoutEffect } from "react";
import { PageLayout } from "../components";

const ValueChain: React.FC = () => {
    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <PageLayout>

        </PageLayout>
    );
};

export default ValueChain;