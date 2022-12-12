import React from 'react'

const Activities = () => {
  return (
    <div className=' max-w-[1140px] m-auto w-full md:flex mt-[-75px] '>
        <div className=' relative p-4 '>
            <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Resorts</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
             src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
        alt="/" />
        </div>
        <div className=' relative p-4 '>
            <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Cruise</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
             src="https://images.unsplash.com/photo-1516495312540-a148643b22d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" 
        alt="/" />
        </div>
        <div className=' relative p-4 '>
            <h3 className=' absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold '>Excursion</h3>
            <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
             src="https://images.unsplash.com/photo-1609666869239-919fd1f0e7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXhjdXJzaW9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
        alt="/" />
        </div>
        
    </div>
  )
}

export default Activities