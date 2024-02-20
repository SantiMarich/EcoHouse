import React, { useState, useContext } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CoinDropDown = () => {
  const { coin, setCoin } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyFilter = (currency) => {
    setCoin(currency === "All" ? "Moneda (All)" : currency);
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
          <div className="text-[13px] font-medium leading-tight flex flex-col mb-[0.75px]">
            {coin}
          </div>
          <div className="text-[12px] flex flex-col mb-[1px]">
            Ordenar Moneda
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
          onClick={() => handleCurrencyFilter("Moneda (All)")}
          className="cursor-pointer hover:text-green-800 transition"
        >
          Moneda (All)
        </Menu.Item>
        <Menu.Item
          as="li"
          onClick={() => handleCurrencyFilter("$")}
          className="cursor-pointer hover:text-green-800 transition"
        >
          $ (Pesos)
        </Menu.Item>
        <Menu.Item
          as="li"
          onClick={() => handleCurrencyFilter("U$D")}
          className="cursor-pointer hover:text-green-800 transition"
        >
          U$D (Dólares)
        </Menu.Item>
        <Menu.Item
          as="li"
          onClick={() => handleCurrencyFilter("€")}
          className="cursor-pointer hover:text-green-800 transition"
        >
          € (Euros)
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default CoinDropDown;
