import React from 'react'
import grad from '../assets/program-1.png'
import masters from '../assets/program-2.png'
import post_grad from '../assets/program-3.png'
import grad_icon from '../assets/program-icon-1.png'
import masters_icon from '../assets/program-icon-2.png'
import post_icon from '../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-7 text-black'>
        <div className='flex flex-col gap-2 py-12 text-center'>
            <p>OUR PROGRAM</p>
            <h1 className='text-4xl font-bold'>What We Offer</h1>
        </div>
        <div className='flex gap-10 h-85 w-90 items-center justify-center mb-40'>
            <img src={grad} className='!rounded-xl'/>
            <img src={masters} className='!rounded-xl'/>
            <img src={post_grad} className='!rounded-xl'/>
        </div>

    </div>
  )
}

export default Programs