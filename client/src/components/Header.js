import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/EcohouseLogo.jpg";
import LogInButton from "./LogIn";
import LogOutButton from "./LogOut";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" className="w-[200px] h-auto " />
        </Link>
        <div className="flex items-center justify-center gap-4">
          {isAuthenticated ? (
            <>
              <Profile />
              <LogOutButton>Log Out</LogOutButton>
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
