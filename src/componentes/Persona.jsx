import React, { useEffect, useState } from "react";
import Buscar from "./Buscar";
import { Global } from "../Helpers/Global";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Persona() {
  const [objPersonas, setPersonas] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      obtenerPersonas();
    }, 2000);
  }, []);

  const obtenerPersonas = async () => {
    let peticion = await fetch("https://localhost:7046/api/persona/listar", {
      method: "GET",
    });

    let datos = await peticion.json();

    if (datos.estado == 200) {
      setPersonas(datos.listaCliente);
      setCargando(true);
      console.log(datos);
    }
  };

  const alerta = async (id) => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          eliminar(id);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  const eliminar = async (id) => {
    let peticion = await fetch('https://localhost:7046/api/persona/eliminar?id=' + id, {
      method: "DELETE",
    });

    let datos = await peticion.json();
    if (datos.estado ==200) {
      obtenerPersonas();
    }
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-edit",
      cancelButton: "btn btn-delete",
    },
    buttonsStyling: false,
  });

  return (
    <section>
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
               objPersonas.length >= 1 ? (
                objPersonas.map((element) => {
                  return (
                    <tbody key={element.id}>
                      <tr>
                        <td>{element.nombre}</td>
                        <td>{element.apellido}</td>
                        <td>{element.edad}</td>
                        <td>
                          <Link
                            to={"/Editar/"+element.id}
                            className="btn-edit"
                          >
                            Editar
                          </Link>
                          <button
                            className="btn-delete"
                            onClick={() => {
                              alerta(element.id);
                            }}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })
              ) : (
                <tbody>
                  <tr>
                     <td className="tdPersonas" colSpan="4">No hay Personas</td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="buscador-personas">
          <Buscar />
        </div>
      </div>
    </section>
  );
}
export default Persona;
