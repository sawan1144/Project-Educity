import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Title from './components/Title'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title title='What We Offer' subtitle='OUR PROGRAM'/>
      <Programs />    
      <About />
      <Title title='Campus Photos' subtitle='GALLERY'/>
      <Campus />
      <Title title='What Students Says' subtitle='TESTIMONIALS'/>
      <Testimonials />
      <Title title='Get In Touch' subtitle='CONTACT US'/>
      <Contact />
    </div>
  )
}

export default App