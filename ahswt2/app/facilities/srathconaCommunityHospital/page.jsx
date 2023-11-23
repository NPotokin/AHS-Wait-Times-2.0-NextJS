import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const srathconaCommunityHospital = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Strathcona Community Hospital')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
          <HospitalGraphHour slug={'strathconaCommunityHospital'} />
          <HospitalGraphDay slug={'strathconaCommunityHospital'}/>
          <HospitalGraphWeek slug={'strathconaCommunityHospital'}/>
        </div>
    </div>
  )
}

export default srathconaCommunityHospital;