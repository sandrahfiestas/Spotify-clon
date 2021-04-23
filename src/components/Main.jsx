import React from 'react';
import CardsHistory from './CardsHistory';
import CardsPlaylist from './CardsPlaylist';

function Main() {
  return (
    <div className="main">
      <CardsHistory />
      <CardsPlaylist />
    </div>
  );
}

export default Main;
