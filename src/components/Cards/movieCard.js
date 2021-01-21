import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core'


const MovieCard = ({ movies }) => {
    // const dispatch = useDispatch();
  
    //  function handleMovie (){
    //    console.log("I have been clicked ID:" + id)
    //    let idObj = {
    //      id: id
    //    }
    //     dispatch(GetMovieInfo(idObj));
    //   }

      return (
          
      <>
        <>{movies.data.results.map((movie) => {
    return <div key={movie.id}>
    {movie.title}
    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title}/>
    </div>
  })}</>
        {/* <Card
        className="miniCard"
        >
          <CardMedia
          className="posterMini"
          component="img"
          alt={title}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          />  
            <Button 
            // onClick={handleMovie}
            >
             <p className="centerText"><b>View Full Information</b></p></Button>
  
        </Card> */}
      </>
    )
  }
  
export default MovieCard