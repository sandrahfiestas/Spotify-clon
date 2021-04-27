/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { useDataLayerValue } from '../DataLayer';
import { ReactComponent as PlayIcon } from '../images/icons/play.svg';

function AllCards() {
  const [{ topArtists }, dispatch] = useDataLayerValue();
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container-allCards">
        <p className="container-allCards-title">Tus Mejores Artistas</p>

        <div className="container-allCards__allcards">
          {topArtists?.items?.map((topArtist) => (
            <div className="container-cardsPlaylist__card" key={topArtist.id}>
              <img
                src={topArtist.images[0].url}
                className="container-cardsPlaylist__card-img"
                alt={topArtist.name}
              />
              <PlayIcon className="container-cardsPlaylist__card-icon container-cardsPlaylist__card-icon--disabled" />
              <p className="container-cardsPlaylist__card-p">
                {topArtist.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllCards;
