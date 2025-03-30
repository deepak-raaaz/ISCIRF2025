import React from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AboutDepartment from "@/components/landing-page/AboutDepartment";
const Hit = () => {
  return (
    <main className="bg-white pt-24">
        <Breadcrumb className="mb-8" />
      <AboutDepartment />
    </main>
  );
};

export default Hit;
