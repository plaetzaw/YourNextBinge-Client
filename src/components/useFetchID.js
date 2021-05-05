import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url, id) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.post(url, { id: id })

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
    // [adding the ID casues an infinite loop]
    // eslint-disable-next-line
  }, [id])

  return { data, isPending, error }
}

export default useFetch
