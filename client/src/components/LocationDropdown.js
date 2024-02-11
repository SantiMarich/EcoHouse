import React, { useState, useEffect, useContext } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const LocationDropdown = () => {
  const { location, setLocation, locations } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[14px] font-medium leadign-tight">
            {location}
          </div>
          <div className="text-[12px]">Selección Ubicación</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {locations.map((location, index) => {
          return (
            <Menu.Item
              onClick={() => setLocation(location)}
              className="cursor-pointer hover:text-green-700 transition"
              as="li"
              key={index}
            >
              {location}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default LocationDropdown;
