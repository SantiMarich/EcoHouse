import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createLocation } from "../redux/actions/locationActions";

const LocationForm = () => {
  const dispatch = useDispatch();
  const [locationName, setLocationName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!locationName.trim()) {
      setErrorMessage("El nombre de la ubicación no puede estar vacío.");
      return;
    }

    dispatch(createLocation({ name: locationName }))
      .then(() => {
        setSuccessMessage("¡Ubicación creada exitosamente!");
        setErrorMessage("");
        setLocationName("");
      })
      .catch((error) => {
        setErrorMessage("Hubo un problema al crear la ubicación.");
        setSuccessMessage("");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Ubicación
        </label>
        <input
          type="text"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          className="border border-gray-300 focus:border-green-600 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: Salta"
          required
        />
      </div>
      <div className="mb-5">
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-700 text-white rounded p-2.5 text-sm w-full transition"
        >
          Crear Ubicación
        </button>
      </div>
      {successMessage && (
        <p className="text-green-600 text-xs text-center">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 text-xs text-center">{errorMessage}</p>
      )}
    </form>
  );
};

export default LocationForm;
