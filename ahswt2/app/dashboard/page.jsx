import slugsEdmonton from '@/utils/twoSlugs'
import LineGraph from '@/components/facilityCard/LineGraph';



export default async function Dashboard(){

    const baseUrl = process.env.BASE_URL;

    const responseHr = await fetch(`${baseUrl}/api/hourlyGraph`, {next: { revalidate: 120 }});
    const fetchedDataHr = await responseHr.json();

    const filteredDataHrEdmonton = fetchedDataHr.updatedData.filter((item) => slugsEdmonton.includes(item.slug));
    const dataHrEdmonton = await filteredDataHrEdmonton;

    return(
        <main className='container flex flex-col mx-auto'>
      
        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
          Dashboard 
        </h1>
        
        <h1 className='pb-8 px-4 text-center text-3xl lg:text-5xl font-bold text-cyan-700 rounded-3xl'>
          Hourly Data 
        </h1>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 gap-3 w-full'>
           
            <div className="flex flex-col">
                <h2 className='py-6 px-4 flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Edmonton Area
                </h2>
                <LineGraph data={dataHrEdmonton} />
            </div>
            


            <div className="flex flex-col">
                <h2 className='py-6 px-4  flex items-center justify-center text-center text-3xl md:text-4xl font-semibold text-white bg-cyan-600 rounded-3xl'>
                Calgary and Othrers 
                </h2>
            </div>

        </div>

        </main>
    )
}