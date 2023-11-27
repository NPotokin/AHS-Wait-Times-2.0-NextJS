import { Header,
  HospitalGraphDay,
  HospitalGraphHour,
  HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"


export default async function medicineHatRegionalHospital() {

const hospital = Hospitals.filter((hospital) => hospital.name === 'Medicine Hat Regional Hospital')[0];


const responseHr = await fetch('http://localhost:3000/api/hourlyGraph', {next: { revalidate: 120 }});
const fetchedDataHr = await responseHr.json();
const filteredDataHr = fetchedDataHr.updatedData.filter((item) => item.slug === 'medicineHatRegionalHospital');
const dataHr = await filteredDataHr;

const responseDay = await fetch('http://localhost:3000/api/dailyGraph', {next: { revalidate: 120 }});
const fetchedDataDay = await responseDay.json();
const filteredDataDay = fetchedDataDay.averageWaitTimes.filter((item) => item.slug === 'medicineHatRegionalHospital');
const dataDay = await filteredDataDay;

const responseWeek = await fetch('http://localhost:3000/api/weeklyGraph', {next: { revalidate: 120 }});
const fetchedDataWeek = await responseWeek.json();
const filteredDataWeek = fetchedDataWeek.averageWaitTimes.filter((item) => item.slug === 'medicineHatRegionalHospital');
const dataWeek = await filteredDataWeek;



return (
<div className='flex flex-col pb-20'>
 <Header name={hospital.name}/>

 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
   <HospitalGraphHour data={dataHr} />
   <HospitalGraphDay data={dataDay} />
   <HospitalGraphWeek data={dataWeek}/>
 </div>
</div>
)
}


medicineHatRegionalHospital 