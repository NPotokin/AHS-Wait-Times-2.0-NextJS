import slugsEdmonton from '@/utils/slugsEdmonton'
import slugsCalgaryOthers from '@/utils/slugsCalgary';
import LineGraph from '@/components/facilityCard/LineGraph';
import Image from 'next/image';
import dashboard from '../assets/dashboard.png';



export default async function Dashboard(){

    const baseUrl = process.env.BASE_URL;

    const responseHr = await fetch(`${baseUrl}/api/hourlyGraph`, {next: { revalidate: 120 }});
    const fetchedDataHr = await responseHr.json();

    const filteredDataHrEdmonton = fetchedDataHr.response.filter((item) => slugsEdmonton.includes(item.slug));
    const dataHrEdmonton = await filteredDataHrEdmonton;

    const filteredDataHrCalgaryOthers = fetchedDataHr.response.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataHrCalgary = await filteredDataHrCalgaryOthers;

    const responseDay = await fetch(`${baseUrl}/api/dailyGraph`, {next: { revalidate: 120 }});
    const fetchedDataDay = await responseDay.json();

    const filteredDataDayEdmonton = fetchedDataDay.response.filter((item) => slugsEdmonton.includes(item.slug));
    const dataDayEdmonton = await filteredDataDayEdmonton;

    const filteredDataDayCalgaryOthers = fetchedDataDay.response.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataDayCalgary = await filteredDataDayCalgaryOthers;
    
    const responseWeek = await fetch(`${baseUrl}/api/weeklyGraph`, {next: { revalidate: 120 }});
    const fetchedDataWeek = await responseWeek.json();

    const filteredDataWeekEdmonton = fetchedDataWeek.response.filter((item) => slugsEdmonton.includes(item.slug));
    const dataWeekEdmonton = await filteredDataWeekEdmonton;

    const filteredDataWeekCalgaryOthers = fetchedDataWeek.response.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataWeekCalgary = await filteredDataWeekCalgaryOthers;

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
        
        <h1 className='pb-8 px-4 text-center text-3xl lg:text-5xl font-bold text-cyan-700 rounded-3xl'>
          Hourly Data 
        </h1>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 gap-3 w-full'>
           
            <div className="flex flex-col mb-6">
                <h2 className='h-[100px] py-6 px-4 flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Edmonton Area
                </h2>
                <LineGraph data={dataHrEdmonton} />
            </div>

            <div className="flex flex-col">
                <h2 className='h-[100px] py-6 px-4  flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Calgary and Othrers 
                </h2>
                <LineGraph data={dataHrCalgary} />
            </div>

        </div>

                
        <h1 className='pb-8 px-4 text-center text-3xl lg:text-5xl font-bold text-cyan-700 rounded-3xl'>
          Daily Data 
        </h1>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 gap-3 w-full'>
           
            <div className="flex flex-col">
                <h2 className='h-[100px] py-6 px-4 flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Edmonton Area
                </h2>
                <LineGraph data={dataDayEdmonton} />
            </div>

            <div className="flex flex-col">
                <h2 className='h-[100px] py-6 px-4  flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Calgary and Othrers 
                </h2>
                <LineGraph data={dataDayCalgary} />
            </div>

        </div>
        
        <h1 className='pb-8 mt-6 px-4 text-center text-3xl lg:text-5xl font-bold text-cyan-700 rounded-3xl'>
          Weekly Data 
        </h1>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 gap-3 w-full'>
           
            <div className="flex flex-col pb-6">
                <h2 className='h-[100px] py-6 px-4 flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Edmonton Area
                </h2>
                <LineGraph data={dataWeekEdmonton} />
            </div>

            <div className="flex flex-col">
                <h2 className='h-[100px] py-6 px-4  flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Calgary and Othrers 
                </h2>
                <LineGraph data={dataWeekCalgary} />
            </div>

        </div>

        </main>
    )
}