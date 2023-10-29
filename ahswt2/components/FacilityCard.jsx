import React from 'react'
import Hospitals from '@/utils/hospitals'

const hospital = Hospitals;

const FacilityCard = (hospital) => {
  return (
    <div>{hospital.name}</div> //Will use it fot /facilities rout as well as for all cities components
  )
}

export default FacilityCard