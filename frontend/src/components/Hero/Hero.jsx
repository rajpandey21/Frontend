import React from 'react'
import hero from '../../Assets/img.png'
import './Hero.css'

const Hero = () => {
  return (
  <section className='section-hero section'>
    <div className='container grid grid-two-column'>
      <div className='section-hero-data'>
        <p className='hero-top-data'>This is us</p>
        <h1 className='hero-heading'>Blooprint Ecommerce Consultancy</h1>
        <p className='hero-para'>We are here to make sure the growth of your business and enhance
        your selling .</p>
        <div>
        <a href='#' className='btn Get-btn'>Get Started</a>
      </div>
      </div>
      
      <div className='section-hero-image'>
        <img src={hero} alt="this is hero img " className='hero-img'   />
      </div>
    </div>

  </section>
  )
}

export default Hero
