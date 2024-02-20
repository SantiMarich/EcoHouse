import React, { useContext } from "react";
import { useSelector } from "react-redux";
import House from "./House";
import { HouseContext } from "../components/HouseContext";

const FavoritesList = () => {
  const favoriteHouseIds = useSelector((state) => state.houses.favorites);
  const allHouses = useSelector((state) => state.houses.houses);
  const { location, property, coin, price, transaction, sortByPrice } =
    useContext(HouseContext);

  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  };

  const favoriteHouses = allHouses.filter((house) =>
    favoriteHouseIds.includes(house.id)
  );

  const filteredFavoriteHouses = favoriteHouses.filter((house) => {
    return (
      (location === "Ubicación (Todas)" || house.location.name === location) &&
      (property === "Propiedad (Todas)" || house.type === property) &&
      (coin === "Moneda (Todas)" || house.moneda === coin) &&
      (price === "Precio (Todas)" ||
        (parseInt(house.price) >= parseInt(price.split(" ")[0]) &&
          parseInt(house.price) <= parseInt(price.split(" ")[2]))) &&
      (transaction === "Transacción (Todas)" ||
        house.transaction === transaction)
    );
  });

  const sortedFavoriteHouses = [...filteredFavoriteHouses].sort((a, b) => {
    if (sortByPrice === "highToLow") {
      return parseInt(b.price) - parseInt(a.price);
    } else if (sortByPrice === "lowToHigh") {
      return parseInt(a.price) - parseInt(b.price);
    } else {
      return 0;
    }
  });

  if (!sortedFavoriteHouses || sortedFavoriteHouses.length === 0) {
    return (
      <div className="text-center text-3x1 text-gray-400 mt-48 mb-48 px-10">
        Lo Sentimos! No Se Encontraron Resultados. Selecciona tus propiedades
        favoritas para que aparezcan aqui.
      </div>
    );
  }

  return (
    <section className="z-10 mb-20">
      <div className="container mx-auto">
        <button className="scrollup" id="scroll-up" onClick={handleScrollUp}>
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </button>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-y-10 lg:gap-x-0">
          {sortedFavoriteHouses.map((house, index) => (
            <House key={index} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavoritesList;
