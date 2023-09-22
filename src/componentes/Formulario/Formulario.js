import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaObciones from "../ListaObciones/ListaObciones.js"
import Boton from "../Boton/Boton.js"

const Formulario = (props) =>{
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    //const { registrarColaborador } = props

    const manejoEnvio = (e) =>{
        e.preventDefault();
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        //registrarColaborador(datosAEnviar)
        console.log(datosAEnviar)
    }
return <section className="formulario">
            <form onSubmit={manejoEnvio}>
                <h2>Rellena el formulario para el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" valor={foto} actualizarValor={actualizarFoto}/>
                <ListaObciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos} />
                <Boton texto="Crear colaborador" />
            </form>
        </section>
}

export default Formulario