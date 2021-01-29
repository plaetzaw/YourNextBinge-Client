import React from 'react'
import {
  // useHistory, 
  useParams} from 'react-router-dom'
import useFetch from '../useFetchID';
import CardTest from './CardTest'
import LinearProgress from '@material-ui/core/LinearProgress';
import './FullCard.css'

const FullMovieCard = () => {
    const { id } = useParams();
    const idObj = {
        id: id
    }
    const { data: movie, error, isPending } = useFetch('https://yournextbingeserver.herokuapp.com/fullMovieInfo/', idObj);    

  return (
    <>
       {error && <div><h1>{error}</h1></div>}
       { isPending && <div className="loading"><h1><LinearProgress/>Loading Movie Information...</h1></div>}
      {movie &&  <><CardTest props={movie}/></>}
    </>
  )
}

export default FullMovieCard
