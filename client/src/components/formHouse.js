import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHouse } from "../redux/actions/houseActions";
import { getAgents } from "../redux/actions/agentActions";
import { getLocations } from "../redux/actions/locationActions";
import UploadWidget from "./UploadWidget";

const HouseForm = () => {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents);
  const locations = useSelector((state) => state.locations);
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    description: "",
    image: "",
    imagePortada: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    surface: "",
    year: "",
    price: "",
    moneda: "",
    monedatext: "",
    modo: "",
    transaction: "",
    agentId: "",
    locationId: "",
  });

  useEffect(() => {
    dispatch(getAgents());
    dispatch(getLocations());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (url) => {
    setFormData({
      ...formData,
      image: url,
      imagePortada: url,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createHouse(formData));
    setFormData({
      type: "",
      name: "",
      description: "",
      image: "",
      imagePortada: "",
      address: "",
      bedrooms: "",
      bathrooms: "",
      surface: "",
      year: "",
      price: "",
      moneda: "",
      monedatext: "",
      modo: "",
      transaction: "",
      agentId: "",
      locationId: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="type">Tipo:</label>
        <select
          type="text"
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Terreno">Terreno</option>
          <option value="Local">Local Comercial</option>
          <option value="Cochera">Cochera</option>
          <option value="Oficina">Oficina</option>
          <option value="Campo">Campo</option>
          <option value="Galpon">Galpón</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Cargar Imagen:</label>
        <UploadWidget onImageUpload={handleImageUpload} />
      </div>
      <div>
        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="bedrooms">Dormitorios:</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="bathrooms">Baños:</label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="surface">Superficie:</label>
        <input
          type="number"
          id="surface"
          name="surface"
          value={formData.surface}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="year">Año de Construcción:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="moneda">Moneda:</label>
        <select
          type="text"
          id="moneda"
          name="moneda"
          value={formData.moneda}
          onChange={handleChange}
          required
        >
          <option value="Dolar">U$D</option>
          <option value="Pesos">$</option>
          <option value="Euros">€</option>
        </select>
      </div>
      <div>
        <label htmlFor="monedatext">Moneda (Texto):</label>
        <select
          type="text"
          id="monedatext"
          name="monedatext"
          value={formData.monedatext}
          onChange={handleChange}
          required
        >
          <option value="Dolar">Dólares Estadounidenses</option>
          <option value="Pesos">Pesos Argentinos</option>
          <option value="Euros">Euros</option>
        </select>
      </div>
      <div>
        <label htmlFor="modo">Modalidad:</label>
        <select
          type="text"
          id="modo"
          name="modo"
          value={formData.modo}
          onChange={handleChange}
          required
        >
          <option value="Compra">Compra - Venta</option>
          <option value="Mensual">Precio Mensual</option>
          <option value="Diario">Precio Diario</option>
        </select>
      </div>
      <div>
        <label htmlFor="transaction">Operación:</label>
        <select
          type="text"
          id="transaction"
          name="transaction"
          value={formData.transaction}
          onChange={handleChange}
          required
        >
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Temporal">Temporal</option>
        </select>
      </div>
      <div>
        <label htmlFor="agentId">Agente:</label>
        <select
          id="agentId"
          name="agentId"
          value={formData.agentId}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un Agente</option>
          {Array.isArray(agents) ? (
            agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))
          ) : (
            <option value="">Cargando Agentes...</option>
          )}
        </select>
      </div>
      <div>
        <label htmlFor="locationId">Ubicación:</label>
        <select
          id="locationId"
          name="locationId"
          value={formData.locationId}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una Ubicación</option>
          {Array.isArray(locations) ? (
            locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))
          ) : (
            <option value="">Cargando Ubicaciones...</option>
          )}
        </select>
      </div>
      <button type="submit">Crear Casa</button>
    </form>
  );
};

export default HouseForm;
