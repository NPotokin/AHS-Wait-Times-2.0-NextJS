import React from 'react'
import Hospitals from "@/utils/hospitals"
import Link from "next/link"
import { Header,
         HospitalContactInfo,
         HospitalStats,
         HospitalImage,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'


const albertaChildrensHospital = () => {
  
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Alberta Childrens Hospital')[0];
  

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
          <HospitalImage img={hospital.img} name={hospital.name}/>
          <HospitalContactInfo
            street={hospital.contactInfo.adress.street} 
            />
          
        </div>
    </div>
  )
}

export default albertaChildrensHospital