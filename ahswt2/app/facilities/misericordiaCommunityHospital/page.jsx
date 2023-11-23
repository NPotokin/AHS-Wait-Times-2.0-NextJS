import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const misericordiaCommunityHospital = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Misericordia Community Hospital')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
          <HospitalGraphHour slug={'misericordiaCommunityHospital'} />
          <HospitalGraphDay slug={'misericordiaCommunityHospital'}/>
          <HospitalGraphWeek slug={'misericordiaCommunityHospital'}/>
        </div>
    </div>
  )
}

export default misericordiaCommunityHospital;