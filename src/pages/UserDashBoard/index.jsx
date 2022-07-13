import Header from "../../components/HeaderMobile";
import Vitrine from "../../components/Vitrine";
import { SearchBar } from "../../components/SearchBar";
import UserTitle from "../../components/UserTitle";
import { MenuDropDown } from "../../components/MenuDropDown";
import { MenuFooter } from "../../components/MenuFooter";
import { Footer } from "../../components/Footer";
import { RegisterPet } from "../RegisterPet";
import { Link } from 'react-router-dom'
const UserDashBoard = () => {
  return (
    <>
      <Header />
      
      <UserTitle />
      <SearchBar />
    
      <Vitrine />
      <Footer>
        <MenuFooter> 
            <Link to="/">Início</Link>
            <Link to='/solicitatioUser'>Solicitações</Link>
            <Link to='/registerPet'>Cadastrar Pet</Link>
        </MenuFooter>
      </Footer>
    </>
  );
};

export default UserDashBoard;
