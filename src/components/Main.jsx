import React from 'react';
import CardsPlaylistHeader from './CardsPlaylistHeader';
import CardsPlaylistRecently from './CardsPlaylistRecently';
import CardsPlaylists from './CardsPlaylists';
// import Player from './Player';

function Main() {
  return (
    <div className="main">
      <CardsPlaylistHeader />
      <CardsPlaylistRecently />
      <CardsPlaylists />
      {/* <Player /> */}
    </div>
  );
}

export default Main;
