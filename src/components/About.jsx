import React from 'react'
import about from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

const About = () => {
  return (
    <div className='w-full justify-center items-center flex gap-10 mb-5 mt-18'>
        <div className='w-110 h-110 relative'>
            <img src={about} className='!rounded-xl object-cover'/>
            <img src={play_icon} className='absolute inset-45 h-15'/>
        </div>
        <div className='text-black flex flex-col gap-3 max-w-[39rem] mb-4'>
            <h3 className='text-blue-800 text-xl'>ABOUT UNIVERSITY</h3>
            <h1 className='text-4xl font-bold text-black'>Nurturing Tomorrow's <br/>Leaders Today</h1>
            <p className=' text-gray-500'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p className=' text-gray-500'>
            With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
            </p>
            <p className=' text-gray-500'>
            Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About