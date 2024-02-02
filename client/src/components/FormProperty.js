import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPropertySuccess } from "../redux/actions/propertyActions";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";

export default function FormProperty() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(createPropertySuccess(data));
  };

  const [isOpenProperty, setIsOpenProperty] = useState(false);

  return (
    <div className="flex w-full justify-center">
      <Menu as="div" className="dropdown w-full">
        <Menu.Button
          onClick={() => setIsOpenProperty(!isOpenProperty)}
          className="dropdown-btn w-full text-left mb-2 bg-green-400 transition"
        >
          <h1 className="font-semibold text-white text-sm">
            Crear Nueva Tipología
          </h1>
          {isOpenProperty ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </Menu.Button>

        <Menu.Items>
          <div className="flex-1 bg-white mb-8 border border-gray-300 rounded-lg p-6 w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-4"
            >
              <input
                type="text"
                placeholder="Nombre Tipologia"
                className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm "
                {...register("name", { required: true, maxLength: 30 })}
              />
              <input
                type="submit"
                value="Crear Tipología"
                className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition cursor-pointer"
              />
            </form>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}