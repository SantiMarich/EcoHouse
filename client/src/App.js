import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropertyDetails from "./pages/PropertyDetails";
import AdminPanel from "./pages/AdminPanel";
import ViewPanel from "./pages/ViewPanel";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<ViewPanel />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
