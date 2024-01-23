'use client'

import React from 'react'
import { useState } from 'react'
import { LineChart,
         Line,
         XAxis,
         YAxis,
         Tooltip,
         Legend,
         ResponsiveContainer} from 'recharts'
import useSWR from 'swr'
import LoadingGraph from './LoadingGraph'

const DashboardGraph12hr = (props) => {

  const [highlightedLine, setHighlightedLine] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/12hrGraph`, fetcher, { refreshInterval: 60000 }, { refreshWhenHidden: true } )
  if (error) return <div>ERROR</div>
  if (isLoading) return <LoadingGraph/>
  const slug = props.slug
  const filteredData12hr = data.response.filter((item) => slug.includes(item.slug));
  

  const handleLineMouseEnter = (slug) => {
    setHighlightedLine(slug);
  };

  const handleLineMouseLeave = () => {
    setHighlightedLine(null);
    setTooltipData(null);
  };

  function rndColor() {
    const colors = ['#059669', '#0d9488', '#0891b2', '#0284c7', '#2563eb', '#4f46e5', '#7c3aed', '#9333ea', '#c026d3', '#db2777', '#e11d48', '#ea580c', '#d97706', '#d97706'];
    const randomIndex = Math.floor(Math.random() * (colors.length - 1));
    return colors[randomIndex];
  }

  return (
    <div className=' rounded-3xl grid grid-cols-3 gap-1'>
      <div 
        className='  w-full text-cyan-700 bg-white border-4  flex items-center justify-center text-xl font-semibold col-span-3 h-[80px]  border-cyan-600 rounded-3xl'>
        12 hour Data
      </div>
      <div 
        className='w-full row-span-2 text-cyan-700 bg-white border-4 flex items-center justify-center text-sm font-normal col-span-3   border-cyan-600 rounded-3xl'>
        <ResponsiveContainer width={'100%'} height={600}>
          <LineChart aria-label='line chart for 12 hours' data={filteredData12hr} margin={{ top: 20, right: 30, left: 5, bottom: 10 }}>
            <XAxis dataKey='dateTime' stroke="#0891b2" aria-label='time' allowDuplicatedCategory={false} />
            <YAxis stroke="#0891b2" aria-label='wait time'/>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length && highlightedLine !== null) {
                  const data = payload.find(item => item.name === highlightedLine)?.payload;
                  return (
                    <div className='bg-white p-2 rounded shadow'>
                      <p>{`Name: ${data.slug}`}</p>
                      <p>{`Wait Time: ${data.waitTimeMin}`}</p>
                      <p>{`Date Time: ${data.dateTime}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            {Array.from(new Set(filteredData12hr.map(entry => entry.slug))).map((slug, index) => (
              <Line
                key={index}
                dot={false}
                stroke={rndColor()}
                type="linear"
                dataKey='waitTimeMin' aria-label='wait time'
                data={filteredData12hr.filter(entry => entry.slug === slug)}
                name={slug}
                strokeWidth={highlightedLine === slug ? 4 : 2}
                onMouseEnter={() => handleLineMouseEnter(slug)}
                onMouseLeave={handleLineMouseLeave}
              />
            ))}
            <Legend layout='horizontal' align='right' aria-label='legend' verticalAlign='bottom' />
          </LineChart>
        </ResponsiveContainer>
      </div>
        
    </div>
            
            
      
  )
}

export default DashboardGraph12hr;

