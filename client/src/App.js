import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropertyDetails from "./pages/PropertyDetails";
import AdminPanel from "./pages/AdminPanel";
import ViewPanel from "./pages/ViewPanel";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Contact from "./pages/Contact";
import LoginButton from "../src/components/ButtonLogIn";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<ViewPanel />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/about" element={<About />} />
        {isAuthenticated ? (
          <Route path="/favorites" element={<Favorites />} />
        ) : (
          <Route path="/favorites" element={<Navigate to="/login" />} />
        )}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginButton />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
