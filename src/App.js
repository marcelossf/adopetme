import GlobalStyle from "./styles/global";
import { LoginForm } from "./components/LoginForm/index";
import { CadastreForm } from "./components/CadastreForm";
function App() {
  return (
    <>
    <GlobalStyle />
    <CadastreForm></CadastreForm>
    <LoginForm/>
  
    </>
  );
}

export default App;
