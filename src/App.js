import { Button } from "@mui/material";
import { AnimalRegister } from "./components/AnimalRegister";
import Header from "./components/HeaderMobile";
import { NavMenu } from "./components/NavMenu";
import { SearchBar } from "./components/SearchBar";
import Vitrine from "./components/Vitrine";
import { AnimalsListProvider } from "./context/animals";
import { SearchProvider } from "./context/search";
import { StyledButton } from "./pages/OngDashBoard/style";
import { RegisterPet } from "./pages/RegisterPet";
import Routes from "./Routes";

function App() {
  return (
    <AnimalsListProvider>
      <SearchProvider>
        <Header>
          <NavMenu>
            <StyledButton>Início</StyledButton>
            <StyledButton>Adotar</StyledButton>
            <StyledButton>Qadfads</StyledButton>
            <StyledButton>Logsadfin</StyledButton>
          </NavMenu>
        </Header>
      </SearchProvider>
    </AnimalsListProvider>
  );
}

export default App;
