import React from 'react'
import Categories from '../components/Categories'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <section className='home'>
        <div className="container d_flex">
            <Categories/>
            <Slider/>
        </div>
      
    </section>
  )
}

export default Home
