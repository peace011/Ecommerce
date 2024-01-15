// import './App.css';
import './style.css';
import React from 'react';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Category from './pages/Category';
import { useState } from 'react';
// import cartslice from './store/slice/CartSlice';
function App() {

  const[cart,setCart]=useState([]);

  return (
    <div className="App">

<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/:id/product/:productid" element={<Product cart={cart} setCart={setCart}/>} />
        {/* <Route path="/productlist" element={<ProductList />} /> */}
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="/category/:id" element={<Category />} />


{/* <CartSlice/> */}

    
      </Routes>
    </Router>

    
    </div>
  );
}

export default App;
