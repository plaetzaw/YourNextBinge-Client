import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>The page you are searching for has not been found.</p>
      <Link to="/"><span>Click here to return home</span></Link>
    </>
  )
}

export default NotFound
