import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/EcohouseLogo.jpg";
import LogInButton from "./ButtonLogIn";
import LogOutButton from "./ButtonLogOut";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { MdModeEdit } from "react-icons/md";

const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  const allowedUserId = "auth0|65bc6f6c1db88018a9d22138";

  const isAllowedUser = isAuthenticated && user && user.sub === allowedUserId;

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={Logo}
            alt=""
            className="w-[150px] md:w-[185px] lg:w-[185px] xl:w-[185px] h-auto"
          />
        </Link>
        <div className="flex items-center justify-center gap-4">
          {isAuthenticated ? (
            <>
              <Profile />
              <LogOutButton>Log Out</LogOutButton>
              {isAllowedUser && (
                <Link to="/admin">
                  <button className="bg-green-300 hover:bg-green-400 text-white h-10 px-3 py-3 rounded-lg transition flex items-center text-center justify-center">
                    <MdModeEdit />
                  </button>
                </Link>
              )}
            </>
          ) : (
            <LogInButton>Log In</LogInButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
