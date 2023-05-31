import React from "react";
import { useNavigate } from "react-router-dom";

function Buscar(){
    const navigate = useNavigate();
    const hacerBusqueda = (e)=>{
        e.preventDefault();
        let busqueda = e.target.buscar.value;
        navigate("/Buscar/"+busqueda, {replace:true});

    }
    return(
        <article className="buscador">
             <h2>Buscar Personas</h2>
            <form onSubmit={hacerBusqueda}>
            <input type="text" name="buscar" placeholder="Buscar" />
            <input className="button" type="submit"/>
            </form>   
        </article>
    );

}

export default Buscar;