import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import About from './components/About'
import Title from './components/Title'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title title='What We Offer' subtitle='OUR PROGRAM'/>
      <Programs />
      
      <About />
    </div>
  )
}

export default App