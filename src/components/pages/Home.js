import React, { useEffect } from 'react'
import TMDB from '../../utility/TMDB.png'
import axios from 'axios'

const Home = () => {
  /// This is an optimization to wake up the Heroku server when a user arrives on the application
  /// Hopefully this will lower the waiting time on the initial Heroku wakeup
  useEffect(() => {
    const url = 'https://yournextbingeserver.herokuapp.com/home'
    axios.post(url)
      .then(data => {
        // console.log(data)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }
      })
  }, [])

  return (
    <>
      <h1 className='home-header'>Welcome to YourNextBinge!</h1>
      <div className='home'>
        <div className='home-box'>
          <p>Allows you to locate the your next bingewatching title-either movie or tv show.</p>
        </div>

        <div className='home-box'>
          <p>It also allows a user to look up a particular actor/actress.
            YourNextBinge will display all of their previous performances.
          </p>
          {/* <p>You can also search for a particular movie, tv-show or person.</p>
          <p>Please note, the endpoints for the streaming are not provided by the API.</p>
          <p> But it does show you where the title is available.</p> */}
        </div>
        <div className='home-box'>
          Powered by
          <img
            alt='logo' src={TMDB}
            className='home-tmdb'
          />
        </div>
      </div>
    </>
  )
}

export default Home
