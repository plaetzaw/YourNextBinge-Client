import { Card, CardMedia, Paper } from '@material-ui/core'
import Placeholder from '../../utility/200x340.png'
import './FullCard.css'
import 'primeflex/primeflex.css';

const FullPersonCard = ({props}) => {
  const info = props.data.info;
  const credits = props.data.credits;

  const creditsRender = credits.cast.map((credits) => {
    const phChecker = credits.poster_path === null ?   (Placeholder) : (`https://image.tmdb.org/t/p/original/${credits.poster_path}`)
    return <Card
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
  })

  return (
    <>
    <Card>
      {info.name}
      <CardMedia
        className="poster"
        component="img"
        alt={info.name}
        src={`https://image.tmdb.org/t/p/original/${info.profile_path}`}
        />
        <br/>
        <div> <h3>{info.biography}</h3></div>

        <h1>Credits for {info.name}</h1>
        <div className="p-grid">
            {creditsRender}
            </div>    
    </Card>
    </>
  )
}

export default FullPersonCard
