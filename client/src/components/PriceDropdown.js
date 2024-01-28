import React, { useState, useContext } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceDropDown = () => {
  const { sortByPrice, setSortByPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (order) => {
    setSortByPrice(order);
    setIsOpen(false);
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary mr-5" />
        <div className="flex flex-col">
          <div
            className="text-[14px] font-medium leading-tight flex flex-col mb-[0.75px]
          "
          >
            {sortByPrice === "highToLow"
              ? "Mayor a Menor"
              : sortByPrice === "lowToHigh"
              ? "Menor a Mayor"
              : "Precios (All)"}
          </div>
          <div className="text-[12px] flex flex-col mb-[1px]">
            Ordenar Precios
          </div>
        </div>

        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        <Menu.Item
          as="li"
          onClick={() => handleSort("all")}
          className="cursor-pointer hover:text-green-700 transition"
        >
          Precios (All)
        </Menu.Item>
        <Menu.Item
          as="li"
          onClick={() => handleSort("highToLow")}
          className="cursor-pointer hover:text-green-700 transition"
        >
          Mayor a Menor
        </Menu.Item>
        <Menu.Item
          as="li"
          onClick={() => handleSort("lowToHigh")}
          className="cursor-pointer hover:text-green-700 transition"
        >
          Menor a Mayor
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default PriceDropDown;
