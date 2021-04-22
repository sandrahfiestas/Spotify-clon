/* eslint-disable no-unused-vars */
import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import Time from './Time';
import { ReactComponent as PlayIcon } from '../images/icons/play.svg';

function CardsHistory() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <section className="container-cardsHistory">
      <div className="container-cardsHistory__time container-cardsHistory__time--disabled">
        <Time />
      </div>
      <div className="container-cardsHistory__cards">
        {playlists?.items?.map((playlist) => (
          <div className="container-cardsHistory__card" key={playlist.id}>
            <img
              src={playlist.images[0].url}
              className="container-cardsHistory__card-img"
              alt={playlist.name}
            />
            <p className="container-cardsHistory__card-p">{playlist.name}</p>
            <PlayIcon className="container-cardsHistory__card-icon container-cardsHistory__card-icon--disabled" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardsHistory;
