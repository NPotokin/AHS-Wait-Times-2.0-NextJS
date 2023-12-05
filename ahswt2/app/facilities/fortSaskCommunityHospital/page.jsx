import { Header,
  HospitalGraphDay,
  HospitalGraphHour,
  HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"


export default async function fortSaskCommunityHospital() {

const baseUrl = process.env.BASE_URL;
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Fort Sask Community Hospital')[0];


const responseHr = await fetch(`${baseUrl}/api/hourlyGraph`, { next: { revalidate: 60 } });
const fetchedDataHr = await responseHr.json();
const filteredDataHr = fetchedDataHr.response.filter((item) => item.slug === 'fortSaskCommunityHospital');
const dataHr = await filteredDataHr;

const responseDay = await fetch(`${baseUrl}/api/dailyGraph`, { next: { revalidate: 60 } });
const fetchedDataDay = await responseDay.json();
const filteredDataDay = fetchedDataDay.response.filter((item) => item.slug === 'fortSaskCommunityHospital');
const dataDay = await filteredDataDay;

const responseWeek = await fetch(`${baseUrl}/api/weeklyGraph`, { next: { revalidate: 60 } });
const fetchedDataWeek = await responseWeek.json();
const filteredDataWeek = fetchedDataWeek.response.filter((item) => item.slug === 'fortSaskCommunityHospital');
const dataWeek = await filteredDataWeek;

  const responseAvgs = await fetch(`${baseUrl}/api/albertaAverages`, { next: { revalidate: 60 } });
  const avgs = await responseAvgs.json();
  const abHr = avgs.avgHr;
  const abHrAvg = await abHr;
  const abDay = avgs.avgDay;
  const abDayAvg = await abDay;
  const abWeek = avgs.avgWeek;
  const abWeekAvg = await abWeek;



return (
<div className='flex flex-col pb-20'>
 <Header name={hospital.name}/>

 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
   <HospitalGraphHour data={dataHr} avgs={abHrAvg} />
   <HospitalGraphDay data={dataDay} avgs={abDayAvg} />
   <HospitalGraphWeek data={dataWeek} avgs={abWeekAvg}/>
 </div>
</div>
)
}



fortSaskCommunityHospital