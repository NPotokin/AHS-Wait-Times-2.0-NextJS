import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const airdrieCommunityHealthCentre = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Airdrie Community Health Centre')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          <HospitalGraphHour slug={'airdrieCommunityHealthCentre'} />
          <HospitalGraphDay slug={'airdrieCommunityHealthCentre'}/>
          <HospitalGraphWeek slug={'airdrieCommunityHealthCentre'}/>
        </div>
    </div>
  )
}

export default airdrieCommunityHealthCentre;