/* eslint-disable no-unused-vars */
import React from 'react';
import { useDataLayerValue } from '../DataLayer';

function CardsHistory() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <section className="container-cardsHistory">
      {playlists?.items?.map((playlist) => (
        <div className="container-cardsHistory__card" key={playlist.id}>
          <img
            src={playlist.images[0].url}
            className="container-cardsHistory__card-img"
            alt={playlist.name}
          />
          <p className="container-cardsHistory__card-p">{playlist.name}</p>
        </div>
      ))}

    </section>
  );
}

export default CardsHistory;
