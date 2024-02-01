import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createHouseSuccess } from "../redux/actions/houseActions";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import {
  CloudinaryContext,
  useCloudinary,
  Transformation,
} from "cloudinary-react";

export default function FormHouse() {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agents.agents);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const cld = new Cloudinary({ cloud: { cloudName: "dgumwc2z4" } });

  const onSubmit = async (data) => {
    const images = data.images;

    const cloudinaryUrls = [];

    for (let i = 0; i < images.length; i++) {
      const formData = new FormData();
      formData.append("file", images[i]);

      const imageUploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${cld.config().cloudName}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imageUploadData = await imageUploadResponse.json();
      cloudinaryUrls.push(imageUploadData.secure_url);
    }

    data.images = cloudinaryUrls;

    dispatch(createHouseSuccess(data));
  };

  const handleImageChange = (e) => {
    setValue("images", e.target.files);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full justify-center">
      <Menu as="div" className="dropdown">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn w-full text-left mb-2 bg-green-400 transition"
        >
          <h1 className="font-semibold text-white text-sm">
            Crear Nueva Propiedad
          </h1>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </Menu.Button>

        <Menu.Items>
          <div className="flex-1 bg-white mb-4 border border-gray-300 rounded-lg p-6 w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-4"
            >
              <select
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("type", { required: true })}
              >
                <option value="Seleccionar Propiedad" disabled hidden>
                  Seleccionar Propiedad
                </option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Temporal">Temporal</option>
                <option value="Terreno">Terreno</option>
                <option value="Oficina">Oficina</option>
                <option value="Local">Local</option>
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
                <option value="Seleccionar Ubicación" disabled hidden>
                  Seleccionar Ubicación
                </option>
                <option value="Córdoba">Córdoba</option>
                <option value="Salta">Salta</option>
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
                <option value="Seleccionar Operación" disabled hidden>
                  Seleccionar Operación
                </option>
                <option value="Venta">Venta</option>
                <option value="Alquiler">Alquiler</option>
                <option value="Temporal">Temporal</option>
              </select>
              <select
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
                {...register("agent", { required: true })}
              >
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.id}>
                    {agent.name}
                  </option>
                ))}
              </select>
              <input
                className="w-full px-4  text-xs"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              <textarea
                type="text"
                placeholder="Descripción"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 py-4 h-14 text-sm"
                {...register("description", { required: true, maxLength: 100 })}
              />
              <input
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full px-4 h-14 transition"
              />
            </form>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
