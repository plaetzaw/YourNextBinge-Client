import { useState, useEffect } from 'react';
import axios from 'axios'

const useFetch = (url, id) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      axios.post(url, id,{ signal: abortCont.signal })
      // .then(res => {
      //   console.log(res)
      //   if (!res.ok) { // error coming back from server
      //     throw Error('could not fetch the data for that resource');
      //   } 
      //   return res.json();
      // })
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        }
      })
    }, 1000);

    // abort the fetch
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, error };
}
 
export default useFetch;