import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>The page you are searching for has not been found.</p>
      <span><Link to='/'>Click here</Link> to return home</span>
    </>
  )
}

export default NotFound
