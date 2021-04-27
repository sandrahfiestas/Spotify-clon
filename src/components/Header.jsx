/* eslint-disable no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Time from './Time';
import { ReactComponent as HistoryIcon } from '../images/icons/history.svg';
import { ReactComponent as SettingsIcon } from '../images/icons/settings.svg';
import { ReactComponent as PreviousBtnIcon } from '../images/icons/btn-left.svg';
import { ReactComponent as NextBtnIcon } from '../images/icons/btn-right.svg';
import { useDataLayerValue } from '../DataLayer';

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  const history = useHistory();

  return (
    <header className="header">
      <div className="header__left">
        <Time />
      </div>
      <div className="header__right">
        <HistoryIcon className="header__right-icon" />
        <SettingsIcon className="header__right-icon" />
      </div>

      <div className="header__queries header__queries--disabled">
        <div className="header__queries-btns">
          <PreviousBtnIcon className="header__queries-btns-Previous" onClick={history.goBack} />
          <NextBtnIcon className="header__queries-btns-Next" onClick={history.goForward} />
        </div>
        <div className="header__queries-user">
          <img
            src={user?.images[0]?.url}
            alt="Profile"
            className="header__queries-user-photo"
          />
          <p className="header__queries-user-name">{user?.display_name}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
