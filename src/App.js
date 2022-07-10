import { AnimalRegister } from "./components/AnimalRegister";
import MenuMobile from "./components/MenuMobile";
import { SearchBar } from "./components/SearchBar";
import Vitrine from "./components/Vitrine";
import { AnimalsListProvider } from "./context/animals";
import { SearchProvider } from "./context/search";
import OngDashBoard from "./pages/OngDashBoard";
import { RegisterPet } from "./pages/RegisterPet";
import Routes from "./Routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AnimalsListProvider>
     <OngDashBoard/>
    </AnimalsListProvider>
  );
}

export default App;
