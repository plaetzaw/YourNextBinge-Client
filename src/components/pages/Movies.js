import React from 'react'
import useFetch from '../useFetch'
import MovieList from '../MovieList'
import MovieCard from '../../components/Cards/movieCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Movies = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

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
