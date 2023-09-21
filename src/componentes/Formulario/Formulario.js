import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaObciones from "../ListaObciones/ListaObciones.js"
import Boton from "../Boton/Boton.js"

const Formulario = () =>{
    const manejoEnvio = (e) =>{
        e.preventDefault();
        console.log("Manejar el envio", e);
    }
return <section className="formulario">
            <form onSubmit={manejoEnvio}>
                <h2>Rellena el formulario para el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/>
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
                <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
                <ListaObciones />
                <Boton texto="Crear colaborador" />
            </form>
        </section>
}

export default Formulario