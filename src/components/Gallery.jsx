import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className=' max-w-[1140px] m-auto w-full px-4 py-16 '>
        <h2 className=' text-center text-gray-700 p-4 '>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className=' sm:col-span-3 col-span-2 row-span-2 '>
                <img className=' w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
            </div>
            <div>
                <img className=' w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
            </div>
            <div>
                <img className=' w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
            </div>
            <div>
                <img className=' w-full h-full object-cover  ' src="https://plus.unsplash.com/premium_photo-1663047367140-91adf819d007?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
            </div>
            <div>
                <img className=' w-full h-full object-cover  ' src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Gallery