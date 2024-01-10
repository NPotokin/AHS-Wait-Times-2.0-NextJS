import Image from 'next/image'
import landing1 from './assets/landing1.png'
import landing2 from './assets/landing2.png'
import explore from './assets/explore.png'
import visualize from './assets/visualize.png'
import plan from './assets/plan.png'
import update from './assets/update.png'
import Link from 'next/link'
import { MdOutlineAccessTime } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";



export default function Home() {
  return (
    <main className='container flex flex-col mx-auto'>
      
      <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
        Welcome to AlbertaWaitRoom.ca <br/>
      </h1>
      <h1 className='py-3 mx-3 text-center text-3xl lg:text-5xl font-semibold text-cyan-800'>
        Your Gateway to Informed Healthcare Decisions!
      </h1>

      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex-col pt-8 md:w-2/3">
          <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          At AlbertaWaitRoom.ca, we understand that your time is precious, especially when it comes to healthcare.
          </div>
          <div className='py-3  mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          That is why we have created a powerful platform dedicated to providing you with real-time insights 
          into wait times at medical facilities across Alberta.
          </div>
          <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Our mission is to empower you with the information you need to make informed decisions about your healthcare journey.
          </div>
        </div>
        <Image
          src={landing1}
          alt=""
          className='md:w-1/3 py-3 min-w-[300px] max-w-[450px] w-full min-h-[300px] max-h-[450px] h-full my-auto mx-auto'
        />
       </div>

       <Link 
        href='/start'
        className='mx-auto p-4 my-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Get Started
      </Link> 

       <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
        Why us?
       </h1> 

       <div className='flex flex-col md:flex-row mx-auto my-6'>
        <MdOutlineAccessTime
          size={250}
          className=' text-cyan-600 m-1 p-1 mx-auto my-auto md:w-1/3' />
        <div className='flex flex-col m-1 p-1 md:w-2/3'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Comprehensive Timeframe:
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Our platform offers in-depth insights over longer periods - from three hours interval to daily and monthly statistics, ensuring access to extensive historical data for a comprehensive understanding.
          </p>
        </div>
       </div>

       <div className='flex flex-col-reverse md:flex-row mx-auto'>
        <div className='flex flex-col m-1 p-1 md:w-2/3'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Graphical Insights: 
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Say goodbye to the limited data access within a 2-minute window. Our platform collects fragmented information and transforms it into intuitive graphs and charts, presenting a visual depiction of wait times and trends.
          </p>
        </div>
        <MdAutoGraph 
          size={250}
          className=' text-cyan-600 m-1 p-1 mx-auto my-auto md:w-1/3' />
       </div>

       <div className='flex flex-col md:flex-row mx-auto my-6'>
        <IoStatsChart 
          size={250}
          className=' text-cyan-600 m-1 p-1 mx-auto my-auto md:w-1/3' />
        <div className='flex flex-col m-1 p-1 md:w-2/3'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Flexible Statistics Access:
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Tailor the data to your needs. Filter by medical facility, location, or specific time frames to uncover personalized statistics that matter to you.
          </p>
        </div>
       </div>

       <div className='flex flex-col-reverse md:flex-row mx-auto'>
        <div className='flex flex-col m-1 p-1 md:w-2/3'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Plan Your Visit: 
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          With AlbertaWaitRoom.ca you can plan your medical visits more effectively. Be in control of your time by choosing the right facility based on real-time wait time data.
          </p>
        </div>
        <IoCalendarOutline 
          size={250}
          className=' text-cyan-600 m-1 p-1 mx-auto my-auto md:w-1/3' />
       </div>

       <Link 
        href='/start'
        className='mx-auto p-4 my-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Get Started
      </Link> 

       <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
       How It Works?
       </h1> 
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        
        <div className="flex flex-col items-center justify-center text-white  bg-cyan-600 rounded-3xl">
          <h1 className='my-4 text-4xl lg:text-5xl font-bold'>Explore:</h1>
          <Image
          src={explore}
          alt=""
          className='aspect-square  rounded-3xl px-4 py-3  max-w-[350px] w-full max-h-[350px] h-full my-auto mx-auto'
          />
          <p className='mx-8 text-justify leading-loose my-4 text-xl lg:text-2xl font-semibold'>Dive into the comprehensive data we provide on wait times across various healthcare facilities in Alberta.</p>
        </div>

        <div className="flex flex-col items-center justify-center text-white  bg-cyan-600 rounded-3xl">
          <h1 className='my-4 text-4xl lg:text-5xl font-bold'>Visualize:</h1>
          <Image
          src={visualize}
          alt=""
          className='aspect-square rounded-3xl px-4 py-3  max-w-[350px] w-full max-h-[350px] h-full my-auto mx-auto'
          />
          <h1 className='mx-8 text-justify leading-loose my-4 text-xl lg:text-2xl font-semibold'>Our user-friendly graphs and charts make it easy to understand and interpret complex wait time statistics.</h1>
        </div>

        <div className="flex flex-col items-center justify-center text-white  bg-cyan-600 rounded-3xl">
          <h1 className='my-4 text-4xl lg:text-5xl font-bold'>Plan:</h1>
          <Image
          src={plan}
          alt=""
          className='aspect-square rounded-3xl px-4 py-3  max-w-[350px] w-full max-h-[350px] h-full my-auto mx-auto'
          />
          <h1 className='mx-8 text-justify leading-loose my-4 text-xl lg:text-2xl font-semibold'>Make informed decisions by selecting medical facilities that align with your preferences.</h1>
        </div>

        <div className="flex flex-col items-center justify-center text-white  bg-cyan-600 rounded-3xl">
          <h1 className='my-4 text-4xl lg:text-5xl font-bold'>Updates:</h1>
          <Image
          src={update}
          alt=""
          className='aspect-square rounded-3xl px-4 py-3  max-w-[350px] w-full max-h-[350px] h-full my-auto mx-auto'
          />
          <h1 className='mx-8 text-justify leading-loose my-4 text-xl lg:text-2xl font-semibold'>Receive regular updates tailored to your preferences, ensuring you are always in the know.</h1>
        </div>

      </div>

      <Link 
        href='/start'
        className='mx-auto p-4 mt-8 mb-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Get Started
      </Link> 

      <div className="flex flex-col md:flex-row mt-8">
        <Image
          src={landing2}
          alt=""
          className='md:w-1/3 py-3 min-w-[300px] max-w-[450px] w-full min-h-[300px] max-h-[450px] h-full my-auto mx-auto'
        />
        <div className="flex-col pt-8 md:w-2/3">
          <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Your time is valuable, and so is your health.
          </div>
          <div className='py-3  mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Experience the power of informed choices - visit AlbertaWaitRoom.ca today!
          </div>
          <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Your journey to better healthcare starts here.
          </div>
        </div>
        
       </div>

        
            
            
    </main>
  )
}
