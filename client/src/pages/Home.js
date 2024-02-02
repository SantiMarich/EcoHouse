import React from "react";
import ViewPanel from "./ViewPanel";
import AdminPanel from "./AdminPanel";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <ViewPanel />
      <AdminPanel />
    </div>
  );
};

export default Home;
