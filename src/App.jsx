import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Programs from './components/Programs'
import About from './components/About'
import Title from './components/Title'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<>
            <Hero />
            <Title subtitle='OUR PROGRAM' title='What We Offer'/>
            <Programs />
            <About />
            <Title subtitle='GALLERY' title='Campus Photos'/>
            <Campus />
            <Title subtitle='TESTIMONIALS' title='What Students Says'/>
            <Testimonials />
            <Title subtitle='CONTACT US' title='Get In Touch'/>
            <Contact />
          </>} />
          <Route path='/program' element={<><Title subtitle='OUR PROGRAM' title='What We Offer'/><Programs/></>} />
          <Route path='/about' element={<About/>} />
          <Route path='/campus' element={<><Title subtitle='GALLERY' title='Campus Photos'/><Campus/></>} />
          <Route path='/testimonials' element={<><Title subtitle='TESTIMONIALS' title='What Students Says'/><Testimonials/></>} />
          <Route path='/contact' element={<><Title subtitle='CONTACT US' title='Get In Touch'/><Contact/></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App