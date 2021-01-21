import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'
import useFetch from '../useFetchID';

const FullMovieCard = () => {
    const { id } = useParams();
    const idObj = {
        id: id
    }
    const { data: movie, error, isPending } = useFetch('http://localhost:8080/fullMovieInfo/', idObj);
    console.log(movie)
    const history = useHistory();
  return (
    <>
      sup bro
    </>
  )
}

export default FullMovieCard
