import React from 'react';
import { ReactComponent as HistoryIcon } from '../images/icons/history.svg';
import { ReactComponent as SettingsIcon } from '../images/icons/settings.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <h2 className="header__left-title">Buenas tardes</h2>
      </div>
      <div className="header__right">
        <HistoryIcon className="header__right-icon" />
        <SettingsIcon className="header__right-icon" />
      </div>
    </header>
  );
}

export default Header;
