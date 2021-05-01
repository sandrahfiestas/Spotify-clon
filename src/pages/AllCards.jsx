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
            <div className="container-allCards__card" key={topArtist.id}>
              <img
                src={topArtist.images[0].url}
                className="container-allCards__card-img"
                alt={topArtist.name}
              />
              <PlayIcon className="container-allCards__card-icon container-allCards__card-icon--disabled" />
              <div className="container-allCards__card-detail">
                <p className="container-allCards__card-detail-name">{topArtist.name}</p>
                <p className="container-allCards__card-detail-p">
                  {topArtist.genres.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllCards;
