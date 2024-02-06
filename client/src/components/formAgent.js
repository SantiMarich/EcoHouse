import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createAgent } from "../redux/actions/agentActions";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import UploadWidget from "./UploadWidget";

export default function FormAgent() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [isOpenAgent, setIsOpenAgent] = useState(false); // Estado local para el dropdown

  const onSubmit = async (data) => {
    dispatch(createAgent(data));
  };

  return (
    <div className="flex w-full justify-center">
      <Menu as="div" className="dropdown ">
        <Menu.Button
          onClick={() => setIsOpenAgent(!isOpenAgent)}
          className="dropdown-btn w-full text-left mb-2 bg-green-400 transition"
        >
          <h1 className="font-semibold text-white text-sm">
            Crear Nuevo Agente
          </h1>
          {isOpenAgent ? (
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
              <UploadWidget {...register("image")} />
              <input
                type="submit"
                value="Crear Agente"
                className="bg-gray-800 hover:bg-gray-900 text-white rounded p-4 text-sm transition w-full cursor-pointer"
              />
            </form>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}
