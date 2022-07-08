import { AnimalRegister } from "./components/AnimalRegister";
import { AnimalsListProvider } from "./context/animals";
import { RegisterPet } from "./pages/RegisterPet";
import Routes from "./Routes";

function App() {
  return (
    <AnimalsListProvider>
      <RegisterPet/>
    </AnimalsListProvider>
  );
}

export default App;
