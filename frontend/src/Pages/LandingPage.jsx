import React from 'react'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HomeNavAdmin from '../Components/HomeNavAdmin'


const LandingPage = () => {
  return (
    <div>
      <HomeNavAdmin/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default LandingPage