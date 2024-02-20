import React, { useState } from "react";
import FormHouse from "../components/FormHouse";
import FormAgent from "../components/FormAgent";
import FormLocation from "../components/FormLocation";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import AdminTable from "../components/AdminTable";

const { REACT_APP_USER_ADMIN } = process.env;
const { REACT_APP_USER_OWNER } = process.env;

const AdminPanel = () => {
  const { user } = useAuth0();
  const allowedUserId = REACT_APP_USER_ADMIN;
  const ownerUserId = REACT_APP_USER_OWNER;
  const [showHouseForm, setShowHouseForm] = useState(false);
  const [showAgentForm, setShowAgentForm] = useState(false);
  const [showLocationForm, setShowLocationForm] = useState(false);
  const [showEditDatabase, setShowEditDatabase] = useState(false);

  if (
    (user && user.sub === allowedUserId) ||
    (user && user.sub === ownerUserId)
  ) {
    return (
      <div className="flex flex-col w-full items-center h-full max-auto mt-24 mb-36">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-2 p-6 mb-12 w-[375px]">
          <div className="relative">
            <button
              onClick={() => setShowHouseForm(!showHouseForm)}
              className="flex flex-row items-center justify-between p-4 w-full rounded bg-green-500 text-white font-normal mt-2 text-sm"
            >
              Crear Propiedad <TiPlus />
            </button>
            {showHouseForm && <FormHouse className="w-[400px]" />}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowAgentForm(!showAgentForm)}
              className="flex flex-row items-center justify-between p-4 w-full rounded bg-green-500  text-white font-normal mt-2 text-sm"
            >
              Crear Agente <TiPlus />
            </button>
            {showAgentForm && <FormAgent className="w-[400px] mt-4" />}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowLocationForm(!showLocationForm)}
              className="flex flex-row items-center justify-between p-4 w-full rounded bg-green-500 text-white font-normal mt-2 text-sm"
            >
              Crear Ubicación <TiPlus />
            </button>
            {showLocationForm && <FormLocation className="w-[400px] mt-4" />}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowEditDatabase(!showEditDatabase)}
              className="flex flex-row items-center justify-between p-4 w-full rounded bg-green-500 text-white font-normal mt-2 text-sm"
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
