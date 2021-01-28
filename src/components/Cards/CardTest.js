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

    // const toPerson = () => {
    //   console.log("I have been clicked")
    //   const idObj = {
    //     id: info.id
    //   }
    //   console.log(idObj)
    //   axios.post('http://localhost:8080/personInfo/', idObj).then(() => {
    //     history.push(`person/${info.id}`)
    //   })
    // }


    const genres = [] 
    info.genres.forEach((item) => {
    genres.push(item.name + ",")
    })

    const tagChecker = info.tagline === "" ?  (<></>) : (<i><h3>"{info.tagline}"</h3></i>)
    const homeChecker = info.homepage === "" ? (<><b>No Homepage Reported</b></>) : (<a href={`${info.homepage}`}>{info.title} Homepage</a>)

    const castRender = credits.cast.map((cast) => {
    const phChecker = cast.profile_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${cast.profile_path}`)
    return <Link to={`/person/${cast.id}`}><Card>
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
  // const providerRender = providers.results.eng.map((provider) => {
  // return  <li key={provider.provider_id}>{provider.provider_name}</li>
  // })
  
 
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
