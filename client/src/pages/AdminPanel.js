import React, { useState } from "react";
import FormHouse from "../components/FormHouse";
import FormAgent from "../components/FormAgent";
import FormLocation from "../components/FormLocation";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import AdminTable from "../components/AdminTable";

const AdminPanel = () => {
  const { user } = useAuth0();
  const allowedUserId = "auth0|65bc6f6c1db88018a9d22138";
  const [showHouseForm, setShowHouseForm] = useState(false);
  const [showAgentForm, setShowAgentForm] = useState(false);
  const [showLocationForm, setShowLocationForm] = useState(false);
  const [showEditDatabase, setShowEditDatabase] = useState(false);

  if (user && user.sub === allowedUserId) {
    return (
      <div className="flex flex-col w-full justify-center items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-2 p-6 mb-12 w-[375px]">
          <div className="relative">
            <button
              onClick={() => setShowHouseForm(!showHouseForm)}
              className="flex flex-row items-center justify-between p-4 w-full rounded bg-green-400 text-white font-normal mt-2 text-sm"
            >
              Crear Propiedad <TiPlus />
            </button>
            {showHouseForm && <FormHouse className="w-[400px]" />}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowAgentForm(!showAgentForm)}
              className="flex flex-row items-center justify-between p-4 w-full rounded bg-green-400  text-white font-normal mt-2 text-sm"
            >
              Crear Agente <TiPlus />
            </button>
            {showAgentForm && <FormAgent className="w-[400px] mt-4" />}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowLocationForm(!showLocationForm)}
              className="flex flex-row items-center justify-between p-4 w-full rounded bg-green-400 text-white font-normal mt-2 text-sm"
            >
              Crear Ubicación <TiPlus />
            </button>
            {showLocationForm && <FormLocation className="w-[400px] mt-4" />}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowEditDatabase(!showEditDatabase)}
              className="flex flex-row items-center justify-between p-4 w-full rounded bg-green-400 text-white font-normal mt-2 text-sm"
            >
              Editar Base de Datos <TiPlus />
            </button>
            {showEditDatabase && <AdminTable className="w-[400px] mt-4" />}
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminPanel;
