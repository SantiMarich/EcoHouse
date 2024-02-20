import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/EcohouseLogo.jpg";
import LogInButton from "./ButtonLogIn";
import LogOutButton from "./ButtonLogOut";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { MdModeEdit } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const { REACT_APP_USER_ADMIN } = process.env;
const { REACT_APP_USER_OWNER } = process.env;

const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  const allowedUserId = REACT_APP_USER_ADMIN;
  const ownerUserId = REACT_APP_USER_OWNER;
  const isAllowedUser =
    (isAuthenticated && user && user.sub === allowedUserId) ||
    (isAuthenticated && user && user.sub === ownerUserId);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-2 border-b border-green-200 sticky top-0 bg-white  z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row justify-between items-center">
          <Link to="/">
            <img
              src={Logo}
              alt=""
              className="w-[150px] md:w-[190px] lg:w-[190px] xl:w-[190px] h-auto pr-10"
            />
          </Link>
          <div className="hidden md:flex">
            <Link
              to="/"
              className="text-sm p-4 font-medium hover:text-green-600 focus:text-green-600"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-sm p-4 font-medium hover:text-green-600 focus:text-green-600"
            >
              Nosotros
            </Link>
            <Link
              to="/favorites"
              className="text-sm p-4 font-medium hover:text-green-600 focus:text-green-600"
            >
              Favoritos
            </Link>
            <Link
              to="/contact"
              className="text-sm p-4 font-medium hover:text-green-600 focus:text-green-600"
            >
              Contacto
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          {isAuthenticated ? (
            <>
              <Profile />
              <LogOutButton>Log Out</LogOutButton>
              {isAllowedUser && (
                <Link to="/admin">
                  <button className="bg-green-400 hover:bg-green-500 text-white h-8 px-2 py-2 rounded-lg transition flex items-center text-center justify-center">
                    <MdModeEdit />
                  </button>
                </Link>
              )}
            </>
          ) : (
            <LogInButton>Log In</LogInButton>
          )}
          <button
            className="bg-green-500 hover:bg-green-600 text-white h-8 px-2 py-2 rounded-lg transition flex items-center text-center justify-center md:hidden"
            onClick={toggleMenu}
          >
            <IoMenu />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute drop-shadow-md shadow-l md:hidden flex flex-col right-0  items-end w-[180px] mt-4 bg-white mr-4 rounded-lg">
          <Link
            to="/"
            className="block w-full items-end rounded-lg text-center text-sm p-4 font-medium hover:text-green-600 focus:text-green-600"
            onClick={toggleMenu}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="block w-full items-end rounded-lg text-center text-sm p-4 font-medium hover:text-green-600 focus:text-green-600"
            onClick={toggleMenu}
          >
            Nosotros
          </Link>
          <Link
            to="/favorites"
            className="block w-full items-end rounded-lg text-center text-sm p-4 font-medium hover:text-green-600 focus:text-green-600"
            onClick={toggleMenu}
          >
            Favoritos
          </Link>
          <Link
            to="/contact"
            className="block w-full items-end rounded-lg text-center text-sm p-4 font-medium hover:text-green-600 focus:text-green-600"
            onClick={toggleMenu}
          >
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
