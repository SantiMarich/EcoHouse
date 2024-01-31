import React from "react";
import FormHouse from "../components/FormHouse";
import FormAgent from "../components/FormAgent";
import FormLocation from "../components/FormLocation";

const AdminPanel = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-14 p-6">
        <FormHouse />
        <FormAgent />
        <FormLocation />
      </div>
    </div>
  );
};

export default AdminPanel;
