import React from "react";
import { useContext } from "react";
import { useState } from "react";
import api from "../../api/api";
import { Footer } from "../../components/Footer";
import UserTitle from "../../components/UserTitle";
import { RedirectContext } from "../../context/redirect";
import { UserContext } from "../../context/user";
import { toastError, toastSucess } from "../../utils/toast";

export const Testemonials = () => {
  const [post, setPost] = useState("");
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const { user } = useContext(UserContext);
  
  const handlePost = (data) => {
    // api
    //   .post(
    //     "/testemonials",
    //     { text: data, user: user },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     toastSucess("Depoimento Enviado com sucesso");
    //     return redirectToPage("/user");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     toastError("Algo inesperado aconteceu");
    //   });
  };

  return (
    <div>
      <UserTitle />
      <main>
        <div>
          <textarea
            onChange={(e) => setPost(e.target.value)}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={() => handlePost(post)}>Enviar</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};
