import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHouse } from "../redux/actions/houseActions";
import { getAgents } from "../redux/actions/agentActions";
import { getLocations } from "../redux/actions/locationActions";
import UploadWidget from "./UploadWidget";
import { Menu } from "@headlessui/react";

const FormHouse = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState("");
  const [transaction, setTransaction] = useState("");
  const [modo, setModo] = useState("");
  const [symbol, setSymbol] = useState("");
  const [coin, setCoin] = useState("");

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

  const agents = useSelector((state) => state.agents.agents);
  const locations = useSelector((state) => state.locations.locations);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (url, isPortada) => {
    setFormData({
      ...formData,
      [isPortada ? "imagePortada" : "image"]: url,
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
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="mb-5">
        <label
          htmlFor="type"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Tipo
        </label>
        <Menu>
          <Menu.Button className="flex items-start border border-gray-300 focus:border-green-500 rounded w-full p-2.5 px-4 text-gray-600 text-sm">
            {type || "Seleccionar Tipo"}
          </Menu.Button>
          <Menu.Items className="absolute w-full items-start z-10 mt-1 border bg-white rounded-md shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setType("Casa")}
                >
                  Casa
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setType("Departamento")}
                >
                  Departamento
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setType("Terreno")}
                >
                  Terreno
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setType("Local Comercial")}
                >
                  Local Comercial
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setType("Oficina")}
                >
                  Oficina
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setType("Campo")}
                >
                  Campo
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setType("Galpón")}
                >
                  Galpón
                </option>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      <div className="mb-5">
        <label
          htmlFor="transaction"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Operación
        </label>

        <Menu>
          <Menu.Button className="flex items-start border border-gray-300 focus:border-green-500 rounded w-full p-2.5 px-4 text-gray-600 text-sm">
            {transaction || "Seleccionar Operación"}
          </Menu.Button>
          <Menu.Items className="absolute w-full items-start border z-10 mt-1 bg-white rounded-md shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setTransaction("Venta")}
                >
                  Venta
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setTransaction("Alquiler")}
                >
                  Alquiler
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setTransaction("Temporal")}
                >
                  Temporal
                </option>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      <div className="mb-5">
        <div className="mb-5">
          <label
            htmlFor="modo"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Modalidad
          </label>
          <Menu>
            <Menu.Button className="flex items-start border border-gray-300 focus:border-green-500 rounded w-full p-2.5 px-4 text-gray-600 text-sm">
              {modo || "Seleccionar Modalidad"}
            </Menu.Button>
            <Menu.Items className="absolute w-full items-start border z-10 mt-1 bg-white rounded-md shadow-lg">
              <Menu.Item>
                {({ active }) => (
                  <option
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-600`}
                    onClick={() => setModo("Compra - Venta")}
                  >
                    Compra - Venta
                  </option>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <option
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-600`}
                    onClick={() => setModo("Precio Mensual")}
                  >
                    Precio Mensual
                  </option>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <option
                    className={`${
                      active ? "bg-gray-100" : ""
                    } block px-4 py-2 text-sm text-gray-600`}
                    onClick={() => setModo("Precio Diario")}
                  >
                    Precio Diario
                  </option>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="agentId"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Agente
        </label>
        <Menu>
          <Menu.Button className="flex items-start border border-gray-300 focus:border-green-500 rounded w-full p-2.5 px-4 text-gray-600 text-sm">
            {formData.agentId
              ? agents.find((agent) => agent.id === formData.agentId)?.name
              : "Seleccione Agente"}
          </Menu.Button>
          <Menu.Items className="absolute w-full z-10 mt-1 bg-white rounded-md shadow-lg">
            {Array.isArray(agents) &&
              agents.map((agent) => (
                <Menu.Item key={agent.id}>
                  {({ active }) => (
                    <option
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block px-4 py-2 text-sm text-gray-600`}
                      onClick={() =>
                        setFormData({ ...formData, agentId: agent.id })
                      }
                    >
                      {agent.name}
                    </option>
                  )}
                </Menu.Item>
              ))}
          </Menu.Items>
        </Menu>
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
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Nombre"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="locationId"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Ubicación
        </label>

        <Menu>
          <Menu.Button className="flex items-start border border-gray-300 focus:border-green-500 rounded w-full p-2.5 px-4 text-gray-600 text-sm">
            {formData.locationId
              ? locations.find(
                  (location) => location.id === formData.locationId
                )?.name
              : "Seleccione Ubicación"}
          </Menu.Button>
          <Menu.Items className="absolute w-full z-10 mt-1 border bg-white rounded-md shadow-lg">
            {Array.isArray(locations) &&
              locations.map((location) => (
                <Menu.Item key={location.id}>
                  {({ active }) => (
                    <option
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block px-4 py-2 text-sm text-gray-600`}
                      onClick={() =>
                        setFormData({ ...formData, locationId: location.id })
                      }
                    >
                      {location.name}
                    </option>
                  )}
                </Menu.Item>
              ))}
          </Menu.Items>
        </Menu>
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
          value={formData.address}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Dirección"
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
          value={formData.bedrooms}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Dormitorios"
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
          value={formData.bathrooms}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Baños"
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
          value={formData.surface}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Superficie"
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
          value={formData.year}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Año de Construcción"
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
          value={formData.price}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline:none rounded block w-full p-2.5 px-4 text-sm gap-2"
          placeholder="Precio"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="moneda"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Moneda
        </label>
        <Menu>
          <Menu.Button className="flex items-start border border-gray-300 focus:border-green-500 rounded w-full p-2.5 px-4 text-gray-600 text-sm">
            {symbol || "Seleccionar Simbolo"}
          </Menu.Button>
          <Menu.Items className="absolute w-full items-start border z-10 mt-1 bg-white rounded-md shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setSymbol("$")}
                >
                  $
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setSymbol("U$D")}
                >
                  U$D
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setSymbol("€")}
                >
                  €
                </option>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>

      <div className="mb-5">
        <Menu>
          <Menu.Button className="flex items-start border border-gray-300 focus:border-green-500 rounded w-full p-2.5 px-4 text-gray-600 text-sm">
            {coin || "Seleccionar Moneda"}
          </Menu.Button>
          <Menu.Items className="absolute w-full items-start border z-10 mt-1 bg-white rounded-md shadow-lg">
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setCoin("Pesos Argentinos")}
                >
                  Pesos Argentinos
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setCoin("Dólares Estadounidenses")}
                >
                  Dólares Estadounidenses
                </option>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <option
                  className={`${
                    active ? "bg-gray-100" : ""
                  } block px-4 py-2 text-sm text-gray-600`}
                  onClick={() => setCoin("Euros")}
                >
                  Euros
                </option>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
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
          value={formData.description}
          onChange={handleChange}
          required
          className="border border-gray-300 focus:border-green-500 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
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
    </form>
  );
};

export default FormHouse;
