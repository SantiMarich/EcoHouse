import React from "react";
import FormHouse from "../components/FormHouse";
import FormAgent from "../components/FormAgent";

const AdminPanel = () => {
  return (
    <div className="min-h-[1800px]">
      <FormHouse />
      <FormAgent />
    </div>
  );
};

export default AdminPanel;
