import React, { useEffect, createContext, useState } from "react";
import { getHouses, filterHouses } from "../redux/actions/houseActions";
import { useDispatch, useSelector } from "react-redux";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const houses = useSelector((state) => state.houses.houses);
  const filteredHouses = useSelector((state) => state.houses.filteredHouses);
  const [location, setLocation] = useState("Ubicación (Todas)");
  const [locations, setLocations] = useState([]);
  const [property, setProperty] = useState("Propiedad (Todas)");
  const [properties, setProperties] = useState([]);
  const [coin, setCoin] = useState("Moneda (Todas)");
  const [price, setPrice] = useState("Precio (Todas)");
  const [transaction, setTransaction] = useState("Operación (Todas)");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortByPrice, setSortByPrice] = useState("default");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(houses)) {
      const allProperties = houses.map((house) => house.type);
      const uniqueProperties = ["Propiedad (Todas)", ...new Set(allProperties)];
      setProperties(uniqueProperties);

      const allLocations = houses.map(
        (house) => house.location && house.location.name
      );
      const uniqueLocations = ["Ubicación (Todas)", ...new Set(allLocations)];
      setLocations(uniqueLocations);

      const allTransactions = houses.map((house) => house.transaction);
      const uniqueTransactions = [
        "Operación (Todas)",
        ...new Set(allTransactions),
      ];
      setTransactions(uniqueTransactions);

      handleClick();
    }
  }, [houses]);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) =>
      typeof str === "string" && str.split(" ").includes("(Todas)");

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    let newHouses = houses.filter((house) => {
      const housePrice = parseInt(house.price);
      const locationMatch =
        isDefault(location) || house.location.name === location;
      const propertyMatch = isDefault(property) || house.type === property;
      const priceMatch =
        isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);
      const transactionMatch =
        isDefault(transaction) || house.transaction === transaction;
      const coinMatch = isDefault(coin) || house.moneda === coin;

      return (
        locationMatch &&
        propertyMatch &&
        priceMatch &&
        transactionMatch &&
        coinMatch
      );
    });

    if (sortByPrice === "highToLow") {
      newHouses.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    } else if (sortByPrice === "lowToHigh") {
      newHouses.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    }

    dispatch(filterHouses(newHouses));
    setLoading(false);
  };

  useEffect(() => {
    handleClick();
  }, [location, property, coin, price, transaction, sortByPrice]);

  return (
    <HouseContext.Provider
      value={{
        location,
        setLocation,
        locations,
        property,
        setProperty,
        properties,
        coin,
        setCoin,
        price,
        setPrice,
        transaction,
        setTransaction,
        transactions,
        houses: filteredHouses,
        loading,
        handleClick,
        sortByPrice,
        setSortByPrice,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
