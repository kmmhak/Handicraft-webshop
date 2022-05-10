import { useState, createContext, useContext, useMemo } from "react";

const UserContext = createContext({
  currentUser: null,
  token: null,
  login: () => null,
  logout: () => null,
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (user, jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUser(null);
  };
  const values = useMemo(
    () => ({
      currentUser,
      login,
      logout,
      token,
    }),
    [currentUser, token]
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
