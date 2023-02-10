import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findTienda, updateTienda } from "../functions/funciones";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [tienda, setTienda] = useState({
    nombre: "",
  });

  const { nombre} = tienda;

  const onInputChange = (e) => {
    setTienda({...tienda, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateTienda(id, tienda)
    navigate("/");
  };

  const loadUser = async () => {
    const result = await findTienda(id, setTienda)
    setTienda(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
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
    </div>
  );
}
