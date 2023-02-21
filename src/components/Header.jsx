import React from 'react'
import Search from './Search'

const Header = ({cartItem}) => {
  return (
    <div>
      <Search cartItem={cartItem}/>
    </div>
  )
}

export default Header
