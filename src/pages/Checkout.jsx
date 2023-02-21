import React from 'react'
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'
import {db} from "../assets/firebase"
import { collection, doc, setDoc } from 'firebase/firestore'

function Checkout({cartItem}) {
    const totalPrice = cartItem.reduce((price, item)=>price + item.qty * item.price,0)
        
    //send order data to database  
    const handleSubmit= async () =>{
        const ref = collection(db, "orders");
        await setDoc(doc(ref, "order"), {
            ...cartItem, totalPrice,
        })      
                
    }
  return (
    <>      
        <div className="container address">
            {/* order preview */}
            <h2>Your order</h2>
            <table className='table'>
                {/* table heading */}
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Value</td>
                    </tr>
                </thead>
                <tbody>
                    {/* list cart items in table */}
                    {cartItem.map((item,index)=>{
                        const prodcutQty = item.price * item.qty                         
                        return(
                            <tr key={index}>
                                {/* items details */}
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td>{prodcutQty}.00</td>
                            </tr>                                
                        )
                    })}                    
                </tbody>
            </table>
            {/* total price */}
            <div className="total">
                <div className="d_flex">
                    <h4>Total Price : </h4>
                    <h3>${totalPrice}.00</h3>
                </div>
            </div>
      </div>
      
      <div className="address container">
                  
        {/* paypal buttons implementation */}
            <PayPalScriptProvider options={{"client-id":""}}>
                <PayPalButtons createOrder={(data,actions)=>{
                    return actions.order.create({
                        purchase_units:[{
                            amount:{
                                value: totalPrice,
                            },
                        },],
                    });
                }} onClick={handleSubmit}></PayPalButtons>
            </PayPalScriptProvider>
        
        
      </div>
    </>
  )
}

export default Checkout
