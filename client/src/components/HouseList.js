import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-green-500 text-4x1 mt-[200px]" />
    );
  }

  if (!Array.isArray(houses) || houses.length === 0) {
    return (
      <div className="text-center text-3x1 text-gray-400 mt-48">
        Lo Sentimos! No Se Encontraron Resultados
      </div>
    );
  }

  return (
    <section className="z-10 mb-20">
      <div className="container mx-auto">
        <button className="scrollup" id="scroll-up" onClick={handleScrollUp}>
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </button>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link
                to={`/property/${house.id}`}
                key={index}
                onClick={handleScrollUp}
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
