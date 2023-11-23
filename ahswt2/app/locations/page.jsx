import Image from 'next/image'
import location from '../assets/locations.png'
import Link from 'next/link'
import City from '@/utils/city'


export default function Locations() {
    return(
        <main className='container flex flex-col mx-auto pb-10'>
          
          <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
            Locations 
          </h1>

          <div className="flex flex-col md:flex-row mt-2">
            
            <div className="flex-col pt-8 md:w-2/3">
                <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Our search by location feature offers unparalleled convenience, allowing you to explore services across 17 diverse locations, ensuring accessibility wherever you may be. 
                </div>
                <div className='py-3  mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                With access to information on 28 healthcare facilities within these locations, finding the nearest and most suitable care has never been more effortless.
                </div>
                <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Seamlessly pinpoint services in your vicinity, making informed decisions about your health with our comprehensive location-based search functionality. 
                </div>
                
            </div>
            <Image
            src={location}
            alt=""
            className='md:w-1/3 py-3 min-w-[300px] max-w-[450px] w-full min-h-[300px] max-h-[450px] h-full my-auto mx-auto'
            />
          </div>

          <div className='mt-10 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
           
            {City.map((item) => (
                <div 
                key={item.name}
                className='grid grid-cols-3 mx-auto group'>
                    <div 
                    className='text-white bg-cyan-600 group-hover:text-cyan-700 group-hover:bg-white p-4 m-1 flex items-center justify-center text-xl lg:text-2xl font-semibold col-span-3 h-[90px]  border-cyan-600 rounded-3xl'>
                        {item.name}
                    </div>
                    
                    <div 
                    className='row-span-2 group-hover:text-white group-hover:bg-cyan-600 p-2 m-1 flex flex-col items-center justify-center text-md lg:text-lg font-bold min-h-[90px] border-4 border-cyan-600 text-cyan-700 rounded-3xl'>
                        <div>Population</div>
                        <div className='mb-3'>{item.population}</div>
                        <div className='mt-3'>Facilities</div>
                        <div>{item.facilities}</div>
                    </div>
                    <div 
                    className='group-hover:text-white group-hover:bg-cyan-600 col-span-2 row-span-2 p-2 m-1 flex items-center justify-center text-md  font-bold min-h-[189px] aspect-square   border-4 border-cyan-600 text-cyan-700 rounded-3xl'>
                      {item.info}
                    </div>

                    

                    <div 
                    className='p-2 m-1 col-span-3 flex flex-col items-center justify-center text-md lg:text-lg font-bold min-h-[90px] border-4 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white rounded-3xl'>
                        <Link 
                            href={item.route}
                            className='mx-auto font-semibold text-xl '>
                            Visit Location Page
                        </Link>
                        
                    </div>
                    
                </div>
                

                
            ))}

          </div>





        </main>
    )}
    