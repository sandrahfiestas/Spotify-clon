/* eslint-disable react/prop-types */
import React from 'react';

function SongRow({ track }) {
  // console.log('Track 👀', track);
  return (
    <div className="songRow">
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__description">
        <h1 className="songRow__description-title">{track.name}</h1>
        <p className="songRow__description-p">
          {track.artists.map((artist) => artist.name).join(', ')}
          -
          {' '}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
