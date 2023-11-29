import Image from "next/image"
import working from '../assets/working.png'
import Link from "next/link"


export default function NewsLetter() {
    return (
        <div className='container flex flex-col mx-auto pb-10'>
        
        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
            Newsletter
        </h1>
        <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-cyan-600 rounded-3xl'>
            Section is under development
        </h1>

        <div className="flex flex-col md:flex-row mt-2">
            <Image
            src={working}
            alt=""
            className='md:w-1/2 py-3  my-auto mx-auto'
            />
            <div className="flex-col pt-8 md:w-1/2">
                <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Exciting news! Our newsletter page is currently in the works. 
                </div>
                <div className='py-3  mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                Your feedback matters, so feel free to visit our contact page to share your thoughts or provide suggestions on how our newsletter should look.
                </div>
                <div className='py-3 mx-3 text-justify text-xl leading-loose md:text-2xl lg:text-3xl font-medium text-cyan-700'>
                We are eager to craft an engaging experience tailored just for you!
                </div>
            </div>

          </div>

          <Link 
                href='/contact'
                className='mx-auto p-4 mt-8 border-4 border-cyan-600 rounded-3xl font-semibold text-2xl text-cyan-600 hover:bg-cyan-600 hover:text-white'>
                Visit Contact page
            </Link> 

        </div>
    )
}