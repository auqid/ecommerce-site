import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './modules/Home';
import Footer from './components/Footer/Footer';
import {Routes,Route} from 'react-router-dom'
import Product from './modules/Product/Product';


export default function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer/>
      </>
  )
}

