import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cartItem, addToCart, decreaseQty}) => {
  const totalPrice = cartItem.reduce((price, item)=>price + item.qty * item.price,0)
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">

            {cartItem.length === 0 && <h1 className="no-items product">Cart is empty</h1>}

            {/* items added to cart */}
            {cartItem.map((item)=>{
            const prodcutQty = item.price * item.qty 
            return(
              <div className="cart-list product d_flex">
                {/* item picture */}
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                {/* item name, price and quantity */}
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <h4>{item.price} * {item.qty}
                  <span>${prodcutQty}</span>
                  </h4>
                </div>
                <div className="cart-items-function">
                  <div className="cartControl d_flex">
                    {/* + button in cart to increase the qty of items */}
                    <button className='incCart' onClick={()=> addToCart(item)}> <i className="fa fa-plus"></i> </button>
                    {/* - button in cart to decrease the qty of items */}
                    <button className='desCart' onClick={()=> decreaseQty(item)}> <i className="fa fa-minus"></i> </button>
                  </div>
                </div>                        
              </div>
            )
            })} 
          </div>
          {/* cart sum */}
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price : </h4>
              <h3>${totalPrice}.00</h3>
            </div> 
            {/* show continue button if cart is not empty */}
           {cartItem.length === 0? "" :<Link to="/checkout"><button >Continue</button></Link> }        
          </div>
            
        </div>
      </section>
    </>
  )
}

export default Cart
