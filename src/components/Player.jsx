/* eslint-disable import/no-useless-path-segments */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import SongRow from '../components/SongRow';

function Player({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <>
      <div className="player">
        <img src={discover_weekly?.images[0].url} alt="Imagen de Weekly" />
        <div>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <di>
        {discover_weekly?.tracks.items.map((item) => (
          <div key={item.id}>
            <SongRow track={item.track} />
          </div>
        ))}
      </di>
    </>
  );
}

export default Player;
