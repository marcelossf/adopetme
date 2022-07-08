import { AnimalRegister } from "./components/AnimalRegister";
import { AnimalsListProvider } from "./Context/animals";
import Routes from "./Routes";

function App() {
  return (
    <AnimalsListProvider>
      <AnimalRegister/>
    </AnimalsListProvider>
  );
}

export default App;
