import React, { useState, useEffect } from 'react'
import MiniShowCard from '../../components/Cards/MiniShowCard'
import 'react-multi-carousel/lib/styles.css'
import LinearProgress from '@material-ui/core/LinearProgress'
import './pages.css'
import axios from 'axios'

const TVShows = () => {
  const [page, setPage] = useState(2)
  // starting on page 2 here, becuase the client will already pass 1 on the first render
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = 'https://yournextbingeserver.herokuapp.com/popularShows'
    axios.post(url)
      .then(data => {
        setIsPending(false)
        setData(data)
        setError(null)
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          // console.log('fetch aborted')
        } else {
          setIsPending(false)
          setError(err.message)
        }
      })
  }, [])

  const pageObj = {
    page: page
  }

  const LoadMoreShows = () => {
    setIsPending(true)
    setPage(page => page + 1)
    axios.post('https://yournextbingeserver.herokuapp.com/popularShows', pageObj)
      .then((res) => {
        setIsPending(false)
        setData(res)
      })
  }

  return (
    <div className='container'>
      <h1 className='display'>TV Shows</h1>
      {!isPending && <div className='load-btn-row'><button className='load-btn' onClick={LoadMoreShows}>Load More Shows</button></div>}
      {error && <div><h1>{error}</h1></div>}
      {isPending && <div className='loading'><h1><LinearProgress />Loading...</h1></div>}
      {data && <MiniShowCard tvshows={data} />}
    </div>
  )
}

export default TVShows
