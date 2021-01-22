import { Card, CardMedia, Paper } from '@material-ui/core'
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
    </Card>
    </>
  )
}

export default Test
