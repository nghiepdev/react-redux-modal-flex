import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import Home from './scenes/Home';
import Auth from './scenes/Auth';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-nav">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth">Auth</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
