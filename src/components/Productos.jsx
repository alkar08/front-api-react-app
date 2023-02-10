import React, {useEffect, useState, useRef } from 'react'
import {useParams} from 'react-router-dom'
import { deleteProductoTienda, findProductoByTienda, saveProductoTienda, updateProductoTienda } from '../functions/funciones'
import {DataTable} from 'primereact/datatable'
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';
import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

 
import 'primereact/resources/themes/nova/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


const Producto = () => {
    const [productos, setProductos] = useState(null)
    const [visible, setVisible] = useState(false);
    const [producto, setProducto] = useState({nombre:"", descripcion:"", precio: ""})
    const params = useParams()
    const toast = useRef(null);
    const edit = useRef(false);
    const items = [
      {
        label : 'Nuevo',
        icon: 'pi pi-fw pi-plus',
        command : () => {showSaveDialog()}
      },
      {
        label : 'Editar',
        icon: 'pi pi-fw pi-pencil',
        command : () => {showEditDialog()}
      },
      {
        label : 'Eliminar',
        icon: 'pi pi-fw pi-trash',
        command : () => {showDeleteDialog()}
      }
    ]

    const handlerChange = (e) =>{
      setProducto({
        ...producto, 
        [e.target.id]:e.target.value
      })
    }

    useEffect(()=>{
        findProductoByTienda(params.id, setProductos)
    },[])

    const showSaveDialog = ()=>{
      edit.current = false
      setProducto({nombre:"", descripcion:"", precio: ""})
      setVisible(true)
      }

    const showEditDialog = ()=>{
      edit.current = true
      setVisible(true)
    }

    const showDeleteDialog = async ()=>{
      if (window.confirm("Estas seguro de eliminar el registro?")) {
        await deleteProductoTienda(params.id, producto.id)
        findProductoByTienda(params.id, setProductos)
        toast.current.show({severity:'success', summary: 'Success', detail:'Se Eliminó Correctamente', life: 3000});
    }
  }
    
    const saveProducto = async ()=>{
      if(edit.current){
        await updateProductoTienda(params.id, producto)
        findProductoByTienda(params.id, setProductos)
      }else{
        await saveProductoTienda(params.id, setProductos, producto)
      }
      setVisible(false)
      toast.current.show({severity:'success', summary: 'Success', detail:'Se Guardadó Correctamente', life: 3000});
    }

    const footerBotton = (
      <div>
          <Button label="Guardar" icon="pi pi-check" onClick={saveProducto} autoFocus />
      </div>
      );

  return (
    <>

    {productos != null ? (
            <div style={{width:'80%',margin: '0 auto', marginTop:'20px' }}>
            <Menubar model={items}/>
            <br/>
            <Panel header = "CRUD">
              <DataTable value={productos} selectionMode="single" selection={producto} onSelectionChange={e => {setProducto(e.value)}} dataKey="id" responsiveLayout="scroll">
                <Column field="nombre" header="Nombre"></Column>
                <Column field="descripcion" header="Descripcion"></Column>
                <Column field="precio" header="Precio"></Column>
              </DataTable>
            </Panel>
            <Dialog header="Crear" visible={visible} style={{ width: '400px' }} modal= {true} onHide={() => setVisible(false)} footer={footerBotton}>
              <form id="form-productos">
                <span className='p-float-label'>
                <InputText style={{width:'100%'}} value={producto.nombre} id = "nombre" onChange={handlerChange} />
                <label htmlFor="nombre">Nombre</label>
                </span>
                <br/>  
                <span className='p-float-label'>
                <InputText style={{width:'100%'}} value={producto.descripcion} id = "descripcion" onChange={handlerChange} />
                <label htmlFor="descripcion">Descripción</label>
                </span>
                <br/>
                <span className='p-float-label'>
                <InputText style={{width:'100%'}} value={producto.precio}  id = "precio" onChange={handlerChange} />
                <label htmlFor="precio">Precio</label>
                </span> 
              </form>
              
            </Dialog> 
            <Toast ref={toast} />
          </div>
        
    ) : ("No hay Productos") }
    
    </>
  );
 
}

export default Producto
