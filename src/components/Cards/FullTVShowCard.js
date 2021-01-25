import { Card, CardMedia, Paper } from '@material-ui/core'
import Placeholder from '../../utility/200x340.png'
import './FullCard.css'
import 'primeflex/primeflex.css';

const FullTVShowCard = ({props}) => {
  const info = props.data.info;
  const credits = props.data.credits;
  const recs = props.data.recs;

  const genres = [] 
  info.genres.forEach((item) => {
 genres.push(item.name + ",")
   })

const tagChecker = info.tagline === "" ?  (<></>) : (<i><h3>"{info.tagline}"</h3></i>)

const homeChecker = info.homepage === "" ? (<><b>No Homepage Reported</b></>) : (<a href={`${info.homepage}`}>{info.name} Homepage</a>)

const nextEpChecker = info.next_episode_to_air.air_date === null ? (<>Next Episode Airing: Not Set</>) : (<>Next Episode Airing: {info.next_episode_to_air.air_date}</>)

const productionChecker = info.in_production === true ? (<>Series in Production</>) : (<>Series no longer in Production</>)

  console.log(info, credits, recs)
  console.log(info.next_episode_to_air.air_date)
  return (
    <>
    <Card className="card">
      <h1>{info.name}</h1>
      {genres}
      <CardMedia
      className="card-poster"
      component="img"
      alt={info.name}
      src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
      />
      {info.overview}
      <div className="p-grid">
      <Paper className="p-col-4">
      First Episdoe Aired: {info.first_air_date}
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
    </Card>
  
    </>
  )
}

export default FullTVShowCard
