import React from 'react'
import './Hero.css'

const Hero = () => {
  return ( 
    <section className='hero-wrapper'>

    {/*Left Side */}
      <div className='paddings innerWidth flexCenter hero-container'>
        <div className='hero-left'>
         <div className='hero-title'>
          <h1>Discover<br/>Most Suitable Property</h1>
         </div>
        </div>


        {/*Right side */}
        <div className='hero-right flexCenter'>
          <div className='image-container'>
           <img src='./hero-image.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
