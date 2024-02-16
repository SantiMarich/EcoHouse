import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Sort from "../components/Sort";
import FavoritesList from "../components/FavoritesList";

const Favorites = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-4">
        <div className="text-center text-3x1 text-gray-400 mt-48 mb-48">
          Lo Sentimos! Debes estar Logueado para Acceder a esta Sección.
        </div>
      </div>
    );
  }

  return (
    <section
      className="h-full min-h-[1800px] max-auto mb-[320px] sm:mb-[320px] md:mb-[320px] lg:mb-12 xl:mb-12"
      id="banner-section"
    >
      <Sort />
      <FavoritesList />
    </section>
  );
};

export default Favorites;
