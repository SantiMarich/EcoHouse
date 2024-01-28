import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Ubicación (All)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Propiedad (All)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Precio (All)");
  const [sortByPrice, setSortByPrice] = useState("default");
  const [transaction, setTransaction] = useState("Transacción (All)");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ["Propiedad (All)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const uniqueCountries = ["Ubicación (All)", ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allTransactions = houses.map((house) => {
      return house.transaction;
    });

    const uniqueTransactions = [
      "Transacción (All)",
      ...new Set(allTransactions),
    ];

    setTransactions(uniqueTransactions);
  }, []);

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => str.split(" ").includes("(All)");
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    let newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      const countryMatch = isDefault(country) || house.country === country;
      const propertyMatch = isDefault(property) || house.type === property;
      const priceMatch =
        isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);
      const transactionMatch =
        isDefault(transaction) || house.transaction === transaction;

      return countryMatch && propertyMatch && priceMatch && transactionMatch;
    });

    if (sortByPrice === "highToLow") {
      newHouses.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    } else if (sortByPrice === "lowToHigh") {
      newHouses.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    }
    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
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
