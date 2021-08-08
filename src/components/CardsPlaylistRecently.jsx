/* eslint-disable no-unused-vars */
import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import { ReactComponent as PlayIcon } from '../images/icons/play.svg';

function CardsPlaylist() {
  const [{ recentlyPlayedTracks }, dispatch] = useDataLayerValue();
  // console.log('Recientemente 😃', recentlyPlayedTracks);

  // const [{ topArtists }, dispatch] = useDataLayerValue();
  // console.log('Artistas Top 🤯👉 ', topArtists);

  // const [{ topTracks }, dispatch] = useDataLayerValue();
  // console.log('Pistas principales 🎶', topTracks);

  // const [{ categories }, dispatch] = useDataLayerValue();
  // console.log('Categorias 💪', categories);

  return (
    <section className="container-cardsPlaylist">
      <div className="container-cardsPlaylist__title">
        <p>Escuchado recientemente</p>
      </div>
      <div className="container-cardsPlaylist__cards">
        {recentlyPlayedTracks?.items?.map((recentlyPlayedTrack) => (
          <div
            className="container-cardsPlaylist__card"
            key={recentlyPlayedTrack.track.id}
          >
            <img
              src={recentlyPlayedTrack.track.album.images[0].url}
              className="container-cardsPlaylist__card-img"
              alt={recentlyPlayedTrack.track.name}
            />
            <PlayIcon className="container-cardsPlaylist__card-icon container-cardsPlaylist__card-icon--disabled" />
            <p className="container-cardsPlaylist__card-name">
              {recentlyPlayedTrack.track.name}
            </p>
            <p className="container-cardsPlaylist__card-p">
              {recentlyPlayedTrack.track.album.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardsPlaylist;
