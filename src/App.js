import { AnimalRegister } from "./components/AnimalRegister";
import { SearchBar } from "./components/SearchBar";
import Vitrine from "./components/Vitrine";
import { AnimalsListProvider } from "./context/animals";
import { SearchProvider } from "./context/search";
import { RegisterPet } from "./pages/RegisterPet";
import Routes from "./Routes";

function App() {
  return (
    <AnimalsListProvider>
      <SearchProvider>
        <SearchBar />
        {/* <Vitrine /> */}
      </SearchProvider>
    </AnimalsListProvider>
  );
}

export default App;
