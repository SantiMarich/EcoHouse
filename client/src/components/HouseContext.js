import React, { useEffect, createContext, useState } from "react";
import { getHouses } from "../redux/actions/houseActions";
import { useDispatch, useSelector } from "react-redux";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const houses = useSelector((state) => state.houses.houses);
  const [location, setLocation] = useState("Ubicación (All)");
  const [locations, setLocations] = useState([]);
  const [property, setProperty] = useState("Propiedad (All)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Precio (All)");
  const [sortByPrice, setSortByPrice] = useState("default");
  const [transaction, setTransaction] = useState("Transacción (All)");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  useEffect(() => {
    console.log("Houses:", houses);
    if (Array.isArray(houses)) {
      const allProperties = houses.map((house) => house.type);
      const uniqueProperties = ["Propiedad (All)", ...new Set(allProperties)];
      setProperties(uniqueProperties);
    }
  }, [houses]);

  useEffect(() => {
    console.log("Houses:", houses);
    if (Array.isArray(houses)) {
      const alllocations = houses.map((house) => house.location.name);
      const uniquelocations = ["Ubicación (All)", ...new Set(alllocations)];
      setLocations(uniquelocations);
    }
  }, [houses]);

  useEffect(() => {
    console.log("Houses:", houses);
    if (Array.isArray(houses)) {
      const allTransactions = houses.map((house) => house.transaction);
      const uniqueTransactions = [
        "Transacción (All)",
        ...new Set(allTransactions),
      ];
      setTransactions(uniqueTransactions);
    }
  }, [houses]);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => str.split(" ").includes("(All)");
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    let newHouses = houses.filter((house) => {
      const housePrice = parseInt(house.price);
      const locationMatch =
        isDefault(location) || house.location.name === location.name;
      const propertyMatch = isDefault(property) || house.type === property;
      const priceMatch =
        isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);
      const transactionMatch =
        isDefault(transaction) || house.transaction === transaction;

      return locationMatch && propertyMatch && priceMatch && transactionMatch;
    });

    if (sortByPrice === "highToLow") {
      newHouses.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    } else if (sortByPrice === "lowToHigh") {
      newHouses.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    }

    setLoading(false);
  };

  return (
    <HouseContext.Provider
      value={{
        location,
        setLocation,
        locations,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        sortByPrice,
        setSortByPrice,
        transaction,
        setTransaction,
        transactions,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
