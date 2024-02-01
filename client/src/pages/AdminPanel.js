import React from "react";
import FormHouse from "../components/FormHouse";
import FormAgent from "../components/FormAgent";
import FormLocation from "../components/FormLocation";
import FormProperty from "../components/FormProperty";

const AdminPanel = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-8 p-6 mb-10 w-full">
        <FormHouse className="w-full" />
        <FormAgent className="w-full" />
        <FormLocation className="w-full" />
        <FormProperty className="w-full" />
      </div>
    </div>
  );
};

export default AdminPanel;
