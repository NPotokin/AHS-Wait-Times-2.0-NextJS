'use client'

import React from 'react'
import { LineChart,
         Line,
         XAxis,
         YAxis,
         Tooltip,
         ResponsiveContainer} from 'recharts'

export default function LineGraph(props) {
    return(


    <div className='rounded-3xl border-4 border-cyan-600 p-1 m-1  text-sm font-normal'>
      <div 
        className='p-4 flex items-center justify-center text-center w-full text-cyan-700 bg-white min-h-[550px]'>
        <ResponsiveContainer width={'100%'} height={500}>
          <LineChart data={props.data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <XAxis dataKey='dateTime' stroke="#0891b2" />
            <YAxis  stroke="#0891b2"/>
            <Tooltip bac/>
            <Line 
            strokeWidth={2} dot={false} type="monotone" dataKey="waitTimeMin" 
            data={props.data.filter(entry => entry.slug === 'devonGeneralHospital')} name='devonGeneralHospital' />
        
          </LineChart>
        </ResponsiveContainer>
      </div>
        
      

      
    </div>
    


        
    )




    
};
