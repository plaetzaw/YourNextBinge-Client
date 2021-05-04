import React from 'react'
import Card from '@material-ui/core/Card'
import { CardMedia, Button } from '@material-ui/core'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import Placeholder from '../../utility/200x340.png'

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
  }

  const showmarkup = tvshows.data.results.map((tvshow) => {
    const phChecker = tvshow.poster_path === null ? (Placeholder) : (`https://image.tmdb.org/t/p/original/${tvshow.poster_path}`)
    return (
      <div key={tvshow.id}>
        <Card
          className='minicard'
        >
          <h1>{tvshow.name}</h1>
          <CardMedia
            component='img'
            alt={tvshow.name}
            src={phChecker}
          />
          <Link to={`/tvshow/${tvshow.id}`}>
            <Button>
              <p className='minicard-btn'><b>See Show Information</b></p>
            </Button>
          </Link>
        </Card>
      </div>
    )
  })

  return (
    <>
      <Carousel
        responsive={responsive}
        showDots
        focusOnSelect
      >
        {showmarkup}
      </Carousel>
    </>
  )
}

export default MiniShowCard
