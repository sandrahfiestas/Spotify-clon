import React, { useEffect } from 'react';
import './css/Styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';
import Login from './pages/Login';
import Home from './pages/Home';
import AllCards from './pages/AllCards';
import Search from './pages/Search';
import LibraryRouter from './routers/LibraryRouter';
import AllSongs from './pages/AllSongs';

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

      spotify.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcJS1p21VGSBi').then((response) => {
        dispatch({
          type: 'SET_WEEKLY',
          weekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) => {
        dispatch({
          type: 'SET_TOP_ARTISTS',
          topArtists: response,
        });
      });

      spotify.getMyRecentlyPlayedTracks().then((response) => {
        dispatch({
          type: 'SET_RECENTLY_PLAYED_TRACKS',
          recentlyPlayedTracks: response,
        });
      });

      spotify.getMyTopTracks().then((response) => {
        dispatch({
          type: 'SET_TOP_TRACKS',
          topTracks: response,
        });
      });

      // spotify.getCategories().then((response) => {
      //   dispatch({
      //     type: 'SET_CATEGORIES',
      //     categories: response,
      //   });
      // });

      // spotify.().then((response) => {
      //   dispatch({
      //     type: 'SET_SAVED_ALBUMS',
      //     savedAlbums: response,
      //   });
      // });
    }
  }, []);

  console.log('usuario 🧡', user);
  console.log('token 😱', token);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {token ? <Home spotify={spotify} /> : <Login />}
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/allCards" component={AllCards} />
        <Route exact path="/allsongs" component={AllSongs} />
        <Route exact path="/search" component={Search} />
        <Route path="/library" component={LibraryRouter} />
        <Route path="/404">
          <h1>404 Not found</h1>
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
