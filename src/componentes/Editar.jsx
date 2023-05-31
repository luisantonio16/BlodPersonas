import { useEffect, useState } from "react";
import { Global } from "../Helpers/Global";
import Swal from 'sweetalert2'
import { useParams } from "react-router-dom";


function Editar(){

    const [formulario, setFormulario] = useState({});
    const parametros = useParams();

    useEffect(()=>{
        obtenerPersonas();
        RellenarDatos();
    },[])
    const obtenerPersonas = async ()=>{
        let peticion = await fetch(Global.url+'buscar/'+parametros.id,{
            method: 'GET',
        });
        let datos = await peticion.json();

        if(datos.status === "Succes"){
            setFormulario(datos.persona);
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
        console.log(persona)
        editarPersona(persona);
    }
    const RellenarDatos =()=>{
        document.querySelector('.form-control-1').value = formulario.nombre;
        document.querySelector('.form-control-2').value = formulario.apellido;
        document.querySelector('.form-control-3').value = formulario.edad;
     
    }



    const editarPersona= async(persona)=>{
        let personaGuardar = await fetch(Global.url+'personas/'+parametros.id,{
            method:"PUT",
            body:JSON.stringify(persona),
            headers:{
                "Content-Type":"application/json"
            }
        })

        let datos = await personaGuardar.json();
        if(datos.status === "Succes"){
           
        }  
    }

    const mostrarAlerta=()=>{
        Swal.fire(
            'Se Actualizo correstamente',
            'Click en el boton para salir!',
            'success'
          )
    }


    return(
        <section className="registrar">
            <div className="contenedor-registar">
                <h1>Editar Personas</h1>
                <form className="formulario" onSubmit={enviarForm}>
                    <div className="form-group">
                        <label >Nombre</label>
                        <input type="text" className="form-control-1" name="nombre" placeholder="Nombre" />
                    </div>
                    <div className="form-group">
                        <label >Apellido</label>
                        <input type="text" className="form-control-2" name="apellido" placeholder="Apellido" />
                    </div>
                    <div className="form-group">
                        <label >Edad</label>
                        <input type="text" className="form-control-3" name="edad" placeholder="Edad" />
                    </div>
                    <input type="submit" value="guardad" onClick={mostrarAlerta} className="btn btn-succes"/>
                
                </form>
            </div>
        </section>


    );
}

export default Editar;