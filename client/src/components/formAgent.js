import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nombre"
        {...register("Nombre", { required: true, maxLength: 30 })}
      />
      <input
        type="tel"
        placeholder="Telefono"
        {...register("Telefono", { maxLength: 17 })}
      />
      <input type="url" placeholder="Imagen" {...register("Imagen", {})} />

      <input type="submit" />
    </form>
  );
}
