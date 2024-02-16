import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Sort from "../components/Sort";
import FavoritesList from "../components/FavoritesList";

const Favorites = () => {
  return (
    <section
      className="h-full max-auto mb-[320px] sm:mb-[320px] md:mb-[320px] lg:mb-12 xl:mb-12"
      id="banner-section"
    >
      <Sort />
      <FavoritesList />
    </section>
  );
};

export default withAuthenticationRequired(Favorites);
