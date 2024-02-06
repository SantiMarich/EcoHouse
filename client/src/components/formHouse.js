import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createHouse } from "../redux/actions/houseActions";
import { getAgents } from "../redux/actions/agentActions";
import { getLocations } from "../redux/actions/locationActions";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import UploadWidget from "./UploadWidget";

export default function FormHouse() {
  const dispatch = useDispatch();
  const { agents, locations } = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [isOpenHouse, setIsOpenHouse] = useState(false);

  useEffect(() => {
    dispatch(getAgents());
    dispatch(getLocations());
  }, [dispatch]);

  const onSubmit = async (data) => {
    dispatch(createHouse(data));
  };

  const handleImageChange = (e) => {
    setValue("images", e.target.files);
  };

  return (
    <div className="flex w-full justify-center">
      <Menu as="div" className="dropdown">
        <Menu.Button
          onClick={() => setIsOpenHouse(!isOpenHouse)}
          className="dropdown-btn w-full text-left mb-2 bg-green-400 transition"
        >
          <h1 className="font-semibold text-white text-sm">
            Crear Nueva Propiedad
          </h1>
          {isOpenHouse ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </Menu.Button>

        <Menu.Items>
          <div
            className={`flex-1 bg-white mb-4 border border-gray-300 rounded-lg p-6 w-full ${
              isOpenHouse ? "visible" : "hidden"
            }`}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-4"
            >
              <select
                label="Tipologia"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("transaction")}
              >
                <option value="" disabled hidden>
                  Tipología
                </option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Terreno">Terreno</option>
                <option value="Local">Local Comercial</option>
                <option value="Cochera">Cochera</option>
                <option value="Oficina">Oficina</option>
                <option value="Campo">Campo</option>
                <option value="Galpon">Galpón</option>
              </select>
              <input
                type="text"
                placeholder="Nombre"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("name", { required: true, maxLength: 30 })}
              />
              <select
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("location")}
              >
                <option value="" disabled hidden>
                  Ubicación
                </option>
                {Array.isArray(locations) && locations.length > 0 ? (
                  <select
                    label="Tipologia"
                    className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                    {...register("transaction")}
                  >
                    <option value="" disabled hidden>
                      Tipología
                    </option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Cargando ubicaciones...</p>
                )}
              </select>
              <input
                type="text"
                placeholder="Dirección"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("address", {})}
              />
              <input
                type="number"
                placeholder="Habitaciones"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("bedrooms")}
              />
              <input
                type="number"
                placeholder="Baños"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("bathrooms", {})}
              />
              <input
                type="number"
                placeholder="Superficie"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("surface", {})}
              />
              <input
                type="datetime"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                placeholder="Año"
                {...register("year", {})}
              />
              <input
                type="number"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                placeholder="Precio"
                {...register("price")}
              />
              <select
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("transaction")}
              >
                <option value="" disabled hidden>
                  Operación
                </option>
                <option value="Venta">Venta</option>
                <option value="Alquiler">Alquiler</option>
                <option value="Temporal">Temporal</option>
              </select>
              <select
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("agent", { required: true })}
              >
                <option value="" disabled hidden>
                  Agente
                </option>
                {Array.isArray(agents) && agents.length > 0 ? (
                  <select
                    label="Tipologia"
                    className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                    {...register("transaction")}
                  >
                    <option value="" disabled hidden>
                      Tipología
                    </option>
                    {agents.map((agent) => (
                      <option key={agent.id} value={agent.id}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <p>Cargando agentes...</p>
                )}
              </select>
              <UploadWidget
                className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-xs w-full px-4 h-14 transition"
                {...register("image")}
              />
              <textarea
                type="textarea"
                placeholder="Descripción"
                name="message"
                defaultValue="Añadir descripción de la propiedad..."
                className="border border-gray-300 focus:border-gray-500 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400"
                {...register("description", { required: true, maxLength: 100 })}
              />
              <input
                type="submit"
                value="Crear Propiedad"
                className="bg-gray-800 hover:bg-gray-900 text-white rounded p-4 text-sm w-full px-4 h-14 transition"
              />
            </form>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
