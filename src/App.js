import { AnimalRegister } from "./components/AnimalRegister";
import { SearchBar } from "./components/SearchBar";
import { AnimalsListProvider } from "./context/animals";
import { RegisterPet } from "./pages/RegisterPet";
import Routes from "./Routes";

function App() {
  return (
    <AnimalsListProvider>
      <SearchBar/>
    </AnimalsListProvider>
  );
}

export default App;
