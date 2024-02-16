import React, { useContext } from "react";
import LocationDropdown from "./LocationDropdown";
import PropertyDropdown from "./PropertyDropdown";
import CoinDropdown from "./CoinDropdown";
import TransactionDropdown from "./TransactionDropdown";
import { HouseContext } from "./HouseContext";

import { TbArrowsSort } from "react-icons/tb";

const Sort = () => {
  const { handleClick, sortByPrice, setSortByPrice } = useContext(HouseContext);

  const handleSortClick = () => {
    handleClick();
    setSortByPrice(sortByPrice === "lowToHigh" ? "highToLow" : "lowToHigh");
  };

  return (
    <div
      id="search-section"
      className=" shadow-1  z-20 px-[30px] py-8 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg "
    >
      <LocationDropdown />
      <PropertyDropdown />
      <TransactionDropdown />
      <CoinDropdown />
      <button
        onClick={handleSortClick}
        className="bg-green-400 hover:bg-green-300 transition w-full lg:max-w-[72px] h-16 rounded-lg flex justify-center items-center text-white text-[28px] drop-shadow-lg "
      >
        {sortByPrice === "lowToHigh" ? <TbArrowsSort /> : <TbArrowsSort />}
      </button>
    </div>
  );
};

export default Sort;
