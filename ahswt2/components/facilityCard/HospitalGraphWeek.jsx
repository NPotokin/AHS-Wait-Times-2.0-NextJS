'use client'

import React from 'react'
import { BarChart,
         Bar,
         XAxis,
         YAxis,
         Tooltip,
         ResponsiveContainer} from 'recharts'
import useSWR from 'swr'
import HospitalLoadingGraph from './HospitalLoadingGraph'



const HospitalGraphWeek = (props) => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/weeklyGraph`, fetcher, { refreshInterval: 60000 }, { refreshWhenHidden: true } )
  if (error) return <div>ERROR</div>
  if (isLoading) return <HospitalLoadingGraph/>
  const slug = props.slug
  const filteredDataWeek = data.response.filter((item) => slug.includes(item.slug));


  return (
    <div className=' rounded-3xl grid grid-cols-3 gap-1'>
    <div 
      className=' w-full text-cyan-700  bg-white border-4 flex items-center justify-center text-xl font-semibold col-span-3 h-[80px]  border-cyan-600 rounded-3xl'>
      Weekly Information
    </div>
    <div 
      className=' w-full row-span-2  text-cyan-700 bg-white border-4  flex items-center justify-center text-sm font-normal col-span-3 min-h-[240px]  border-cyan-600 rounded-3xl'>
      <ResponsiveContainer width={'100%'} height={250}>
          <BarChart data={filteredDataWeek} margin={{ top: 20, right: 40, left: 0, bottom: 0 }}>
            <XAxis dataKey='dateTime' stroke='#0891b2' />
            <YAxis stroke='#0891b2' />
            <Tooltip />
            <Bar dataKey='waitTimeMin' fill='#0891b2' />
          </BarChart>
        </ResponsiveContainer>
    </div>
      
    

    
  </div>
  )
}


export default HospitalGraphWeek;