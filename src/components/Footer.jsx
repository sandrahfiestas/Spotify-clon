import React from 'react';
import { ReactComponent as HomeIcon } from '../images/icons/home.svg';
import { ReactComponent as SearchIcon } from '../images/icons/search.svg';
import { ReactComponent as LibraryIcon } from '../images/icons/library.svg';
import { ReactComponent as PremiumIcon } from '../images/icons/premium.svg';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <HomeIcon className="footer__item-icon" />
          <span className="footer__item-text">Inicio</span>
        </li>
        <li className="footer__item">
          <SearchIcon className="footer__item-icon" />
          <span className="footer__item-text">Buscar</span>
        </li>
        <li className="footer__item">
          <LibraryIcon className="footer__item-icon" />
          <span className="footer__item-text">Tu Biblioteca</span>
        </li>
        <li className="footer__item">
          <PremiumIcon className="footer__item-icon" />
          <span className="footer__item-text">Premium</span>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
