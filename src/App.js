import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import './App.css';
import MiOrg from './components/MiOrg';
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([ 
    {
      id: uuidv4(),
      equipo:"Programación",
      foto: "https://github.com/AaronSeb.png",
      nombre : "Aaron",
      puesto: "Instructor",
      fav:true
    },
    {
      id: uuidv4(),
      equipo:"Front-End",
      foto: "https://github.com/AaronSeb.png",
      nombre : "Leslie",
      puesto: "Instructora",
      fav:true
    },
    {
      id: uuidv4(),
      equipo:"Data Sciencie",
      foto: "https://github.com/AaronSeb.png",
      nombre : "Manuel",
      puesto: "Instructor",
      fav:false
    },
    {
      id: uuidv4(),
      equipo:"Innovación y gestión",
      foto: "https://github.com/AaronSeb.png",
      nombre : "Gerson",
      puesto: "Instructor",
      fav:false
    },
    {
      id: uuidv4(),
      equipo:"UX y Diseño",
      foto: "https://github.com/AaronSeb.png",
      nombre : "Leo",
      puesto: "Instructor",
      fav:false
    },
  ])

  const [equipos,actualizarEquipos] = useState(
    [
      {
        id: uuidv4(),
        titulo:"Programación",
        colorPrimario:"#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuidv4(),
        titulo:"Front-End",
        colorPrimario:"#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      
      {
        id: uuidv4(),
        titulo:"Data Sciencie",
        colorPrimario:"#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuidv4(),
        titulo:"Devops",
        colorPrimario:"#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuidv4(),
        titulo:"UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuidv4(),
        titulo:"Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuidv4(),
        titulo:"Innovación y gestión",
        colorPrimario:"#FF8A29",
        colorSecundario: "#FFEEDF"
      },
  ]
  )

//MOSTRAR EL FORMULARIO
  //Ternario --> condition ? seMuestra : noSemuestra
  //condición && seMuestra
const cambiarMostrar = ()=> {
  actualizarMostrar(!mostrarFormulario)
}

//REGISTRAR COLABORADOR
const registrarColaborador = (colaborador)=>{

  //Spred operator
  actualizarColaboradores([...colaboradores, colaborador])
  console.log("nuevo colaborador ", colaborador)
}

//FUNCIÓN PARA BORRAR COLABORADOR
const eliminarColaborador = (id)=>{
  console.log("Colaborador eliminado",id)
  const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !==id);
  actualizarColaboradores(nuevosColaboradores)
}

//FUNCIÓN PARA ACTUALIZAR COLOR DE EQUIPO
const actualizarColorDeEquipo = (color, id)=>{
  console.log("actualizar : ",color, id)
  const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
  })
  actualizarEquipos(equiposActualizados);
}

//FUNCIÓN PARA CREAR EQUIPO
const crearEquipo = (nuevoEquipo)=>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos,{...nuevoEquipo,id: uuidv4()}])
}

//FUNCIÓN PARA LIKE DE CORAZÓN
const like = (id)=>{
  console.log("like",id);
  const colaboradoresLikeados = colaboradores.map((colaborador)=>{
    if(colaborador.id ===id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresLikeados);
}


  return (
    <div>
      <Header/> {/* llamando al componente */}
      {/* {mostrarFormulario  ? <Formulario/> :<></>} */} {/* mando fragments osea vacío <></> */}
      
      {mostrarFormulario && <Formulario 
          equipos = {equipos.map((equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
        />}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key = {equipo.titulo}
          colaboradores = {colaboradores.filter(colaborador=> colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColorDeEquipo = {actualizarColorDeEquipo}
          like = {like}
        />)
      }
      <Footer/>
    </div>

  );
}

export default App;
