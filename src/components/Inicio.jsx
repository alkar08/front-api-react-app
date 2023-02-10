import"../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState, useRef} from 'react'
import { allTiendas, deleteTienda } from '../functions/funciones'
import { Link, useParams } from "react-router-dom";
import { Toast } from 'primereact/toast';



const Inicio = () => {

    const [tiendas, setTiendas] = useState(null)
    const {id} = useParams()
    const toast = useRef(null);

    useEffect(()=>{
        allTiendas(setTiendas)
    },[])
     
    const deleteTiendaFront =async(id) =>{
      if (window.confirm("Estas seguro de eliminar el registro?")) {
        await deleteTienda(id)
        allTiendas(setTiendas)
        toast.current.show({severity:'success', summary: 'Success', detail:'Se Eliminó Correctamente', life: 3000});

      }
       
    }
    
    return (
        <>
            {tiendas != null ? (
             

              <div className="container">
              <div className="py-4">
                <table className="table border shadow">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tiendas.map((tienda, index) => (
                      <tr>
                        <th scope="row" key={index}>
                          {index + 1}
                        </th>
                        <td>{tienda.nombre}</td>
                        <td>
                          <Link
                            className="btn btn-primary mx-2"
                            to={`/tiendas/${tienda.id}/productos`}
                          >
                            Ver Producto
                          </Link>
                          <Link
                            className="btn btn-outline-primary mx-2"
                            to={`/editTienda/${tienda.id}`}
                          >
                            Editar Tienda
                          </Link>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={() => deleteTiendaFront(tienda.id)}
                          >
                            Eliminar Tienda
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Toast ref={toast} />
            </div>
            
            ) : ("No hay tiendas") }
        
        </>
        
      )
    }


//   return (
//     <>
//         {tiendas != null ? (
//             tiendas.map(tienda => (

//             // <div key={tienda.id}>
//             <div key={tienda.id}>

//               {itemsTienda.map((item)=>{
//                 item.label = tienda.nombre
//                 console.log(item)
//                 console.log(itemsTienda)
//                 return (
//                     <div key={tienda.id} className="card flex justify-content-center">
//                         <PanelMenu model={itemsTienda} className="w-full md:w-25rem" />
//                     </div>
//                 )
                
//               })}
//                     {/* <PanelMenu model={itemsTienda.map(i =>(i.label=tienda.nombre))}  className="w-full md:w-25rem" /> */}
//                     {/* <PanelMenu model={itemsTienda} className="w-full md:w-25rem" /> */}
                    

//             </div>
//             ))
//         ) : ("No hay tiendas") }
    
//     </>
//   )
// }

export default Inicio
