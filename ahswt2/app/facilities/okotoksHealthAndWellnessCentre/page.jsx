import React from 'react'
import { Header,
         HospitalContactInfo,
         HospitalImage,
         HospitalAbout,
         HospitalGraphDay,
         HospitalGraphHour,
         HospitalGraphWeek} from '@/components/facilityCard/index'
import Hospitals from "@/utils/hospitals"

const okotoksHealthAndWellnessCentre = () => {
 
  const hospital = Hospitals.filter((hospital) => hospital.name === 'Okotoks Health and Wellness Centre')[0];

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
          <HospitalGraphHour slug={'okotoksHealthAndWellnessCentre'} />
          <HospitalGraphDay slug={'okotoksHealthAndWellnessCentre'}/>
          <HospitalGraphWeek slug={'okotoksHealthAndWellnessCentre'}/>
        </div>
    </div>
  )
}

export default okotoksHealthAndWellnessCentre;