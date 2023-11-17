'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import { AreaChart,
         Area,
         XAxis,
         YAxis,
         Tooltip,
         ResponsiveContainer} from 'recharts'


const HospitalGraphWeek = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/weeklyGraph');
        const fetchedData = await response.json();
        const filteredData = fetchedData.data.filter((item) => item.slug === props.slug);
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching or processing data:', error);
      }
    };

    // Fetch data initially
    fetchData();

    // Fetch data every minute
    const interval = setInterval(fetchData, 60000); // 60000 milliseconds = 1 minute
  })
  
  return (
    <div className='bg-cyan-200 min-w-[300px] max-w-[450px] w-full aspect-square rounded-3xl'>
        <div className="flex flex-col rounded-3xl pt-8">
            <div className='flex flex-col mx-auto my-auto  font-semibold text-sm text-cyan-800'>
            {/* <p className='bg-cyan-600 text-cyan-100 mx-auto px-2 py-1 rounded-lg'>
              Average Wait Time: 120 min
            </p> */}
            <h1 className='mx-auto my-2  font-bold text-xl xl:text-2xl text-cyan-800'>
                Weekly Graph (UTC Time)
            </h1>
            <div className='container flex w-full mr-10'>

           
            <ResponsiveContainer width={300} height={250}>
              <AreaChart data={data}>
                <XAxis dataKey='dayUTC' unit='-th' stroke="#155e75" tickCount={2} />
                <YAxis stroke="#155e75" />
                <Tooltip bac/>
                <Area type="monotone" dataKey="waitTimeMin" stroke="#155e75" fill="#06b6d4" />
              </AreaChart>
            </ResponsiveContainer>
            </div>
            {/* <p className='mx-auto mt-4  font-semibold text-sm xl:text-md text-cyan-600'>
                Updated at 17:00 today
            </p> */}
            
            </div>
        </div>
    </div>
  )
}


export default HospitalGraphWeek;