import React from 'react'

const LoadingGraph = () => {
  return (
    <div className=' rounded-3xl grid grid-cols-3 gap-1'>
    <div 
      className='w-full text-cyan-700 bg-white border-4  flex items-center justify-center text-xl font-semibold col-span-3 h-[80px]  border-cyan-600 rounded-3xl'>
      Loading...
    </div>
    <div 
        className='pb-10 h-[258px] w-full row-span-2 text-cyan-700 bg-white border-4 flex items-end justify-center text-sm font-normal col-span-3 min-h-[250px]  border-cyan-600 rounded-3xl'>
         <div className="w-[50px] h-[75px] bg-cyan-600/40 animate-pulse rounded-xl p-2 m-2"></div>   
         <div className="w-[50px] h-[100px] bg-cyan-600/40 animate-pulse rounded-xl p-2 m-2"></div>   
         <div className="w-[50px] h-[150px] bg-cyan-600/40 animate-pulse rounded-xl p-2 m-2"></div>   
         <div className="w-[50px] h-[100px] bg-cyan-600/40 animate-pulse rounded-xl p-2 m-2"></div>   
      </div>
  </div>
  )
}

export default LoadingGraph