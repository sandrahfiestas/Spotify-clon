import React from 'react';
import { ReactComponent as HomeIcon } from '../images/icons/home.svg';
import { ReactComponent as SearchIcon } from '../images/icons/search.svg';
import { ReactComponent as LibraryIcon } from '../images/icons/library.svg';
import { ReactComponent as PremiumIcon } from '../images/icons/logo.svg';
import { ReactComponent as PlayCircleIcon } from '../images/icons/play-circle.svg';
import { ReactComponent as SkipPreviousIcon } from '../images/icons/skip-previous.svg';
import { ReactComponent as SkipNextIcon } from '../images/icons/skip-next.svg';
import { ReactComponent as ShuffleIcon } from '../images/icons/shuffle.svg';
import { ReactComponent as RepeatIcon } from '../images/icons/repeat.svg';
import { ReactComponent as PlayListIcon } from '../images/icons/play-list.svg';
import { ReactComponent as ComputerIcon } from '../images/icons/computer.svg';
import { ReactComponent as Volume } from '../images/icons/volume.svg';

// import { useDataLayerValue } from '../DataLayer';

function Footer() {
  // const [{ playlists }, dispatch] = useDataLayerValue();

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

      <div className="footer__left">
        {/* <img className="footer__albumLogo" src="" alt="" />
        <div className="footer__songInfo">
          <h4 className="footer__songInfo-name">Hola</h4>
          <p className="footer__songInfo-detail">Usher</p>
        </div> */}
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleIcon className="footer__iconPlayCircle" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__icon" />
      </div>

      <div className="footer__right">
        <PlayListIcon className="footer__icon" />
        <ComputerIcon className="footer__icon" />
        <Volume className="footer__icon" />
      </div>
    </footer>
  );
}

export default Footer;
