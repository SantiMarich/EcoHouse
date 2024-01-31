import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-green-500 text-4x1 mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3x1 text-gray-400 mt-48">
        Sorry, Nothing Found
      </div>
    );
  }

  const handleDetail = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className="z-auto mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link
                to={`/property/${house.id}`}
                key={index}
                onClick={handleDetail}
              >
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
