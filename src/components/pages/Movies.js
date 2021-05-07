import React, { useState, useEffect } from 'react'
import MovieCard from '../../components/Cards/movieCard'
import 'react-multi-carousel/lib/styles.css'
import LinearProgress from '@material-ui/core/LinearProgress'
import './pages.css'
import axios from 'axios'

const Movies = () => {
  const [page, setPage] = useState(2)
  // starting on page 2 here, becuase the client will already pass 1 on the first render
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = 'https://yournextbingeserver.herokuapp.com/popularMovies'
    axios.post(url)
      .then(data => {
        setIsPending(false)
        setData(data)
        setError(null)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false)
          setError(err.message)
        }
      })
  }, [])

  const pageObj = {
    page: page
  }

  const LoadMoreMovies = () => {
    setIsPending(true)
    setPage(page => page + 1)
    axios.post('https://yournextbingeserver.herokuapp.com/popularMovies', pageObj)
      .then((res) => {
        setIsPending(false)
        setData(res)
        console.log(res)
      })
  }
  return (
    <div className='container'>
      <h1 className='display'>Movies</h1>
      {!isPending && <div className='load-btn-row'><button className='load-btn' onClick={LoadMoreMovies}>Load More Movies</button></div>}
      {error && <div><h1>{error}</h1></div>}
      {isPending && <div className='loading'><h1><LinearProgress />Loading...</h1></div>}
      {data && <MovieCard movies={data} />}
    </div>
  )
}

export default Movies
