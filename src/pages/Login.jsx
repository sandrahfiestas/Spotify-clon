import React from 'react';
import { ReactComponent as Logo } from '../images/icons/logo.svg';
import { loginUrl } from '../spotify';

function Login() {
  return (
    <div className="login">
      <Logo className="login__logo" />
      <p className="login__title">
        Millones de canciones.
        <br />
        Gratis en Spotify.
      </p>
      <a href={loginUrl} className="login__button">
        Login with Spotify
      </a>
    </div>
  );
}

export default Login;
