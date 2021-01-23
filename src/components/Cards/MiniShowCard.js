import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia } from '@material-ui/core'
import { Button } from '@material-ui/core'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const MiniShowCard = ({ tvshows }) => {
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

      let showmarkup = tvshows.data.results.map((tvshow) => {
        return <div key={tvshow.id}>
                {tvshow.title}
        <Card
            className="miniCard"
            >
              <CardMedia
              className="posterMini"
              component="img"
              alt={tvshow.title}
              src={`https://image.tmdb.org/t/p/original/${tvshow.poster_path}`}
              />  
                <Link to={`/tvshow/${tvshow.id}`}>
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
    responsive={responsive}>
    {showmarkup}
    </Carousel>
          </>
  )
}

export default MiniShowCard
