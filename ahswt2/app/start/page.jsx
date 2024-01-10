import start1 from '../assets/start1.png'
import Image from 'next/image'
import locationPage from '../assets/locationPage.png'
import facilityPage from '../assets/facilityPage.png'
import newsLetterPage from '../assets/newsletterPage.png'
import contactPage from '../assets/contactPage.png'
import Link from 'next/link'
import dashboardPage from '../assets/dashboardPage.png'



export default function HomePage() {
return(
    <main className='container flex flex-col mx-auto'>
      
      <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
        Alberta Wait Room  
      </h1>

      <div className="flex flex-col md:flex-row mt-8">
        <Image
          src={start1}
          alt=""
          className='md:w-1/2 py-3 min-w-[300px] max-w-[450px] w-full min-h-[300px] max-h-[450px] h-full my-auto mx-auto'
        />
        <div className="flex-col pt-8 md:w-1/2">
          <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Our website is designed to be user-friendly and easy to navigate.
          </div>
          <div className='py-3  mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          You can search for wait times by facility, location, visit Dashboard page or sign up for Newsletter.
          </div>
          <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          We strive to provide you with best value and flexibility on real-time wait times data. 
          </div>
        </div>
      </div>

       <div className='mt-12 flex flex-col md:flex-row mx-auto'>
        <div className='flex flex-col m-1 p-1 md:w-1/2 my-auto'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Locations: 
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Select out of 15 locations throughout Alberta, where we collect wait times for health care facilities. Some cities have several health care facilities, while most have only one. Unfortunately, a few facilities are not reporting their wait times. 
          </p>
        </div>
        <Image
          src={locationPage}
          className='m-1 p-1 mx-auto my-auto md:w-1/2 rounded-3xl'
          alt='' />
       </div>

       <Link 
        href='/locations'
        className='mx-auto p-4 mt-8 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Visit Location Page
       </Link> 

      <div className='mt-12 flex flex-col-reverse md:flex-row mx-auto'>
        <Image
          src={facilityPage}
          className='m-1 p-1 mx-auto my-auto md:w-1/2 rounded-3xl'
          alt='' />
        <div className='flex flex-col m-1 p-1 md:w-1/2 my-auto'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Facilities: 
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          See the list of 28 Health Care Facility Cards with real-time statistics and link to the facility page. Unfortunately, a few facilities are not reporting their wait times. 
          </p>
        </div>
      </div>

      <Link 
        href='/facilities'
        className='mx-auto p-4 mt-8 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Visit Facilities Page
      </Link>

      <div className='mt-12 flex flex-col md:flex-row mx-auto'>
        <div className='flex flex-col m-1 p-1 md:w-1/2 my-auto'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Dashboard: 
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Explore our detailed analytics for Health Care Facilities throughout Alberta, including wait times graphs for the last 3, 6 and 12 hours, as well as daily, weekly, and monthly trends. 
          </p>
        </div>
        <Image
          src={dashboardPage}
          className='m-1 p-1 mx-auto my-auto md:w-1/2 rounded-3xl'
          alt='' />
       </div>

       <Link 
        href='/dashboard'
        className='mx-auto p-4 mt-8 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Visit Dashboard Page
       </Link> 

       <div className='mt-12 flex flex-col-reverse md:flex-row mx-auto'>
        <Image
          src={newsLetterPage}
          className='m-1 p-1 mx-auto my-auto md:w-1/2 rounded-3xl'
          alt='' />
        <div className='flex flex-col m-1 p-1 md:w-1/2 my-auto'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Newsletter: 
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Sign up for our weekly newsletter to receive personally selected trends, analytics, graphs, and statistics. Not all of the Health Care Facilities available. This section is currently under development. 
          </p>
        </div>
      </div>

      <Link 
        href='/newsletter'
        className='mx-auto p-4 mt-8 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Sign up !
      </Link>

      <div className='mt-12 flex flex-col md:flex-row mx-auto'>
        <div className='flex flex-col m-1 p-1 md:w-1/2 my-auto'>
          <h2 className='py-3 mx-3 text-left text-3xl lg:text-5xl font-semibold text-cyan-800'>
          Contact Us: 
          </h2>
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
          Have a question or concern? We are here to help! We will get back to you as soon as possible. Thank you for choosing WaitRoomAlberta.ca! 
          </p>
        </div>
        <Image
          src={contactPage}
          className='m-1 p-1 mx-auto my-auto md:w-1/2 rounded-3xl'
          alt='' />
       </div>

       <Link 
        href='/contact'
        className='mx-auto p-4 mt-8 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Contact Us
       </Link> 

       <div className='mt-12 flex flex-col md:flex-row mx-auto'>
        <div className='flex flex-col m-1 p-1 my-auto'>
          
          <p className='py-3 mx-3 text-justify text-xl leading-loose md:text-xl lg:text-2xl font-medium text-cyan-700'>
          At Alberta Wait Room, our commitment revolves around your satisfaction. We work tirelessly to enhance your experience because we believe in delivering excellence at every touchpoint. Our dedicated team continuously strives to innovate, refine, and evolve our services to meet and exceed your expectations. Your journey with us matters, and we are dedicated to making it as seamless, enjoyable, and fulfilling as possible. Thank you for choosing us. Your trust in us drives our relentless pursuit of improvement. 
          </p>
        </div>
       
       </div>





    </main>

)
}