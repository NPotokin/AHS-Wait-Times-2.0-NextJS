import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"


const albertaChildrensHospital = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Alberta Childrens Hospital')[0];
  

    return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
          <HospitalGraphHour slug={'albertaChildrensHospital'} />
          <HospitalGraphDay slug={'albertaChildrensHospital'} />
          <HospitalGraphWeek slug={'albertaChildrensHospital'}/>
        </div>
    </div>
  )
}

export default albertaChildrensHospital