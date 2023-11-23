import Hospitals from '@/utils/hospitals'
import Link from 'next/link'
import React from 'react'

const Edmonton = () => {
  return (
    <div className='container flex flex-col mx-auto pb-10'>
        
        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
            Health Care Facilities in Edmonton
        </h1>

        
        <div className='mt-10 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
           
            {Hospitals
            .filter((item) => item.contactInfo.adress.city === 'Edmonton, Alberta')
            .map((item) => (
                <div 
                key={item.name}
                className='grid grid-cols-3 mx-auto group'>
                    <div 
                    className='text-white bg-cyan-600 group-hover:text-cyan-700 group-hover:bg-white p-4 m-1 flex items-center justify-center text-xl font-semibold col-span-3 h-[90px]  border-cyan-600 rounded-3xl'>
                        {item.name}
                    </div>
                    <div 
                    className='group-hover:text-white group-hover:bg-cyan-600 col-span-2 row-span-2 p-2 m-1 flex items-center justify-center text-md  font-bold min-h-[189px] aspect-square   border-4 border-cyan-600 text-cyan-700 rounded-3xl'>
                      {item.info}
                    </div>
                    <div 
                    className='group-hover:text-white group-hover:bg-cyan-600 row-span-2 p-2 m-1 flex flex-col items-center justify-center  min-h-[189px] border-4 border-cyan-600 text-cyan-700 rounded-3xl'>
                        
                        <div className='text-center text-md font-bold mt-2'>Adress:</div>
                        <div className='text-center text-md font-normal'>{item.contactInfo.adress.city}</div>
                        <div className='text-center text-md font-normal'>{item.contactInfo.adress.street}</div>
                        <div className='text-center text-md font-normal'>{item.contactInfo.adress.zip}</div>
                        
                        
                        <div></div>
                    </div>
                    <div 
                    className='group-hover:text-white group-hover:bg-cyan-600 p-4 m-1 flex flex-col items-center justify-center text-md font-bold h-[90px] border-4 border-cyan-600 text-cyan-700 rounded-3xl'>
                        <div className='text-center text-sm md:text-md font-normal'>Wait Time</div>
                        <div className='text-center text-sm md:text-md font-bold'>126 min</div>
                    </div>

                    <div 
                    className='p-2 m-1 col-span-2 flex flex-col items-center justify-center text-md lg:text-lg font-bold min-h-[90px] border-4 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white rounded-3xl'>
                        <Link 
                            href={item.route}
                            className='mx-auto font-semibold text-xl '>
                            Visit Facility Page
                        </Link>
                        
                    </div>
                    
                </div>
                

                
            ))}

          </div>

    
    </div>
  )
}

export default Edmonton;