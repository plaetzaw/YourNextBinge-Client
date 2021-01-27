import { Card, CardMedia } from '@material-ui/core'
import {Link} from 'react-router-dom'
import Placeholder from '../../utility/200x340.png'
import './FullCard.css'
import 'primeflex/primeflex.css';

const FullPersonCard = ({props}) => {
  const info = props.data.info;
  const moviecredits = props.data.moviecredits;
  const tvcredits = props.data.tvcredits;

  console.log(info, moviecredits, tvcredits)

  const moviecreditRender = moviecredits.cast.map((credits) => {
    const phChecker = credits.poster_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${credits.poster_path}`)
    return <Link to={`/movie/${credits.id}`}><Card
    key={credits.id}
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

  const tvcreditRender = tvcredits.cast.map((credits) => {
    const phChecker = credits.poster_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${credits.poster_path}`)
    return <Link to={`/tvshow/${credits.id}`}><Card
    key={credits.id}
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
    <>
    <Card className="card">
      <h1>{info.name}</h1>
      <CardMedia
        className="poster"
        component="img"
        alt={info.name}
        src={`https://image.tmdb.org/t/p/original/${info.profile_path}`}
        />
        <br/>
        <div> <h3>{info.biography}</h3></div>

        <h1>Movie Credits for {info.name}</h1>
        <div className="p-grid">
            {moviecreditRender}
            </div>   

             <h1>TV Credits for {info.name}</h1>
        <div className="p-grid">
            {tvcreditRender}
            </div>  
    </Card>
    </>
  )
}

export default FullPersonCard
