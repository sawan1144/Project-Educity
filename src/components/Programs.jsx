import React from 'react'
import grad from '../assets/program-1.png'
import masters from '../assets/program-2.png'
import post_grad from '../assets/program-3.png'
import grad_icon from '../assets/program-icon-1.png'
import masters_icon from '../assets/program-icon-2.png'
import post_icon from '../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div>       
        <div className='flex gap-10 items-center justify-center mb-30'>

          <div className='card relative h-85 w-85'>
            <img src={grad} className='object-cover !rounded-xl'/>
            <div className='caption'>
              <img src={grad_icon}/>
              <p>Graduation Deegree</p>
            </div>
          </div>

          <div className='card relative h-85 w-85'>
            <img src={masters} className='object-cover !rounded-xl'/>
            <div className='caption'>
              <img src={masters_icon}/>
              <p>Masters Deegree</p>
            </div>
          </div>

          <div className='card relative h-85 w-85'>
            <img src={post_grad} className='object-cover !rounded-xl'/>
            <div className='caption'>
              <img src={post_icon}/>
              <p>Post Gradution</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Programs