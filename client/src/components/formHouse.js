import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHouse } from "../redux/actions/houseActions";
import { getAgents } from "../redux/actions/agentActions";
import { getLocations } from "../redux/actions/locationActions";
import UploadWidget from "./UploadWidget";

const FormHouse = () => {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents.agents);
  const locations = useSelector((state) => state.locations.locations);

  const [formData, setFormData] = useState({
    type: "",
    name: "",
    description: "",
    image: [],
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

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(getAgents());
    dispatch(getLocations());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "transaction") {
      if (value === "Venta") {
        setFormData({
          ...formData,
          transaction: "Venta",
          modo: "Compra - Venta",
        });
      } else if (value === "Alquiler") {
        setFormData({
          ...formData,
          transaction: "Alquiler",
          modo: "Precio Mensual",
        });
      } else if (value === "Temporal") {
        setFormData({
          ...formData,
          transaction: "Temporal",
          modo: "Precio Diario",
        });
      }
    }

    if (name === "moneda") {
      if (value === "$") {
        setFormData({
          ...formData,
          moneda: "$",
          monedatext: "Pesos Argentinos",
        });
      } else if (value === "U$D") {
        setFormData({
          ...formData,
          moneda: "U$D",
          monedatext: "Dólares Estadounidenses",
        });
      } else if (value === "€") {
        setFormData({ ...formData, moneda: "€", monedatext: "Euros" });
      }
    }
  };

  const handleImageUpload = (url, isPortada) => {
    if (isPortada) {
      setFormData({
        ...formData,
        imagePortada: url,
      });
    } else {
      setFormData((prevState) => ({
        ...formData,
        image: [...prevState.image, url],
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createHouse(formData));
      setFormData({
        ...formData,
        name: "",
        description: "",
        image: [],
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
      setSuccessMessage("¡Propiedad creada exitosamente!");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("¡Hubo un problema al crear la propiedad!");
      setSuccessMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="mb-5">
        <label
          htmlFor="type"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Tipo
        </label>
        <select
          id="type"
          name="type"
          value={formData.type || ""}
          onChange={handleChange}
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          required
        >
          <option value="">Seleccionar Tipo</option>
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Terreno">Terreno</option>
          <option value="Local Comercial">Local Comercial</option>
          <option value="Oficina">Oficina</option>
          <option value="Campo">Campo</option>
          <option value="Galpón">Galpón</option>
        </select>
      </div>

      <div className="mb-5">
        <label
          htmlFor="transaction"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Operación
        </label>
        <select
          id="transaction"
          name="transaction"
          value={formData.transaction || ""}
          onChange={handleChange}
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          required
        >
          <option value="">Seleccionar Operación</option>
          <option value="Venta">Venta</option>
          <option value="Alquiler">Alquiler</option>
          <option value="Temporal">Temporal</option>
        </select>
      </div>

      <div className="mb-5">
        <p className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2 h-[42px]">
          {formData.modo || ""}
        </p>
      </div>

      <div className="mb-5">
        <label
          htmlFor="agentId"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Agente
        </label>
        <select
          id="agentId"
          name="agentId"
          value={formData.agentId || ""}
          onChange={handleChange}
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          required
        >
          <option value="">Seleccione Agente</option>
          {Array.isArray(agents) &&
            agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))}
        </select>
      </div>

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
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: Casa Estancia Vieja"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="locationId"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Ubicación
        </label>
        <select
          id="locationId"
          name="locationId"
          value={formData.locationId || ""}
          onChange={handleChange}
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          required
        >
          <option value="">Seleccione Ubicación</option>
          {Array.isArray(locations) &&
            locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-5">
        <label
          htmlFor="address"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Dirección
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: Ituzaingo 682, Barrio Nueva Córdoba"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="bedrooms"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Dormitorios
        </label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={formData.bedrooms || ""}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: 3"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="bathrooms"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Baños
        </label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={formData.bathrooms || ""}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: 2"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="surface"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Superficie
        </label>
        <input
          type="number"
          id="surface"
          name="surface"
          value={formData.surface || ""}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: 120"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="year"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Año de Construcción
        </label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year || ""}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: 2011"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Precio
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price || ""}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Ej.: 100000"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="moneda"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Moneda
        </label>
        <select
          id="moneda"
          name="moneda"
          value={formData.moneda || ""}
          onChange={handleChange}
          className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2"
          required
        >
          <option value="">Seleccionar Moneda</option>
          <option value="$">$</option>
          <option value="U$D">U$D</option>
          <option value="€">€</option>
        </select>
      </div>

      <div className="mb-5">
        <p className="border border-gray-300 focus:border-green-500 outline-none rounded block w-full p-2.5 px-4 text-sm gap-2 h-[42px]">
          {formData.monedatext || ""}
        </p>
      </div>

      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-600"
          placeholder="Agrega una descripción de la propiedad"
        />
      </div>

      <div className="mb-5">
        <UploadWidget onImageUpload={handleImageUpload} isPortada={true} />
      </div>

      <div className="mb-5">
        <UploadWidget onImageUpload={handleImageUpload} isPortada={false} />
      </div>

      <div className="mb-5">
        <button
          type="submit"
          className="bg-gray-600 hover:bg-gray-700 text-white rounded p-2.5 text-sm w-full transition"
        >
          Crear Propiedad
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

export default FormHouse;
