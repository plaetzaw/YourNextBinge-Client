import { Card, CardMedia, Paper } from '@material-ui/core'
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

  let tagChecker = info.tagline === "" ?  (<></>) : (<i><h3>"{info.tagline}"</h3></i>)
  let homeChecker = info.homepage === "" ? (<><b>No Homepage Reported</b></>) : (<a href={`${info.homepage}`}>{info.title} Homepage</a>)

  let castRender = credits.cast.map((cast) => {
    let phChecker = cast.profile_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${cast.profile_path}`)
    return <Card>
      <img
      src={phChecker}
      height="300px"
      alt={cast.name}
      />
      <li><i>{cast.name}</i> as <br/>
      <b>{cast.character}</b></li>
    </Card>
  })

  let recRender = recs.results.map((recs) => {
    let ppChecker = recs.poster_path === null ? (Placeholder) : (`https://image.tmdb.org/t/p/original/${recs.poster_path}`)
    return <Card>
      <img
      alt={recs.title}
      src={ppChecker}
      height="400px"
       />
      <br/>
      <p> <Paper><b>{recs.title}</b></Paper></p>
  
    </Card>
  })
  
 
  return (
    <>
    <Card className="card">
        <h1>{info.title}</h1>
        {tagChecker}
        {genres}
        <CardMedia
        className="card-poster"
        component="img"
        alt={info.title}
        src={`https://image.tmdb.org/t/p/original/${info.poster_path}`}
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
      <h1>Cast</h1>

      <div className="p-grid">
      {castRender}
      </div>

      <div className="p-grid">
      {recRender}
      </div>

    </Card>
    </>
  )
}

export default Test
