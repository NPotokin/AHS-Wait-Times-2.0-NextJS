import Hospitals from '@/utils/hospitals'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import facility from '../assets/facility.png'



const facilities = () => {
  return (
    <div className='container flex flex-col mx-auto pb-10'>
        
        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
            Health Care Facilities
        </h1>

        <div className="flex flex-col md:flex-row mt-2">
            <Image
            src={facility}
            alt="location marker behind buildings"
            className='md:w-1/3 py-3 min-w-[300px] max-w-[450px] w-full min-h-[300px] max-h-[450px] h-full my-auto mx-auto'
            />
            <div className="flex-col pt-8 md:w-2/3">
                <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Our platform enables seamless searching by healthcare facilities, allowing users to access vital data on wait times across 25 tracked medical centers. 
                </div>
                <div className='py-3  mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                With an intuitive interface, users can effortlessly explore and compare real-time wait times at these diverse facilities, empowering informed decisions for their medical needs.
                </div>
                <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Gain quick insights into wait times and trends at various healthcare centers, facilitating more informed healthcare choices. 
                </div>
            </div>
          </div>

          <div className='mt-10 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
           
            {Hospitals.map((item) => (
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
                    className='p-2 m-1 col-span-3 flex flex-col items-center justify-center text-md lg:text-lg font-bold min-h-[90px] border-4 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white rounded-3xl'>
                        <Link 
                            href={item.route} aria-label='visit facility page'
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

export default facilities;