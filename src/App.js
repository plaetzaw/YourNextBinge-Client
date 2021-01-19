import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import './index.css'


function App() {
  return (
    <Router>
      <Navbar/>
    <div className="App">
      Hello Whirl
    </div>
    </Router>
  );
}

export default App;
