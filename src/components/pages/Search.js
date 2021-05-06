import React, { useState } from 'react'
import { Card, LinearProgress } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import './pages.css'
import MovieCard from '../Cards/MiniMovieCard'
import TVCard from '../Cards/MiniShowCard'
import PersonCard from '../Cards/MiniPersonCard'

const Search = () => {
  const [searchCategory, setSearchCategory] = useState('movie')
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState()
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState(false)
  const [tvshows, setTVShows] = useState(false)
  const [people, setPeople] = useState(false)

  const handleCategory = (e) => {
    setSearchCategory(e.target.value)
  }
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const onSubmit = () => {
    setLoading(true)
    const searchObj = {
      category: searchCategory,
      term: searchTerm
    }
    console.log(searchObj)
    axios.post('https://yournextbingeserver.herokuapp.com/search', searchObj)
      .then((res) => {
        setLoading(false)
        setResults(res)
        if (searchCategory === 'movie') {
          setMovies(true)
        } else if (searchCategory === 'tv') {
          setTVShows(true)
        } else if (searchCategory === 'person') {
          setPeople(true)
        }
      })
  }
  return (
    <>
      <Card className='search'>
        <h1>Search</h1>
        <FormControl>
          <span>Media Type</span>
          <Select
            value={searchCategory}
            onChange={handleCategory}
          >
            <MenuItem value='movie'>Movies</MenuItem>
            <MenuItem value='tv'>TV Shows</MenuItem>
            <MenuItem value='person'>People</MenuItem>
          </Select>
          <span>Search Term</span>
          <TextField
            label='Search Term' variant='outlined'
            value={searchTerm} onChange={handleSearch}
          />
          <br />
          <div className='btn' onClick={onSubmit}>Search</div>
        </FormControl>
      </Card>
      <br />
      {loading && <h1><LinearProgress />Loading Search Results</h1>}
      {movies && <MovieCard movies={results} />}
      {tvshows && <TVCard tvshows={results} />}
      {people && <PersonCard people={results} />}

    </>
  )
}

export default Search
