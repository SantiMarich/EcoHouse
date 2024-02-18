import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-green-600 text-4x1 mt-[200px]" />
    );
  }

  if (!Array.isArray(houses) || houses.length === 0) {
    return (
      <div className="text-center text-3x1 text-gray-400 mt-[480px] sm:mt-96 md:mt-48 p-4">
        Lo Sentimos! No Se Encontraron Resultados
      </div>
    );
  }

  return (
    <section className="z-10 mb-20  mt-48 sm:mt-48 md:mt-32 lg:mt-32 xl:mt-32">
      <div className="container mx-auto">
        <button className="scrollup" id="scroll-up" onClick={handleScrollUp}>
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </button>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-y-10 lg:gap-x-0">
          {houses && houses.length > 0 ? (
            houses.map((house) => <House key={house.id} house={house} />)
          ) : (
            <div className="text-center text-3xl text-gray-400 mt-8">
              No se encontraron casas disponibles.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
