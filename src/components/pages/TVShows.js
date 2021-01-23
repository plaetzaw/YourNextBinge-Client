import React from 'react'
import useFetch from '../useFetch'
import MiniShowCard from '../../components/Cards/MiniShowCard'
import "react-multi-carousel/lib/styles.css";

const TVShows = () => {

  const {data: tvshows, isPending, error} = useFetch('http://localhost:8080/popularShows');

  return (
    <>
      <h1>TV Shows</h1>
      {error && <div><h1>{error}</h1></div>}
      { isPending && <div><h2>Data is Loading...</h2></div>}
      {tvshows && <MiniShowCard tvshows={tvshows} />}
    </>
  )
}

export default TVShows
