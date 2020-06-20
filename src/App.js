import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
function App() {

  //Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50} ,   
    { id: 2, nombre: 'Camisa Angular', precio: 50} , 
    { id: 3, nombre: 'Camisa Vue', precio: 50} , 
    { id: 4, nombre: 'Camisa NOdeJS', precio: 50} 
  ]);

  //State para un carrtio de compras
  const [ carrito, agregarProducto ] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda virtual'
      />
      <h1> Lista de Productos </h1>
      {
        productos.map( producto => (
            <Producto
            key = {producto.id}
              producto = { producto }
              carrito = { carrito }
              productos = {productos}
              agregarProducto = { agregarProducto }
            />
          )
        )
      }
      <Carrito 
      carrito= {carrito}
      agregarProducto = {agregarProducto}
      />
      <Footer
        fecha = {fecha}
      />
    </Fragment>

  );
}

export default App;
