import React, { useEffect, useState } from "react";
import Buscar from "./Buscar";
import { Global } from "../Helpers/Global";

function Persona(){
    const [objPersonas, setPersonas] = useState([])

    useEffect(()=>{
      setTimeout(()=>{
        obtenerPersonas();
      },3000)
      console.log(objPersonas)
    }, [])

    const obtenerPersonas = async ()=>{
        let peticion = await fetch(Global.url+'personas',{
            method: 'GET',
        });
        let datos = await peticion.json();

        if(datos.status === "Succes"){
            setPersonas(datos.persona);
        }  
    }
 return(
    <section >
        <h2 className="title-personas">Agenda Personas</h2>
        <div className="contenedor">
            <div className="table-personas">
                <div className="contenedor-personas">
                    <h2>Lista de Personas</h2>
                    <table>
                             <thead  className="cart-table">
                                <tr>
                                     <th>Nombre</th>
                                     <th>Apellido</th>
                                     <th>Edad</th>
                                     <th>Editar</th>
                                </tr>       
                            </thead>  
                            {
                              objPersonas.map(element=>{
                                return(         
                                    <tbody>
                                            <tr>
                                                <td>{element.nombre}</td>
                                                <td>{element.apellido}</td>
                                                <td>{element.edad}</td>
                                                <td>
                                                    <button >Editar</button>
                                                    <button>Eliminar</button>
                                                </td>
                                            </tr>
                                     </tbody>      
                            );
                        })
                    }
                        </table>
                   
                    
                </div>
            </div>
            <div className="buscador-personas">
                <Buscar/>

            </div>
        </div>   
    </section>
);
}
export default Persona;