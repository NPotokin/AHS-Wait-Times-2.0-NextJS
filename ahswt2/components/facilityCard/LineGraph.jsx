'use client'

import React from 'react'
import { LineChart,
         Line,
         XAxis,
         YAxis,
         Tooltip,
         Legend,
         ResponsiveContainer} from 'recharts'

export default function LineGraph(props) {

    function rndColor(){
        const colors = ['#059669', '#0d9488', '#0891b2', '#0284c7', '#2563eb', '#4f46e5', '#7c3aed', '#9333ea', '#c026d3', '#db2777', '#e11d48', '#ea580c', '#d97706', '#d97706']
        const randomIndex = Math.floor(Math.random() * (colors.length - 1));
        return colors[randomIndex];
    }

    return(
    <div className='rounded-3xl mt-4 border-4 border-cyan-600 p-2 m-1  text-sm font-normal'>
      <div 
        className='p-2 m-1 flex items-center justify-center text-center w-full text-cyan-700 bg-white min-h-[550px]'>
        <ResponsiveContainer width={'100%'} height={600}>
          <LineChart data={props.data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <XAxis dataKey='dateTime' stroke="#0891b2" allowDuplicatedCategory={false} />
            <YAxis  stroke="#0891b2"/>
            <Tooltip bac/>
            <Legend layout='horizontal' align='right' verticalAlign='bottom' />
            
            {Array.from(new Set(props.data.map(entry => entry.slug))).map((slug, index) => (
            <Line 
            key={index} dot={{stroke: rndColor(), strokeWidth: 2}}  stroke={rndColor()} 
            type="monotone" dataKey="waitTimeMin"  strokeWidth={2}
            data={props.data.filter(entry => entry.slug === slug)} name={slug} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
        
      

      
    </div>
    


        
    )




    
};
