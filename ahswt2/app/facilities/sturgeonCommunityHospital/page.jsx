import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const sturgeonCommunityHospital = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Sturgeon Community Hospital')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
          <HospitalGraphHour slug={'sturgeonCommunityHospital'} />
          <HospitalGraphDay slug={'sturgeonCommunityHospital'}/>
          <HospitalGraphWeek slug={'sturgeonCommunityHospital'}/>
        </div>
    </div>
  )
}

export default sturgeonCommunityHospital;