import React from "react";
import { useUser } from "../contexts/UserContext";

const UserPage = () => {
  const { currentUser, loggedIn } = useUser();

  return (
    <h1>
      Welcome to your homepage {loggedIn ? currentUser[0].username : null}!
    </h1>
  );
};

export default UserPage;
