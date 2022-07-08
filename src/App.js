import { AnimalsListProvider } from "./context/animals";
import Routes from "./Routes";

function App() {
  return (
    <AnimalsListProvider>
      <Routes />
    </AnimalsListProvider>
  );
}

export default App;
