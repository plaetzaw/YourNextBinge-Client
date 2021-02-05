import { Card, CardMedia, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Placeholder from '../../utility/200x340.png'
import './FullCard.css'
import 'primeflex/primeflex.css';


const Test = ({props}) => {
    const info = props.data.info;
    const credits = props.data.credits;
    const providers = props.data.providers;
    const recs = props.data.recs

    console.log(info, credits, providers, recs)

    const genres = [] 
    info.genres.forEach((item) => {
    genres.push(item.name + ",")
    })

    const posterChecker = info.poster_path === null ? (Placeholder) : (`https://image.tmdb.org/t/p/original/${info.poster_path}`)
    const tagChecker = info.tagline === "" ?  (<></>) : (<i><h3>"{info.tagline}"</h3></i>)
    const homeChecker = info.homepage === "" ? (<><b>No Homepage Reported</b></>) : (<a href={`${info.homepage}`}>{info.title} Homepage</a>)

    const castRender = credits.cast.map((cast) => {
    const phChecker = cast.profile_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${cast.profile_path}`)
    return <Link to={`/person/${cast.id}`}><Card
    key={cast.id}
    className="cast-card">
      <img
      src={phChecker}
      height="300px"
      alt={cast.name}
      />
      <li key={cast.id}><i>{cast.name}</i> as <br/>
      <b>{cast.character}</b></li>
    </Card>
    </Link>
  })

  const recRender = recs.results.map((recs) => {
    const ppChecker = recs.poster_path === null ? (Placeholder) : (`https://image.tmdb.org/t/p/original/${recs.poster_path}`)
    return <Link to={`/movie/${recs.id}`}><Card
    className="cast-card"
    key={recs.id}
    >
      <img
      alt={recs.title}
      src={ppChecker}
      height="400px"
       />
      <br/>
      <span><Paper><b>{recs.title}</b></Paper></span> 
    </Card>
    </Link>
  })

  let USprov = []

  for (let i = 0; i < providers.results.length; i++){
    console.log([i])
    if ([i] === 'US'){
      USprov.push(i)
      
    }
  }
  console.log(USprov)
  console.log(providers.results)

  
 
  return (
    <div className="cardBackground">
    <Card className="card">
        <h1>{info.title}</h1>
        {tagChecker}
        {genres}
        <CardMedia
        className="card-poster"
        component="img"
        alt={info.title}
        src={posterChecker}
        >
        </CardMedia>
        {info.overview}
        <br/>
        <br/>
      
      <div className="p-grid">
      <Paper className="p-col-3">
      Reported Revenue: {info.revenue}
      </Paper>
      <Paper className="p-col-3">
      Release Date: {info.release_date}
      </Paper>
      <Paper className="p-col-3">
      Runtime: {info.runtime} minutes
      </Paper>
      <Paper className="p-col-3">
       {homeChecker}
      </Paper>
      </div>
      <br/>
      <h1>Cast of {info.title}</h1>

      <div className="item-display">
      <div className="p-grid">
      {castRender}
      </div>
      </div>

      <h1>Recommendations based on {info.title}</h1>
      <div className="item-display">
      <div className="p-grid">
      {recRender}
      </div>
      </div>


    </Card>
    </div>
  )
}

export default Test
