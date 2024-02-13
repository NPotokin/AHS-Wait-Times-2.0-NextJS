import slugsEdmonton from '@/utils/slugsEdmonton'
import slugsGEA from '@/utils/slugsGEA';
import slugsCalgary from '@/utils/slugsCalgary'
import slugsOther from '@/utils/slugsOther';
import Image from 'next/image';
import dashboard from '../assets/dashboard.png';
import DashboardGraph3hr from '@/components/dashboard/DashboardGraph3hr';
import DashboardGraph6hr from '@/components/dashboard/DashboardGraph6hr';
import DashboardGraph12hr from '@/components/dashboard/DashboardGraph12hr';
import DashboardGraphDay from '@/components/dashboard/DashboardGraphDay';
import DashboardGraphWeek from '@/components/dashboard/DashboardGraphWeek';
import DashboardGraphMonth from '@/components/dashboard/DashboardGraphMonth';




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
            Discover three, six, and twelve and 24 hours analytics presenting trends from across Alberta, reflecting our commitment to precision and comprehensive monitoring. 
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <DashboardGraph3hr slug={slugsEdmonton}/>
            <DashboardGraph6hr slug={slugsEdmonton}/>
            <DashboardGraph12hr slug={slugsEdmonton}/>
            <DashboardGraphDay slug={slugsEdmonton}/>
        </div>

        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
          Greater Edmonton Area 
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <DashboardGraph3hr slug={slugsGEA}/>
            <DashboardGraph6hr slug={slugsGEA}/>
            <DashboardGraph12hr slug={slugsGEA}/>
            <DashboardGraphDay slug={slugsGEA}/>
        </div>

        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
          Calgary 
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <DashboardGraph3hr slug={slugsCalgary}/>
            <DashboardGraph6hr slug={slugsCalgary}/>
            <DashboardGraph12hr slug={slugsCalgary}/>
            <DashboardGraphDay slug={slugsCalgary}/>
        </div>

        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
          Other Beautiful Places 
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <DashboardGraph3hr slug={slugsOther}/>
            <DashboardGraph6hr slug={slugsOther}/>
            <DashboardGraph12hr slug={slugsOther}/>
            <DashboardGraphDay slug={slugsOther}/>
        </div>

        
        </main>
    )

    
}



