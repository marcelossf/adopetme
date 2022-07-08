import { AnimalsListProvider } from "./Context/animals";
import Routes from "./Routes";

function App() {
  return (
    <AnimalsListProvider>
      <Routes />
    </AnimalsListProvider>
  );
}

export default App;
