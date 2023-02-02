import React from "react";
import { PageLayout } from "../components";

const NotFound: React.FC = () => (
  <PageLayout>
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-[2rem] font-bold">Not Found</h2>
    </div>
  </PageLayout>
);

export default NotFound;
