import React from 'react'
import Hospitals from "@/utils/hospitals"
import { Header,
         HospitalContactInfo,
         HospitalImage,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import HospitalAbout from '@/components/facilityCard/HospitalAbout';
import dummyDaily from '@/utils/dummydaily';
import dummyHourly from '@/utils/dummyHourly';
import dummyWeekly from '@/utils/dummyWeek';





const albertaChildrensHospital = () => {
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Alberta Childrens Hospital')[0];
  
  

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
          <HospitalImage img={hospital.img} name={hospital.name}/>
          <HospitalContactInfo
            street={hospital.contactInfo.adress.street}
            city={hospital.contactInfo.adress.city}
            zip={hospital.contactInfo.adress.zip} 
            phone={hospital.contactInfo.phone} 
            website={hospital.contactInfo.website} 
            />
          <HospitalAbout 
            about={hospital.aboutInfo}
            />
          <HospitalGraphHour data={dummyHourly} />
          <HospitalGraphDay data={dummyDaily}/>
          <HospitalGraphWeek data={dummyWeekly}/>
          
        </div>
    </div>
  )
}

export default albertaChildrensHospital