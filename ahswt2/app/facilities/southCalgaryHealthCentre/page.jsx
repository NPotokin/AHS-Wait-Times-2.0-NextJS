import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraph3hr,
         HospitalGraph6hr,
         HospitalGraph12hr,
         HospitalGraphWeek,
         HospitalGraphMonth,
         AverageDay,
         AverageWeek,
         AverageMonth,
         Average3hr,
         Average6hr,
         Average12hr,
        } from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"    

  export default function southCalgaryHealthCentre() {
   
    const hospital = Hospitals.filter((hospital) => hospital.name === 'South Calgary Health Centre')[0];
    const slug = 'southCalgaryHealthCentre'
  
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
  
  
  
   