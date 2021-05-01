import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as PremiumIcon } from '../images/icons/logo.svg';
import { ReactComponent as HomeIcon } from '../images/icons/home.svg';
import { ReactComponent as SearchIcon } from '../images/icons/search.svg';
import { ReactComponent as LibraryIcon } from '../images/icons/library.svg';
import LibraryList from './LibraryList';

function Sidebar() {
  return (
    <aside className="sidebar sidebar--disabled">
      <NavLink
        exact
        to="/"
      >
        <div className="sidebar__title">
          <PremiumIcon className="sidebar__title-icon" />
          <p className="sidebar__title-text">Spotifu</p>
          <span className="sidebar__title-trademark ">®</span>
        </div>
      </NavLink>
      <div className="sidebar__menu">
        <nav>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                className="sidebar__item"
                activeClassName="sidebar__item--active"
              >
                <HomeIcon className="sidebar__item-icon" />
                <p className="sidebar__item-text">Inicio</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/search"
                className="sidebar__item"
                activeClassName="sidebar__item--active"
              >
                <SearchIcon className="sidebar__item-icon" />
                <p className="sidebar__item-text">Buscar</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/library"
                className="sidebar__item"
                activeClassName="sidebar__item--active"
              >
                <LibraryIcon className="sidebar__item-icon" />
                <p className="sidebar__item-text">Tu Biblioteca</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <LibraryList />
    </aside>
  );
}

export default Sidebar;
