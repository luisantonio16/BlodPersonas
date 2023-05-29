import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
function ErrorPage(){
    return(
        <section className='container'>
            <div className='pageError'>
                <h1>Error 404 Page not found</h1> 
                <NavLink to="/personas" className="btns"
                 >Volver a inicio</NavLink> 
            </div>
        </section>

    );
}

export default ErrorPage;