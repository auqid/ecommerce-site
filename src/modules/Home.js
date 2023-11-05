import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero/Home'
import ProductCard from '../components/ProductCard/ProductsCard'
import Categories from '../components/Categories/Categories'


const Home = () => {
  //using useState to create a initial empty Array and later on use it to save out fetched data.
  const [products,setProducts]=useState([])
  
  //Fetching data from FakeStoreApi using useEffect so it fetched it 
//when the page renders at first and does not re-render it when state changes since no dependency is given
  
useEffect(() => {
    const fetchProducts = async()=>{
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data= await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])
  
  return (
    <div>
      <Hero></Hero>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
    </div>
{/**if products return truthy they are sent as prop to Produt component */}
    {products.length>0 ?
    <ProductCard products={products}/>:
    <div className='flex flex-col text-center w-full mt-20'>Loading..</div>}
      
     
    </div>
  )
}

export default Home
