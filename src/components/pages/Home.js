import React from 'react'

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>Your Next Binge</h1><i className="fab fa-medapps"></i>
        <p>Allows you to locate the your next bingewatching title</p>
        <p>It also allows a user to look up a particular actor/actress
          and the app will display all of their previous works</p>
          <p>You can also search across movies and tv shows</p>
          <span>Please note, the endpoints for the streaming are not provided by the API, but
            it does show you where the title is available</span>
      </div>
    </>
  )
}

export default Home
