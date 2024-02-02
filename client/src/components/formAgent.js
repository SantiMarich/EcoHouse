import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createAgentSuccess } from "../redux/actions/agentActions";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
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

  const cld = new Cloudinary({ cloud: { cloudName: "dgumwc2z4" } });

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full justify-center">
      <Menu as="div" className="dropdown ">
        <Menu.Button
          onClick={() => setIsOpen(!isOpen)}
          className="dropdown-btn w-full text-left mb-2 bg-green-400 transition"
        >
          <h1 className="font-semibold text-white text-sm">
            Crear Nuevo Agente
          </h1>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </Menu.Button>

        <Menu.Items>
          <div className="flex bg-white mb-8 border border-gray-300 rounded-lg p-6 w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-4 w-full"
            >
              <input
                type="text"
                placeholder="Nombre"
                className="border border-gray-300 focus:border-green-500 outline:none rounded px-4 h-14 text-sm w-full"
                {...register("name", { required: true, maxLength: 30 })}
              />
              <input
                type="tel"
                placeholder="Telefono"
                className="border border-gray-300 focus:border-green-500 outline:none rounded px-4 h-14 text-sm w-full"
                {...register("phone", { maxLength: 17 })}
              />
              <input
                className="flex flex-row text-xs"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <input
                type="submit"
                value="Crear Agente"
                className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm transition w-full cursor-pointer"
              />
            </form>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
