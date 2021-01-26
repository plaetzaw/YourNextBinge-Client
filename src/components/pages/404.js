import React from 'react'
import {Redirect} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>The page you are searching for has not been found.</p>
      <Redirect to="/"><span>Click here to return home</span></Redirect>
    </>
  )
}

export default NotFound
