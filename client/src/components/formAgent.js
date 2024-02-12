import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAgent } from "../redux/actions/agentActions";
import UploadWidget from "./UploadWidget";

const AgentForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleImageUpload = (url) => {
    setImageUrl(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phonePattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;

    if (!name.trim() || !phone.trim() || !imageUrl.trim()) {
      setErrorMessage("Por favor completa todos los campos.");
      return;
    }

    if (!phonePattern.test(phone)) {
      setErrorMessage("Por favor ingresa un número de teléfono válido.");
      return;
    }

    try {
      const newAgent = {
        name: name,
        phone: phone,
        image: imageUrl,
      };
      await dispatch(createAgent(newAgent));
      setSuccessMessage("¡Agente creado exitosamente!");
      setErrorMessage("");
      setName("");
      setPhone("");
      setImageUrl("");
    } catch (error) {
      setErrorMessage("¡Hubo un problema al crear el agente!");
      setSuccessMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: Sebastian Marich"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: +543513838890"
        />
      </div>

      <div className="mb-5">
        <UploadWidget onImageUpload={handleImageUpload} />
      </div>

      <div className="mb-5">
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-700 text-white rounded p-2.5 text-sm w-full transition"
        >
          Crear Agente
        </button>
      </div>
      {successMessage && (
        <p className="text-green-500 text-xs text-center">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-500 text-xs text-center">{errorMessage}</p>
      )}
    </form>
  );
};

export default AgentForm;
