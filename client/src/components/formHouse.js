import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createHouseSuccess } from "../redux/actions/houseActions";

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

  const cld = new Cloudinary({ cloud: { cloudName: "your_cloud_name" } });

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

  return (
    <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <select
          className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
          {...register("type", { required: true })}
        >
          <option value="Casa">Casa</option>
          <option value="Departamento">Departamento</option>
          <option value="Temporal">Temporal</option>
          <option value="Terreno">Terreno</option>
        </select>
        <input
          type="text"
          placeholder="Nombre"
          className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
          {...register("name", { required: true, maxLength: 30 })}
        />
        <input
          type="text"
          placeholder="Descripción"
          className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
          {...register("description", { required: true, maxLength: 100 })}
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
        <select
          className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
          {...register("location")}
        >
          <option value="Córdoba, Salta">Córdoba, Salta</option>
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
          <option value="Venta, Alquiler, Temporal">
            Venta, Alquiler, Temporal
          </option>
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
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition"
        />
      </form>
    </div>
  );
}
