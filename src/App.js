import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from "./componentes/MiOrg/MiOrg.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <Formulario/>
      <MiOrg />
    </div>
  );
}

export default App;
