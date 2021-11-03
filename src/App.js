import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Appiontment from './Pages/Appiontment/Appiontment/Appiontment';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/appiontment">
            <Appiontment/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
