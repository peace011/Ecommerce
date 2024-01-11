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

function App() {
  return (
    <div className="App">


<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:id" element={<Category />} />




    
      </Routes>
    </Router>

    
    {/* <Home/> */}
{/* <ProductList/> */}
{/* <Product/> */}
{/* <Register/> */}
{/* <Login/> */}
{/* <Cart/> */}
    </div>
  );
}

export default App;
