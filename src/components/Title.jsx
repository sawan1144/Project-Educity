import React from 'react'

const Title = ({title, subtitle}) => {
  return (
        <div className='flex flex-col gap-2 text-center py-15'>
            <p className='text-blue-800'>{subtitle}</p>
            <h1 className='text-4xl font-bold text-black'>{title}</h1>
        </div>
  )
}

export default Title