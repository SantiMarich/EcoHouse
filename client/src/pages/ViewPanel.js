import React from "react";
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";
import ScrollUp from "../components/ScrollUp";

const ViewPanel = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
      <ScrollUp />
    </div>
  );
};

export default ViewPanel;
