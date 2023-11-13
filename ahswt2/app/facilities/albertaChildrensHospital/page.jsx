import React from 'react'
import { Header,
         HospitalContactInfo,
         HospitalImage,
         HospitalAbout,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import dummyDaily from '@/utils/dummydaily';
import dummyHourly from '@/utils/dummyHourly';
import dummyWeekly from '@/utils/dummyWeek';
import Hospitals from "@/utils/hospitals"

const albertaChildrensHospital = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Alberta Childrens Hospital')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto'>
          <HospitalImage 
            img={hospital.img} 
            name={hospital.name}/>
          <HospitalContactInfo
            street={hospital.contactInfo.adress.street}
            city={hospital.contactInfo.adress.city}
            zip={hospital.contactInfo.adress.zip} 
            phone={hospital.contactInfo.phone} 
            website={hospital.contactInfo.website} />
          <HospitalAbout about={hospital.aboutInfo} />
          <HospitalGraphHour data={dummyHourly} />
          <HospitalGraphDay data={dummyDaily}/>
          <HospitalGraphWeek data={dummyWeekly}/>
        </div>
    </div>
  )
}

export default albertaChildrensHospital