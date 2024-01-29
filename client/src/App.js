import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import AdminPanel from "./pages/AdminPanel";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, user } = useAuth0();

  const isAdmin =
    isAuthenticated &&
    user &&
    user["https://example.com/roles"].includes("admin");

  return isAdmin ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route
          path="/admin"
          element={<ProtectedRoute element={<AdminPanel />} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
