import { Card, CardMedia } from '@material-ui/core'
import {Link} from 'react-router-dom'
import Placeholder from '../../utility/200x340.png'
import './FullCard.css'
import 'primeflex/primeflex.css';

const FullPersonCard = ({props}) => {
  const info = props.data.info;
  const moviecredits = props.data.moviecredits;
  const tvcredits = props.data.tvcredits;

  // console.log(info, moviecredits, tvcredits)

  let sortedMovieCredits = moviecredits.cast.slice().sort((a,b) => new Date(b.release_date) - new Date(a.release_date))
  let sortedTVCredits = tvcredits.cast.slice().sort((a,b) => new Date(b.first_air_date) - new Date(a.first_air_date))

  const posterChecker = info.profile_path === null ? (Placeholder) : (`https://image.tmdb.org/t/p/original/${info.profile_path}`)


  const moviecreditRender = sortedMovieCredits.map((credits) => {
    const phChecker = credits.poster_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${credits.poster_path}`)
    return <Link to={`/movie/${credits.id}`}><Card
    key={credits.id}
    className="cast-card"
    width="400"
    >
      <img
      alt={credits.name}
      src={phChecker}
      height="400"
      />
      <li><i>in {credits.title}</i> as <br/>
      <b>{credits.character}</b></li>
      <br/>
      <i>Released: {credits.release_date}</i>
    </Card>
    </Link>
  })

  const tvcreditRender = sortedTVCredits.map((credits) => {
    const phChecker = credits.poster_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${credits.poster_path}`)
    return <Link to={`/tvshow/${credits.id}`}><Card
    key={credits.id}
    className="cast-card"
    >
      <img
      alt={credits.name}
      src={phChecker}
      height="400"
      />
      <li><i>in {credits.name}</i> as <br/>
      <b>{credits.character}</b></li>
      <br/>
      <i>Premiered: {credits.first_air_date}</i>
    </Card>
    </Link>
  })

  return (
    <div className="cardBackground">
    <Card className="card">
      <h1>{info.name}</h1>
      <CardMedia
        className="poster"
        component="img"
        alt={info.name}
        src={posterChecker}
        />
        <br/>
    <div> <h3>{info.biography}</h3></div>
    <br/>

    <h1>Movie Credits for {info.name}</h1>
    <div className="item-display">
    <div className="p-grid">
    {moviecreditRender}
    </div>   
    </div>

    <h1>TV Credits for {info.name}</h1>
    <div className="item-display">
    <div className="p-grid">
    {tvcreditRender}
    </div>  
    </div>
    </Card>
    </div>
  )
}

export default FullPersonCard
