import React, { useEffect, useState } from "react";
import Buscar from "./Buscar";
import { Global } from "../Helpers/Global";
import { Link } from "react-router-dom";

function Persona(){
    const [objPersonas, setPersonas] = useState([])

    useEffect(()=>{
      setTimeout(()=>{
        obtenerPersonas();
      },3000)
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

    const eliminar = async (id)=>{
       let peticion = await fetch(Global.url+"/personas/"+id,{
         method:"DELETE"
       })

       let datos = await peticion.json();
       if(datos.status === "Succes"){
          obtenerPersonas();
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
                            <thead className="cart-table">
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
                                     <tbody key={element._id}>
                                            <tr>
                                                <td>{element.nombre}</td>
                                                <td>{element.apellido}</td>
                                                <td>{element.edad}</td>
                                                <td>
                                                    <Link to={"/Editar/"+element._id} className="btn-edit">Editar</Link>
                                                    <button className="btn-delete" onClick={()=>{
                                                        eliminar(element._id)
                                                    }}>Eliminar</button>
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