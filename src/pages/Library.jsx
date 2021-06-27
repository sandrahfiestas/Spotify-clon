import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Library() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container-library">
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
        {/* <h1>Biblioteca</h1> */}
      </div>
      <Footer />
    </div>
  );
}

export default Library;
