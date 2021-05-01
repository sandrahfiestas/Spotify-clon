/* eslint-disable no-unused-vars */
import React from 'react';
import { useDataLayerValue } from '../DataLayer';

function LibraryList() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log('playlist✨', playlists);

  return (
    <div className="container-libraryList">
      {playlists?.items?.map((playlist) => (
        <div key={playlist.id}>
          <p className="container-libraryList__text">{playlist.name}</p>
        </div>
      ))}
    </div>
  );
}

export default LibraryList;
