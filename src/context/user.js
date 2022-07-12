import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext(false);

export const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(false);
  return (
    <UserContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </UserContext.Provider>
  );
};

// token && activeOng ? (
//   <MenuMobile OpenModal={OpenModal}>
   
//   </MenuMobile>
// ) : token && activeUser ? (
//   <MenuMobile OpenModal={OpenModal}>
//     <p onClick={() => redirectToPage("/")}>início</p>
//     <p onClick={() => redirectToPage("/login")}>Login</p>
//     <p onClick={() => redirectToPage("/cadastrar")}>Cadastrar</p>
//     <p onClick={() => redirectToPage("/quem-somos")}>Quem somos</p>
//   </MenuMobile>

// ) : (
// <MenuMobile OpenModal={OpenModal}>
//     <p onClick={() => redirectToPage("/")}>início</p>
//     <p onClick={() => redirectToPage("/login")}>Login</p>
//     <p onClick={() => redirectToPage("/cadastrar")}>Cadastrar</p>
//     <p onClick={() => redirectToPage("/quem-somos")}>Quem somos</p>
//   </MenuMobile>
// ))}