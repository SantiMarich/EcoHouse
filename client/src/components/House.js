// import React, { useState, useEffect } from "react";
// import { MdBedtime } from "react-icons/md";
// import { IoMdWater } from "react-icons/io";
// import { FaExpandArrowsAlt } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleFavoriteHouse } from "../redux/actions/houseActions";
// import { Link } from "react-router-dom";

// const House = ({ house }) => {
//   const {
//     id,
//     name,
//     imagePortada,
//     type,
//     address,
//     bedrooms,
//     bathrooms,
//     surface,
//     price,
//     moneda,
//     transaction,
//   } = house;
//   const locationName = house && house.location && house.location.name;
//   const formatNumber = (number) => {
//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//   };

//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.houses.favorites);
//   const isFavorite = favorites.includes(id);

//   const toggleFavorite = () => {
//     dispatch(toggleFavoriteHouse(id));
//   };

//   return (
//     <div className="house-card">
//       <div className="bg-white shadow-1 drop-shadow-md p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:drop-shadow-xl transition">
//         <Link to={`/property/${id}`} className="house-link">
//           <div className="relative overflow-hidden w-[315px] h-[315px] rounded-tl-[80px] rounded-tr-lg rounded-br-[80px] rounded-bl-lg mb-8">
//             <img
//               className="object-cover object-center w-full h-full rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg hover:scale-105 transition-scale duration-300"
//               src={imagePortada}
//               alt=""
//             />
//           </div>
//           <div className="mb-8 flex gap-x-2 text-xs">
//             <div className="bg-green-700 rounded-sm text-white px-3">
//               {type}
//             </div>
//             <div className="bg-green-500 rounded-sm text-white px-3">
//               {locationName}
//             </div>
//             <div className="bg-green-800 rounded-sm text-white px-3">
//               {transaction}
//             </div>
//           </div>
//           <div className="text-xl font-semibold max-w-[260px] mb-2">{name}</div>
//           <div className="text-xs font-nromal max-w-[260px] text-green-800">
//             {address}
//           </div>
//           <div className="flex gap-x-2 my-2">
//             <div className="flex items-center gap-1">
//               <div className="text-[14px] mr-1 text-green-300">
//                 <MdBedtime />
//               </div>
//               <div className="text-[14px] mr-1 text-gray-600">{bedrooms}</div>
//             </div>
//             <div className="flex items-center  gap-1">
//               <div className="text-[14px] mr-1 text-green-300">
//                 <IoMdWater />
//               </div>
//               <div className="text-[14px] mr-1 text-gray-600">{bathrooms}</div>
//             </div>
//             <div className="flex items-center  gap-1">
//               <div className="text-[14px] mr-1 text-green-300">
//                 <FaExpandArrowsAlt className="font-bold" />
//               </div>
//               <div className="text-[14px] mr-1 text-gray-600">{surface} m²</div>
//             </div>
//           </div>
//           <div className="text-lg font-semibold text-green-500 mb-4 flex flex-row items-center justify-between">
//             {price ? (
//               <>
//                 {moneda} {formatNumber(Number(price))}
//               </>
//             ) : (
//               <span className="text-sm font-semibold text-green-500 mb-4">
//                 Consultar
//               </span>
//             )}
//           </div>
//         </Link>
//         <button
//           onClick={toggleFavorite}
//           className="absolute flex favorite-button bottom-10 right-8"
//         >
//           {isFavorite ? (
//             <FaHeart className="text-green-400 text-xl hover:text-2xl" />
//           ) : (
//             <FaRegHeart className="text-green-400 text-xl hover:text-[22px]" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default House;

import React, { useState, useEffect } from "react";
import { MdBedtime } from "react-icons/md";
import { IoMdWater } from "react-icons/io";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavoriteHouse } from "../redux/actions/houseActions";
import { Link } from "react-router-dom";

const House = ({ house }) => {
  const {
    id,
    name,
    imagePortada,
    type,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
    moneda,
    transaction,
  } = house;
  const locationName = house && house.location && house.location.name;
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.houses.favorites);
  const isFavorite = favorites.includes(id);

  const toggleFavorite = () => {
    dispatch(toggleFavoriteHouse(id));
  };

  return (
    <div className="house-card">
      <div className="bg-white shadow-1 drop-shadow-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
        <Link to={`/property/${id}`} className="house-link">
          <div className="relative overflow-hidden w-[352px] h-[352px] ">
            <img
              className="absolute top-0 left-0 object-cover object-center w-full h-full"
              src={imagePortada}
              alt=""
            />
          </div>
          <div className="p-5">
            <div className="mb-4 flex gap-x-2 text-xs">
              <div className="bg-green-700 rounded-sm text-white px-3">
                {type}
              </div>
              <div className="bg-green-500 rounded-sm text-white px-3">
                {locationName}
              </div>
              <div className="bg-green-800 rounded-sm text-white px-3">
                {transaction}
              </div>
            </div>
            <div className="text-xl font-semibold max-w-[260px] mb-2">
              {name}
            </div>
            <div className="text-xs font-nromal max-w-[260px] text-green-800">
              {address}
            </div>
            <div className="flex gap-x-2 my-2">
              <div className="flex items-center gap-1">
                <div className="text-[14px] mr-1 text-green-300">
                  <MdBedtime />
                </div>
                <div className="text-[14px] mr-1 text-gray-600">{bedrooms}</div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="text-[14px] mr-1 text-green-300">
                  <IoMdWater />
                </div>
                <div className="text-[14px] mr-1 text-gray-600">
                  {bathrooms}
                </div>
              </div>
              <div className="flex items-center  gap-1">
                <div className="text-[14px] mr-1 text-green-300">
                  <FaExpandArrowsAlt className="font-bold" />
                </div>
                <div className="text-[14px] mr-1 text-gray-600">
                  {surface} m²
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold text-green-500 flex flex-row items-center justify-between">
              {price ? (
                <>
                  {moneda} {formatNumber(Number(price))}
                </>
              ) : (
                <span className="text-sm font-semibold text-green-500 mb-4">
                  Consultar
                </span>
              )}
            </div>
          </div>
        </Link>
        <button
          onClick={toggleFavorite}
          className="absolute flex favorite-button bottom-[26px] right-8"
        >
          {isFavorite ? (
            <FaHeart className="text-green-400 text-lg hover:text-xl" />
          ) : (
            <FaRegHeart className="text-green-400 text-lg hover:text-xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default House;
