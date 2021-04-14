import React from 'react';
import { ReactComponent as Logo } from '../images/icons/logo.svg';

function Login() {
  return (
    <div className="login">
      <Logo className="login__logo" />
      <p className="login__title">
        Millones de canciones.
        <br />
        Gratis en Spotify.
      </p>
      <a className="login__button" href="/#">Login with Spotify</a>
    </div>
  );
}

export default Login;
