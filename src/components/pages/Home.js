import React from 'react'
import TMDB from '../../utility/TMDB.png'
const Home = () => {
  return (
    <>
      <h1 className='loading'>Welcome to YourNextBinge!</h1>
      <br />
      <div className='home'>
        <div className='home-box'>
          <p>Allows you to locate the your next bingewatching title-either movie or tv show.</p>
          <p>It also allows a user to look up a particular actor/actress.</p>
          <p>YourNextBinge will display all of their previous performances.</p>
        </div>

        <div className='home-box'>
          <p>You can also search for a particular movie, tv-show or person.</p>
          <p>Please note, the endpoints for the streaming are not provided by the API.</p>
          <p> But it does show you where the title is available.</p>
        </div>
        <div className='home-box'>
          <p>Powered by</p>
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
