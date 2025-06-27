import React from 'react'
import white_arrow from '../assets/white-arrow.png'
import gallery_1 from '../assets/gallery-1.png'
import gallery_2 from '../assets/gallery-2.png'
import gallery_3 from '../assets/gallery-3.png'
import gallery_4 from '../assets/gallery-4.png'

const Campus = () => {
  return (
    <div className=' flex flex-col gap-9 mb-15 justify-center items-center'>
        <div className='flex gap-8'>    
            <img src={gallery_1} className='h-78 w-63 object-cover rounded-xl' />
            <img src={gallery_2} className='h-78 w-63 object-cover rounded-xl'/>
            <img src={gallery_3} className='h-78 w-63 object-cover rounded-xl'/>
            <img src={gallery_4} className='h-78 w-63 object-cover rounded-xl'/>
        </div>
        <button className='bg-blue-800 !text-white flex hover:scale-110'>See more here <img src={white_arrow} className='h-3 ml-2'/></button>
    </div>
  )
}

export default Campus