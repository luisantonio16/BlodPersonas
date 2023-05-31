import { useState } from "react";
import { Global } from "../Helpers/Global";
import Swal from 'sweetalert2'


function Crear(){

    const [formulario, setFormulario] = useState({})

    const enviarForm =(e)=>{
        e.preventDefault();
        let persona = {
            nombre:e.target.nombre.value,
            apellido: e.target.apellido.value,
            edad:e.target.edad.value
        }

       // setFormulario(persona);
        console.log(persona)
        guardarPersona(persona);
    }

    const guardarPersona= async(persona)=>{
        let personaGuardar = await fetch(Global.url+'crear',{
            method:"POST",
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
            'Se Agrego correstamente',
            'Click en el boton para salir!',
            'success'
          )
    }


    return(
        <section className="registrar">
            <div className="contenedor-registar">
                <h1>Registrar Personas</h1>
                <form className="formulario" onSubmit={enviarForm}>
                    <div className="form-group">
                        <label >Nombre</label>
                        <input type="text" className="form-control" name="nombre" placeholder="Nombre" />
                    </div>
                    <div className="form-group">
                        <label >Apellido</label>
                        <input type="text" className="form-control" name="apellido" placeholder="Apellido" />
                    </div>
                    <div className="form-group">
                        <label >Edad</label>
                        <input type="text" className="form-control" name="edad" placeholder="Edad" />
                    </div>
                    <input type="submit" value="guardad" onClick={mostrarAlerta} className="btn btn-succes"/>
                
                </form>
            </div>
        </section>


    );
}

export default Crear;