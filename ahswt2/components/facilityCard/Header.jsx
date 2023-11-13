import React from 'react'

const Header = (props) => {
  return (
    <h1 className='my-6 mx-2 text-cyan-700 text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-4 pt-4 font-bold text-center'>
      {props.name}
    </h1>
  )
}

export default Header