import { useEffect, useState } from "react";
import { createContext } from "react";
import api from "../api/api";

export const TestemonialsContext = createContext();

export const TestemonialsProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);

  // useEffect(() => {
  //   api
  //     .get("/testemonials")
  //     .then((response) => setPostsList(response.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <TestemonialsContext.Provider value={{ postsList }}>
      {children}
    </TestemonialsContext.Provider>
  );
};
