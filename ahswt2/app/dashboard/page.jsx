import slugsEdmonton from '@/utils/slugsEdmonton'
import slugsCalgaryOthers from '@/utils/slugsCalgary';
import LineGraph from '@/components/facilityCard/LineGraph';



export default async function Dashboard(){

    const baseUrl = process.env.BASE_URL;

    const responseHr = await fetch(`${baseUrl}/api/hourlyGraph`, {next: { revalidate: 120 }});
    const fetchedDataHr = await responseHr.json();

    const filteredDataHrEdmonton = fetchedDataHr.updatedData.filter((item) => slugsEdmonton.includes(item.slug));
    const dataHrEdmonton = await filteredDataHrEdmonton;

    const filteredDataHrCalgaryOthers = fetchedDataHr.updatedData.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataHrCalgary = await filteredDataHrCalgaryOthers;

    const responseDay = await fetch(`${baseUrl}/api/dailyGraph`, {next: { revalidate: 120 }});
    const fetchedDataDay = await responseDay.json();

    const filteredDataDayEdmonton = fetchedDataDay.averageWaitTimes.filter((item) => slugsEdmonton.includes(item.slug));
    const dataDayEdmonton = await filteredDataDayEdmonton;

    const filteredDataDayCalgaryOthers = fetchedDataDay.averageWaitTimes.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataDayCalgary = await filteredDataDayCalgaryOthers;
    
    const responseWeek = await fetch(`${baseUrl}/api/weeklyGraph`, {next: { revalidate: 120 }});
    const fetchedDataWeek = await responseWeek.json();

    const filteredDataWeekEdmonton = fetchedDataWeek.averageWaitTimes.filter((item) => slugsEdmonton.includes(item.slug));
    const dataWeekEdmonton = await filteredDataWeekEdmonton;

    const filteredDataWeekCalgaryOthers = fetchedDataWeek.averageWaitTimes.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataWeekCalgary = await filteredDataWeekCalgaryOthers;

    return(
        <main className='container flex flex-col mx-auto'>
      
        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
          Dashboard 
        </h1>
        
        <h1 className='pb-8 px-4 text-center text-3xl lg:text-5xl font-bold text-cyan-700 rounded-3xl'>
          Hourly Data 
        </h1>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 gap-3 w-full'>
           
            <div className="flex flex-col mb-6">
                <h2 className='h-[100px] py-6 px-4 flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Edmonton Area
                </h2>
                <LineGraph data={dataHrEdmonton} dataKeyLineChart={'dateTime'} dataKeyLine={'waitTimeMin'}  />
            </div>

            <div className="flex flex-col">
                <h2 className='h-[100px] py-6 px-4  flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Calgary and Othrers 
                </h2>
                <LineGraph data={dataHrCalgary} dataKeyLineChart={'dateTime'} dataKeyLine={'waitTimeMin'} />
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
                <LineGraph data={dataDayEdmonton} dataKeyLineChart={'hour'} dataKeyLine={'averageWaitTime'} />
            </div>

            <div className="flex flex-col">
                <h2 className='h-[100px] py-6 px-4  flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Calgary and Othrers 
                </h2>
                <LineGraph data={dataDayCalgary} dataKeyLineChart={'hour'} dataKeyLine={'averageWaitTime'} />
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
                <LineGraph data={dataWeekEdmonton} dataKeyLineChart={'dateTime'} dataKeyLine={'averageWaitTime'} />
            </div>

            <div className="flex flex-col">
                <h2 className='h-[100px] py-6 px-4  flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Calgary and Othrers 
                </h2>
                <LineGraph data={dataWeekCalgary} dataKeyLineChart={'dateTime'} dataKeyLine={'averageWaitTime'} />
            </div>

        </div>

        </main>
    )
}