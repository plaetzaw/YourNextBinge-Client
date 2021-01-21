import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import TVShows from './components/pages/TVShows';
import People from './components/pages/People'
import FullMovieCard from './components/Cards/FullMovieCard';


import './index.css'


function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/movie/:id" component={FullMovieCard}/>
          <Route path="/tvshows" component={TVShows}/>
          <Route path="/people" component={People}/>
      </Switch>
    </Router>
  );
}

export default App;
