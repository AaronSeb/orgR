import "./ListaOpciones.css"

const ListaOpciones = (props)=>{
    /* Metodo map -> arreglo.map((equipo,index)=> {
        return <option></option>
    }) */
    //para recorrer un arreglo no utilizamos foreach en jsx, utilizamos map
    

    const manejarCambio = (e)=>{
        console.log("cambio",e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="listaOpciones">
        <label>{props.titulo}</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.equipos.map((equipo,index)=><option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;