import React from 'react'
import useFetch from '../useFetch'
import PersonCard from '../../components/Cards/MiniPersonCard'
import "react-multi-carousel/lib/styles.css";

const People = () => {

  const {data: people, isPending, error} = useFetch('http://localhost:8080/popularPeople');
  console.log(people)
  return (
    <>
    <h1>People</h1>
    {error && <div><h1>{error}</h1></div>}
    {isPending && <div><h2>Data is Loading...</h2></div>}
    {people && <PersonCard people={people} />}
  </>
  )
}

export default People
