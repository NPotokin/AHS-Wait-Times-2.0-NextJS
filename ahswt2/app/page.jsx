import Image from 'next/image'
import Link from 'next/link'
import picture from './assets/example.png'

export default function Home() {
  return (
    <main className='flex flex-col'>
      <h1 className='mx-auto py-8 text-3xl md:text-5xl lg:text-7xl font-bold text-cyan-900'>
        Welcome to AHS Wait Times Tracker
      </h1>      
      <section className='flex flex-row mx-auto max-w-7xl p-2 m-2 py-8 gap-12'>
        <div className='text-xl md:text-3xl lg:text-5xl w-1/2 text-cyan-600 font-semibold'>
          The only tool that allows you to track hospitals wait time data for 6 main cities in Alberta.
        </div>
        <Image 
          src={picture} 
          alt=""
          width={500}
          height={500} 
          className='border-2 border-cyan-400 rounded-3xl' />
      </section>  
      <Link 
        href='/start'
        className='mx-auto p-3 border-4 border-cyan-500 rounded-3xl font-bold text-2xl text-cyan-500 hover:bg-cyan-100'>
        Get Started
      </Link> 
        
            
            
    </main>
  )
}
