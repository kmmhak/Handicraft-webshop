import React from "react";
import { useUser } from "../contexts/UserContext";

const UserPage = () => {
  const { currentUser } = useUser();

  return <h1>Welcome to your homepage {currentUser[0].username}!</h1>;
};

export default UserPage;
