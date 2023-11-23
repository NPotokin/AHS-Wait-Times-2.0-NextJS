'use client'

import { useState, useEffect } from 'react';
import React from 'react'
import { AreaChart,
         Area,
         XAxis,
         YAxis,
         Tooltip,
         ResponsiveContainer} from 'recharts'

const HospitalGraphHour = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/hourlyGraph');
        const fetchedData = await response.json();
        const filteredData = fetchedData.updatedData.filter((item) => item.slug === props.slug);
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    };
  
    // Fetch data initially
    fetchData();
  
    // Fetch data every minute
    const interval = setInterval(fetchData, 120000); // 60000 milliseconds = 1 minute
  
    // Clean up the interval when the component unmounts or when the effect re-runs
    return () => clearInterval(interval);
  }, [props.slug]); // Add props.slug as a dependency to useEffect
  

  return (
    <div className=' rounded-3xl grid grid-cols-3 gap-1'>
      <div 
        className='  w-full text-cyan-700 bg-white border-4  flex items-center justify-center text-xl font-semibold col-span-3 h-[90px]  border-cyan-600 rounded-3xl'>
        Hourly Information
      </div>
      <div 
        className='  w-full row-span-2 text-cyan-700 bg-white border-4 flex items-center justify-center text-sm font-normal col-span-3 min-h-[189px]  border-cyan-600 rounded-3xl'>
        <ResponsiveContainer width={350} height={250}>
          <AreaChart data={data} margin={{ top: 10, right: 40, left: 0, bottom: 0 }}>
            <XAxis dataKey='dateTime' stroke="#0891b2" tickCount={1} />
            <YAxis stroke="#0891b2"/>
            <Tooltip bac/>
            <Area type="monotone" dataKey="waitTimeMin" stroke="#0891b2" fill="#0891b2" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
        

              
         

      <div 
        className='mx-auto text-center  w-full text-cyan-700 bg-white border-4 p-1 m-1  flex flex-col items-center justify-center text-md font-normal col-span-1 h-[189px]  border-cyan-600 rounded-3xl'>
        Hourly Average for Facility
        <p className='font-bold py-2'>129 min</p>
      </div>
      <div 
        className='mx-auto text-center  w-full text-cyan-700 bg-white border-4 p-1 m-1  flex flex-col items-center justify-center text-md font-normal col-span-1 h-[189px]  border-cyan-600 rounded-3xl'>
        Hourly Average for Calgary
        <p className='font-bold py-2'>160 min</p>
      </div>
      <div 
        className='mx-auto text-center  w-full text-cyan-700 bg-white border-4 p-1 m-1  flex flex-col items-center justify-center text-md font-normal col-span-1 h-[189px]  border-cyan-600 rounded-3xl'>
        Hourly Average for Alberta
        <p className='font-bold py-2'>248 min</p>
      </div>

      
    </div>
            
            
      
  )
}

export default HospitalGraphHour

