import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home'
import './index.css'


function App() {
  return (
    <Router>
      <Navbar/>
    <div className="content">
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/movies" component={Home}/>
      <Route path="/tvshows" component={Home}/>
      <Route path="/people" component={Home}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
