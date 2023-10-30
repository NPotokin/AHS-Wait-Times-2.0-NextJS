import React from 'react'

const HospitalAbout = (props) => {
  return (
    <div>
        <div className="bg-cyan-200 flex flex-col rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
            <div className='p-2 my-auto mx-3 text-justify font-semibold text-md xl:text-xl text-cyan-800 '>
                {props.about}
            </div>
        </div>
    </div>
  )
}

export default HospitalAbout;