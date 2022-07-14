import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import api from "../api/api";
import { toastError, toastSucess } from "../utils/toast";
import { UserContext } from "./user";

export const SolicitationContext = createContext([]);

export const SolicitationProvider = ({ children }) => {
  const [petData, setPetData] = useState({});
  const [solicitationData, setSolicitationData] = useState([]);
  const { user } = useContext(UserContext);
  
  const postSolicitation = (data) => {
    const token = localStorage.getItem("token");
    const solicitation = {
      data,
      user,
      petData,
    };

    if (data && user && petData) {
      api
        .post("/solicitations", solicitation, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((_) => toastSucess("Solicitação Enviada!"))
        .catch((_) => toastError("Ops... Aconteceu um erro inesperado"));
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get(`/solicitations`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setSolicitationData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SolicitationContext.Provider
      value={{
        setPetData,
        petData,
        postSolicitation,
        solicitationData,
      }}
    >
      {children}
    </SolicitationContext.Provider>
  );
};
