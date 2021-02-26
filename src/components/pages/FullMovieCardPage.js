import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetchID'
import FullMovieCard from '../pages/FullMovieCardPage'
import LinearProgress from '@material-ui/core/LinearProgress'
import './pages.css'

const MovieCardPage = () => {
  const { id } = useParams()
  const idObj = {
    id: id
  }
  const { data: movie, error, isPending } = useFetch('https://yournextbingeserver.herokuapp.com/fullMovieInfo/', idObj)

  return (
    <>
      {error && <div><h1>{error}</h1></div>}
      {isPending && <div className='loading'><h2><LinearProgress /></h2></div>}
      {movie && <><FullMovieCard props={movie} /></>}
    </>
  )
}

export default MovieCardPage
