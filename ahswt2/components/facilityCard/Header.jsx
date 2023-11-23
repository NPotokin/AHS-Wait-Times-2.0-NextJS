import React from 'react'

const Header = (props) => {
  return (
    
    <h1 className='py-8 px-4 my-10 text-center text-3xl lg:text-6xl font-bold text-white bg-cyan-600 rounded-3xl'>
    {props.name}
    </h1>
  )
}

export default Header