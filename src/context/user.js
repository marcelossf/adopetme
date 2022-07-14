import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../api/api";
import { toastError, toastSucess } from "../utils/toast";
import { PetOngContext } from "./ong";

export const UserContext = createContext(false);

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(false);
  const [user, setUser] = useState(false);
  const history = useHistory();
  const { setActiveOng } = useContext(PetOngContext);

  useEffect(() => {
    const userID = localStorage.getItem("userID");
    const token = localStorage.getItem("token");
    
    if (userID && token) {
      api
        .get(`/users/${JSON.parse(userID)}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          const newUser = response.data;
          setUser(newUser);
        })
        .catch((_) => {
          localStorage.clear();
          history.push("/login");
        });
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(false);
    history.push("/");
  };

  function onLogin(dados) {
    api
      .post("/login", dados)

      .then((response) => {
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("userID", JSON.stringify(response.data.user.id));
        const newUser = response.data.user;
        setUser(newUser);

        toastSucess("Login Realizado com Sucesso");
        setTimeout(() => {
          if (newUser.type === "ong") {
            history.push("/ong");
          } else {
            history.push("/user");
          }
        }, 2500);
      })
      .catch((_) => toastError("Senha/Email incorretos"))
  }

  return (
    <UserContext.Provider
      value={{ activeUser, setActiveUser, onLogin, user, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
