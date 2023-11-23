import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const sheldonMChumirCentre = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Sheldon M. Chumir Health Centre')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
          <HospitalGraphHour slug={'sheldonMChumirCentre'} />
          <HospitalGraphDay slug={'sheldonMChumirCentre'}/>
          <HospitalGraphWeek slug={'sheldonMChumirCentre'}/>
        </div>
    </div>
  )
}

export default sheldonMChumirCentre;