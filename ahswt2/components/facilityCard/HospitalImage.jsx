import React from 'react'
import Image from 'next/image'

const HospitalImage = (props) => {
  return (
    
        <img 
            src={props.img}
            alt={props.name}
            className='min-w-[300px] max-w-[450px] w-full aspect-square object-cover rounded-3xl'>
        </img>
    
  )
}

export default HospitalImage