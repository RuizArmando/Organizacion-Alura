import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo.js"
import ListaObciones from "../ListaObciones/ListaObciones.js"
import Boton from "../Boton/Boton.js"

const Formulario = (props) =>{
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("Back End")
    const [color, actualizarColor] = useState("#F00")

    const { registrarColaborador, crearEquipo } = props

    const manejoEnvio = (e) =>{
        e.preventDefault();
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }
return <section className="formulario">
            <form onSubmit={manejoEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo 
                    titulo="Nombre" 
                    placeholder="Ingresar nombre" 
                    required 
                    valor={nombre} 
                    actualizarValor={actualizarNombre}
                />
                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
                />
                <Campo 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto} 
                    actualizarValor={actualizarFoto}
                />
                <ListaObciones 
                    valor={equipo} 
                    actualizarEquipo={actualizarEquipo} 
                    equipos={props.equipos} 
                />
                <Boton texto="Agregar colaborador" />
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresar titulo" 
                    required 
                    valor={titulo} 
                    actualizarValor={actualizarTitulo}
                />
                <Campo 
                    titulo="Color" 
                    placeholder="Ingresar Color" 
                    required 
                    valor={color} 
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton texto="Registrar equipo" />
            </form>
        </section>
}

export default Formulario