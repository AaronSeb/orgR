import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo"; //aquí se llama de frente porque nuestro archivo dentro de la carpeta se llama index.js
import Boton from "../Boton";
import ListaOpciones from "../ListaOpciones";

const Formulario = (props)=>{

    /* HOOKS */
    const [nombre,setNombre]= useState("");
    const [puesto,setPuesto]= useState("");
    const [foto,setFoto]= useState("");
    const [equipo,setEquipo] = useState("")

    //segundo formulario
    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    //PROPS
    const {registrarColaborador, crearEquipo} = props
    
    //para el primer formulario
    const manejarEnvio = (e)=>{
        e.preventDefault()
        console.log("manejar el envío")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    //para el 2do formulario
    const manejarNuevoEquipo= (e)=>{
        e.preventDefault();
        crearEquipo({titulo,colorPrimario:color})
    }


    return <section className="formulario">

        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo = "Nombre" 
                placeholder = "Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor ={setNombre}
            />
            <Campo
                titulo = "Puesto" 
                placeholder = "Ingresar Puesto"
                valor = {puesto}
                actualizarValor = {setPuesto} 
                required
                
            />
            <Campo
                titulo = "Foto" 
                placeholder = "Ingresar enlace de Foto"
                valor = {foto}
                actualizarValor = {setFoto} 
                required
            />
            <ListaOpciones
                titulo="Equipos"
                valor={equipo}
                actualizarEquipo = {setEquipo}
                equipos = {props.equipos}
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo titulo = "Titulo" 
                placeholder = "Ingresar titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor ={setTitulo}
            />
            <Campo
                titulo = "Color" 
                placeholder = "Ingresar Color en hexadecimal"
                valor = {color}
                actualizarValor = {setColor} 
                required
                type = "color"
            />
            <Boton>Registrar equipo</Boton>
            
        </form>
    </section>
}

export default Formulario