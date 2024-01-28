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
      <select {...register("Tipo", { required: true })}>
        <option value="Casa">Casa</option>
        <option value=" Departamento"> Departamento</option>
        <option value=" Temporal"> Temporal</option>
        <option value=" Terreno"> Terreno</option>
      </select>
      <input
        type="text"
        placeholder="Nombre"
        {...register("Nombre", { required: true, maxLength: 30 })}
      />
      <input
        type="text"
        placeholder="Descripción"
        {...register("Descripción", { required: true, maxLength: 100 })}
      />
      <input
        type="url"
        placeholder="Imagenes"
        {...register("Imagenes", { maxLength: 50 })}
      />
      <select {...register("Ubicación")}>
        <option value="Córdoba, Salta">Córdoba, Salta</option>
      </select>
      <input
        type="text"
        placeholder="Dirección"
        {...register("Dirección", {})}
      />
      <input type="number" placeholder="Habitaciones" {...register} />
      <input type="number" placeholder="Baños" {...register("Baños", {})} />
      <input
        type="number"
        placeholder="Superficie"
        {...register("Superficie", {})}
      />
      <input type="datetime" placeholder="Año" {...register("Año", {})} />
      <input type="number" placeholder="Precio" {...register} />
      <select {...register("Operación")}>
        <option value="Venta, Alquiler, Temporal">
          Venta, Alquiler, Temporal
        </option>
      </select>
      <input type="text" placeholder="Agente" {...register("Agente", {})} />

      <input type="submit" />
    </form>
  );
}
