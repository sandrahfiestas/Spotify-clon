/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../DataLayer';
import { ReactComponent as PlayIcon } from '../images/icons/play.svg';

function CardsPlaylist() {
  const [{ weekly }, dispatch] = useDataLayerValue();
  // console.log('semanal', weekly);

  // Top artists
  // const [{ topArtists }, dispatch] = useDataLayerValue();
  // console.log('Artistas Top 🤯👉 ', topArtists);

  // const [{ topTracks }, dispatch] = useDataLayerValue();
  // console.log('Pistas principales 🎶', topTracks);

  // const [{ categories }, dispatch] = useDataLayerValue();
  // console.log('Categorias 💪', categories);

  return (
    <section className="container-cardsPlaylist">
      <div className="container-cardsPlaylist__title">
        <Link to="/allsongs" className="container-cardsPlaylist__title-p">
          {/* Tus Mejores Artistas */}
          {weekly?.name}
        </Link>
        <Link to="/allCards" className="container-cardsPlaylist__title-all">
          VER TODO
        </Link>
      </div>
      <div className="container-cardsPlaylist__cards">
        {/* {topArtists?.items?.map((topArtist) => (
          <div className="container-cardsPlaylist__card" key={topArtist.id}> */}
        <div className="container-cardsPlaylist__card">
          <img
            // src={topArtist.images[0].url}
            src={weekly?.images[0].url}
            className="container-cardsPlaylist__card-img"
            // alt={topArtist.name}
            alt=""
          />
          <PlayIcon className="container-cardsPlaylist__card-icon container-cardsPlaylist__card-icon--disabled" />
          <p className="container-cardsPlaylist__card-name">
            {/* {topArtist.name} */}
            {weekly?.name}
          </p>
          <p className="container-cardsPlaylist__card-p">
            {/* {topArtist.genres.join(', ')} */}
            {weekly?.description}
          </p>
        </div>
        {/* ))} */}
      </div>
    </section>
  );
}

export default CardsPlaylist;
