'use client'

import React from 'react'
import { AreaChart,
         Area,
         XAxis,
         YAxis,
         Tooltip,
         ResponsiveContainer} from 'recharts'


const HospitalGraphWeek = (props) => {
  
  return (
    <div className='bg-cyan-200 min-w-[300px] max-w-[450px] w-full aspect-square rounded-3xl'>
        <div className="flex flex-col rounded-3xl pt-8">
            <div className='flex flex-col mx-auto my-auto  font-semibold text-sm text-cyan-800'>
            <p className='bg-cyan-600 text-cyan-100 mx-auto px-2 py-1 rounded-lg'>
              Average Wait Time: 120 min
            </p>
            <h1 className='mx-auto my-3  font-bold text-xl xl:text-2xl text-cyan-800'>
                Weekly Graph
            </h1>
            <div className='container flex w-full'>

           
            <ResponsiveContainer width={300} height={200}>
              <AreaChart data={props.data}>
                <XAxis dataKey='time' stroke="#155e75" tickCount={2} />
                <YAxis stroke="#155e75" />
                <Tooltip bac/>
                <Area type="monotone" dataKey="waitTime" stroke="#155e75" fill="#06b6d4" />
              </AreaChart>
            </ResponsiveContainer>
            </div>
            <p className='mx-auto mt-4  font-semibold text-sm xl:text-md text-cyan-600'>
                Updated at 17:00 today
            </p>
            
            </div>
        </div>
    </div>
  )
}


export default HospitalGraphWeek;