import React from 'react'

const MovieList = ({ movies }) => {
  console.log(movies)
  return (
    <div className='blog-list'>
      {movies.map(movie => (
        <div key={movie.id} />
      ))}
    </div>
  )
}

export default MovieList
