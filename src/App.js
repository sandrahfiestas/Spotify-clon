import React from 'react';
import './css/Styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import YourLibrary from './pages/YourLibrary';
import Premium from './pages/Premium';
import SongHistory from './pages/SongHistory';
import Configuration from './pages/Configuration';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
        <Route path="/YourLibrary">
          <YourLibrary />
        </Route>
        <Route path="/Premium">
          <Premium />
        </Route>
        <Route path="/SongHistory">
          <SongHistory />
        </Route>
        <Route path="/Configuration">
          <Configuration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
