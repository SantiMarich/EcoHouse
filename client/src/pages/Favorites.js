import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Sort from "../components/Sort";
import FavoritesList from "../components/FavoritesList";

const Favorites = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-4">
        <div className="text-center text-3x1 text-gray-400 mt-64 pl-4 pr-4">
          Lo Sentimos! Debes Iniciar Sesión para Acceder a esta Sección.
        </div>
        <div className="text-center text-3x1 text-gray-400 mb-96 pl-4 pr-4">
          Aqui podras ver las propiedades que hayas seleccionado como favoritas.
        </div>
      </div>
    );
  }

  return (
    <section
      className="h-full min-h-[1800px] max-auto mb-[320px] sm:mb-[320px] md:mb-[320px] lg:mb-12 xl:mb-12 mt-14"
      id="banner-section"
    >
      <Sort />
      <FavoritesList />
    </section>
  );
};

export default Favorites;
