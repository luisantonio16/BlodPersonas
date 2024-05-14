import { useEffect, useState } from "react";
import { Global } from "../Helpers/Global";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Editar(){

    const [formulario, setFormulario] = useState({});
    const parametros = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        obtenerPersonas();
    }, []);

    const obtenerPersonas = async ()=>{
        let peticion = await fetch('https://localhost:7046/api/persona/buscar?id='+parametros.id,{
            method: 'GET',
        });
        let datos = await peticion.json();

        if(datos.estado == 200){
            setFormulario(datos.listaCliente);
           
        } else{
            setFormulario([]);
        }
    }


    const enviarForm =(e)=>{
        e.preventDefault();
        let persona = {
            nombre:e.target.nombre.value,
            apellido: e.target.apellido.value,
            edad:e.target.edad.value
        }

       // setFormulario(persona);
        editarPersona(persona);
        vaciarFormulario(e);
        navegar();
       
    }
 
    const editarPersona= async(persona)=>{
        let personaGuardar = await fetch('https://localhost:7046/api/persona/editar?id='+parametros.id,{
            method:"PUT",
            body:JSON.stringify(persona),
            headers:{
                "Content-Type":"application/json"
            }
        })

        let datos = await personaGuardar.json();
        if(datos.estado === 200){
            Swal.fire(
                'Se Actualizo correstamente',
                'Click en el boton para salir!',
                'success'
              )
           
        }  
    }

 
    const vaciarFormulario= (e)=>{  
        e.target.nombre.value = ""
          e.target.apellido.value = ""
         e.target.edad.value = ""
     }
     const navegar= ()=>{  
        setTimeout(()=>{
            navigate("/personas", {replace:true});
        },1000)
       
     }


    return(
        <section className="registrar">
            <div className="contenedor-registar">
                <h1>Editar Personas</h1>
                <form className="formulario" onSubmit={enviarForm}>
                    <div className="form-group">
                        <label >Nombre</label>
                        <input type="text" className="form-control-1" name="nombre" placeholder="Nombre" defaultValue={formulario.nombre} />
                    </div>
                    <div className="form-group">
                        <label >Apellido</label>
                        <input type="text" className="form-control-2" name="apellido" placeholder="Apellido" defaultValue={formulario.apellido} />
                    </div>
                    <div className="form-group">
                        <label >Edad</label>
                        <input type="text" className="form-control-3" name="edad" placeholder="Edad" defaultValue={formulario.edad} />
                    </div>
                    <input type="submit" value="guardad" className="btn btn-succes"/>
                
                </form>
            </div>
        </section>


    );
}

export default Editar;