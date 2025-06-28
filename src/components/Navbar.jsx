import logo from '../../src/assets/logo.png';
import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
  const [Scrolled, setScrolled] = useState(false)
  const location = useLocation();

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

  const isHome = location.pathname === '/';
  const navBg = (!isHome || Scrolled) ? 'bg-blue-900' : 'bg-transparent';

  return (
    <nav className={`px-40 py-2 flex fixed top-0 left-0 z-25 w-full justify-between transition-all duration-300 ${navBg}`}>
        <img className='h-9 mt-1' src={logo}/>
        <ul className='flex gap-12 text-white items-center cursor-pointer'>
            <Link to="/">Home</Link>
            <Link to="/program">Program</Link>
            <Link to="/about">About</Link>
            <Link to="/campus">Campus</Link>
            <Link to="/testimonials">Testimnial</Link>
            <Link  to="/contact">
            <button className='hover:scale-110 bg-white'>Contact us</button>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar