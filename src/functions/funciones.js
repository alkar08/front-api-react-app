import axios from 'axios'

const allTiendas = async(state) => {
    const tiendas =  await axios.get('http://localhost:8080/api/tiendas')
    state(tiendas.data);
}

const saveTienda = async(state, tiendaIn) =>{
    const tienda = await axios.post(`http://localhost:8080/api/tiendas`, tiendaIn)
    console.log(tienda)
    state((prev)=>([...prev, tienda.data]))
}

const updateTienda = async(id, tiendaIn) =>{
    await axios.put(`http://localhost:8080/api/tiendas/${id}`, tiendaIn)
}

const deleteTienda = async(idTienda) =>{
    await axios.delete(`http://localhost:8080/api/tiendas/${idTienda}`)
}

const findTienda = async (id, state) => {
    const tienda =  await axios.get(`http://localhost:8080/api/tiendas/${id}`)
    console.log(tienda);
    state(tienda.data);
}

const findProductoByTienda = async (id, state) => {
    const productos =  await axios.get(`http://localhost:8080/api/tiendas/${id}/productos`)
    console.log(productos.data);
    state([...productos.data]);
}

const saveProductoTienda = async(idTienda, state, product) =>{
    const producto = await axios.post(`http://localhost:8080/api/tiendas/${idTienda}/productos`, product)
    state((prev)=>([...prev, producto.data]))
}

const updateProductoTienda = async(idTienda, product) =>{
      await axios.put(`http://localhost:8080/api/tiendas/${idTienda}/productos/${product.id}`, product)
}

const deleteProductoTienda = async(idTienda, idProducto) =>{
    await axios.delete(`http://localhost:8080/api/tiendas/${idTienda}/productos/${idProducto}`)
}

export{
    allTiendas,
    findProductoByTienda,
    saveProductoTienda,
    updateProductoTienda,
    deleteProductoTienda,
    deleteTienda,
    saveTienda,
    updateTienda,
    findTienda
}