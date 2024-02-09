import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAgent } from "../redux/actions/agentActions";
import UploadWidget from "./UploadWidget";

const AgentForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleImageUpload = (url) => {
    setImage(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAgent = {
      name: name,
      phone: phone,
      image: image,
    };
    dispatch(createAgent(newAgent));

    setName("");
    setPhone("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
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
          placeholder="Nombre"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900"
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
          placeholder="Teléfono"
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
    </form>
  );
};

export default AgentForm;
