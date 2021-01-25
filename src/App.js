import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import TVShows from './components/pages/TVShows';
import People from './components/pages/People'
import FullMovieCard from './components/Cards/FullMovieCard';
import FullTVShowPage from './components/pages/FullTVShowPage';
import FullPersonPage from './components/pages/FullPersonPage';
import NotFound from './components/pages/404';

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
          <Route path="/tvshow/:id" component={FullTVShowPage}/>
          <Route path="/people" component={People}/>
          <Route path="/person/:id" component={FullPersonPage}/>
          <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
