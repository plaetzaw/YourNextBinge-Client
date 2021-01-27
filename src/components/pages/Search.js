import React, {useState} from 'react'
import { Card } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';




const Search = () => {
    const [serachCategory, setSearchCategory] = useState("Movie")
    const [serachTerm, setSearchTerm] = useState("")

    const handleCategory = (e) => {
        setSearchCategory(e.target.value)
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const onSubmit = () => {
        let searchObj = {
            category: serachCategory,
            term: serachTerm,
        }
        console.log(searchObj)
    }

    console.log(serachCategory, serachTerm)
  return (
    <>
    <h1>Search</h1>
      <Card>
      <FormControl>
        <InputLabel>Media Type</InputLabel>
        <Select
          value={serachCategory}
          onChange={handleCategory}
        >
          <MenuItem value={"Movie"}>Movies</MenuItem>
          <MenuItem value={"TVShow"}>TV Shows</MenuItem>
          <MenuItem value={"People"}>People</MenuItem>
        </Select>
        <InputLabel>Search Term</InputLabel>
        <TextField label="Outlined" variant="outlined" 
        value={serachTerm} onChange={handleSearch}/>
        <button onClick={onSubmit}>Search</button>
      </FormControl>
      </Card>
    </>
  )
}

export default Search
