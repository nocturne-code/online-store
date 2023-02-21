import React from "react"
import Home from "./Home"
import Shop from "../components/Shop"
import Wrapper from "../components/Wrapper"

const Pages = ({ addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </>
  )
}

export default Pages
