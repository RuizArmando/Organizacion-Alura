import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from "./componentes/MiOrg/MiOrg.js"

function App() {
  const [mostrarFormulario, actualizarmostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarmostrar(!mostrarFormulario)
  }

  return (
    <div className="App">
      <Header/>
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
