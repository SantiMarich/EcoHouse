import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createAgentSuccess } from "../redux/actions/agentActions";

export default function FormAgent() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createAgentSuccess(data));
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
        <input
          type="url"
          placeholder="Imagen"
          className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
          {...register("image", { required: true })}
        />
        <input
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition"
        />
      </form>
    </div>
  );
}
