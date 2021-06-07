import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
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
  }, [url])

  return { data, isPending, error }
}

export default useFetch
