import React, { useEffect } from 'react';
import './css/Styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';
import Home from './pages/Home';
// import Search from './pages/Search';
// import YourLibrary from './components/YourLibrary';
// import Premium from './pages/Premium';
// import SongHistory from './pages/SongHistory';
// import Configuration from './pages/Configuration';
import Login from './pages/Login';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    // eslint-disable-next-line no-underscore-dangle
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      // eslint-disable-next-line no-shadow
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
    }
  }, []);

  console.log('usuario 🧡', user);
  console.log('token 😱', token);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {
          token
            ? <Home spotify={spotify} />
            : <Login />
          }
        </Route>
        <Route path="/Home">
          <Home />
        </Route>

        {/* <Route path="/Search">
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
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
