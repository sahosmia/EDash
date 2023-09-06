import { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, _setUser] = useState();
  //   const [email, _setEmail] = useState();
  const [token, _setToken] = useState(localStorage.getItem("TOKEN"));

  const setToken = (token) => {
    _setToken(token);
    if (token && token != null) {
      localStorage.setItem("TOKEN", token);
    } else {
      localStorage.removeItem("TOKEN");
    }
  };

  const setUser = (user) => {
    _setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
