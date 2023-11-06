import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './modules/Home';
import Footer from './components/Footer/Footer';
import {Routes,Route} from 'react-router-dom'
import Product from './modules/Product/Product';
import Products from './modules/Products/Products';
import CategoryProducts from './modules/CategoryProducts/CategoryProducts';
import Cart from './modules/Cart/Cart';


export default function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<Product />} />
      <Route path="/products" element={<div><Products/></div>}/>
      <Route path="/categories/:name" element={<CategoryProducts/>}/>
      <Route path="*" element={<div>404</div>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

