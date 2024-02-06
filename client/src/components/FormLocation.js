import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createLocation } from "../redux/actions/locationActions";

const LocationForm = () => {
  const dispatch = useDispatch();
  const [locationName, setLocationName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!locationName.trim()) return;
    dispatch(createLocation({ name: locationName }));
    setLocationName("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          className="flex-1 appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Nombre de la Ubicación"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Crear Ubicación
        </button>
      </div>
    </form>
  );
};

export default LocationForm;
