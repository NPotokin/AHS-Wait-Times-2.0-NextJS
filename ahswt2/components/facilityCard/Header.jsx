import React from 'react'

const Header = (props) => {
  return (
    <h1 className='my-12 text-cyan-700 text-4xl lg:text-7xl xl:text-8xl py-4 pt-4 font-bold text-center'>
      {props.name}
    </h1>
  )
}

export default Header