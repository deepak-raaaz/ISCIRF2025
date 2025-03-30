import React from "react";
import AboutHIT from "@/components/landing-page/AboutHIT";
import Breadcrumb from "@/components/shared/Breadcrumb";
const Hit = () => {
  return (
    <main className="bg-blue-50 pt-24">
        <Breadcrumb className="mb-8" />
      <AboutHIT />
    </main>
  );
};

export default Hit;
