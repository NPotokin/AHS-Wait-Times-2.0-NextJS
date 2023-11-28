'use client'

import React from 'react'
import { LineChart,
         Line,
         XAxis,
         YAxis,
         Tooltip,
         ResponsiveContainer} from 'recharts'

        
const HospitalGraphDay = (props) => {

  return (
    <div className=' rounded-3xl grid grid-cols-3 gap-1'>
      <div 
        className=' w-full text-cyan-700 bg-white border-4   flex items-center justify-center text-xl font-semibold col-span-3 h-[80px]  border-cyan-600 rounded-3xl'>
        Daily Information
      </div>
      <div 
        className=' w-full row-span-2 text-cyan-700 bg-white border-4  flex items-center justify-center text-sm font-normal col-span-3 min-h-[240px]  border-cyan-600 rounded-3xl'>
        <ResponsiveContainer width={350} height={250}>
          <LineChart data={props.data} margin={{ top: 20, right: 40, left: 0, bottom: 0 }}>
            <XAxis dataKey='hour' stroke="#0891b2" />
            <YAxis stroke="#0891b2"/>
            <Tooltip bac/>
            <Line type="monotone" dataKey="averageWaitTime" stroke="#0891b2" strokeWidth={4} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
        
      <div 
        className='mx-auto text-center  w-full text-cyan-700 bg-white border-4 p-1 m-1  flex flex-col items-center justify-center text-md font-normal col-span-3 h-[160px]  border-cyan-600 rounded-3xl'>
        Daily Average for Alberta
        <p className='font-bold text-3xl py-2'>{props.avgs} min</p>
      </div>

      
    </div>
  )
}


export default HospitalGraphDay;

