'use client'

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function LineGraph(props) {
  const [highlightedLine, setHighlightedLine] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);

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
    <div className='rounded-3xl mt-4 border-4 border-cyan-600 p-2 m-1 text-sm font-normal'>
      <div className='p-2 m-1 flex items-center justify-center text-center w-full text-cyan-700 bg-white min-h-[550px]'>
        <ResponsiveContainer width={'100%'} height={600}>
          <LineChart data={props.data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <XAxis dataKey='dateTime' stroke="#0891b2" allowDuplicatedCategory={false} />
            <YAxis stroke="#0891b2" />
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
            {Array.from(new Set(props.data.map(entry => entry.slug))).map((slug, index) => (
              <Line
                key={index}
                dot={true}
                stroke={rndColor()}
                type="linear"
                dataKey='waitTimeMin'
                data={props.data.filter(entry => entry.slug === slug)}
                name={slug}
                strokeWidth={highlightedLine === slug ? 4 : 1.5}
                onMouseEnter={() => handleLineMouseEnter(slug)}
                onMouseLeave={handleLineMouseLeave}
              />
            ))}
            <Legend layout='horizontal' align='right' verticalAlign='bottom' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
