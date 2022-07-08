import { AnimalRegister } from "./components/AnimalRegister";
import { AnimalsListProvider } from "./context/animals";
import Routes from "./Routes";

function App() {
  return (
    <AnimalsListProvider>
      <AnimalRegister/>
    </AnimalsListProvider>
  );
}

export default App;
