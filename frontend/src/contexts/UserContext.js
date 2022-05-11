import { useState, createContext, useContext, useMemo } from "react";

const UserContext = createContext({
  currentUser: null,
  token: null,
  loggedIn: false,
  login: () => null,
  logout: () => null,
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (user, jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
    setCurrentUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUser(null);
    setLoggedIn(false);
  };
  const values = useMemo(
    () => ({
      currentUser,
      login,
      logout,
      loggedIn,
      token,
    }),
    [currentUser, loggedIn, token]
  );
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("no context");
  }
  return context;
}
