import React from "react";
import HouseList from "../components/HouseList";

const Favorites = () => {
  return (
    <section
      className="h-full max-auto mb-[320px] sm:mb-[320px] md:mb-[320px] lg:mb-12 xl:mb-12"
      id="banner-section"
    >
      <HouseList />
    </section>
  );
};

export default Favorites;
