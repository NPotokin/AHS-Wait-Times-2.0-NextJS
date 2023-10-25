import React from 'react'
import Link from 'next/link'

const CalgaryService = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='mx-auto py-8 text-3xl md:text-5xl lg:text-7xl font-bold text-cyan-900'>
        Choose Service
      </h1>    
      <div className='mx-3 grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mx-auto relative mt-3  rounded-3xl'>
          <img src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover rounded-3xl  opacity-40 shadow-2xl shadow-cyan-900 hover:scale-105 duration-1000" />
          <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
              translate-y-[-50%] ">
              <h1 className='pb-3 text-4xl font-semibold text-cyan-800 '>Emergency</h1>
              <h1 className='pt-2 pb-4 text-justify text-lg font-medium text-cyan-800'>For those who are seriously ill or injured, with potentially life-threatening conditions.</h1>
              <Link 
              href='/calgary/emergency'
              className='mx-auto p-3 border-4 bg-cyan-100 border-cyan-500 rounded-3xl font-bold text-2xl text-cyan-500 hover:bg-cyan-200'>Go to Hospitals</Link>
        </div>
      </div>

      <div className='w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mx-auto relative mt-3 rounded-3xl '>
        <img src="https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
             alt="" 
             className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover rounded-3xl  opacity-40 shadow-2xl shadow-cyan-900 hover:scale-105 duration-1000" />
        <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-cyan-800'>Urgent Care</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg font-medium text-cyan-800'>An option for unexpected, but non-life threatening health concerns.</h1>
            <Link 
              href='/calgary/urgentCare'
              className='mx-auto p-3 border-4 bg-cyan-100 border-cyan-500 rounded-3xl font-bold text-2xl text-cyan-500 hover:bg-cyan-200'>Go to Hospitals</Link>
        </div>
      </div>
      </div>

      </div>

    
  )
}

export default CalgaryService