import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url, page) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()

    setTimeout(() => {
      axios.post(url, page, { signal: abortCont.signal })
        .then(data => {
          setIsPending(false)
          setData(data)
          setError(null)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
          // auto catches network / connection error
            setIsPending(false)
            setError(err.message)
          }
        })
    }, 1000)

    // abort the fetch
    return () => abortCont.abort()
  }, [url])

  return { data, isPending, error }
}

export default useFetch
