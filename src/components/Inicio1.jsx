import React, {useEffect, useState} from 'react'
import { allTiendas } from '../functions/funciones'
import { PanelMenu } from 'primereact/panelmenu';

const Inicio = () => {

    const [tiendas, setTiendas] = useState(null)
    const [tienda, setTienda] = useState({label:"", icon:""})

    useEffect(()=>{
        allTiendas(setTiendas)
    },[])
     
    const items = [
        {
            label: "",
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
               
                },
                {
                    icon:'pi pi-fw pi-bars',
                    label:'List'
                }
            ]
        },
        
    ];

    const item =  {
            label:"User",
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
               
                },
                {
                    icon:'pi pi-fw pi-bars',
                    label:'List'
                }
            ]
        }

    const itemsTienda = [
        {
            label:"User",
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
               
                },
                {
                    icon:'pi pi-fw pi-bars',
                    label:'List'
                }
            ]
        },
        
    ];


    return (
        <>
            {tiendas != null ? (
                tiendas.map(tienda => (
                    <div key={tienda.id}>
                        
                        {itemsTienda.forEach(elment => elment.label = tienda.nombre)}

                        {/* <PanelMenu model={itemsTienda.map(i =>(i.label=tienda.nombre))}  className="w-full md:w-25rem" /> */}
                        {/* <PanelMenu model={itemsTienda} className="w-full md:w-25rem" /> */}
                        <div className="card flex justify-content-center">
                        <PanelMenu model={itemsTienda}  className="w-full md:w-25rem" />
                </div>
    
                </div>
  
                ))
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
