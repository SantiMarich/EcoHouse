import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const {
    image,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
    transaction,
  } = house;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <div className="relative overflow-hidden w-[315px] h-[315px] rounded-tl-[80px] rounded-tr-lg rounded-br-[80px] rounded-bl-lg mb-8">
        <img
          className="object-cover object-center w-full h-full rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg"
          src={image}
          alt=""
        />
      </div>
      <div className="mb-8 flex gap-x-2 text-xs">
        <div className="bg-green-700 rounded-md text-white px-3">{type}</div>
        <div className="bg-green-500 rounded-md text-white px-3">{country}</div>
        <div className="bg-green-800 rounded-md text-white px-3">
          {transaction}
        </div>
      </div>
      <div className="text-[16px] font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-2 my-2">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[12px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[12px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[12px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-green-500 mb-4">$ {price}</div>
    </div>
  );
};

export default House;
