import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RiCloseFill } from "react-icons/ri";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="bg-green-400 hover:bg-green-500 text-white h-10 px-3 py-3 rounded-lg transition flex items-center text-center justify-center font-bold"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <RiCloseFill />
    </button>
  );
};

export default LogoutButton;
