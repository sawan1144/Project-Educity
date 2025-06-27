import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className='w-full justify-center items-center flex gap-10 mb-5'>
        <div className='w-100 h-100 overflow-hidden rounded-lg'>
            <img src={about} className='object-cover'/>
        </div>
        <div className='text-black flex flex-col gap-3 max-w-2xl'>
            <h3>ABOUT UNIVERSITY</h3>
            <h1>Nurturing Tomorrow's Leaders Today</h1>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>
            With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
            </p>
            <p>
            Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About