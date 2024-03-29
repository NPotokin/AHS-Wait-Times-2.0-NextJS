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

export default function grandePrairieRegionalHospital() {

  const hospital = Hospitals.filter((hospital) => hospital.name === 'Grande Prairie Regional Hospital')[0];
  const slug = 'grandePrairieRegionalHospital'

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

      <div className='grid grid-cols-1 md:grid-cols-2  gap-1'>
          <div className='flex flex-col'>
            <HospitalGraph3hr slug={slug} />
            <Average3hr />
          </div>
          <div className='flex flex-col'>
            <HospitalGraph6hr slug={slug} />
            <Average6hr />
          </div>
          <div className='flex flex-col'>
            <HospitalGraph12hr slug={slug} />
            <Average12hr />
          </div>
          <div className='flex flex-col'>
            <HospitalGraphDay slug={slug} />
            <AverageDay />
          </div>
          
          
        </div>
    </div>
  )
}
