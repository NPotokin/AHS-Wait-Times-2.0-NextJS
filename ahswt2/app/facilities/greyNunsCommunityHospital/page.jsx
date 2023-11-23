import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const greyNunsCommunityHospital = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Grey Nuns Community Hospital')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
          <HospitalGraphHour slug={'greyNunsCommunityHospital'} />
          <HospitalGraphDay slug={'greyNunsCommunityHospital'}/>
          <HospitalGraphWeek slug={'greyNunsCommunityHospital'}/>
        </div>
    </div>
  )
}

export default greyNunsCommunityHospital;