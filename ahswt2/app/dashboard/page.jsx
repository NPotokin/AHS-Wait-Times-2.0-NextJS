import slugsEdmonton from '@/utils/slugsEdmonton'
import slugsCalgaryOthers from '@/utils/slugsCalgary';
import LineGraph from '@/components/facilityCard/LineGraph';
import Image from 'next/image';
import dashboard from '../assets/dashboard.png';
import DashboardGraphHour from '@/components/dashboard/DashboardGraphHour';




export default function Dashboard(){
    
    return(
        <main className='container flex flex-col mx-auto'>
      
        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
          Dashboard 
        </h1>


        <div className="flex flex-col md:flex-row">
        
        <div className="flex-col py-6 md:w-1/2">
            <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
            Welcome to our innovative dashboard, your go-to spot for real-time insights! 
            </div>
            <div className='py-3  mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
            Continuously evolving, we refine and innovate to bring you the latest trends and data.
            </div>
            <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
            Discover hourly, daily, and weekly analytics presenting trends from Edmonton and across Alberta, reflecting our commitment to precision and comprehensive monitoring. 
            </div>
            
        </div>
        <Image
        src={dashboard}
        alt=""
        className='md:w-1/3 py-3 min-w-[300px] max-w-[450px] w-full min-h-[300px] max-h-[450px] h-full my-auto mx-auto'
        />
        </div>

        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
          Edmonton 
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
            <DashboardGraphHour slug={slugsEdmonton}/>
        </div>

        
        </main>
    )

    
}



