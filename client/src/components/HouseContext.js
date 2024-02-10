import React, { useState, useEffect, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHouses } from "../redux/actions/houseActions";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const { houses, loading } = useSelector((state) => state.houses);
  const dispatch = useDispatch();

  const [country, setCountry] = useState("Ubicación (All)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Propiedad (All)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Precio (All)");
  const [sortByPrice, setSortByPrice] = useState("default");
  const [transaction, setTransaction] = useState("Transacción (All)");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ["Propiedad (All)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ["Ubicación (All)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    const allTransactions = houses.map((house) => house.transaction);
    const uniqueTransactions = [
      "Transacción (All)",
      ...new Set(allTransactions),
    ];
    setTransactions(uniqueTransactions);
  }, [houses]);

  const handleClick = () => {
    // Este método de handleClick ya no es necesario ya que las casas se obtienen de Redux
    // y cualquier filtrado debería hacerse en las acciones de Redux
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
