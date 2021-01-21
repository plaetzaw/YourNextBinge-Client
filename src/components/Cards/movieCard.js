import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


const MovieCard = ({ movies }) => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    // const dispatch = useDispatch();
  
    //  function handleMovie (){
    //    console.log("I have been clicked ID:" + id)
    //    let idObj = {
    //      id: id
    //    }
    //     dispatch(GetMovieInfo(idObj));
    //   }


    let markup = movies.data.results.map((movie) => {
        return <div key={movie.id}>
                {movie.title}
        <Card
            className="miniCard"
            >
              <CardMedia
              className="posterMini"
              component="img"
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />  
                <Link to={`/movie/${movie.id}`}>
                <Button 
                // onClick={handleMovie}
                >
                 <p className="centerText"><b>View Full Information</b></p></Button>
                 </Link>
            </Card>    
        </div>
      })

      return (
      <>
<Carousel
responsive={responsive}
>
{markup}
</Carousel>
      </>
    )
  }
  
export default MovieCard