import React, {useContext} from 'react'
import { CartContext } from '../Features/ContextProvider'
import { CartProduct } from '../Components/CartProduct'
import { totalItem, totalPrice } from '../Features/CartReducer'


export const Cart = () => {
  const{cart} = useContext(CartContext)
  return (
    <div className='container'>
      <div className=''>
        <div className=''>
          {cart.map(p => (
            <CartProduct product = {p}></CartProduct>
          ))}
        </div>
        <div className='total'>
          <div >
            <h5>Total Items: {totalItem(cart)} </h5>
            <h5>Total Price: ${totalPrice(cart)}</h5>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
