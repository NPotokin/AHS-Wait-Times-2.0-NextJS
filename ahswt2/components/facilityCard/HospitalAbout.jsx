import React from 'react'

const HospitalAbout = (props) => {
  return (
    <div className='bg-cyan-200 min-w-[300px] max-w-[450px] w-full aspect-square rounded-3xl'>
        <div className='flex flex-col rounded-3xl'>
            <div className='p-4 my-auto mx-6 text-justify font-semibold text-md xl:text-xl text-cyan-800 '>
                {props.about}
            </div>
        </div>
    </div>
  )
}

export default HospitalAbout;