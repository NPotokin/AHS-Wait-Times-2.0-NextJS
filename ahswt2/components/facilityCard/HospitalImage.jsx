import React from 'react'
import Image from 'next/image'

const HospitalImage = (props) => {
  return (
    
        <img 
            src={props.img}
            alt={props.name}
            className='flex flex-col rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border-cyan-400 border-4'>
        </img>
    
  )
}

export default HospitalImage