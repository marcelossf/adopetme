import Header from "../../components/HeaderMobile";
import Vitrine from "../../components/Vitrine";
import { SearchBar } from "../../components/SearchBar";
import UserTitle from "../../components/UserTitle";
import { MenuDropDown } from "../../components/MenuDropDown";
import { MenuFooter } from "../../components/MenuFooter";
import { Footer } from "../../components/Footer";
import { RegisterPet } from "../RegisterPet";
import { RedirectContext } from "../../context/redirect";
import { useContext } from "react";
import { NavMenu } from "../../components/NavMenu";
import PhotoPerfil from "../../components/PhotoPerfil";
  
const UserDashBoard = () => {
  const { redirectToPage} = useContext(RedirectContext);
  return (
    <>
    
      <Header>

      </Header>
      
      <UserTitle />

      <SearchBar />
    
      <Vitrine />

      <Footer>

        <MenuFooter> 
            <li onClick={()=>redirectToPage("/")}>Inicío</li>
            <li onClick={()=>redirectToPage("/user-solicitation")}>Solicitações</li>
            <li onClick={()=>redirectToPage("/quem-somos")}>Quem somos</li>
        </MenuFooter>

      </Footer>
    </>
  );
};

export default UserDashBoard;
