import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createAgentSuccess } from "../redux/actions/agentActions";

export default function FormLocation() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(createAgentSuccess(data));
  };

  return (
    <div className="flex-1 bg-white mb-8 border border-gray-300 rounded-lg p-6 md:w-96 lg:w-80 xl:w-96">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <h1>Nueva Ubicación</h1>
        <input
          type="text"
          placeholder="Nombre"
          className="border border-gray-300 focus:border-green-500 outline:none rounded w-full px-4 h-14 text-sm"
          {...register("name", { required: true, maxLength: 30 })}
        />
        <input
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white rounded p-4 text-sm w-full transition"
        />
      </form>
    </div>
  );
}
