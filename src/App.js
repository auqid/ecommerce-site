import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './modules/Home/Home';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <h1 classNameName="text-gray-600 text-4xl">
      <Header></Header>
      <Home/>
      <Footer/>
    </h1>
  )
}

