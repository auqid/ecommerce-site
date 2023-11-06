import React from 'react'
import { cartActions } from '../../store'
import {useDispatch} from 'react-redux'

const CartItem = ({id,image,title,price,category,quantity}) => {
  const dispatch = useDispatch()
  
  
  return (
      

    
        <div className="flex justify-between mb-10">
            <div className="flex items-center">
                <img src={image} alt={id} className=" mr-5 w-50 md:h-24 md:w-24  " />
                <div>
                    <h2 className="font-bold">{title}</h2>
                    <p className="text-gray-700 capitalize">{category}</p>
                    <span className="font">Quantity: {quantity}</span>
                    <button onClick={() => dispatch(cartActions.incrementQuantity(id))}  className="ml-20 w-16 text-center ">+</button>
                    <button onClick={() => dispatch(cartActions.decrementQuantity(id))} className="w-16 text-center">-</button>
                    <button  onClick={() => dispatch(cartActions.removeItem(id))} className="w-16 text-center">Remove</button>
                    
                </div>
            </div>
            <div className="flex items-center">
                <button className="text-red-500 hover:text-red-700"><i className="fas fa-trash"></i></button>
                <div className="mx-4">
                    {/* <input type="number" value="1" className="w-16 text-center"/> */}
                </div>
                <span className="font-bold">${price}</span>

                
            </div>
        </div>
        

    
  )
}

export default CartItem
