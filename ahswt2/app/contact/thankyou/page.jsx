import Link from "next/link"

export default async function ThankYou() {
    return(
        <main className='container flex flex-col mx-auto pb-10 h-screen'>
          
          <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
            Thanks for Contacting Us!
          </h1>

          <h1 className='py-4 px-4 my-4 text-center text-3xl lg:text-6xl font-bold text-cyan-600 rounded-3xl'>
            We have recieved your message. 
          </h1>
          <h1 className='py-4 px-4 my-4 text-center text-3xl lg:text-6xl font-bold text-cyan-600 rounded-3xl'>
            And will put 200% effort to act on it.
          </h1>

          <Link 
            href='/start'
            className='mx-auto p-4 mt-8 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
            Go Back to the Homepage
          </Link>

          </main>
    )}