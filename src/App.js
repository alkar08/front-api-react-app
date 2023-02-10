import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Producto from './components/Productos'
import AddTienda from './components/AddTienda';
import EditTienda from './components/EditTienda';
import Navbar from "./layout/Navbar";

function App() {
  return ( 
    <div className = "contenedor" >
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/crearTienda' element={<AddTienda></AddTienda>}></Route>
          <Route path='/editTienda/:id' element={<EditTienda></EditTienda>}></Route>
          <Route path='/tiendas/:id/productos' element={<Producto></Producto>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;