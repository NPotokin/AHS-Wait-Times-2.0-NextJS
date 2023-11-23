import React from 'react'

const LoadingGraph = () => {
  return (
    <div className=' rounded-3xl grid grid-cols-3 gap-1'>
      <div 
        className='animate-pulse w-full text-cyan-700 bg-white border-4   flex items-center justify-center text-xl font-semibold col-span-3 h-[90px]  border-cyan-600 rounded-3xl'>
        Loading, please wait...
      </div>
      <div 
        className='animate-pulse w-full row-span-2 text-cyan-700 bg-white border-4  flex items-center justify-center text-sm font-normal col-span-3 min-h-[189px] aspect-square border-cyan-600 rounded-3xl'>
        I takes some time to do get the data, do some magic, and than draw graphs. Thank you for you patience!
      </div>
        
      <div 
        className='mx-auto text-center w-full text-cyan-700 bg-white border-4  p-1 m-1 flex flex-col items-center justify-center text-md font-normal col-span-1 h-[189px]  border-cyan-600 rounded-3xl'>
        Average for Facility
        <p className='font-bold py-2 animate-pulse'>Loading...</p>
      </div>
      <div 
        className='mx-auto text-center w-full text-cyan-700 bg-white border-4  p-1 m-1 flex flex-col items-center justify-center text-md font-normal col-span-1 h-[189px]  border-cyan-600 rounded-3xl'>
        Average for Calgary
        <p className='font-bold py-2 animate-pulse'>Loading...</p>
      </div>
      <div 
        className='mx-auto text-center w-full text-cyan-700 bg-white border-4  p-1 m-1 flex flex-col items-center justify-center text-md font-normal col-span-1 h-[189px]  border-cyan-600 rounded-3xl'>
        Average for Alberta
        <p className='font-bold py-2 animate-pulse'>Loading...</p>
      </div>

      
    </div>
  )
}

export default LoadingGraph