import React from "react";
import Buscar from "./Buscar";
import { Link } from "react-router-dom";

function Inicio(){
 return(
    <section className= "inicio">
        <div className="inicio-contenedor">
        <h2>Inicio</h2>
       <p>Bienvenido a tu agenda de personas</p>
       <Link className="button" to={"/personas"}>Ver personas</Link>

        </div>
        
    </section>
);
}
export default Inicio;