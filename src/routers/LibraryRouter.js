import React from 'react';
// import { NavLink, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
// import LibraryContent from '../components/LibraryContent';
import { ReactComponent as LibraryIcon } from '../images/icons/library.svg';

function LibraryRouter() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="library">
          <div className="library__divImg">
            <LibraryIcon className="library__divImg-icon" />
          </div>
        </div>
        {/* <div className="container-library">
          <div className="container-library__menu">
            <NavLink
              to="/library/playlists"
              className="container-library__menu-item"
              activeClassName="container-library__menu-item--active"
            >
              Playlists
            </NavLink>
            <NavLink
              to="/library/podcasts"
              className="container-library__menu-item"
              activeClassName="container-library__menu-item--active"
            >
              Podcasts
            </NavLink>
            <NavLink
              to="/library/artists"
              className="container-library__menu-item"
              activeClassName="container-library__menu-item--active"
            >
              Artistas
            </NavLink>
            <NavLink
              to="/library/albums"
              className="container-library__menu-item"
              activeClassName="container-library__menu-item--active"
            >
              Álbunes
            </NavLink>
          </div>
          <h1>Biblioteca</h1>
        </div> */}
        <Footer />
      </div>

      {/* <Switch>
        <Route exact path="/library/playlists" component={LibraryContent} />
      </Switch> */}
    </>
  );
}

export default LibraryRouter;
