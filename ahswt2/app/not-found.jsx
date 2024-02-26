import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='container flex flex-col mx-auto pb-10 '>
      <h1 className='md:my-12 lg:my-16 py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
            Page not Found.
      </h1>
      <p className='md:my-12 lg:my-16 py-3 mx-3 text-justify text-xl  md:text-3xl lg:text-4xl font-medium text-cyan-700'>
        We are terribly sorry, but it looks like something went wrong. Try again and thank you for your patience! 
      </p>
      <Link 
        href='/' aria-label='visit start page'
        className='md:my-12 lg:my-16 mx-auto p-4 mt-8 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
        Home Page
      </Link>
    </div>
  )
}