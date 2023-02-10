import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveTienda } from "../functions/funciones";
import { Toast } from 'primereact/toast';

const AddTienda = () => {

  let navigate = useNavigate();
  const toast = useRef(null);
  const [tienda, setTienda] = useState({
    nombre: "",
  });

  const {nombre} = tienda;

  const onInputChange = (e) => {
    setTienda({ ...nombre, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    toast.current.show({severity:'success', summary: 'Success', detail:'Se Guardadó Correctamente', life: 3000});
    await saveTienda(setTienda, tienda)
    
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Crear Tienda</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Nombre" className="form-label">
                Nombre Tienda
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="nombre"
                value={nombre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
      <Toast ref={toast} />
    </div>
    
  );
}

export default AddTienda