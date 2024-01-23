'use client'

import Image from "next/image"
import contact from '../assets/contact.png'
import contactToDB from "../actions/contactToDB"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ContactPage() {

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = () =>{
    setLoading(true);
    router.push('/contact/thankyou')
  }


    return(
        <main className='container flex flex-col mx-auto pb-10'>
          
          <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
            Contact Us 
          </h1>

          <div className="flex flex-col md:flex-row">
            
            <div className="flex-col py-4 md:w-1/2">
                <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Got a query about AlbertaWaitRoom.ca or need assistance? We are all ears and ready to help! 
                </div>
                <div className='py-3  mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Whether it is about wait times at Albertas urgent care facilities or anything related to the website, drop us a message.
                </div>
                <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                We will do our absolute best to adreess all the issues in a timely manner. 
                </div>
                
            </div>
            <Image
            src={contact}
            alt="person with different means of communication around"
            className='md:w-1/3 py-3 min-w-[300px] max-w-[450px] w-full min-h-[300px] max-h-[450px] h-full my-auto mx-auto'
            />
            </div>

          <form
          className="my-4 flex flex-col items-center justify-center text-md lg:text-lg font-bold min-h-[90px] text-cyan-700 rounded-3xl" 
          action={contactToDB}
          aria-label="Contact Form"
          role="form">

            <h1 className='py-6 px-4 my-2 text-center text-3xl lg:text-6xl font-bold text-cyan-700 rounded-3xl'>
                Contact: 
            </h1>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="name" className='w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Name:</label>
                <input 
                onChange={e => setName(e.target.value)}
                type="text" aria-label="name"
                id="name" 
                name="name" 
                required placeholder="Awesome Awesomeson"
                className='placeholder-cyan-600/60 w-full md:w-2/3 p-2 flex text-center items-center justify-center border-4 border-cyan-600 rounded-xl focus:outline-none focus:border-cyan-500' />
            </div>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="phone" className='w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Phone Number:</label>
                <input 
                onChange={e => setPhone(e.target.value)}
                type="tel" aria-label="phone"
                id="phone" 
                name="phone" 
                required placeholder="Here is mine as an example 1 825 944 2565"
                className='placeholder-cyan-600/60 w-full md:w-2/3 p-2 flex text-center items-center justify-center border-4 border-cyan-600 rounded-xl focus:outline-none focus:border-cyan-500' />
            </div>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="email" className='w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Email:</label>
                <input 
                onChange={e => setEmail(e.target.value)}
                type="email" 
                id="email" 
                name="email" aria-label="email"
                required placeholder="awesomeWaittimeChecker@coolmail.com" 
                className='placeholder-cyan-600/60 w-full md:w-2/3 flex p-2  text-center items-center justify-center border-4 border-cyan-600 rounded-xl focus:outline-none focus:border-cyan-500' />
            </div>

            <div className="flex flex-col md:flex-row py-4 w-full px-4">
                <label htmlFor="message" className='w-full md:w-1/3 flex text-center items-center justify-center p-1 m-1 mb-2 text-2xl'>Message:</label>
                <textarea
                onChange={e => setMessage(e.target.value)} 
                id="message" aria-label="message"
                name="message" 
                required placeholder="Here is the part where you leave your message. Submit button will appear once you fill out all of the fields."
                className='placeholder-cyan-600/60 w-full md:w-2/3 p-2 flex text-center items-center justify-center border-4 border-cyan-600 rounded-xl focus:outline-none focus:border-cyan-500' 
                ></textarea>
            </div>

            
            <button 
            disabled={!name || !email || !phone || !message}
            onClick={handleSubmit} aria-label="submit form"
            className="mx-auto p-4 px-6 my-8 border-4 border-cyan-600 rounded-3xl 
            font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white
            disabled:text-white disabled:border-white disabled:hover:bg-white" 
            type="submit" >
              {loading ? "Sending data..." : 'Submit!'}
            </button>
               

          </form>

          <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Thank you for using AlbertaWaitRoom.ca! We hope you had a great experience today! 
          </div>

        </main> 
    )};