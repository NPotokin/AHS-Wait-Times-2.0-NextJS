'use client'

import useSWR from 'swr'
import LoadingAverage from './LoadingAverage';



export default function AverageDay(){

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(`/api/albertaAverages`, fetcher, { refreshInterval: 60000 }, { refreshWhenHidden: true } )
    if (error) return <div>ERROR</div>
    if (isLoading) return <LoadingAverage/>
    const filteredDataDay = data.avgDay;

    return(
        <div 
        className='mx-auto text-center  w-full text-cyan-700 bg-white border-4 p-1 m-1  flex flex-col items-center justify-center text-md font-normal col-span-3 h-[160px]  border-cyan-600 rounded-3xl'>
        Daily Average for Alberta
        <p className='font-bold text-3xl py-2'>{filteredDataDay} min</p>
        </div>
    )

}