import GlobalStyle from "./styles/global";
import { LoginForm } from "./components/LoginForm/index";
import { CadastreForm } from "./components/CadastreForm";
import Login from "./pages/Login/index"
import WhoWeAre from "./pages/WhoWeAre";
function App() {
  return (
    <>
    <GlobalStyle />
    <Login/>
    </>
  );
}

export default App;
