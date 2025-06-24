import React from 'react'
import logo from '../../src/assets/logo.png'

const Navbar = () => {
  return (
    <nav className='px-38 py-3 flex fixed top-0 left-0 z-25 w-full justify-between'>
        <img className='h-9' src={logo} alt="" />
        <ul className='flex gap-12 text-white items-center cursor-pointer'>
            <li className='hover:underline'>Home</li>
            <li className='hover:underline'>Program</li>
            <li className='hover:underline'>About US</li>
            <li className='hover:underline'>Campus</li>
            <li className='hover:underline'>Testimonials</li>
            <button className='hover:scale-110'>Contact us</button>
        </ul>
    </nav>
  )
}

export default Navbar