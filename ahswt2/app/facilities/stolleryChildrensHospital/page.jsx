import React from 'react'
import { Header,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const stolleryChildrensHospital = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Stollery Childrens Hospital')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
          <HospitalGraphHour slug={'stolleryChildrensHospital'} />
          <HospitalGraphDay slug={'stolleryChildrensHospital'}/>
          <HospitalGraphWeek slug={'stolleryChildrensHospital'}/>
        </div>
    </div>
  )
}

export default stolleryChildrensHospital;