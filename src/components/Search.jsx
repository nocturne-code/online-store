import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/shopzing.png'

const Search = ({cartItem}) => {
  window.addEventListener("scroll",function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY>100)
  })
  return (
    <section className="search">
    <div className='container c_flex'>
      {/* site logo */}
      <div className="logo width">
        <img src={logo} alt="" />
      </div>
      {/*search bar*/}
      <div className="search-box f_flex">
        <i className='fa fa-search'></i>
        <input type="text" placeholder='Search'/>
        <span>All Categories</span>
      </div>
      {/* cart */}
      <div className="icon f_flex width">
        <div className="cart">
          <Link to='/cart'>
            <i className="fa fa-shopping-bag icon-circle"></i>
            {/* show number of items added to cart */}
            <span className={cartItem.length ===0?"none":"span"}>{cartItem.length ===0?"":cartItem.length}</span>
          </Link>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Search
