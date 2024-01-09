import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek,
         AverageHour,
         AverageDay,
         AverageWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"    

export default function cochraneCommunityHealthCentre() {

  const hospital = Hospitals.filter((hospital) => hospital.name === 'Cochrane Community Health Centre')[0];
  const slug = 'cochraneCommunityHealthCentre'
  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
          <div className='flex flex-col'>
            <HospitalGraphHour slug={slug} />
            <AverageHour />
          </div>
          <div className='flex flex-col'>
            <HospitalGraphDay slug={slug} />
            <AverageDay />
          </div>
          <div className='flex flex-col'>
            <HospitalGraphWeek slug={slug} />
            <AverageWeek />
          </div>
          
        </div>
    </div>
  )
}



