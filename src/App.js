import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import NotFound from './NotFound';
import Create from './Create';
import Messages from './Messages';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route exact path="/messages/">
                <Messages />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>         
          </div>
      </div>
    </Router>
  );
}

export default App;
