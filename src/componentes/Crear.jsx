import { useEffect, useState } from "react";
import { Global } from "../Helpers/Global";
import Swal from 'sweetalert2'
import { json } from "react-router-dom";


function Crear(){

    const [guardado, setGuardado] = useState(false)

    

    const enviarForm =(e)=>{
        e.preventDefault();
        let persona = {
            nombre:e.target.nombre.value,
            apellido: e.target.apellido.value,
            edad:e.target.edad.value
        }
       // setFormulario(persona);
        guardarPersona(persona); 
        vaciarFormulario(e);
    }

    const guardarPersona= async(persona)=>{
        let personaGuardar = await fetch("https://localhost:7046/api/persona/crear",{
            method:"POST",
            body: JSON.stringify(persona),
            headers:{
                "Content-Type":"application/json"
            }
        })

        let datos = await personaGuardar.json();
        if(datos.estado == 200){
            setGuardado(true);
            Swal.fire(
                'se Guardo Correctamente!',
                'Click en el boton para continuar!',
                'success'
              )
        }else{
            setGuardado(false);
            Swal.fire({
                icon: 'error',
                title: 'Error guardando la persona',
                text: 'Verifique todos los campos',
            })

        }
       

    }

    const vaciarFormulario= (e)=>{  
       e.target.nombre.value = ""
         e.target.apellido.value = ""
        e.target.edad.value = ""

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
                    <input type="submit" value="guardad"  className="btn btn-succes"/>
                
                </form>
            </div>
        </section>


    );
}

export default Crear;