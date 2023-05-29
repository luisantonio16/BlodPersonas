import React from "react";

function Buscar(){
    return(
        <article className="buscador">
            <h2>Buscar Personas</h2>
            <input type="text" placeholder="Buscar" />
            <button className="button">Buscar</button>
        </article>
    );

}

export default Buscar;