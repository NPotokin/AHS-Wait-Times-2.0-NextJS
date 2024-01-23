import './globals.css'
import {PiLinkedinLogoBold, PiGithubLogoBold } from 'react-icons/pi'
import { BiHome } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { BsBuildingAdd } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import Link from 'next/link'
import { GrContact } from "react-icons/gr";


import { Montserrat } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const mons = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Alberta Wait Room',
  description: 'Your Gateway to Informed Healthcare Decisions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mons.className}>
      <body 
        className='bg-white p-2 m-2 max-w-7xl mx-auto'>
        <nav role='navigation'>
          <ol className='grid grid-cols-3 md:grid-cols-6 gap-3 justify-between'>
            
            <li className='group p-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl hover:bg-cyan-600'>
              <Link 
                href='/start' aria-label='visit the start page'
                className='flex text-cyan-600  group-hover:text-white'>
                <BiHome 
                className='mx-auto my-auto lg:hidden'
                size={40} aria-hidden="true" />
                <p className='hidden lg:block my-auto mx-auto px-2'>Home</p>
              </Link>
            </li>

            <li className='group p-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl hover:bg-cyan-600'>
              <Link 
                href='/locations' aria-label='visit the locations page'
                className='flex text-cyan-600  group-hover:text-white'>
                <SlLocationPin 
                className='mx-auto my-auto lg:hidden'
                size={40} aria-hidden="true"/>
                <p className='hidden lg:block  my-auto mx-auto px-2'>Locations</p>
              </Link>
            </li>
            
            <li className='group p-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl hover:bg-cyan-600'>
              <Link 
                href='/facilities' aria-label='visit the facilities page'
                className='flex text-cyan-600  group-hover:text-white'>
                <BsBuildingAdd 
                className='mx-auto my-auto lg:hidden'
                size={40} aria-hidden="true"/>
                <p className='hidden lg:block my-auto mx-auto px-2'>Facilities</p>
              </Link>
            </li>

            <li className='group p-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl hover:bg-cyan-600'>
              <Link 
                href='/dashboard' aria-label='visit the dashboard page'
                className='flex text-cyan-600  group-hover:text-white'>
                <MdOutlineDashboardCustomize 
                className='mx-auto my-auto lg:hidden'
                size={40} aria-hidden="true"/>
                <p className='hidden lg:block my-auto mx-auto px-2'>Dashboard</p>
              </Link>
            </li>

            <li className='group p-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl hover:bg-cyan-600'>
              <Link 
                href='/newsletter' aria-label='visit the newsletter page'
                className='flex text-cyan-600  group-hover:text-white'>
                <BiNews 
                className='mx-auto my-auto lg:hidden'
                size={40} aria-hidden="true"/>
                <p className='hidden lg:block my-auto mx-auto px-2'>Newsletter</p>
              </Link>
            </li>

            <li className='group p-4 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl hover:bg-cyan-600'>
              <Link 
                href='/contact' aria-label='visit the contact page'
                className='flex text-cyan-600  group-hover:text-white'>
                <GrContact 
                className='mx-auto my-auto lg:hidden'
                size={40} aria-hidden="true"/>
                <p className='hidden lg:block my-auto mx-auto px-2'>Contact</p>
              </Link>
            </li>
            
          
          </ol>


        </nav>
        {children}

        <div className="flex flex-row mx-auto justify-center">
          <p className='py-3 mx-3 text-center text-xl leading-loose md:text-xl lg:text-2xl font-normal text-cyan-600'>
            Developed by Nikita Potokin.
          </p>
          <Link href='https://www.linkedin.com/in/nikitapotokin/'  target="_blank" aria-label='Linkedin of Nikita Potokin'>
            <PiLinkedinLogoBold size={40} aria-hidden="true" className='mx-3 my-auto text-cyan-600 hover:animate-pulse' />
          </Link>
          <Link href='https://github.com/NPotokin' target='_blank' aria-label='Portfolio website of Nikita Potokin'>
            <PiGithubLogoBold  size={40} aria-hidden="true" className='mx-3 my-auto text-cyan-600 hover:animate-pulse' />
          </Link>
        </div>

      </body>
    </html>
  )
}
