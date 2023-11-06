import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import Total from '../../components/Total'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  
  return (
    
      <div className="flex flex-col justify-center items-center min-h-screen">
    <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="flex justify-between mb-4"></div>
        {cart.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
        category={item.category}
      />
    ))}
    </div>
    <Total/>
    <div className="flex justify-between items-center mt-3">
        
        </div>
        <div className="flex justify-center mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
        </div>
    </div>
  )
}

export default Cart
