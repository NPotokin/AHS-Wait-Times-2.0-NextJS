import React from 'react'


const HospitalContactInfo = (props) => {
  return (
    <div>
        <div className="flex flex-col rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] border-cyan-400 border-4">
            <div className='my-2  font-bold text-2xl xl:text-4xl text-cyan-900'>Contact Info</div>

            <div className="flex flex-row mx-auto mt-2">
              {/* <GoLocation className='text-secondary mx-2' size={25} /> */}
              <div className='font-bold text-lg'>Adress</div>
            </div>
            <div className='font-semibold text-md'>{props.street}</div>
            <div className='font-semibold text-md'>{props.city}</div>
            <div className='font-semibold text-md'>{props.zip}</div>

            <div className="flex flex-row mx-auto mt-2">
              {/* <FiPhone className='text-secondary mx-2' size={25} /> */}
              <div className='font-bold text-lg'>Phone</div>
            </div>
            <div className=' text-md'>{props.phone}</div>

            <div className="flex flex-row mx-auto mt-2">
              {/* <CgWebsite className='text-secondary mx-2' size={25} /> */}
              <div className='font-bold text-lg'>Website</div>
            </div>
            <div className='font-semibold text-md'>{props.website}</div>
          </div>
    </div>
  )
}

export default HospitalContactInfo