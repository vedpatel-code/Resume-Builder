import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Feature from '../components/Home/Feature'
import Testimonial from '../components/Home/Testimonial'
import Footer from '../components/Home/Footer'
import CallToAction from '../components/Home/CallToAction'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Feature />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
