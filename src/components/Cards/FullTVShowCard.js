import { Card, CardMedia, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Placeholder from '../../utility/200x340.png'
import './FullCard.css'
import 'primeflex/primeflex.css';

const FullTVShowCard = ({props}) => {
  const info = props.data.info;
  const credits = props.data.credits;
  const recs = props.data.recs;

  const posterChecker = info.poster_path === null ? (Placeholder) : (`https://image.tmdb.org/t/p/original/${recs.poster_path}`)


  const castRender = credits.cast.map((cast) => {
    const phChecker = cast.profile_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${cast.profile_path}`)
    return <Link to ={`/person/${cast.id}`}><Card
    key={cast.id}
    className="cast-card"
    onClick={() => {
      const idObj = {
        id: cast.id
      } 
      console.log(idObj)
    }}
    >
      <img
      src={phChecker}
      height="300px"
      alt={cast.name}
      // width="300px"
      />
      <li className="centerText"><i>{cast.name}</i> as <br/>
      <b>{cast.character}</b></li>
    </Card>
    </Link>
  })

  const recRender = recs.results.map((recs) => {
    const ppChecker = recs.poster_path === null ? (Placeholder) : (`https://image.tmdb.org/t/p/original/${recs.poster_path}`)
    return <Link to={`/tvshow/${recs.id}`}><Card 
    key={recs.id}
    className="cast-card"
    onClick={() => {
      const idObj = {
        id: recs.id
      } 
      console.log(idObj)
    }}
    >
      <img
      alt={recs.name}
      src={ppChecker}
      height="400px"
       />
      <br/>
      <div> 
      <Paper><b>{recs.name}</b></Paper></div>
    </Card>
    </Link>
  })

  const genres = [] 
  info.genres.forEach((item) => {
 genres.push(item.name + ",")
   })

const tagChecker = info.tagline === "" ?  (<></>) : (<i><h3>"{info.tagline}"</h3></i>)

const homeChecker = info.homepage === "" ? (<><b>No Homepage Reported</b></>) : (<a href={`${info.homepage}`}>{info.name} Homepage</a>)

const nextEpChecker = info.next_episode_to_air === null ? (<>Next Episode Airing: Not Set</>) : (<>Next Episode Airing: {info.next_episode_to_air.air_date}</>)

const productionChecker = info.in_production === true ? (<>Series in Production</>) : (<>Series no longer in Production</>)

  console.log(info, credits, recs)
  return (
    <div className="cardBackground">
    <Card className="card">
      <h1>{info.name}</h1>
      {tagChecker}
      {genres}
      <CardMedia
      className="card-poster"
      component="img"
      alt={info.name}
      src={posterChecker}
      />
      {info.overview}
      <br/>
      <br/>
      <br/>
      <div className="p-grid">
      <Paper className="p-col-4">
      First Episode Aired: {info.first_air_date}
      </Paper>
      <Paper className="p-col-4">
      Last Episode Aired: {info.last_air_date}
      </Paper>
      <Paper className="p-col-4">
      {nextEpChecker}
      </Paper>
      <Paper className="p-col-4">
      {productionChecker}
      </Paper>
      <Paper className="p-col-4">
      Episode run time: {info.episode_run_time[0]} minutes
      </Paper>
      <Paper className="p-col-4">
      {homeChecker}
      </Paper>
      </div>
      <br/>
      <h1>Cast of {info.name}</h1>
      <div className="item-display">
      <div className="p-grid">
        {castRender}
      </div>
      </div>
      <br/>
      <h1>Recommendations based on {info.name}</h1>
      <div className="item-display">
      <div className="p-grid">
      {recRender}
      </div>
      </div>

    </Card>
    </div>
  )
}

export default FullTVShowCard
