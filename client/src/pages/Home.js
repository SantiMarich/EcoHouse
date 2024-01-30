import React from "react";
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";
import FormAgent from "../components/FormAgent";
import FormHouse from "../components/FormHouse";

const Home = () => {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
      <FormAgent />
      <FormHouse />
    </div>
  );
};

export default Home;
