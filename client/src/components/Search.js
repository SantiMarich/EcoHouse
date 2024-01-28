import React, { useContext } from "react";

import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceDropdown from "./PriceDropdown";
import TransactionDropdown from "./TransactionDropdown";

import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div
      id="search-section"
      className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg"
    >
      <CountryDropdown />
      <PropertyDropdown />
      <TransactionDropdown />
      <PriceDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-green-400 hover:bg-green-500 transition w-full lg:max-w-[72px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
