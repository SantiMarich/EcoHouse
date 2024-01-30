import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createAgentSuccess } from "../redux/actions/agentActions";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import {
  CloudinaryContext,
  useCloudinary,
  Transformation,
} from "cloudinary-react";

export default function FormAgent() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const cld = new Cloudinary({ cloud: { cloudName: "your_cloud_name" } });

  const onSubmit = async (data) => {
    const imageUploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${cld.config().cloudName}/upload`,
      {
        method: "POST",
        body: data.image,
      }
    );

    const imageUploadData = await imageUploadResponse.json();

    data.image = imageUploadData.secure_url;

    dispatch(createAgentSuccess(data));
  };

  const handleImageChange = (e) => {
    setValue("image", e.target.files[0]);
  };

  return (
    <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <input
          type="text"
          placeholder="Nombre"
          className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
          {...register("name", { required: true, maxLength: 30 })}
        />
        <input
          type="tel"
          placeholder="Telefono"
          className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
          {...register("phone", { maxLength: 17 })}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition"
        />
      </form>
    </div>
  );
}
