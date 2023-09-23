import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from "./componentes/MiOrg/MiOrg.js"
import Equipo from './componentes/Equipo/Equipo.js';

function App() {
  const [mostrarFormulario, actualizarmostrar] = useState(false)

  const cambiarMostrar = () => {
    actualizarmostrar(!mostrarFormulario)
  }

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <div className="App">
      <Header/>
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }
    </div>
  );
}

export default App;
