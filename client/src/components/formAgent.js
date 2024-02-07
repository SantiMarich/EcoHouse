import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAgent } from "../redux/actions/agentActions";
import UploadWidget from "./UploadWidget";

const AgentForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(""); // Estado para almacenar la URL de la imagen

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleImageUpload = (url) => {
    setImage(url); // Almacena la URL de la imagen cargada
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAgent = {
      name: name,
      phone: phone,
      image: image, // Pasamos la URL de la imagen al crear un nuevo agente
    };
    dispatch(createAgent(newAgent));
    // Aquí puedes restablecer los campos del formulario si es necesario
    setName("");
    setPhone("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
      </div>
      <div>
        <label>Cargar Imagen:</label>
        <UploadWidget onImageUpload={handleImageUpload} />
      </div>
      <button type="submit">Crear Agente</button>
    </form>
  );
};

export default AgentForm;
