import React from "react";
import { useAuth } from "../Providers/AuthProvider";

const Profile = () => {
  const userData = useAuth();
  return (
    <div>
      <p>name : {userData.name}</p>
      <p>email : {userData.email}</p>
      <p>number : {userData.number}</p>
    </div>
  );
};

export default Profile;
