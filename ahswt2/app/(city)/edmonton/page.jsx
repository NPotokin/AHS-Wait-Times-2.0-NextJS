import Hospitals from '@/utils/hospitals'
import Link from 'next/link'
import React from 'react'

const edmontonHospitals = Hospitals.filter((hospital) => hospital.municipality === 'Edmonton')

const Edmonton = () => {
  return (
    <div className='flex flex-col  pb-20'>
        <h1 className='my-6 mx-2 text-cyan-700 text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-4 pt-4 font-bold text-center'>
            Edmonton Facilities
        </h1>

    <div className='grid mx-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
         
      {edmontonHospitals.map((item) => (
      <div 
        key={item.key}
        className='bg-cyan-200 min-w-[300px] max-w-[450px] w-full aspect-square mx-auto relative rounded-3xl group hover:shadow-2xl shadow-cyan-900 hover:scale-105 duration-1000'>
        <img src={item.img} 
             alt="" 
             className="min-w-[300px] max-w-[450px] w-full aspect-square object-cover rounded-3xl opacity-40" />
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] w-full px-8 text-center">
            <h1 className='pb-3 mb-6 text-4xl font-semibold text-cyan-950 '>{item.name}</h1>
            {/* <p className='pt-2 pb-4 text-justify text-md md:text-lg lg:text-xl text-cyan-900 font-medium'>{item.info}</p> */}
            <Link 
            href={item.route}
            className='ttext-center bg-transparent p-2 md:p-3 rounded-xl text-xl font-semibold  text-cyan-800 border-cyan-800 border-2 hover:bg-cyan-200 duration-1000'>Go to Facility Page</Link>
        </div>
      </div>
      ))}
    </div>
    </div>
  )
}

export default Edmonton