import Header from "../../components/HeaderMobile";
import Vitrine from "../../components/Vitrine";
import { SearchBar } from "../../components/SearchBar";
import UserTitle from "../../components/UserTitle";
import { MenuDropDown } from "../../components/MenuDropDown";
import { MenuFooter } from "../../components/MenuFooter";
import { Footer } from "../../components/Footer";
import { RegisterPet } from "../RegisterPet";

const UserDashBoard = () => {
  return (
    <>
      <Header />
      
      <UserTitle />
      <SearchBar />
    
      <Vitrine />
      <Footer>
        <MenuFooter> 
            <li>Início</li>
            <li>Solicitações</li>
            <li>Cadastrar Pet</li>
        </MenuFooter>
      </Footer>
    </>
  );
};

export default UserDashBoard;
