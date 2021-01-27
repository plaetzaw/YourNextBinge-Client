import React, {useState} from 'react'
import { Card } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import './pages.css'
import SearchCard from '../Cards/MiniMovieCard'




const Search = () => {
    const [serachCategory, setSearchCategory] = useState("movie")
    const [serachTerm, setSearchTerm] = useState("")
    let [results, setResults] = useState()
    const [pending, setPending] = useState(true)


    const handleCategory = (e) => {
        setSearchCategory(e.target.value)
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = () => {
        setPending(true)
        let searchObj = {
            category: serachCategory,
            term: serachTerm,
        }
        console.log(searchObj)
        axios.post("http://localhost:8080/search", searchObj)
        .then((res) => {
            setPending(false);
            setResults(res)
            // setResults(res.data.results)
        })
        console.log(results)

    }


        console.log(results)
       let markup = <>Hello Whirl</>


  return (
    <>
    <Card className="search">
    <h1>Search</h1>
      <FormControl>
        <span>Media Type</span>
        <Select
          value={serachCategory}
          onChange={handleCategory}
        >
          <MenuItem value={"movie"}>Movies</MenuItem>
          <MenuItem value={"tv"}>TV Shows</MenuItem>
          <MenuItem value={"person"}>People</MenuItem>
        </Select>
        <span>Search Term</span>
        <TextField label="Search Term" variant="outlined" 
        value={serachTerm} onChange={handleSearch}/>
        <br/>
        <div className="btn" onClick={onSubmit}>Search</div>
      </FormControl>
      </Card>
      <br/>
      <h1>Search Results</h1>
      {results && <SearchCard movies={results}/>}
    </>
  )
}

export default Search
