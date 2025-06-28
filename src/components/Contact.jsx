import React from 'react'
import message from '../assets/msg-icon.png'
import mail from '../assets/mail-icon.png'
import phone from '../assets/phone-icon.png'
import location from '../assets/location-icon.png'
import arrow from '../assets/white-arrow.png'
import {toast} from 'react-hot-toast'


const Contact = () => {

  const Submit = (e)=>{
    e.preventDefault();
    toast.success("Form Submitted Successfully!");
    e.target.reset();
  }

  return (
    <div className='w-screen flex justify-center mb-10 gap-8'>
        <div className='flex flex-col gap-4 text-gray-500 max-w-lg'>
          <h1 className='text-3xl !text-black flex'>Send us a message <img src={message} className='h-8 px-3'/></h1>
          <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <p className='flex '><img src={mail} className='h-5 pr-2'/>sawanpanwarx@gmail.com</p>
          <p className='flex'><img src={phone} className='h-6 pr-2'/>+91 8218222818</p>
          <p className='flex'><img src={location} className='h-7 pr-2'/>Roorkee, Haridwar, Uttrakhand 247663</p>
        </div>
        <div>
          <form onSubmit={Submit} className='flex flex-col text-gray-500 gap-2'>
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name' className='bg-violet-100 p-2 text-sm' required/>
            <label>Phone Number</label>
            <input type="text" placeholder='Enter your mobile number' className='bg-violet-100 w-xl p-2 text-sm' required/>
            <label>Write Your Message</label>
            <textarea rows={6} placeholder='Enter your message here' className='bg-violet-100 p-2 text-sm' required></textarea>
            <button type='submit' className='bg-blue-800 !text-white flex w-fit mt-5 hover:scale-110'>Submit now <img src={arrow} className='h-3 pl-2'/></button>
          </form>
        </div>
    </div>
  )
}

export default Contact