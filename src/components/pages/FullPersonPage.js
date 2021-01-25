import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../useFetchID';
import FullPersonCard from '../Cards/FullPersonCard'

const FullPersonPage = () => {
    const { id } = useParams();
    const idObj = {
        id: id
    }
    const { data: person, error, isPending } = useFetch('http://localhost:8080/personInfo/', idObj);    
    console.log(person)
  return (
    <>
       {error && <div><h1>{error}</h1></div>}
      { isPending && <div><h2>Data is Loading...</h2></div>}
      {person &&  <><FullPersonCard props={person}/></>}
    </>
  )
}

export default FullPersonPage