import React, { useState, useEffect, useContext } from "react";

import {
  RiArrowLeftRightLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const TransactionDropdown = () => {
  const { transaction, setTransaction, transactions } =
    useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiArrowLeftRightLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[14px] font-medium leadign-tight">
            {transaction}
          </div>
          <div className="text-[12px]">Selección Transacción</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {transactions.map((transaction, index) => {
          return (
            <Menu.Item
              onClick={() => setTransaction(transaction)}
              className="cursor-pointer hover:text-green-700 transition"
              as="li"
              key={index}
            >
              {transaction}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default TransactionDropdown;
