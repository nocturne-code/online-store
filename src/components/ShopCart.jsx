import React from "react"

const ShopCart = ({ shopItems, addToCart }) => {
  
  return (
    <>
    {/* display all products from database */}
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box' key={index}>
            <div className='product mtop'>
              <div className='img'>
                {/* display discount and picture */}
                <span className='discounts'>{shopItems.discount}% Off</span>
                <img src={shopItems.cover} alt='' />
                
              </div>
              <div className='product-details'>
                {/* display name and price */}
                <h3>{shopItems.name}</h3>                
                <div className='price'>
                  <h4>${shopItems.price} </h4>
                  
                  {/* on button click, add selected item to cart */}
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
