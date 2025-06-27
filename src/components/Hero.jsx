import React from 'react'
import hero from '../../src/assets/hero.png'
import dark_arrow from '../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='relative w-full h-screen'>
            <img className='w-full h-full object-cover' src={hero} alt=""/>
            <div class="absolute inset-0 bg-indigo-700/45"></div>
            <div class="absolute inset-0 bg-black/60"></div>
            
            <div className='absolute inset-0 z-21 flex flex-col justify-center items-center text-center gap-5'>
            <h1 className='text-6xl font-bold leading-20 max-w-3xl'>We Ensure better education for a better world</h1>
            <p className=' max-w-2xl'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='hover:scale-110 flex gap-1 items-center bg-white'>Explore More <img className='h-3 px-1' src={dark_arrow} alt="" /></button>
            </div>
       </div>
    )
}

export default Hero