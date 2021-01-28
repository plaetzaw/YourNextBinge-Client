import React, {useState} from 'react'
// import useFetch from '../useFetch'
import useFetchUpdate from '../useFetchUpdate'
import MovieCard from '../../components/Cards/movieCard'
import "react-multi-carousel/lib/styles.css";
import LinearProgress from '@material-ui/core/LinearProgress';
import './pages.css'
import axios from 'axios'

const Movies = () => {
  const [page, setPage] = useState(1)
  const [nextMovies, setNextMovies] = useState(null)

  let pageObj = {
    page: page
  }

  let {data: movies, isPending, error} = useFetchUpdate('http://localhost:8080/popularMovies', pageObj);
  
  const LoadMoreMovies = () => {
    setPage(page => page + 1)
    axios.post('http://localhost:8080/popularMovies', pageObj)
    .then((res) => {
      setNextMovies(res)
    })
  }
  return (
    <>
      <h1>Movies</h1>
      {error && <div><h1>{error}</h1></div>}
      { isPending && <div className="loading"><h1><LinearProgress/>Loading...</h1></div>}
      {movies && <MovieCard movies={movies} />}
      {/* {nextMovies && <MovieCard movies={nextMovies} />} */}
      <button onClick={LoadMoreMovies}>Load More Movies</button>
    </>
  )
}

export default Movies
