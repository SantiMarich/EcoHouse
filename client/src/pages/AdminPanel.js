import React from "react";
import FormHouse from "../components/FormHouse";
import FormAgent from "../components/FormAgent";
import FormLocation from "../components/FormLocation";

import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const AdminPanel = () => {
  const { user } = useAuth0();
  const allowedUserId = "auth0|65bc6f6c1db88018a9d22138";

  if (user && user.sub === allowedUserId) {
    return (
      <div className="flex w-full justify-center items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-2 p-6 mb-12 w-[375px]">
          <FormHouse className="w-[400px]" />
          {/* <FormAgent className="w-[400px]" /> */}
          {/* <FormLocation className="w-[400px]" /> */}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminPanel;
