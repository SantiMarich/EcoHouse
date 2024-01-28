import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex row text-xs gap-4">
        <div className="flex flex-col justify-end justify-items-end text-end">
          <div className="hidden lg:block">
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-green-500">{user.email}</p>
          </div>
        </div>
        <img
          src={user.picture}
          alt={user.name}
          className="lg:max-w-[72px] h-10 rounded-lg items-center justify-center"
        ></img>
      </div>
    )
  );
};

export default Profile;
