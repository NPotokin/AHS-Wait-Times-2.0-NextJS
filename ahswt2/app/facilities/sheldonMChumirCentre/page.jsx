import React from 'react'
import { Header,
         HospitalContactInfo,
         HospitalImage,
         HospitalAbout,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const sheldonMChumirCentre = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Sheldon M. Chumir Health Centre')[0];

  return (
    <div className='flex flex-col pb-20'>
        <Header name={hospital.name}/>

        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
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
          <HospitalGraphHour slug={'sheldonMChumirCentre'} />
          <HospitalGraphDay slug={'sheldonMChumirCentre'}/>
          <HospitalGraphWeek slug={'sheldonMChumirCentre'}/>
        </div>
    </div>
  )
}

export default sheldonMChumirCentre;