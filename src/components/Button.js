import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = () => {
  return (
    <>
      <Link to='/search'>
        <button className='btn'>Search</button>
      </Link>
    </>
  )
}

export default Button
