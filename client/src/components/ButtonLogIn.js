import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RiAddFill } from "react-icons/ri";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="bg-green-400 hover:bg-green-500 text-white h-10  px-3 py-3 rounded-lg transition flex items-center text-center justify-center"
      onClick={() => loginWithRedirect()}
    >
      <RiAddFill />
    </button>
  );
};

export default LoginButton;
