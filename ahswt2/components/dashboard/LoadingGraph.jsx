

import React from 'react'

const LoadingGraph = () => {
  return (
    <div className=' rounded-3xl grid grid-cols-3 gap-1'>
      <div 
        className='w-full text-cyan-700 bg-white border-4  flex items-center justify-center text-xl font-semibold col-span-3 h-[80px]  border-cyan-600 rounded-3xl'>
        Loading...
      </div>
      <div 
        className='w-full row-span-2 text-cyan-700 bg-white border-4 flex items-center justify-center text-sm font-normal col-span-3 min-h-[240px]  border-cyan-600 rounded-3xl'>
         <div className="w-[300px] h-[300px] bg-cyan-600/10 animate-pulse rounded-3xl p-2 m-2"></div>   
      </div>
    </div>
  )
}

export default LoadingGraph