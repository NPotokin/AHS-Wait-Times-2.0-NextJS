import Hospitals from '@/utils/hospitals'
import React from 'react'
import Link from 'next/link'

const lethbridgeHospitals = Hospitals.filter((hospital) => hospital.municipality === 'Lethbridge')

const lethbridge = () => {
  return (
    <div className='flex flex-col  pb-20'>
        <h1 className='my-12 text-cyan-700 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center'>
        Lethbridge Facilities
        </h1>

    <div className='grid mx-3 grid-cols-1  gap-3'>
         
      {lethbridgeHospitals.map((item) => (
      <div 
        key={item.key}
        className='w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] mx-auto relative mt-3  rounded-3xl group hover:shadow-2xl shadow-cyan-900 hover:scale-105 duration-1000'>
        <img src={item.img} 
             alt="" 
             className="xl:w-[400px] xl:h-[400px] object-cover rounded-3xl w-[300px] h-[300px] opacity-40" />
        <div className="w-3/4 absolute  top-[50%] left-[50%] translate-x-[-50%] 
            translate-y-[-50%] ">
            <h1 className='pb-3 text-4xl font-semibold text-cyan-950 '>{item.name}</h1>
            <h1 className='pt-2 pb-4 text-justify text-lg text-cyan-900 font-medium'>{item.info}</h1>
            <Link 
            href={item.route}
            className='text-center p-3 rounded-xl text-xl font-semibold bg-cyan-100 text-cyan-500 border-cyan-500 border-2 hover:bg-cyan-200 duration-1000'>Chose Service</Link>
        </div>
      </div>
      ))}
    </div>
    </div>
  )
}

export default lethbridge;