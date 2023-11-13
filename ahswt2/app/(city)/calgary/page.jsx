import React from 'react'
import Link from 'next/link'

const CalgaryService = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='my-6 mx-2 text-cyan-700 text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-4 pt-4 font-bold text-center'>
        Choose Service
      </h1>    
      <div className='mx-1 grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='bg-cyan-200 min-w-[300px] max-w-[500px] w-full aspect-square mx-auto relative rounded-3xl group hover:shadow-2xl shadow-cyan-900 hover:scale-105 duration-1000'>
          <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              className="min-w-[300px] max-w-[500px] w-full aspect-square object-cover rounded-3xl opacity-40" />
          <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] w-full px-8 text-center">
              <h1 className='pb-3 text-4xl font-semibold text-cyan-950 '>Emergency</h1>
              <h1 className='pt-2 pb-4 text-justify text-md md:text-lg lg:text-xl text-cyan-900 font-medium'>For those who are seriously ill or injured, with potentially life-threatening conditions.</h1>
              <Link 
              href='/calgary/emergency'
              className='text-center bg-transparent p-2 md:p-3 rounded-xl text-md md:text-lg lg:text-xl font-semibold  text-cyan-800 border-cyan-800 border-2 hover:bg-cyan-200 duration-1000'>Go to Hospitals</Link>
        </div>
      </div>

      <div className='bg-cyan-200 min-w-[300px] max-w-[500px] w-full aspect-square mx-auto relative rounded-3xl group hover:shadow-2xl shadow-cyan-900 hover:scale-105 duration-1000'>
        <img src="https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
             alt="" 
             className="min-w-[300px] max-w-[500px] w-full aspect-square object-cover rounded-3xl opacity-40" />
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] w-full px-8 text-center">
            <h1 className='pb-3 text-4xl font-semibold text-cyan-950 '>Urgent Care</h1>
            <h1 className='pt-2 pb-4 text-justify text-md md:text-lg lg:text-xl text-cyan-900 font-medium'>An option for unexpected, but non-life threatening health concerns.</h1>
            <Link 
              href='/calgary/urgentCare'
              className='text-center bg-transparent p-2 md:p-3 rounded-xl text-md md:text-lg lg:text-xl font-semibold  text-cyan-800 border-cyan-800 border-2 hover:bg-cyan-200 duration-1000'>Go to Hospitals</Link>
        </div>
      </div>
      </div>

      </div>

    
  )
}

export default CalgaryService