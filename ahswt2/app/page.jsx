import Image from 'next/image'
import Link from 'next/link'
import picture from './assets/example.png'

export default function Home() {
  return (
    <main className='container flex flex-col'>
      <h1 className='py-8 mx-3 text-center text-3xl md:text-5xl lg:text-7xl font-bold text-cyan-900'>
        Welcome to AHS Wait Times Tracker
      </h1>      
      <div className='py-3 mx-3 text-center text-2xl md:text-4xl lg:text-6xl font-semibold text-cyan-700'>
        The only tool that allows you to track hospitals wait time data for 6 main cities in Alberta.
      </div>
      
        {/* <Image 
          src={picture} 
          alt=""
          width={300}
          height={300} 
          className='rounded-3xl py-4 my-4 mx-auto' /> */}
        
      <Link 
        href='/start'
        className='mx-auto p-3 my-6 border-4 border-cyan-500 rounded-3xl font-bold text-2xl text-cyan-500 hover:bg-cyan-200'>
        Get Started
      </Link> 
        
            
            
    </main>
  )
}
