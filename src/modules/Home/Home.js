import React from 'react'
import Hero from '../../components/Hero/Home'
import Product from '../../components/Product/Product'
import Feature from '../../components/Feature/Feature'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Best Deals!</h1>
    </div>
      <Product/>
      <Feature/>
    </div>
  )
}

export default Home
