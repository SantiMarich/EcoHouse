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
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ubicación"
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
    </form>
  );
};

export default LocationForm;
