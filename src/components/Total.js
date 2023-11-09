
import {useSelector} from 'react-redux'

function Total() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
 
  return (
      <p className=' flex justify-between items-center mt-3' >
          
          
          Total ({getTotal().totalQuantity} items) 
          : <strong>${Math.floor(getTotal().totalPrice)}</strong>
        </p>
      
  )
}
export default Total