import React from 'react'
import {
  // useHistory, 
  useParams} from 'react-router-dom'
import useFetch from '../useFetchID';
import FullMovieCard from '../pages/FullMovieCardPage'

const MovieCardPage = () => {
    const { id } = useParams();
    const idObj = {
        id: id
    }
    const { data: movie, error, isPending } = useFetch('http://localhost:8080/fullMovieInfo/', idObj);    

  return (
    <>
       {error && <div><h1>{error}</h1></div>}
      { isPending && <div><h2>Data is Loading...</h2></div>}
      {movie &&  <><FullMovieCard props={movie}/></>}
    </>
  )
}

export default MovieCardPage
