import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import dummyHourly from '@/utils/dummyHourly';

const HospitalGraphHour = () => {

  const data = dummyHourly;

  return (
    <div>
        <div className="bg-cyan-200 flex flex-col rounded-3xl w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
            <div className='mx-auto my-auto  font-bold text-2xl xl:text-4xl text-cyan-800'>
            
              <AreaChart
                width={300}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="waitTime" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            
            </div>
        </div>
    </div>
  )
}

export default HospitalGraphHour

