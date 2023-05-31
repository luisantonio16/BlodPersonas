import React from "react";
import {Route,Routes,BrowserRouter,Navigate} from "react-router-dom"; 
import Inicio from "../componentes/Inicio";
import Header from "../layout/Header";
import Footer from "../layout/footer";
import Persona from "../componentes/Persona";
import Crear from "../componentes/Crear";
import Error from "../componentes/Error";
import Busqueda from "../componentes/Busqueda";
import Editar from "../componentes/Editar";


function Rutas(){
    return(
        <BrowserRouter>
          {/*Layouts */}
          
         <Header/>
          <section className="contenido" id="contenido">
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio />}/>
                <Route path="/personas" element={<Persona />}/>
                <Route path="/crear" element={<Crear />}/>
                <Route path="/Editar/:id" element={<Editar />}/>
                <Route path="/Buscar/:busqueda" element={<Busqueda />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
          </section>
          <Footer/>
        </BrowserRouter>
    );
}

export default Rutas;