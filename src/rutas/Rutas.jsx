import React from "react";
import {Route,Routes,BrowserRouter,Navigate} from "react-router-dom"; 
import Inicio from "../componentes/Inicio";
import Header from "../layout/Header";
import Footer from "../layout/footer";
import Persona from "../componentes/Persona";
import Crear from "../componentes/Crear";
import Error from "../componentes/Error";


function Rutas(){
    return(
        <BrowserRouter>
          {/*Layouts */}
          
          <Header/>
          <section className="contenido" id="contenido">
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/personas" element={<Persona/>}/>
                <Route path="/crear" element={<Crear/>}/>
                <Route path="/Editar" element={<Crear/>}/>
                <Route path="*" element={<Error />}/>
            </Routes>
          </section>
          <Footer/>
        </BrowserRouter>
    );
}

export default Rutas;