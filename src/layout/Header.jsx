import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header(){
return(
    <header className="header">
        <div className="header-logo">
            <h2>Agenda Luis</h2>
        </div>
        <div className="header-menu">
            <nav className="nav">
                <NavLink to="/inicio"  className={({isActive})=> isActive ? 'active': 'nav-items'}
                 >Inicio</NavLink>
                <NavLink to="/personas"  className={({isActive})=> isActive ? 'active': 'nav-items'}
                 >Personas</NavLink>
                  <NavLink to="/crear"  className={({isActive})=> isActive ? 'active': 'nav-items'}
                 >Registrar</NavLink>
                
            </nav>
        </div>
    </header>
);
}

export default Header;