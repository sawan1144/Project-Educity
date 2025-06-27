import logo from '../../src/assets/logo.png'
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [Scrolled, setScrolled] = useState(false)

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
},[])


  return (
    <nav className={`px-40 py-2 flex fixed top-0 left-0 z-25 w-full justify-between transition-all duration-500 ${Scrolled ? 'bg-blue-900' : 'bg-transparent'}`}>
        <img className='h-9 mt-1' src={logo}/>
        <ul className='flex gap-12 text-white items-center cursor-pointer'>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>Program</li>
            <li className='hover:underline'>About US</li>
            <li className='hover:underline'>Campus</li>
            <li className='hover:underline'>Testimonials</li>
            <button className='hover:scale-110 bg-white'>Contact us</button>
        </ul>
    </nav>
  )
}

export default Navbar