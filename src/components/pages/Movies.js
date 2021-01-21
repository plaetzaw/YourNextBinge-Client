import React from 'react'
import useFetch from '../useFetch'
import MovieList from '../MovieList'
import MovieCard from '../../components/Cards/movieCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Movies = () => {


  const {data: movies, isPending, error} = useFetch('http://localhost:8080/popularMovies');
  


  console.log(movies)
  return (
    <>
      <h1>Movies</h1>
      {error && <div><h1>{error}</h1></div>}
      { isPending && <div><h2>Data is Loading...</h2></div>}
      {movies && <MovieCard movies={movies} />}
    </>
  )
}

export default Movies
